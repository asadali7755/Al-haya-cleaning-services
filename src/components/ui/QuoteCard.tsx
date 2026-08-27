"use client";

import { useState } from "react";
import { Phone, Send, CheckCircle } from "lucide-react";
import { services } from "@/data/services";

interface QuoteCardProps {
  /** Preselects the dropdown — pass the page's own service *slug*. */
  defaultService?: string;
  /** Which page produced the enquiry; included in the notification email. */
  source: string;
  /** Overrides the default headline. */
  heading?: string;
  className?: string;
}

/**
 * Free-quote capture: name + phone + service, emailed server-side via
 * /api/contact, with a call button beside it.
 *
 * Every page other than /contact previously offered only WhatsApp and a tel:
 * link, so a visitor who wanted a quote had to leave the site and nothing was
 * captured if they didn't. This is deliberately short (three fields) — the
 * long form stays on the contact page.
 */
export function QuoteCard({
  defaultService = "",
  source,
  heading = "Get a free quote",
  className = "",
}: QuoteCardProps) {
  const phoneNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "+971563129254";

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState(defaultService);
  const [err, setErr] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  async function submit() {
    if (!name.trim()) { setErr("Please enter your name."); return; }
    if (!phone.trim()) { setErr("Please enter your phone number."); return; }
    if (!service) { setErr("Please choose a service."); return; }
    setErr("");
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          // The short form does not ask for an email; the API requires one.
          email: "no-email@villadeepcleaning.com",
          phone: phone.trim(),
          service, // slug — the API validates it and resolves the label
          message: `Quick quote request from ${source}. Please call back on ${phone.trim()}.`,
          source,
        }),
      });

      if (!res.ok) {
        setErr("Couldn't send. Please call or WhatsApp us instead.");
        setStatus("idle");
        return;
      }

      if (typeof window !== "undefined") {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
          event: "generate_lead",
          lead_service: service || "Cleaning services",
          lead_source: source,
        });
      }

      setStatus("sent");
      setName("");
      setPhone("");
      setService(defaultService);
    } catch {
      setErr("Couldn't send. Please call or WhatsApp us instead.");
      setStatus("idle");
    }
  }

  if (status === "sent") {
    return (
      <div
        className={`rounded-2xl p-6 text-center border ${className}`}
        style={{ backgroundColor: "var(--bg-surface)", borderColor: "var(--border-color)" }}
      >
        <CheckCircle className="w-10 h-10 text-green-500 mx-auto mb-3" />
        <p className="font-display font-bold text-lg" style={{ color: "var(--text-primary)" }}>
          Request received
        </p>
        <p className="text-sm mt-1" style={{ color: "var(--text-secondary)" }}>
          We&apos;ll call you back shortly.
        </p>
      </div>
    );
  }

  return (
    <div
      className={`rounded-2xl p-6 border ${className}`}
      style={{ backgroundColor: "var(--bg-surface)", borderColor: "var(--border-color)" }}
    >
      <span className="text-xs font-semibold tracking-widest uppercase text-gold">
        Free Quote Request
      </span>
      <h3
        className="font-display text-xl font-bold mt-2 mb-4"
        style={{ color: "var(--text-primary)" }}
      >
        {heading}
      </h3>

      <div className="space-y-3">
        <input
          type="text"
          value={name}
          onChange={(e) => { setName(e.target.value); setErr(""); }}
          placeholder="Your name*"
          aria-label="Your name"
          className="w-full px-4 py-3 rounded-lg border text-sm focus:outline-none focus:border-gold transition-colors"
          style={{ backgroundColor: "var(--bg-primary)", borderColor: "var(--border-color)", color: "var(--text-primary)" }}
        />
        <input
          type="tel"
          inputMode="tel"
          value={phone}
          onChange={(e) => { setPhone(e.target.value); setErr(""); }}
          placeholder="Your mobile number (UAE)*"
          aria-label="Your mobile number"
          className="w-full px-4 py-3 rounded-lg border text-sm focus:outline-none focus:border-gold transition-colors"
          style={{ backgroundColor: "var(--bg-primary)", borderColor: "var(--border-color)", color: "var(--text-primary)" }}
        />
        <select
          value={service}
          onChange={(e) => setService(e.target.value)}
          aria-label="Select a service"
          className="w-full px-4 py-3 rounded-lg border text-sm focus:outline-none focus:border-gold transition-colors"
          style={{ backgroundColor: "var(--bg-primary)", borderColor: "var(--border-color)", color: "var(--text-primary)" }}
        >
          <option value="">Which service do you need?*</option>
          {services.map((s) => (
            <option key={s.slug} value={s.slug}>{s.name}</option>
          ))}
        </select>

        {err && <p className="text-sm text-red-500">{err}</p>}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
          <button
            onClick={submit}
            disabled={status === "sending"}
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg font-semibold text-sm bg-gold text-black hover:bg-gold-dark transition-colors disabled:opacity-60"
          >
            <Send className="w-4 h-4" />
            {status === "sending" ? "Sending…" : "Send request"}
          </button>
          <a
            href={`tel:${phoneNumber}`}
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg font-semibold text-sm border border-gold/40 text-gold hover:bg-gold/10 transition-colors whitespace-nowrap"
          >
            <Phone className="w-4 h-4" />
            Request a Call
          </a>
        </div>

        <p className="text-xs pt-1" style={{ color: "var(--text-secondary)" }}>
          We reply within minutes — 7 days a week.
        </p>
      </div>
    </div>
  );
}
