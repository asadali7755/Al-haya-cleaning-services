import { Button } from "@/components/ui/Button";
import { WhatsAppLink } from "@/components/ui/WhatsAppLink";
import { TrustBadges } from "@/components/ui/TrustBadges";
import { QuoteCard } from "@/components/ui/QuoteCard";
import { Phone } from "lucide-react";

export function CTASection({ source = "Homepage CTA" }: { source?: string } = {}) {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "+971563129254";
  const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, "")}?text=${encodeURIComponent("Hello! I'm interested in Al Haya Cleaning Services.")}`;

  return (
    <section className="py-20 px-4 bg-gold/10">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>
          Ready for a <span className="text-gold">Spotless Space</span>?
        </h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto" style={{ color: "var(--text-secondary)" }}>
          Get a free, no-obligation quote today. Our team is ready to transform
          your home or office with our premium cleaning services.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="/contact" size="lg">
            Request a Free Quote
          </Button>
          <WhatsAppLink href={whatsappUrl} source="homepage_cta" variant="secondary" size="lg">
            <Phone className="w-5 h-5 mr-2" />
            WhatsApp Us
          </WhatsAppLink>
        </div>

        {/* Capture the enquiry here rather than sending people off to
            /contact or WhatsApp, where most of them never arrive. */}
        <QuoteCard
          source={source}
          heading="Tell us what you need"
          className="mt-10 max-w-md mx-auto text-left"
        />

        <TrustBadges className="mt-10" />
      </div>
    </section>
  );
}
