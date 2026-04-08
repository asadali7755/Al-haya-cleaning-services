import Link from "next/link";
import Image from "next/image";
import type { Service } from "@/types";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Check, ChevronRight, MapPin, Shield, Clock, Award, Sparkles, Users, Leaf, ThumbsUp, Star } from "lucide-react";
import { emirates } from "@/data/locations";

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
          <h2 className="font-display text-xl md:text-2xl lg:text-3xl font-semibold leading-relaxed text-gray-200 max-w-3xl mx-auto">
            {service.shortDescription}
          </h2>
        </div>
      </section>

      <div className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16">
            {service.description.split("\n\n").map((paragraph, i) => (
              <p
                key={i}
                className="mb-6 leading-[1.9] text-xl md:text-2xl font-light tracking-wide"
                style={{ color: "var(--text-secondary)" }}
              >
                {paragraph}
              </p>
            ))}
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src={service.image}
              alt={`${service.name} benefits background`}
              fill
              sizes="(max-width: 768px) 100vw, 800px"
              className="object-cover"
            />
            <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(15,20,25,0.92) 0%, rgba(26,35,50,0.88) 50%, rgba(15,20,25,0.95) 100%)" }} />
            <div className="relative p-8 md:p-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-2 text-white">
                Key Benefits
              </h2>
              <div className="w-20 h-1 bg-gold rounded-full mb-8" />
              <ul className="space-y-5">
                {service.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-full bg-gold flex items-center justify-center flex-shrink-0 mt-1 shadow-lg">
                      <Check className="w-5 h-5 text-white" strokeWidth={3} />
                    </div>
                    <span className="text-xl md:text-2xl leading-relaxed font-medium text-gray-100">
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

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
                    alt={`${service.name} in ${emirate.name}`}
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
                href={`https://wa.me/${(process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "+971551275545").replace(/[^0-9]/g, "")}?text=${encodeURIComponent(`Hi! I'm interested in your ${service.name} service.`)}`}
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
