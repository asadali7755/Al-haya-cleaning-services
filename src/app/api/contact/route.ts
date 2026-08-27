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

    // Same inbox and sender the other Al Haya sites report into, so leads from
    // all of them land together. onboarding@resend.dev is Resend's shared
    // sender — it needs no domain verification, which is why the sibling sites
    // use it. The site is named in the subject and twice in the body so a lead
    // is never ambiguous about which website produced it.
    const contactEmail = process.env.CONTACT_EMAIL || "marbleprodxb@gmail.com";
    const fromAddress =
      process.env.EMAIL_FROM || "Villa Deep Cleaning Website <onboarding@resend.dev>";
    const timestamp = new Date().toLocaleString("en-AE", { timeZone: "Asia/Dubai" });
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

    const row = (label: string, value: string, strong = false) => `
      <tr>
        <td style="padding:12px 0;border-bottom:1px solid #e8e0d0;color:#666;width:120px;font-size:14px;">${label}</td>
        <td style="padding:12px 0;border-bottom:1px solid #e8e0d0;font-size:14px;${strong ? "font-weight:700;color:#c9a84c;" : "font-weight:600;color:#1a1208;"}">${value}</td>
      </tr>`;

    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: fromAddress,
      to: contactEmail,
      replyTo: email,
      subject: `New Lead — ${serviceLabel} | VillaDeepCleaning.com`,
      html: `
        <div style="font-family:sans-serif;max-width:560px;margin:0 auto;padding:32px;background:#f9f6f1;border-radius:12px;">
          <div style="text-align:center;margin-bottom:24px;">
            <h2 style="margin:0 0 4px;font-size:22px;color:#1a1208;">New Client Request</h2>
            <p style="margin:0;font-size:14px;color:#c9a84c;font-weight:600;">from villadeepcleaning.com</p>
          </div>
          <table style="width:100%;border-collapse:collapse;">
            ${row("Source", "villadeepcleaning.com", true)}
            ${row("Page", escapeHtml(source))}
            ${row("Name", escapeHtml(name))}
            ${row("Service", escapeHtml(serviceLabel))}
            ${row("Phone", `<a href="tel:${escapeHtml(phone)}" style="color:#1a1208;text-decoration:none;">${escapeHtml(phone)}</a>`)}
            ${row("Email", escapeHtml(email))}
            ${row("Message", escapeHtml(message).replace(/\n/g, "<br />"))}
            ${row("Time (Dubai)", escapeHtml(timestamp))}
          </table>
          <div style="margin-top:24px;padding:16px;background:#1a1208;border-radius:8px;text-align:center;">
            <a href="https://wa.me/${phone.replace(/[^0-9]/g, "")}" style="color:#c9a84c;font-weight:600;text-decoration:none;font-size:14px;">Reply on WhatsApp</a>
            <span style="color:#555;margin:0 8px;">|</span>
            <a href="tel:${escapeHtml(phone)}" style="color:#c9a84c;font-weight:600;text-decoration:none;font-size:14px;">Call Back</a>
          </div>
          <p style="margin:20px 0 0;font-size:11px;color:#999;text-align:center;">
            This lead was submitted via villadeepcleaning.com (Al Haya Cleaning Services)
          </p>
        </div>
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
