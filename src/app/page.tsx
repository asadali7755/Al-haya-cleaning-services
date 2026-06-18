import { Hero } from "@/components/home/Hero";
import { ServiceGrid } from "@/components/home/ServiceGrid";
import { LocationGrid } from "@/components/home/LocationGrid";
import { Testimonials } from "@/components/home/Testimonials";
import { CTASection } from "@/components/home/CTASection";
import { SocialMediaSection } from "@/components/home/SocialMediaSection";
import { JsonLd } from "@/components/seo/JsonLd";
import { generateLocalBusinessSchema, generateOrganizationSchema, generateFAQSchema, generateWebsiteSchema } from "@/lib/schema";

export default function HomePage() {
  return (
    <>
      <JsonLd data={generateLocalBusinessSchema()} />
      <JsonLd data={generateOrganizationSchema()} />
      <JsonLd data={generateWebsiteSchema()} />
      <JsonLd data={generateFAQSchema()} />
      <Hero />
      <ServiceGrid />
      <LocationGrid />
      <Testimonials />
      <MapSection />
      <SocialMediaSection />
      <CTASection />
    </>
  );
}

function MapSection() {
  return (
    <section className="py-16 px-4" style={{ backgroundColor: "var(--bg-secondary)" }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-3" style={{ color: "var(--text-primary)" }}>
            Find Us on <span className="text-gold">Google Maps</span>
          </h2>
          <p className="text-lg" style={{ color: "var(--text-secondary)" }}>
            Serving Dubai, Abu Dhabi, Sharjah & all 7 UAE Emirates
          </p>
        </div>
        <div className="rounded-2xl overflow-hidden shadow-lg" style={{ border: "1px solid var(--border-color)" }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.4827157825976!2d55.280624200000005!3d25.1869387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f694b563b87dd%3A0x3ad372f6419ced76!2sServedubai!5e0!3m2!1sen!2s!4v1781791917673!5m2!1sen!2s"
            width="100%"
            height="400"
            style={{ border: 0, display: "block" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Al Haya Cleaning Services Dubai Location on Google Maps"
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
              border: "2px solid var(--color-gold)",
            }}
          >
            View Our Google Business Profile ↗
          </a>
        </div>
      </div>
    </section>
  );
}
