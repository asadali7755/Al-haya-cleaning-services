import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { emirates, getEmirateBySlug, getCityBySlug } from "@/data/locations";
import { services } from "@/data/services";
import { JsonLd } from "@/components/seo/JsonLd";
import { generateLocalBusinessSchema, generateBreadcrumbSchema } from "@/lib/schema";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { ChevronRight } from "lucide-react";

interface PageProps {
  params: Promise<{ emirate: string; city: string }>;
}

export async function generateStaticParams() {
  const paths: { emirate: string; city: string }[] = [];
  for (const emirate of emirates) {
    for (const city of emirate.cities) {
      paths.push({ emirate: emirate.slug, city: city.slug });
    }
  }
  return paths;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { emirate: eSlug, city: cSlug } = await params;
  const emirate = getEmirateBySlug(eSlug);
  const city = getCityBySlug(eSlug, cSlug);
  if (!city || !emirate) return {};

  const siteUrl = process.env.SITE_URL || "http://localhost:3000";
  return {
    title: `${city.metaTitle} | Best Cleaning Company in ${city.name}`,
    description: `${city.metaDescription} Villa cleaning, apartment cleaning, deep cleaning in ${city.name}, ${emirate.name}. Call +971 545 567 799 for free quote.`,
    keywords: [`cleaning services ${city.name}`, `villa cleaning ${city.name}`, `apartment cleaning ${city.name}`, `deep cleaning ${city.name}`, `house cleaning ${city.name}`, `maid service ${city.name} ${emirate.name}`],
    openGraph: {
      title: city.metaTitle,
      description: city.metaDescription,
      url: `${siteUrl}/locations/${eSlug}/${cSlug}`,
      images: [{ url: city.image || emirate.heroImage }],
    },
    alternates: { canonical: `${siteUrl}/locations/${eSlug}/${cSlug}` },
  };
}

export default async function CityPage({ params }: PageProps) {
  const { emirate: eSlug, city: cSlug } = await params;
  const emirate = getEmirateBySlug(eSlug);
  const city = getCityBySlug(eSlug, cSlug);
  if (!emirate || !city) notFound();

  const siteUrl = process.env.SITE_URL || "http://localhost:3000";
  const heroImage = city.image || emirate.image || "/images/default-area.webp";

  return (
    <>
      <JsonLd data={generateLocalBusinessSchema(`${city.name}, ${emirate.name}`)} />
      <JsonLd data={generateBreadcrumbSchema([
        { name: "Home", url: siteUrl },
        { name: "Locations", url: `${siteUrl}/#locations` },
        { name: emirate.name, url: `${siteUrl}/locations/${emirate.slug}` },
        { name: city.name, url: `${siteUrl}/locations/${emirate.slug}/${city.slug}` },
      ])} />

      {/* Hero Section with Background Image */}
      <section className="relative h-[60vh] sm:h-[70vh] lg:h-screen flex items-center overflow-hidden">
        <Image
          src={heroImage}
          alt={`${city.name}, ${emirate.name}`}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 w-full max-w-4xl mx-auto px-4 text-center">
          <nav className="flex items-center gap-2 text-sm mb-8 flex-wrap text-gray-300">
            <Link href="/" className="hover:text-gold transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/#locations" className="hover:text-gold transition-colors">Locations</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href={`/locations/${emirate.slug}`} className="hover:text-gold transition-colors">{emirate.name}</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">{city.name}</span>
          </nav>

          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
            Cleaning Services in <span className="text-gold" style={{ textShadow: "0 2px 8px rgba(212, 175, 55, 0.3)" }}>{city.name}</span>
          </h1>
          <p className="text-lg leading-relaxed text-gray-200 max-w-3xl">
            {city.description}
          </p>
        </div>
      </section>

      {/* Services Section with Image Cards */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <SectionHeading title="Available Services" subtitle={`Professional cleaning in ${city.name}, ${emirate.name}`} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {services.map((service) => (
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
            Book Cleaning in {city.name}
          </h2>
          <p className="mb-6" style={{ color: "var(--text-secondary)" }}>
            Professional cleaning services at your doorstep. Get a free quote today.
          </p>
          <Button href="/contact" size="lg">Get a Free Quote</Button>
        </div>
      </section>
    </>
  );
}
