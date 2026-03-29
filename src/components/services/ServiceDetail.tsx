import Link from "next/link";
import Image from "next/image";
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
      <section className="relative h-[60vh] sm:h-[70vh] lg:h-screen flex items-center overflow-hidden">
        <Image
          src={service.image}
          alt={`${service.name} in Dubai & UAE - Al Haya Cleaning Services`}
          fill
          priority
          loading="eager"
          quality={75}
          sizes="100vw"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAFBABAAAAAAAAAAAAAAAAAAAACf/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCwAB//2Q=="
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 w-full max-w-4xl mx-auto px-4 text-center">
          <nav className="flex items-center gap-2 text-sm mb-8 justify-center flex-wrap text-gray-300">
            <Link href="/" className="hover:text-gold transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/#services" className="hover:text-gold transition-colors">Services</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">{service.name}</span>
          </nav>

          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
            {service.name} <span className="text-gold" style={{ textShadow: "0 2px 8px rgba(212, 175, 55, 0.3)" }}>in UAE</span>
          </h1>
          <p className="text-lg leading-relaxed text-gray-200 max-w-3xl mx-auto">
            {service.shortDescription}
          </p>
        </div>
      </section>

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
