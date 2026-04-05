import Link from "next/link";
import { Phone, Mail, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer
      className="border-t py-16 px-4"
      style={{
        backgroundColor: "var(--bg-secondary)",
        borderColor: "var(--border-color)",
      }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <Link href="/" className="font-display text-2xl font-bold text-gold">
            Al Haya
          </Link>
          <p className="mt-4 leading-relaxed" style={{ color: "var(--text-muted)" }}>
            Premium cleaning services across the UAE. Villas, apartments,
            offices — we bring excellence to every space.
          </p>
        </div>

        <div>
          <h3 className="font-display text-lg font-semibold mb-4" style={{ color: "var(--text-primary)" }}>
            Quick Links
          </h3>
          <ul className="space-y-2">
            {[
              { href: "/#services", label: "Our Services" },
              { href: "/#locations", label: "Locations" },
              { href: "/about", label: "About Us" },
              { href: "/contact", label: "Contact" },
            ].map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="transition-colors hover:text-gold"
                  style={{ color: "var(--text-muted)" }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-lg font-semibold mb-4" style={{ color: "var(--text-primary)" }}>
            Contact Us
          </h3>
          <ul className="space-y-3">
            <li className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-gold flex-shrink-0" />
              <a href="tel:+971551275545" className="hover:text-gold transition-colors" style={{ color: "var(--text-muted)" }}>
                +971 551 275 545
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-gold flex-shrink-0" />
              <a href="mailto:Madinatalhaya@gmail.com" className="hover:text-gold transition-colors" style={{ color: "var(--text-muted)" }}>
                Madinatalhaya@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-3">
              <MessageCircle className="w-4 h-4 text-gold flex-shrink-0" />
              <a
                href={`https://wa.me/${(process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "+971551275545").replace(/[^0-9]/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold transition-colors"
                style={{ color: "var(--text-muted)" }}
              >
                WhatsApp Us
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div
        className="max-w-7xl mx-auto mt-12 pt-8 border-t text-center text-sm"
        style={{ borderColor: "var(--border-color)", color: "var(--text-muted)" }}
      >
        &copy; {new Date().getFullYear()} Al Haya Cleaning Services. All rights reserved.
      </div>
    </footer>
  );
}
