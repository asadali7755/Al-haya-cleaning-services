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

export interface SubCity {
  name: string;
  slug: string;
  emirateSlug: string;
  description: string;
  image?: string;
  metaTitle: string;
  metaDescription: string;
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
