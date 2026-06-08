const siteUrl = () => process.env.SITE_URL || "http://localhost:3000";

const SOCIAL_PROFILES = [
  "https://www.instagram.com/alhayacleaningllc/",
  "https://www.facebook.com/villadeepcleaningservicesdubai/",
  "https://www.pinterest.com/DeepCleaningdubai/",
  "https://x.com/alhayacleaner",
];

const PHONE = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "+971563129254";

const AGGREGATE_RATING = {
  "@type": "AggregateRating",
  ratingValue: 4.9,
  reviewCount: 500,
  bestRating: 5,
  worstRating: 1,
};

// Approx. emirate-center coordinates so geo matches addressRegion per page
const EMIRATE_GEO: Record<string, { lat: number; lng: number }> = {
  "Dubai": { lat: 25.2048, lng: 55.2708 },
  "Abu Dhabi": { lat: 24.4539, lng: 54.3773 },
  "Sharjah": { lat: 25.3463, lng: 55.4209 },
  "Ajman": { lat: 25.4052, lng: 55.5136 },
  "Ras Al Khaimah": { lat: 25.7895, lng: 55.9432 },
  "Fujairah": { lat: 25.1288, lng: 56.3265 },
  "Umm Al Quwain": { lat: 25.5647, lng: 55.5552 },
};

function resolveGeo(city?: string, emirate?: string) {
  if (emirate && EMIRATE_GEO[emirate]) return EMIRATE_GEO[emirate];
  if (city && EMIRATE_GEO[city]) return EMIRATE_GEO[city];
  return EMIRATE_GEO["Dubai"];
}

// ─── Organization Schema ───────────────────────────────────────────────────────
export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteUrl()}/#organization`,
    name: "Al Haya Cleaning Services",
    url: siteUrl(),
    // Google requires logo to be an ImageObject, NOT a plain string
    logo: {
      "@type": "ImageObject",
      url: `${siteUrl()}/images/hero/hero-main.webp`,
      width: 1920,
      height: 1080,
    },
    description:
      "Professional villa, apartment, deep cleaning & office cleaning services across all 7 UAE Emirates.",
    telephone: PHONE,
    email: "Alhayacleaners@gmail.com",
    foundingDate: "2015",
    areaServed: {
      "@type": "Country",
      name: "United Arab Emirates",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: PHONE,
      contactType: "customer service",
      areaServed: "AE",
      availableLanguage: ["English", "Arabic", "Hindi", "Urdu"],
    },
    knowsAbout: [
      "Villa Cleaning",
      "Apartment Cleaning",
      "Deep Cleaning",
      "Move-In Move-Out Cleaning",
      "Office Cleaning",
      "Sofa & Carpet Cleaning",
      "Window Cleaning",
      "Post-Construction Cleaning",
      "Curtains & Blinds Cleaning",
      "Mattress Deep Cleaning",
      "Car Interior Cleaning",
    ],
    sameAs: SOCIAL_PROFILES,
  };
}

// ─── WebSite Schema ────────────────────────────────────────────────────────────
export function generateWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl()}/#website`,
    name: "Al Haya Cleaning Services",
    url: siteUrl(),
    publisher: { "@id": `${siteUrl()}/#organization` },
    inLanguage: "en-AE",
  };
}

// ─── Local Business Schema ─────────────────────────────────────────────────────
export function generateLocalBusinessSchema(city?: string, emirate?: string) {
  const localityLabel = city || "Dubai";
  const regionLabel = emirate || city || "Dubai";
  const coords = resolveGeo(city, emirate);

  // Unique @id per city so Google doesn't see duplicate IDs across pages
  const idSlug = city
    ? city.toLowerCase().replace(/\s+/g, "-")
    : "home";

  return {
    "@context": "https://schema.org",
    // Use array of types — more explicit, avoids ambiguity with CleaningService
    "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
    "@id": `${siteUrl()}/#localbusiness-${idSlug}`,
    name: city
      ? `Al Haya Cleaning Services ${city}`
      : "Al Haya Cleaning Services",
    description:
      "Specialized villa deep cleaning, apartment cleaning, and home sanitization services in Dubai and across all 7 UAE Emirates. Eco-friendly products, trained & vetted staff.",
    url: siteUrl(),
    telephone: PHONE,
    email: "Alhayacleaners@gmail.com",
    // Google requires image to be an ImageObject (array), not a plain string
    image: [
      {
        "@type": "ImageObject",
        url: `${siteUrl()}/images/hero/hero-main.webp`,
        width: 1920,
        height: 1080,
      },
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: localityLabel,
      addressRegion: regionLabel,
      addressCountry: "AE",
      // Removed fake streetAddress — causes Google validation warnings
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: coords.lat,
      longitude: coords.lng,
    },
    areaServed: city
      ? [{ "@type": "City", name: city }]
      : [
          { "@type": "City", name: "Dubai" },
          { "@type": "City", name: "Abu Dhabi" },
          { "@type": "City", name: "Sharjah" },
          { "@type": "City", name: "Ajman" },
          { "@type": "City", name: "Ras Al Khaimah" },
          { "@type": "City", name: "Fujairah" },
          { "@type": "City", name: "Umm Al Quwain" },
        ],
    priceRange: "$$",
    currenciesAccepted: "AED",
    paymentAccepted: "Cash, Credit Card, Bank Transfer",
    sameAs: SOCIAL_PROFILES,
    aggregateRating: AGGREGATE_RATING,
    // openingHoursSpecification must be an ARRAY, not a plain object
    openingHoursSpecification: [
      {
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
    ],
  };
}

// ─── Service Schema ────────────────────────────────────────────────────────────
export function generateServiceSchema(service: {
  name: string;
  description: string;
  slug?: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    // "Service" is correct for individual offerings — "CleaningService" is a business type
    "@type": "Service",
    "@id": service.slug
      ? `${siteUrl()}/services/${service.slug}#service`
      : undefined,
    name: service.name,
    description: service.description,
    ...(service.slug && { url: `${siteUrl()}/services/${service.slug}` }),
    ...(service.image && {
      image: {
        "@type": "ImageObject",
        url: `${siteUrl()}${service.image}`,
      },
    }),
    serviceType: service.name,
    category: "Home Cleaning",
    // Provider links back to the business with its own rating
    provider: {
      "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
      "@id": `${siteUrl()}/#localbusiness-home`,
      name: "Al Haya Cleaning Services",
      url: siteUrl(),
      telephone: PHONE,
      aggregateRating: AGGREGATE_RATING,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Dubai",
        addressRegion: "Dubai",
        addressCountry: "AE",
      },
    },
    areaServed: [
      { "@type": "City", name: "Dubai" },
      { "@type": "City", name: "Abu Dhabi" },
      { "@type": "City", name: "Sharjah" },
      { "@type": "City", name: "Ajman" },
      { "@type": "City", name: "Ras Al Khaimah" },
      { "@type": "City", name: "Fujairah" },
      { "@type": "City", name: "Umm Al Quwain" },
    ],
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceSpecification: {
        "@type": "PriceSpecification",
        priceCurrency: "AED",
      },
    },
  };
}

// ─── FAQ Schema ────────────────────────────────────────────────────────────────
export function generateFAQSchema() {
  const faqs = [
    {
      question: "What areas do you serve in the UAE?",
      answer:
        "Al Haya Cleaning Services operates across all 7 Emirates: Dubai, Abu Dhabi, Sharjah, Ajman, Ras Al Khaimah, Fujairah, and Umm Al Quwain. We cover 30+ neighborhoods including Jumeirah, Downtown Dubai, Dubai Marina, Palm Jumeirah, Al Reem Island, and more.",
    },
    {
      question: "How much does villa cleaning cost in Dubai?",
      answer:
        "Villa cleaning prices depend on size, number of bedrooms, and type of service. Contact us at +971 56 312 9254 for a free, no-obligation quote tailored to your villa.",
    },
    {
      question: "Do you provide deep cleaning services?",
      answer:
        "Yes! Our deep cleaning service covers behind appliances, inside cabinets, bathroom descaling, kitchen degreasing, and every hidden corner. It's ideal as a quarterly refresh or before special events.",
    },
    {
      question: "Are your cleaning products safe for children and pets?",
      answer:
        "Absolutely. We use eco-friendly, non-toxic cleaning products that are safe for families, children, and pets while still delivering powerful cleaning results.",
    },
    {
      question: "Do you offer move-in and move-out cleaning?",
      answer:
        "Yes, we provide thorough move-in/move-out cleaning to landlord-inspection standards. Our service helps secure full deposit refunds and ensures your new home is spotless from day one.",
    },
    {
      question: "How can I book a cleaning service?",
      answer:
        "You can book via WhatsApp at +971 56 312 9254, call us directly, or fill out the contact form on our website. We respond within minutes!",
    },
  ];

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

// ─── Generic FAQ Schema (from a list) ──────────────────────────────────────────
export function generateFAQSchemaFromList(
  faqs: { question: string; answer: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

// ─── Blog Article Schema ───────────────────────────────────────────────────────
export function generateArticleSchema(post: {
  slug: string;
  title: string;
  metaDescription: string;
  image: string;
  datePublished: string;
  dateModified?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${siteUrl()}/blog/${post.slug}#article`,
    headline: post.title,
    description: post.metaDescription,
    image: `${siteUrl()}${post.image}`,
    datePublished: post.datePublished,
    dateModified: post.dateModified || post.datePublished,
    author: {
      "@type": "Organization",
      name: "Al Haya Cleaning Services",
      url: siteUrl(),
    },
    publisher: { "@id": `${siteUrl()}/#organization` },
    mainEntityOfPage: `${siteUrl()}/blog/${post.slug}`,
    inLanguage: "en-AE",
  };
}

// ─── Breadcrumb Schema ─────────────────────────────────────────────────────────
export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
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
