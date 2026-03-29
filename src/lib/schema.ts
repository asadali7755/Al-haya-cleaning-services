const siteUrl = () => process.env.SITE_URL || "http://localhost:3000";

export function generateLocalBusinessSchema(location?: string) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Al Haya Cleaning Services",
    description:
      "Professional cleaning services across the UAE — villas, apartments, offices, and specialized cleaning.",
    url: siteUrl(),
    telephone: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "+971545567799",
    email: "info@alhaya.ae",
    address: {
      "@type": "PostalAddress",
      addressLocality: location || "Dubai",
      addressRegion: location || "Dubai",
      addressCountry: "AE",
    },
    areaServed: location
      ? { "@type": "City", name: location }
      : {
          "@type": "Country",
          name: "United Arab Emirates",
        },
    priceRange: "$$",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "08:00",
      closes: "20:00",
    },
  };
}

export function generateServiceSchema(service: {
  name: string;
  description: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    provider: {
      "@type": "LocalBusiness",
      name: "Al Haya Cleaning Services",
      url: siteUrl(),
    },
    areaServed: {
      "@type": "Country",
      name: "United Arab Emirates",
    },
  };
}

export function generateBreadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
