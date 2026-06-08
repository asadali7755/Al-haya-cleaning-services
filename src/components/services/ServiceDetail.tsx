import Link from "next/link";
import Image from "next/image";
import type { Service } from "@/types";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Check, ChevronRight, MapPin, Shield, Clock, Award, Sparkles, Users, Leaf, ThumbsUp, Star, ArrowRight } from "lucide-react";
import { emirates } from "@/data/locations";
import { services } from "@/data/services";
import { serviceGalleries } from "@/data/service-galleries";
import { ServiceGallery } from "@/components/services/ServiceGallery";

interface ServiceDetailProps {
  service: Service;
}

export function ServiceDetail({ service }: ServiceDetailProps) {
  return (
    <article>
      <section className="relative h-[55vh] sm:h-[65vh] lg:h-[80vh] flex items-center overflow-hidden">
        <Image
          src={service.image}
          alt={`Professional ${service.name} Service in Dubai, UAE - Al Haya`}
          fill
          priority
          loading="eager"
          quality={65}
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
          <p className="font-display text-xl md:text-2xl lg:text-3xl font-semibold leading-relaxed text-gray-200 max-w-3xl mx-auto">
            {service.shortDescription}
          </p>
        </div>
      </section>

      {/* Description Section */}
      <section className="relative py-24 px-4 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-gold/5 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-gold/5 blur-3xl pointer-events-none" />

        <div className="max-w-5xl mx-auto relative">

          {/* Top label */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/30 mb-6">
            <Sparkles className="w-4 h-4 text-gold" />
            <span className="text-sm font-bold text-gold tracking-widest uppercase">About This Service</span>
          </div>

          {/* Section heading */}
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-14 leading-tight" style={{ color: "var(--text-primary)" }}>
            Why Choose <span className="text-gold">Al Haya</span> for<br className="hidden md:block" /> {service.name}?
          </h2>

          {/* Paragraphs — numbered with gold accent */}
          <div className="space-y-10 mb-20">
            {service.description.split("\n\n").map((paragraph, i) => (
              <div key={i} className="flex gap-6 md:gap-10 items-start group">
                {/* Number */}
                <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-gold/10 border border-gold/30 flex items-center justify-center group-hover:bg-gold group-hover:border-gold transition-all duration-300">
                  <span className="font-display font-bold text-gold group-hover:text-white transition-colors duration-300 text-lg">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                {/* Text */}
                <div className="flex-1 pt-2">
                  <div className="w-10 h-0.5 bg-gold/40 rounded-full mb-4 group-hover:w-20 group-hover:bg-gold transition-all duration-500" />
                  <p className="text-lg md:text-xl leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                    {paragraph}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Benefits — dark card with image bg */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src={service.image}
              alt={`Professional ${service.name} Dubai UAE - Al Haya Cleaning`}
              fill
              sizes="(max-width: 768px) 100vw, 900px"
              className="object-cover"
            />
            <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(15,20,25,0.95) 0%, rgba(26,35,50,0.90) 50%, rgba(15,20,25,0.97) 100%)" }} />

            <div className="relative p-8 md:p-14">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-gold/20 border border-gold/40 flex items-center justify-center">
                  <Award className="w-5 h-5 text-gold" />
                </div>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-white">
                  Key Benefits
                </h2>
              </div>
              <div className="w-24 h-1 bg-gradient-to-r from-gold to-gold/20 rounded-full mb-10" />

              <ul className="space-y-5">
                {service.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-4 group/item">
                    <div className="w-9 h-9 rounded-full bg-gold/20 border border-gold/40 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover/item:bg-gold group-hover/item:border-gold transition-all duration-300 shadow-lg">
                      <Check className="w-4 h-4 text-gold group-hover/item:text-white transition-colors duration-300" strokeWidth={3} />
                    </div>
                    <span className="text-lg md:text-xl leading-relaxed text-gray-200 group-hover/item:text-white transition-colors duration-300">
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </section>

      <ServiceGallery serviceName={service.name} images={serviceGalleries[service.slug] || []} />

      {/* You May Also Need */}
      {service.relatedServices && service.relatedServices.length > 0 && (() => {
        const related = service.relatedServices
          .map((slug) => services.find((s) => s.slug === slug))
          .filter(Boolean) as Service[];
        if (related.length === 0) return null;
        return (
          <section className="py-24 px-4 relative overflow-hidden" style={{ backgroundColor: "var(--bg-secondary)" }}>
            <div className="absolute top-0 left-1/3 w-96 h-96 rounded-full bg-gold/5 blur-3xl pointer-events-none" />
            <div className="max-w-7xl mx-auto relative">
              <div className="text-center mb-14">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/30 mb-5">
                  <Sparkles className="w-4 h-4 text-gold" />
                  <span className="text-sm font-bold text-gold tracking-widest uppercase">Complete Your Home Care</span>
                </div>
                <h2 className="font-display text-4xl md:text-5xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>
                  You May Also <span className="text-gold">Need</span>
                </h2>
                <p className="text-lg max-w-xl mx-auto" style={{ color: "var(--text-muted)" }}>
                  Explore our other professional cleaning services across Dubai & UAE
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {related.map((rel) => (
                  <Link key={rel.slug} href={`/services/${rel.slug}`} className="group block">
                    <div className="relative overflow-hidden rounded-3xl h-[320px] shadow-xl border border-gold/10 group-hover:border-gold/50 transition-all duration-500 group-hover:shadow-gold/20 group-hover:shadow-2xl group-hover:-translate-y-2">
                      <Image
                        src={rel.image}
                        alt={`Professional ${rel.name} Service in Dubai, UAE`}
                        fill
                        sizes="(max-width: 640px) 100vw, 33vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                      {/* Gold top line animation */}
                      <div className="absolute top-0 left-0 h-1 w-0 bg-gradient-to-r from-gold to-gold/40 group-hover:w-full transition-all duration-500 rounded-t-3xl" />

                      <div className="absolute bottom-0 left-0 right-0 p-7">
                        <h3 className="font-display text-2xl font-bold text-white mb-2 group-hover:text-gold transition-colors duration-300">
                          {rel.name}
                        </h3>
                        <p className="text-sm text-gray-300 leading-relaxed mb-5 line-clamp-2">
                          {rel.shortDescription}
                        </p>
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/20 border border-gold/40 group-hover:bg-gold group-hover:border-gold transition-all duration-300">
                          <span className="text-sm font-bold text-gold group-hover:text-white transition-colors duration-300">
                            Learn More
                          </span>
                          <ArrowRight className="w-4 h-4 text-gold group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        );
      })()}

      <section className="py-16 px-4" style={{ backgroundColor: "var(--bg-secondary)" }}>
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            title={`${service.name} Available in All UAE Emirates`}
            subtitle="Choose your location for professional cleaning service near you"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {emirates.map((emirate) => (
              <Link key={emirate.slug} href={`/locations/${emirate.slug}`}>
                <div className="group relative overflow-hidden rounded-xl min-h-[220px] cursor-pointer">
                  <Image
                    src={emirate.heroImage || emirate.image}
                    alt={`Professional ${service.name} in ${emirate.name}, UAE - Al Haya`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <div className="flex items-center gap-2 mb-1">
                      <MapPin className="w-4 h-4 text-gold" />
                      <h3 className="font-display text-xl font-semibold text-white">
                        {emirate.name}
                      </h3>
                    </div>
                    <p className="text-sm text-gray-200">
                      {emirate.cities.length}+ areas covered
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 px-4 overflow-hidden" style={{ background: "linear-gradient(135deg, #0f1419 0%, #1a2332 50%, #0f1419 100%)" }}>
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(circle at 20% 20%, gold 0%, transparent 50%), radial-gradient(circle at 80% 80%, gold 0%, transparent 50%)" }} />

        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/30 mb-4">
              <Sparkles className="w-4 h-4 text-gold" />
              <span className="text-sm font-semibold text-gold tracking-wider uppercase">Why Choose Al Haya</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
              The <span className="text-gold">Trusted Choice</span> for {service.name}
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Premium quality, professional staff, and guaranteed satisfaction across the UAE
            </p>
          </div>

          {/* Sliding Marquee Stats */}
          <div className="relative mb-16 overflow-hidden py-6 border-y border-gold/20">
            <div className="flex gap-16 animate-marquee whitespace-nowrap">
              {[
                { icon: Users, value: "5000+", label: "Happy Clients" },
                { icon: Star, value: "4.9/5", label: "Customer Rating" },
                { icon: Award, value: "10+", label: "Years Experience" },
                { icon: Shield, value: "100%", label: "Satisfaction" },
                { icon: Clock, value: "24/7", label: "Availability" },
                { icon: Sparkles, value: "7", label: "Emirates Served" },
              ].concat([
                { icon: Users, value: "5000+", label: "Happy Clients" },
                { icon: Star, value: "4.9/5", label: "Customer Rating" },
                { icon: Award, value: "10+", label: "Years Experience" },
                { icon: Shield, value: "100%", label: "Satisfaction" },
                { icon: Clock, value: "24/7", label: "Availability" },
                { icon: Sparkles, value: "7", label: "Emirates Served" },
              ]).map((stat, i) => (
                <div key={i} className="flex items-center gap-3 flex-shrink-0">
                  <stat.icon className="w-8 h-8 text-gold" />
                  <div>
                    <div className="text-2xl font-bold text-white">{stat.value}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Feature Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Shield, title: "Trusted & Insured", desc: "Fully insured, background-checked staff you can trust in your home." },
              { icon: Leaf, title: "Eco-Friendly Products", desc: "Safe for your family, pets, and the environment. Non-toxic guaranteed." },
              { icon: Award, title: "Trained Professionals", desc: "Expert cleaners with years of experience and ongoing training." },
              { icon: Clock, title: "Flexible Scheduling", desc: "Book any time, any day. We work around your schedule, even weekends." },
              { icon: ThumbsUp, title: "Satisfaction Guaranteed", desc: "Not happy? We'll re-clean for free. Your satisfaction is our priority." },
              { icon: Sparkles, title: "Premium Equipment", desc: "Latest tools and techniques for spotless, hygienic results every time." },
            ].map((feature, i) => (
              <div
                key={i}
                className="group relative p-8 rounded-2xl border border-gold/20 transition-all duration-500 hover:border-gold hover:-translate-y-2 hover:shadow-2xl hover:shadow-gold/20"
                style={{ backgroundColor: "rgba(255,255,255,0.03)", backdropFilter: "blur(10px)" }}
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative">
                  <div className="w-14 h-14 rounded-xl bg-gold/10 border border-gold/30 flex items-center justify-center mb-5 group-hover:bg-gold group-hover:scale-110 transition-all duration-500">
                    <feature.icon className="w-7 h-7 text-gold group-hover:text-white transition-colors duration-500" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-white mb-3 group-hover:text-gold transition-colors duration-500">
                    {feature.title}
                  </h3>
                  <p className="text-base text-gray-400 leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service FAQ Section (visible + FAQPage schema in page.tsx) */}
      {service.faqs && service.faqs.length > 0 && (
        <section className="py-20 px-4" style={{ backgroundColor: "var(--bg-secondary)" }}>
          <div className="max-w-3xl mx-auto">
            <SectionHeading
              title={`${service.name} — Frequently Asked Questions`}
              subtitle="Everything you need to know before you book"
            />
            <div className="mt-12 space-y-8">
              {service.faqs.map((f) => (
                <div key={f.question}>
                  <h3 className="font-display text-lg md:text-xl font-semibold mb-2" style={{ color: "var(--text-primary)" }}>
                    {f.question}
                  </h3>
                  <p className="leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                    {f.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <div className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
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
                href={`https://wa.me/${(process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "+971563129254").replace(/[^0-9]/g, "")}?text=${encodeURIComponent(`Hi! I'm interested in your ${service.name} service.`)}`}
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
