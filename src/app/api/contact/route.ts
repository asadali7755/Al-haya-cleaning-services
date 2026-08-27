import { NextResponse } from "next/server";
import { validateContactForm } from "@/lib/validators";
import { services } from "@/data/services";
import { Resend } from "resend";

const rateLimit = new Map<string, { count: number; resetAt: number }>();

/** Form values are interpolated into the notification email — escape them so a
 *  submitted "<" cannot break or inject markup into the message we read. */
function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimit.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimit.set(ip, { count: 1, resetAt: now + 15 * 60 * 1000 });
    return true;
  }
  if (entry.count >= 5) return false;
  entry.count++;
  return true;
}

// Return 405 for GET so Google doesn't get a 403 when crawling /api/contact
export async function GET() {
  return NextResponse.json(
    { message: "Method not allowed. Use POST." },
    {
      status: 405,
      headers: { Allow: "POST", "X-Robots-Tag": "noindex, nofollow" },
    }
  );
}

export async function POST(request: Request) {
  try {
    const ip = request.headers.get("x-forwarded-for") || "unknown";

    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { success: false, message: "Too many requests. Please try again later." },
        { status: 429, headers: { "Retry-After": "900" } }
      );
    }

    const body = await request.json();
    const validation = validateContactForm(body);

    if (!validation.valid) {
      return NextResponse.json(
        { success: false, errors: validation.errors },
        { status: 400 }
      );
    }

    const { name, email, phone, service, message } = body;

    // `service` is validated as a slug; show the readable name in the email.
    const serviceLabel =
      services.find((s) => s.slug === service)?.name ?? service;

    const contactEmail = process.env.CONTACT_EMAIL || "Alhayacleaners@gmail.com";
    const apiKey = process.env.RESEND_API_KEY;
    const source = typeof body.source === "string" ? body.source : "Contact page";

    // No key means no email is going anywhere. Answering "thank you" to that
    // loses the enquiry silently — the visitor believes they are in the queue
    // and nobody is ever told. Fail instead, so the form can point them at
    // WhatsApp or the phone number.
    if (!apiKey) {
      console.error(
        "[contact] RESEND_API_KEY is not set — enquiry could not be emailed:",
        { name, phone, service, source, timestamp: new Date().toISOString() }
      );
      return NextResponse.json(
        {
          success: false,
          message:
            "We couldn't send your message right now. Please WhatsApp or call us — we'll answer straight away.",
        },
        { status: 503 }
      );
    }

    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: process.env.EMAIL_FROM || "Al Haya Website <noreply@alhaya.ae>",
      to: contactEmail,
      replyTo: email,
      subject: `New enquiry: ${name} — ${serviceLabel}`,
      html: `
        <h2>New enquiry from the website</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
        <p><strong>Service:</strong> ${escapeHtml(serviceLabel)}</p>
        <p><strong>Came from:</strong> ${escapeHtml(source)}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
        <hr />
        <p><em>Sent from villadeepcleaning.com</em></p>
      `,
    });

    // Resend reports delivery problems in the body, not by throwing.
    if (error) {
      console.error("[contact] Resend rejected the send:", error, {
        name,
        phone,
        service,
        source,
      });
      return NextResponse.json(
        {
          success: false,
          message:
            "We couldn't send your message right now. Please WhatsApp or call us — we'll answer straight away.",
        },
        { status: 502 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Thank you! We will contact you shortly.",
    });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong. Please try WhatsApp or call us directly.",
      },
      { status: 500 }
    );
  }
}
