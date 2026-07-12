import type { Metadata } from "next";
import { GalleryClient } from "@/components/gallery/GalleryClient";
import { galleryImages, galleryCategories } from "@/data/gallery";

export const metadata: Metadata = {
  title: "Our Work Gallery | Al Haya Cleaning Services Dubai & UAE",
  description:
    "Browse our professional cleaning gallery — real results from villa cleaning, deep cleaning, sofa cleaning, office cleaning and more across Dubai and all UAE Emirates. See the Al Haya difference.",
  alternates: {
    canonical: `${process.env.SITE_URL || "https://www.villadeepcleaning.com"}/gallery`,
  },
  openGraph: {
    title: "Our Work Gallery | Al Haya Cleaning Services",
    description:
      "Real cleaning results from projects across Dubai & UAE. Villa cleaning, sofa cleaning, deep cleaning and more by Al Haya professionals.",
    url: `${process.env.SITE_URL || "https://www.villadeepcleaning.com"}/gallery`,
    type: "website",
    images: [{ url: "/images/services/villa-cleaning/villa1.webp", width: 1200, height: 630 }],
  },
};

export default function GalleryPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    name: "Al Haya Cleaning Services - Work Gallery",
    description:
      "Professional cleaning results gallery showcasing villa cleaning, deep cleaning, sofa cleaning, and more across Dubai and UAE.",
    url: `${process.env.SITE_URL || "https://www.villadeepcleaning.com"}/gallery`,
    provider: {
      "@type": "LocalBusiness",
      name: "Al Haya Cleaning Services",
      telephone: "+971563129254",
      url: "https://www.villadeepcleaning.com",
    },
    numberOfItems: galleryImages.length,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: process.env.SITE_URL || "https://www.villadeepcleaning.com" },
      { "@type": "ListItem", position: 2, name: "Gallery", item: `${process.env.SITE_URL || "https://www.villadeepcleaning.com"}/gallery` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <GalleryClient images={galleryImages} categories={galleryCategories} />
    </>
  );
}
