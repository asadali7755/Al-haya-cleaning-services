import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getEmirateBySlug, getCityBySlug } from "@/data/locations";
import { getServiceBySlug } from "@/data/services";
import { SERVICE_AREA_COMBOS, hasCombo, combosForCity } from "@/data/serviceAreaCombos";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  generateLocalBusinessSchema,
  generateBreadcrumbSchema,
  generateFAQSchemaFromList,
} from "@/lib/schema";
import { buildTitle } from "@/lib/metadata";
import { Button } from "@/components/ui/Button";
import { QuoteCard } from "@/components/ui/QuoteCard";
import { RequestCallButton } from "@/components/ui/RequestCallButton";
import { Check, ChevronRight, MapPin } from "lucide-react";

interface PageProps {
  params: Promise<{ emirate: string; city: string; service: string }>;
}

/** Only the curated combos get a page — see serviceAreaCombos.ts for why. */
export async function generateStaticParams() {
  return SERVICE_AREA_COMBOS.map((c) => ({
    emirate: c.emirate,
    city: c.city,
    service: c.service,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { emirate: eSlug, city: cSlug, service: sSlug } = await params;
  const emirate = getEmirateBySlug(eSlug);
  const city = getCityBySlug(eSlug, cSlug);
  const service = getServiceBySlug(sSlug);
  if (!emirate || !city || !service || !hasCombo(eSlug, cSlug, sSlug)) return {};

  const siteUrl = process.env.SITE_URL || "http://localhost:3000";
  const path = `/locations/${eSlug}/${cSlug}/${sSlug}`;

  return {
    title: buildTitle(`${service.name} in ${city.name}`),
    description: `${service.shortDescription} Serving ${city.name}, ${emirate.name}. Free quote: +971 56 312 9254.`,
    keywords: [
      `${service.name} ${city.name}`,
      `${service.name} ${city.name} ${emirate.name}`,
      `${service.slug.replace(/-/g, " ")} ${city.name}`,
      `cleaning services ${city.name}`,
    ],
    openGraph: {
      title: buildTitle(`${service.name} in ${city.name}`),
      description: service.shortDescription,
      url: `${siteUrl}${path}`,
      images: [{ url: city.image || service.image }],
    },
    alternates: { canonical: `${siteUrl}${path}` },
  };
}

export default async function ServiceAreaPage({ params }: PageProps) {
  const { emirate: eSlug, city: cSlug, service: sSlug } = await params;
  const emirate = getEmirateBySlug(eSlug);
  const city = getCityBySlug(eSlug, cSlug);
  const service = getServiceBySlug(sSlug);

  // An uncurated combination is a 404, not a thin auto-generated page.
  if (!emirate || !city || !service || !hasCombo(eSlug, cSlug, sSlug)) notFound();

  const siteUrl = process.env.SITE_URL || "http://localhost:3000";
  const heroImage = city.image || service.image;

  // Local FAQs plus the service's own — unique to this pairing.
  const combinedFaqs = [...(city.faqs ?? []), ...(service.faqs ?? [])].slice(0, 8);

  // Sibling services that also have a page in this city.
  const siblings = combosForCity(eSlug, cSlug)
    .filter((s) => s !== sSlug)
    .map((s) => getServiceBySlug(s))
    .filter(Boolean);

  return (
    <>
      <JsonLd data={generateLocalBusinessSchema(city.name, emirate.name)} />
      <JsonLd
        data={generateBreadcrumbSchema([
          { name: "Home", url: siteUrl },
          { name: emirate.name, url: `${siteUrl}/locations/${eSlug}` },
          { name: city.name, url: `${siteUrl}/locations/${eSlug}/${cSlug}` },
          { name: service.name, url: `${siteUrl}/locations/${eSlug}/${cSlug}/${sSlug}` },
        ])}
      />
      {combinedFaqs.length > 0 && <JsonLd data={generateFAQSchemaFromList(combinedFaqs)} />}

      {/* Hero */}
      <section className="relative h-[45vh] sm:h-[55vh] flex items-center overflow-hidden">
        <Image
          src={heroImage}
          alt={`${service.name} in ${city.name}, ${emirate.name} — Al Haya Cleaning Services`}
          fill
          priority
          quality={65}
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative z-10 w-full max-w-4xl mx-auto px-4 text-center">
          <nav className="flex items-center gap-2 text-sm mb-6 flex-wrap justify-center text-gray-300">
            <Link href="/" className="hover:text-gold transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href={`/locations/${eSlug}`} className="hover:text-gold transition-colors">{emirate.name}</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href={`/locations/${eSlug}/${cSlug}`} className="hover:text-gold transition-colors">{city.name}</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">{service.name}</span>
          </nav>
          <h1 className="font-display text-3xl md:text-5xl font-bold text-white mb-4">
            {service.name} in <span className="text-gold">{city.name}</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
            {service.shortDescription}
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-16">
        {/* Why this area — the city's own content, not boilerplate */}
        {city.intro && (
          <p className="text-lg leading-relaxed mb-8" style={{ color: "var(--text-secondary)" }}>
            {city.intro}
          </p>
        )}

        <h2 className="font-display text-2xl md:text-3xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>
          {service.name} for {city.name} homes
        </h2>
        <div className="space-y-5 mb-10">
          {service.description.split("\n\n").map((para, i) => (
            <p key={i} className="leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              {para}
            </p>
          ))}
        </div>

        {city.propertyTypes && city.propertyTypes.length > 0 && (
          <div className="mb-10">
            <h2 className="font-display text-2xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>
              Properties we cover in {city.name}
            </h2>
            <div className="flex flex-wrap gap-3">
              {city.propertyTypes.map((p) => (
                <span key={p} className="px-4 py-2 rounded-full text-sm font-medium border border-gold/40 bg-gold/10 text-gold">
                  {p}
                </span>
              ))}
            </div>
          </div>
        )}

        <div className="mb-12">
          <h2 className="font-display text-2xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>
            What&apos;s included
          </h2>
          <ul className="space-y-3">
            {service.benefits.map((b) => (
              <li key={b} className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-gold/20 border border-gold/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 text-gold" strokeWidth={3} />
                </span>
                <span style={{ color: "var(--text-secondary)" }}>{b}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Lead capture */}
        <QuoteCard
          defaultService={service.slug}
          source={`${service.name} in ${city.name}`}
          heading={`Free ${service.name.toLowerCase()} quote in ${city.name}`}
          className="mb-12 max-w-md mx-auto"
        />

        {/* FAQs */}
        {combinedFaqs.length > 0 && (
          <div className="mb-12">
            <h2 className="font-display text-2xl font-bold mb-6" style={{ color: "var(--text-primary)" }}>
              {service.name} in {city.name} — FAQs
            </h2>
            <div className="space-y-6">
              {combinedFaqs.map((f) => (
                <div key={f.question}>
                  <h3 className="font-display text-lg font-semibold mb-2" style={{ color: "var(--text-primary)" }}>
                    {f.question}
                  </h3>
                  <p className="leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                    {f.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Other services with a page in this same area */}
        {siblings.length > 0 && (
          <div className="mb-12">
            <h2 className="font-display text-2xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>
              Also available in {city.name}
            </h2>
            <div className="flex flex-wrap gap-3">
              {siblings.map((s) => (
                <Link
                  key={s!.slug}
                  href={`/locations/${eSlug}/${cSlug}/${s!.slug}`}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-gold/30 bg-gold/5 hover:bg-gold hover:border-gold transition-colors group"
                >
                  <MapPin className="w-4 h-4 text-gold group-hover:text-white transition-colors" />
                  <span className="font-medium text-gold group-hover:text-white transition-colors">
                    {s!.name} in {city.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      <section className="py-16 px-4 bg-gold/10 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-display text-3xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>
            Book {service.name} in {city.name}
          </h2>
          <p className="mb-6" style={{ color: "var(--text-secondary)" }}>
            Same-day slots available. Get a free quote in minutes.
          </p>
          <Button href="/contact" size="lg">Get a Free Quote</Button>
          <RequestCallButton
            source={`${service.name} in ${city.name}`}
            size="lg"
            className="ml-3"
          />
        </div>
      </section>
    </>
  );
}
