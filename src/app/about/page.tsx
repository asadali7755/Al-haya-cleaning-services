import type { Metadata } from "next";
import Image from "next/image";
import { Testimonials } from "@/components/home/Testimonials";
import { CTASection } from "@/components/home/CTASection";
import { JsonLd } from "@/components/seo/JsonLd";
import { generateLocalBusinessSchema } from "@/lib/schema";
import {
  Shield, Award, Users, Clock, Sparkles, Leaf, Target, Heart,
  CheckCircle, Star, ThumbsUp, MapPin, Trophy, Zap
} from "lucide-react";

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

export default function AboutPage() {
  return (
    <>
      <JsonLd data={generateLocalBusinessSchema()} />

      {/* HERO SECTION */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/hero/hero-main.webp"
          alt="About Al Haya Cleaning Services"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(15,20,25,0.92) 0%, rgba(26,35,50,0.85) 50%, rgba(15,20,25,0.95) 100%)" }} />

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/30 mb-6 animate-fade-in">
            <Sparkles className="w-4 h-4 text-gold" />
            <span className="text-sm font-semibold text-gold tracking-wider uppercase">Our Story</span>
          </div>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            About <span className="text-gold" style={{ textShadow: "0 2px 12px rgba(212, 175, 55, 0.5)" }}>Al Haya</span>
          </h1>
          <h2 className="font-display text-xl md:text-2xl lg:text-3xl text-gray-200 max-w-3xl mx-auto leading-relaxed font-light">
            Premium Cleaning Excellence Across the UAE Since 2015
          </h2>
        </div>

        {/* Floating decorative dots */}
        <div className="absolute top-1/4 left-10 w-3 h-3 bg-gold rounded-full animate-pulse" />
        <div className="absolute top-1/3 right-20 w-2 h-2 bg-gold rounded-full animate-pulse" style={{ animationDelay: "0.5s" }} />
        <div className="absolute bottom-1/4 left-1/4 w-2 h-2 bg-gold rounded-full animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute bottom-1/3 right-1/3 w-3 h-3 bg-gold rounded-full animate-pulse" style={{ animationDelay: "1.5s" }} />
      </section>

      {/* SLIDING STATS MARQUEE */}
      <section className="py-8 border-y-2 border-gold/30" style={{ background: "linear-gradient(135deg, #0f1419 0%, #1a2332 100%)" }}>
        <div className="overflow-hidden">
          <div className="flex gap-16 animate-marquee whitespace-nowrap">
            {[
              { icon: Users, value: "5000+", label: "Happy Clients" },
              { icon: Trophy, value: "10+", label: "Years Experience" },
              { icon: MapPin, value: "7", label: "Emirates Served" },
              { icon: Star, value: "4.9/5", label: "Rated Excellence" },
              { icon: Shield, value: "100%", label: "Insured Staff" },
              { icon: Clock, value: "24/7", label: "Always Available" },
              { icon: ThumbsUp, value: "98%", label: "Repeat Clients" },
              { icon: Sparkles, value: "50K+", label: "Spaces Cleaned" },
            ].concat([
              { icon: Users, value: "5000+", label: "Happy Clients" },
              { icon: Trophy, value: "10+", label: "Years Experience" },
              { icon: MapPin, value: "7", label: "Emirates Served" },
              { icon: Star, value: "4.9/5", label: "Rated Excellence" },
              { icon: Shield, value: "100%", label: "Insured Staff" },
              { icon: Clock, value: "24/7", label: "Always Available" },
              { icon: ThumbsUp, value: "98%", label: "Repeat Clients" },
              { icon: Sparkles, value: "50K+", label: "Spaces Cleaned" },
            ]).map((stat, i) => (
              <div key={i} className="flex items-center gap-4 flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center">
                  <stat.icon className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-white font-display">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-gold/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-gold/5 blur-3xl" />

        <div className="max-w-6xl mx-auto relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/30 mb-6">
                <Heart className="w-4 h-4 text-gold" />
                <span className="text-sm font-semibold text-gold tracking-wider uppercase">Our Journey</span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6" style={{ color: "var(--text-primary)" }}>
                A Decade of <span className="text-gold">Cleaning Excellence</span>
              </h2>
              <div className="space-y-5 text-lg md:text-xl leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                <p>
                  Founded in <strong className="text-gold">2015</strong> with a simple vision — to deliver cleaning services that exceed expectations. Al Haya started as a small team in Dubai with big dreams.
                </p>
                <p>
                  Today, we proudly serve <strong className="text-gold">all 7 Emirates</strong>, having transformed thousands of homes and offices into spotless sanctuaries. Our commitment to quality has earned us the trust of <strong className="text-gold">5000+ families</strong> across the UAE.
                </p>
                <p>
                  Every member of our team is trained, vetted, and dedicated to delivering nothing less than perfection.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/services/villa-cleaning.webp"
                  alt="Al Haya Cleaning Team"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-6 -left-6 bg-gold text-white p-6 rounded-2xl shadow-2xl">
                <div className="text-4xl font-bold font-display">10+</div>
                <div className="text-sm uppercase tracking-wider">Years of Trust</div>
              </div>
              {/* Floating badge 2 */}
              <div className="absolute -top-6 -right-6 bg-white dark:bg-gray-900 p-4 rounded-2xl shadow-2xl border-2 border-gold">
                <div className="flex items-center gap-2">
                  <Star className="w-6 h-6 text-gold fill-gold" />
                  <Star className="w-6 h-6 text-gold fill-gold" />
                  <Star className="w-6 h-6 text-gold fill-gold" />
                  <Star className="w-6 h-6 text-gold fill-gold" />
                  <Star className="w-6 h-6 text-gold fill-gold" />
                </div>
                <div className="text-xs mt-1 text-center" style={{ color: "var(--text-secondary)" }}>4.9/5 Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION & VISION CARDS */}
      <section className="py-20 px-4" style={{ background: "linear-gradient(135deg, #0f1419 0%, #1a2332 50%, #0f1419 100%)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
              Our <span className="text-gold">Mission & Vision</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Driven by purpose, guided by values
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="group p-10 rounded-3xl border border-gold/20 hover:border-gold transition-all duration-500 hover:-translate-y-2" style={{ backgroundColor: "rgba(255,255,255,0.03)", backdropFilter: "blur(10px)" }}>
              <div className="w-16 h-16 rounded-2xl bg-gold/10 border border-gold/30 flex items-center justify-center mb-6 group-hover:bg-gold group-hover:scale-110 transition-all duration-500">
                <Target className="w-8 h-8 text-gold group-hover:text-white transition-colors duration-500" />
              </div>
              <h3 className="font-display text-3xl font-bold text-white mb-4">Our Mission</h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                To deliver premium cleaning experiences that transform spaces and exceed expectations. We combine modern techniques with meticulous attention to detail, ensuring every corner reflects the highest standards.
              </p>
            </div>

            <div className="group p-10 rounded-3xl border border-gold/20 hover:border-gold transition-all duration-500 hover:-translate-y-2" style={{ backgroundColor: "rgba(255,255,255,0.03)", backdropFilter: "blur(10px)" }}>
              <div className="w-16 h-16 rounded-2xl bg-gold/10 border border-gold/30 flex items-center justify-center mb-6 group-hover:bg-gold group-hover:scale-110 transition-all duration-500">
                <Zap className="w-8 h-8 text-gold group-hover:text-white transition-colors duration-500" />
              </div>
              <h3 className="font-display text-3xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                To be the most trusted and loved cleaning company in the UAE — known for unmatched quality, eco-conscious practices, and a team that treats every space like their own home.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/30 mb-4">
              <Heart className="w-4 h-4 text-gold" />
              <span className="text-sm font-semibold text-gold tracking-wider uppercase">What Drives Us</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>
              Our <span className="text-gold">Core Values</span>
            </h2>
            <p className="text-xl max-w-2xl mx-auto" style={{ color: "var(--text-muted)" }}>
              The principles that shape every job we do
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Award, title: "Excellence", desc: "Never settle for 'good enough'. Every job done to perfection.", color: "from-yellow-500/20 to-gold/20" },
              { icon: Shield, title: "Trust", desc: "Vetted, uniformed staff who respect your privacy and property.", color: "from-blue-500/20 to-gold/20" },
              { icon: Clock, title: "Reliability", desc: "On time, every time. We show up when we say we will.", color: "from-green-500/20 to-gold/20" },
              { icon: Leaf, title: "Eco-Conscious", desc: "Environmentally friendly products safe for family and pets.", color: "from-emerald-500/20 to-gold/20" },
            ].map((value, i) => (
              <div
                key={i}
                className="group relative p-8 rounded-3xl text-center transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-gold/20"
                style={{ backgroundColor: "var(--bg-surface)", border: "1px solid var(--border-color)" }}
              >
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                <div className="relative">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gold/10 border-2 border-gold/30 flex items-center justify-center group-hover:bg-gold group-hover:rotate-6 group-hover:scale-110 transition-all duration-500">
                    <value.icon className="w-10 h-10 text-gold group-hover:text-white transition-colors duration-500" />
                  </div>
                  <h3 className="font-display text-2xl font-bold mb-3" style={{ color: "var(--text-primary)" }}>
                    {value.title}
                  </h3>
                  <p className="text-base leading-relaxed" style={{ color: "var(--text-muted)" }}>
                    {value.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US - FEATURE LIST */}
      <section className="py-24 px-4" style={{ backgroundColor: "var(--bg-secondary)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>
              Why <span className="text-gold">5000+ Families</span> Trust Us
            </h2>
            <p className="text-xl max-w-2xl mx-auto" style={{ color: "var(--text-muted)" }}>
              The Al Haya difference is in every detail
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "10+ years of professional cleaning experience",
              "Fully insured & background-checked staff",
              "Eco-friendly, non-toxic cleaning products",
              "Same-day & emergency cleaning available",
              "Flexible scheduling — weekends & holidays",
              "Satisfaction guaranteed or we re-clean for free",
              "Latest equipment & advanced techniques",
              "Transparent pricing — no hidden fees",
              "Serving all 7 Emirates across UAE",
              "Trained staff in 8+ languages",
            ].map((feature, i) => (
              <div
                key={i}
                className="flex items-center gap-4 p-5 rounded-xl transition-all duration-300 hover:translate-x-2 hover:shadow-lg"
                style={{ backgroundColor: "var(--bg-surface)", border: "1px solid var(--border-color)" }}
              >
                <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center flex-shrink-0 shadow-md">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <span className="text-lg font-medium" style={{ color: "var(--text-primary)" }}>
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />
      <CTASection />
    </>
  );
}
