import Link from "next/link";
import { Phone, Mail, MessageCircle, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer
      className="py-20 px-4 text-white"
      style={{
        background: "linear-gradient(135deg, #0f1419 0%, #1a2332 50%, #0f1419 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <Link href="/" className="font-display text-4xl font-bold text-gold">
            Al Haya
          </Link>
          <p className="mt-5 text-lg leading-relaxed text-gray-300">
            Premium cleaning services across the UAE. Villas, apartments,
            offices — we bring excellence to every space.
          </p>
        </div>

        <div>
          <h3 className="font-display text-2xl font-bold mb-6 text-gold">
            Quick Links
          </h3>
          <ul className="space-y-3">
            {[
              { href: "/#services", label: "Our Services" },
              { href: "/#locations", label: "Locations" },
              { href: "/about", label: "About Us" },
              { href: "/contact", label: "Contact" },
            ].map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-lg text-gray-300 transition-colors hover:text-gold"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-2xl font-bold mb-6 text-gold">
            Contact Us
          </h3>
          <ul className="space-y-4">
            <li className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-gold flex-shrink-0" />
              <a href="tel:+971551275545" className="text-lg text-gray-300 hover:text-gold transition-colors">
                +971 551 275 545
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-gold flex-shrink-0" />
              <a href="mailto:Madinatalhaya@gmail.com" className="text-lg text-gray-300 hover:text-gold transition-colors break-all">
                Madinatalhaya@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-3">
              <MessageCircle className="w-5 h-5 text-gold flex-shrink-0" />
              <a
                href={`https://wa.me/${(process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "+971551275545").replace(/[^0-9]/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg text-gray-300 hover:text-gold transition-colors"
              >
                WhatsApp Us
              </a>
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-gold flex-shrink-0" />
              <span className="text-lg text-gray-300">
                Serving all 7 UAE Emirates
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-gold/20 text-center">
        <p className="text-base text-gray-400">
          &copy; {new Date().getFullYear()} <span className="text-gold font-semibold">Al Haya Cleaning Services</span>. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
