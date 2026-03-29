import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/ContactForm";
import { JsonLd } from "@/components/seo/JsonLd";
import { generateLocalBusinessSchema } from "@/lib/schema";
import { Mail, Phone, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get a free cleaning quote from Al Haya Cleaning Services. Contact us via phone, email, or WhatsApp for villa, apartment, and office cleaning across the UAE.",
  alternates: {
    canonical: `${process.env.SITE_URL || "http://localhost:3000"}/contact`,
  },
};

export default function ContactPage() {
  return (
    <>
      <JsonLd data={generateLocalBusinessSchema()} />

      <section className="py-20 px-4" style={{ backgroundColor: "var(--bg-secondary)" }}>
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>
            Get in <span className="text-gold">Touch</span>
          </h1>
          <p className="text-lg" style={{ color: "var(--text-secondary)" }}>
            Request a free quote or ask us anything about our cleaning services.
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <ContactForm />
          </div>

          <div className="space-y-6">
            <div className="rounded-2xl p-6" style={{ backgroundColor: "var(--bg-surface)", border: "1px solid var(--border-color)" }}>
              <h3 className="font-display text-lg font-semibold mb-4" style={{ color: "var(--text-primary)" }}>
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium" style={{ color: "var(--text-primary)" }}>Phone</p>
                    <a href="tel:+971545567799" className="text-gold hover:underline">
                      +971 545 567 799
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium" style={{ color: "var(--text-primary)" }}>Email</p>
                    <a href="mailto:info@alhaya.ae" className="text-gold hover:underline">
                      info@alhaya.ae
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium" style={{ color: "var(--text-primary)" }}>Location</p>
                    <p style={{ color: "var(--text-secondary)" }}>
                      Serving all 7 Emirates across the UAE
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl p-6 bg-gold/10 text-center">
              <h3 className="font-display text-lg font-semibold mb-2" style={{ color: "var(--text-primary)" }}>
                Prefer WhatsApp?
              </h3>
              <p className="text-sm mb-4" style={{ color: "var(--text-secondary)" }}>
                Chat with us directly for a quick response.
              </p>
              <a
                href={`https://wa.me/${(process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "+971545567799").replace(/[^0-9]/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#25D366] text-white font-medium hover:bg-[#20bd5a] transition-colors"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
