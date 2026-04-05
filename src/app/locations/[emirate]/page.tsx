import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { emirates, getEmirateBySlug } from "@/data/locations";
import { services } from "@/data/services";
import { JsonLd } from "@/components/seo/JsonLd";
import { generateLocalBusinessSchema, generateBreadcrumbSchema } from "@/lib/schema";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { ChevronRight } from "lucide-react";

interface PageProps {
  params: Promise<{ emirate: string }>;
}

export async function generateStaticParams() {
  return emirates.map((e) => ({ emirate: e.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { emirate: slug } = await params;
  const emirate = getEmirateBySlug(slug);
  if (!emirate) return {};

  const siteUrl = process.env.SITE_URL || "http://localhost:3000";
  return {
    title: `${emirate.metaTitle} | Villa, Apartment & Deep Cleaning ${emirate.name}`,
    description: `${emirate.metaDescription} Best villa cleaning, apartment cleaning, deep cleaning & office cleaning in ${emirate.name}. Call +971 551 275 545.`,
    keywords: [`cleaning services ${emirate.name}`, `villa cleaning ${emirate.name}`, `apartment cleaning ${emirate.name}`, `deep cleaning ${emirate.name}`, `office cleaning ${emirate.name}`, `house cleaning ${emirate.name}`, `maid service ${emirate.name}`],
    openGraph: {
      title: emirate.metaTitle,
      description: emirate.metaDescription,
      url: `${siteUrl}/locations/${emirate.slug}`,
      images: [{ url: emirate.heroImage }],
    },
    alternates: { canonical: `${siteUrl}/locations/${emirate.slug}` },
  };
}

export default async function EmiratePage({ params }: PageProps) {
  const { emirate: slug } = await params;
  const emirate = getEmirateBySlug(slug);
  if (!emirate) notFound();

  const siteUrl = process.env.SITE_URL || "http://localhost:3000";

  return (
    <>
      <JsonLd data={generateLocalBusinessSchema(emirate.name)} />
      <JsonLd data={generateBreadcrumbSchema([
        { name: "Home", url: siteUrl },
        { name: "Locations", url: `${siteUrl}/#locations` },
        { name: emirate.name, url: `${siteUrl}/locations/${emirate.slug}` },
      ])} />

      {/* Hero Section with Background Image */}
      <section className="relative h-[60vh] sm:h-[70vh] lg:h-screen flex items-center overflow-hidden">
        <Image
          src={emirate.heroImage}
          alt={`${emirate.name} skyline`}
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
          <nav className="flex items-center gap-2 text-sm mb-8 text-gray-300">
            <Link href="/" className="hover:text-gold transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/#locations" className="hover:text-gold transition-colors">Locations</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">{emirate.name}</span>
          </nav>

          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
            Cleaning Services in <span className="text-gold" style={{ textShadow: "0 2px 8px rgba(212, 175, 55, 0.3)" }}>{emirate.name}</span>
          </h1>
          <p className="text-lg leading-relaxed text-gray-200 max-w-3xl">
            {emirate.description}
          </p>
        </div>
      </section>

      {/* Areas Section with Image Cards */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <SectionHeading title={`Areas We Serve in ${emirate.name}`} subtitle="Click an area to learn more" />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mt-12">
            {emirate.cities.map((city) => (
              <Link key={city.slug} href={`/locations/${emirate.slug}/${city.slug}`}>
                <div className="group relative overflow-hidden rounded-xl min-h-[220px] cursor-pointer">
                  <Image
                    src={city.image || emirate.image || "/images/default-area.webp"}
                    alt={city.name}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3 className="font-display font-semibold text-white">
                      {city.name}
                    </h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section with Image Cards */}
      <section className="py-16 px-4" style={{ backgroundColor: "var(--bg-secondary)" }}>
        <div className="max-w-7xl mx-auto">
          <SectionHeading title="Our Services" subtitle={`Available across ${emirate.name}`} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {services.slice(0, 4).map((service) => (
              <Link key={service.slug} href={`/services/${service.slug}`}>
                <div className="group relative overflow-hidden rounded-xl min-h-[240px] cursor-pointer">
                  <Image
                    src={service.image}
                    alt={service.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3 className="font-display font-semibold text-gold">{service.name}</h3>
                    <p className="text-sm mt-1 text-gray-200">{service.shortDescription}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gold/10 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-display text-3xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>
            Need Cleaning in {emirate.name}?
          </h2>
          <p className="mb-6" style={{ color: "var(--text-secondary)" }}>
            Get a free quote for professional cleaning services in your area.
          </p>
          <Button href="/contact" size="lg">Get a Free Quote</Button>
        </div>
      </section>
    </>
  );
}
