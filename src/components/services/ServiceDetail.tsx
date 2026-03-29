import Link from "next/link";
import type { Service } from "@/types";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Check, ChevronRight } from "lucide-react";

interface ServiceDetailProps {
  service: Service;
}

export function ServiceDetail({ service }: ServiceDetailProps) {
  return (
    <article>
      <div className="relative py-20 px-4" style={{ backgroundColor: "var(--bg-secondary)" }}>
        <div className="max-w-4xl mx-auto">
          <nav className="flex items-center gap-2 text-sm mb-8" style={{ color: "var(--text-muted)" }}>
            <Link href="/" className="hover:text-gold transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/#services" className="hover:text-gold transition-colors">Services</Link>
            <ChevronRight className="w-4 h-4" />
            <span style={{ color: "var(--text-primary)" }}>{service.name}</span>
          </nav>

          <h1 className="font-display text-4xl md:text-5xl font-bold mb-6" style={{ color: "var(--text-primary)" }}>
            {service.name}
          </h1>
          <p className="text-lg leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            {service.shortDescription}
          </p>
        </div>
      </div>

      <div className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="prose max-w-none mb-12" style={{ color: "var(--text-secondary)" }}>
            {service.description.split("\n\n").map((paragraph, i) => (
              <p key={i} className="mb-4 leading-relaxed text-lg">
                {paragraph}
              </p>
            ))}
          </div>

          <SectionHeading title="Key Benefits" centered={false} />
          <ul className="mt-8 space-y-4 mb-12">
            {service.benefits.map((benefit, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-4 h-4 text-gold" />
                </div>
                <span className="text-lg" style={{ color: "var(--text-secondary)" }}>
                  {benefit}
                </span>
              </li>
            ))}
          </ul>

          <div className="rounded-2xl p-8 text-center bg-gold/10">
            <h3 className="font-display text-2xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>
              Ready to Book {service.name}?
            </h3>
            <p className="mb-6" style={{ color: "var(--text-secondary)" }}>
              Contact us today for a free, no-obligation quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" size="lg">
                Get a Free Quote
              </Button>
              <Button
                href={`https://wa.me/${(process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "+971545567799").replace(/[^0-9]/g, "")}?text=${encodeURIComponent(`Hi! I'm interested in your ${service.name} service.`)}`}
                variant="secondary"
                size="lg"
              >
                WhatsApp Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
