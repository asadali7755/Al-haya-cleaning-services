export interface Service {
  name: string;
  slug: string;
  shortDescription: string;
  description: string;
  benefits: string[];
  image: string;
  icon: string;
  keywords: string[];
  metaTitle: string;
  metaDescription: string;
  relatedServices?: string[];
  faqs?: FAQItem[];
}

export interface Emirate {
  name: string;
  slug: string;
  description: string;
  cities: SubCity[];
  image: string;
  heroImage: string;
  metaTitle: string;
  metaDescription: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface SubCity {
  name: string;
  slug: string;
  emirateSlug: string;
  description: string;
  image?: string;
  metaTitle: string;
  metaDescription: string;
  // ── Optional unique local SEO content (added per city) ──────────────
  intro?: string;                               // expanded unique intro paragraph
  sections?: { heading: string; body: string }[]; // unique local content blocks
  propertyTypes?: string[];                     // property types served locally
  faqs?: FAQItem[];                             // local FAQs (visible + FAQPage schema)
}

export interface ContactSubmission {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  timestamp?: string;
}

export interface Testimonial {
  customerName: string;
  reviewText: string;
  rating: number;
  location: string;
}

export interface SiteMetadata {
  siteName: string;
  siteUrl: string;
  defaultTitle: string;
  defaultDescription: string;
  whatsappNumber: string;
  contactEmail: string;
  socialLinks: {
    facebook?: string;
    instagram?: string;
  };
}
