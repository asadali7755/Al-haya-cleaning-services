import { Hero } from "@/components/home/Hero";
import { ServiceGrid } from "@/components/home/ServiceGrid";
import { LocationGrid } from "@/components/home/LocationGrid";
import { Testimonials } from "@/components/home/Testimonials";
import { CTASection } from "@/components/home/CTASection";
import { JsonLd } from "@/components/seo/JsonLd";
import { generateLocalBusinessSchema, generateOrganizationSchema, generateFAQSchema } from "@/lib/schema";

export default function HomePage() {
  return (
    <>
      <JsonLd data={generateLocalBusinessSchema()} />
      <JsonLd data={generateOrganizationSchema()} />
      <JsonLd data={generateFAQSchema()} />
      <Hero />
      <ServiceGrid />
      <LocationGrid />
      <Testimonials />
      <CTASection />
    </>
  );
}
