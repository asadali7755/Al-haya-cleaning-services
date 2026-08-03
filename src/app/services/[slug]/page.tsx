import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { services, getServiceBySlug } from "@/data/services";
import { ServiceDetail } from "@/components/services/ServiceDetail";
import { JsonLd } from "@/components/seo/JsonLd";
import { generateServiceSchema, generateBreadcrumbSchema, generateFAQSchemaFromList } from "@/lib/schema";
import { buildTitle } from "@/lib/metadata";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  const siteUrl = process.env.SITE_URL || "http://localhost:3000";

  return {
    title: buildTitle(service.metaTitle),
    description: service.metaDescription,
    keywords: service.keywords,
    openGraph: {
      title: buildTitle(service.metaTitle),
      description: service.metaDescription,
      url: `${siteUrl}/services/${service.slug}`,
      type: "website",
      images: [{ url: service.image }],
    },
    alternates: {
      canonical: `${siteUrl}/services/${service.slug}`,
    },
  };
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const siteUrl = process.env.SITE_URL || "http://localhost:3000";

  return (
    <>
      <JsonLd data={generateServiceSchema({ name: service.name, description: service.description, slug: service.slug, image: service.image })} />
      <JsonLd
        data={generateBreadcrumbSchema([
          { name: "Home", url: siteUrl },
          { name: "Services", url: `${siteUrl}/#services` },
          { name: service.name, url: `${siteUrl}/services/${service.slug}` },
        ])}
      />
      {service.faqs && service.faqs.length > 0 && (
        <JsonLd data={generateFAQSchemaFromList(service.faqs)} />
      )}
      <ServiceDetail service={service} />
    </>
  );
}
