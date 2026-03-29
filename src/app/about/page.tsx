import type { Metadata } from "next";
import { Testimonials } from "@/components/home/Testimonials";
import { CTASection } from "@/components/home/CTASection";
import { JsonLd } from "@/components/seo/JsonLd";
import { generateLocalBusinessSchema } from "@/lib/schema";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Shield, Award, Users, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "About Al Haya - Best Cleaning Company in Dubai & UAE Since 2015",
  description:
    "Al Haya Cleaning Services — trusted by 500+ families & businesses in Dubai, Abu Dhabi, Sharjah & all UAE. 9+ years of professional villa cleaning, apartment cleaning & deep cleaning. Insured staff, eco-friendly products.",
  openGraph: {
    title: "About Al Haya - Best Cleaning Company in Dubai & UAE",
    description: "Trusted by 500+ families across the UAE. Professional cleaning since 2015.",
    images: [{ url: "/images/hero/hero-main.webp" }],
  },
  alternates: {
    canonical: `${process.env.SITE_URL || "http://localhost:3000"}/about`,
  },
};

const highlights = [
  {
    icon: Clock,
    title: "9+ Years Experience",
    description: "Serving the UAE since 2015 with consistent quality and professionalism.",
  },
  {
    icon: Users,
    title: "500+ Happy Clients",
    description: "Trusted by families and businesses across all seven Emirates.",
  },
  {
    icon: Shield,
    title: "Insured & Vetted Staff",
    description: "Every team member is background-checked, trained, and fully insured.",
  },
  {
    icon: Award,
    title: "Satisfaction Guaranteed",
    description: "Not satisfied? We will re-clean at no extra cost within 24 hours.",
  },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={generateLocalBusinessSchema()} />

      <section className="py-20 px-4" style={{ backgroundColor: "var(--bg-secondary)" }}>
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-6" style={{ color: "var(--text-primary)" }}>
            About <span className="text-gold">Al Haya</span> Cleaning Services
          </h1>
          <p className="text-lg leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            We believe everyone deserves a clean, healthy, and beautiful living
            space. Founded in 2015, Al Haya Cleaning Services has grown from a
            small team in Dubai to a trusted cleaning partner serving all seven
            Emirates of the UAE.
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          <div>
            <h2 className="font-display text-2xl font-bold mb-4 text-gold">Our Mission</h2>
            <p className="text-lg leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              To deliver premium cleaning experiences that transform spaces and
              exceed expectations. We combine modern techniques with meticulous
              attention to detail, ensuring every corner of your home or office
              reflects the highest standards of cleanliness.
            </p>
          </div>
          <div>
            <h2 className="font-display text-2xl font-bold mb-4 text-gold">Our Values</h2>
            <ul className="space-y-3 text-lg" style={{ color: "var(--text-secondary)" }}>
              <li><strong>Excellence:</strong> We never settle for &ldquo;good enough.&rdquo; Every job is done to perfection.</li>
              <li><strong>Trust:</strong> Our vetted, uniformed staff respect your privacy and property.</li>
              <li><strong>Reliability:</strong> On time, every time. We show up when we say we will.</li>
              <li><strong>Eco-Conscious:</strong> We use environmentally friendly products safe for your family and pets.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16 px-4" style={{ backgroundColor: "var(--bg-secondary)" }}>
        <div className="max-w-7xl mx-auto">
          <SectionHeading title="Why Choose Al Haya" subtitle="What sets us apart" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {highlights.map((item) => {
              const IconComponent = item.icon;
              return (
                <div key={item.title} className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gold/10 flex items-center justify-center">
                    <IconComponent className="w-8 h-8 text-gold" />
                  </div>
                  <h3 className="font-display text-lg font-semibold mb-2" style={{ color: "var(--text-primary)" }}>
                    {item.title}
                  </h3>
                  <p className="text-sm" style={{ color: "var(--text-muted)" }}>
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Testimonials />
      <CTASection />
    </>
  );
}
