"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { Phone, X, CheckCircle } from "lucide-react";
import { services } from "@/data/services";

interface ModalCtx {
  open: (source?: string) => void;
  close: () => void;
}

const Ctx = createContext<ModalCtx>({ open: () => {}, close: () => {} });

/** Opens the callback modal from anywhere (header, hero, page CTAs). */
export function useRequestCall() {
  return useContext(Ctx);
}

/**
 * "Request a Call" — the lowest-friction way to convert: two fields and we
 * ring back. Matches the callback modal the sibling Al Haya sites use, and
 * posts into the same /api/contact pipeline so the lead is emailed like any
 * other, labelled with the page that opened it.
 */
export function RequestCallProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [source, setSource] = useState("Request a Call");

  const value: ModalCtx = {
    open: (s = "Request a Call") => {
      setSource(s);
      setIsOpen(true);
    },
    close: () => setIsOpen(false),
  };

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setIsOpen(false);
    window.addEventListener("keydown", onKey);
    // Stop the page scrolling behind the dialog.
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [isOpen]);

  return (
    <Ctx.Provider value={value}>
      {children}
      {isOpen && <CallbackDialog source={source} onClose={value.close} />}
    </Ctx.Provider>
  );
}

function CallbackDialog({ source, onClose }: { source: string; onClose: () => void }) {
  const phoneNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "+971563129254";

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
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
          email: "no-email@villadeepcleaning.com",
          phone: phone.trim(),
          service,
          message: `Callback requested from ${source}. Please call ${phone.trim()} back.`,
          source: `Request a Call — ${source}`,
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
          lead_service: service,
          lead_source: `Request a Call — ${source}`,
        });
      }
      setStatus("sent");
    } catch {
      setErr("Couldn't send. Please call or WhatsApp us instead.");
      setStatus("idle");
    }
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Request a call"
    >
      <div
        className="w-full max-w-sm rounded-2xl p-6 border relative"
        style={{ backgroundColor: "var(--bg-surface)", borderColor: "var(--border-color)" }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 p-1 rounded-lg hover:bg-gold/10 transition-colors"
        >
          <X className="w-5 h-5" style={{ color: "var(--text-secondary)" }} />
        </button>

        {status === "sent" ? (
          <div className="text-center py-6">
            <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-3" />
            <p className="font-display font-bold text-lg" style={{ color: "var(--text-primary)" }}>
              We&apos;ll call you back
            </p>
            <p className="text-sm mt-1" style={{ color: "var(--text-secondary)" }}>
              Usually within a few minutes.
            </p>
            <button
              onClick={onClose}
              className="mt-5 px-6 py-2.5 rounded-lg font-semibold text-sm bg-gold text-black hover:bg-gold-dark transition-colors"
            >
              Done
            </button>
          </div>
        ) : (
          <>
            <div className="flex items-center gap-2 mb-1">
              <Phone className="w-4 h-4 text-gold" />
              <span className="text-xs font-semibold tracking-widest uppercase text-gold">
                Request a Call
              </span>
            </div>
            <h3 className="font-display text-xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>
              Leave your number — we&apos;ll ring you
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
                onChange={(e) => { setService(e.target.value); setErr(""); }}
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

              <button
                onClick={submit}
                disabled={status === "sending"}
                className="w-full px-5 py-3 rounded-lg font-semibold text-sm bg-gold text-black hover:bg-gold-dark transition-colors disabled:opacity-60"
              >
                {status === "sending" ? "Sending…" : "Request my call"}
              </button>

              <p className="text-xs text-center" style={{ color: "var(--text-secondary)" }}>
                Or call now:{" "}
                <a href={`tel:${phoneNumber}`} className="text-gold font-semibold">
                  {phoneNumber}
                </a>
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
