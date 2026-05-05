import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/ContactForm";
import { JsonLd } from "@/components/seo/JsonLd";
import { generateLocalBusinessSchema } from "@/lib/schema";
import { Mail, Phone, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us - Get Free Cleaning Quote in Dubai & UAE",
  description:
    "Get a free cleaning quote from Al Haya. Call +971 551 275 545 or WhatsApp us for villa cleaning, apartment cleaning, deep cleaning in Dubai, Abu Dhabi, Sharjah & all UAE Emirates.",
  openGraph: {
    title: "Contact Al Haya Cleaning Services - Free Quote",
    description: "Get a free cleaning quote. Call +971 551 275 545 or WhatsApp us.",
    images: [{ url: "/images/hero/hero-main.webp" }],
  },
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
                    <a href="tel:+971551275545" className="text-gold hover:underline">
                      +971 551 275 545
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium" style={{ color: "var(--text-primary)" }}>Email</p>
                    <a href="mailto:Madinatalhaya@gmail.com" className="text-gold hover:underline">
                      Madinatalhaya@gmail.com
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
                href={`https://wa.me/${(process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "+971551275545").replace(/[^0-9]/g, "")}`}
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

      {/* Google Business Profile / Map Section */}
      <section className="py-12 px-4" style={{ backgroundColor: "var(--bg-secondary)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-6">
            <h2
              className="font-display text-2xl md:text-3xl font-bold mb-2"
              style={{ color: "var(--text-primary)" }}
            >
              Find Us on <span className="text-gold">Google</span>
            </h2>
            <p style={{ color: "var(--text-secondary)" }}>
              Check our reviews, location &amp; business hours on Google.
            </p>
          </div>

          <div
            className="rounded-2xl overflow-hidden"
            style={{ border: "1px solid var(--border-color)" }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.2426037257887!2d55.362276599999994!3d25.2960519!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5dc6fe655c83%3A0x2790bef8b91a957!2sAL%20HAYA%20cleaning%20services!5e0!3m2!1sen!2s!4v1777990342134!5m2!1sen!2s"
              width="100%"
              height="350"
              style={{ border: 0, display: "block" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Al Haya Cleaning Services on Google Maps"
            />
          </div>

          <div className="text-center mt-6">
            <a
              href="https://share.google/bDF6NqN3sJvO2nxSr"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-colors text-gold hover:opacity-90"
              style={{
                backgroundColor: "var(--bg-surface)",
                border: "2px solid var(--gold, #c9a84c)",
                textDecoration: "none",
              }}
            >
              View Our Google Business Profile ↗
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
