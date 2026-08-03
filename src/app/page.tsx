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
      <SocialMediaSection />
      <CTASection />
    </>
  );
}
