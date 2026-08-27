import type { MetadataRoute } from "next";
import { services } from "@/data/services";
import { emirates } from "@/data/locations";
import { blogPosts } from "@/data/blog";
import { SERVICE_AREA_COMBOS } from "@/data/serviceAreaCombos";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.SITE_URL || "http://localhost:3000";
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: siteUrl, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${siteUrl}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${siteUrl}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${siteUrl}/gallery`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
  ];

  const blogPages: MetadataRoute.Sitemap = blogPosts.map((p) => ({
    url: `${siteUrl}/blog/${p.slug}`,
    lastModified: new Date(p.dateModified || p.datePublished),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const servicePages: MetadataRoute.Sitemap = services.map((s) => ({
    url: `${siteUrl}/services/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  const locationPages: MetadataRoute.Sitemap = [];
  for (const emirate of emirates) {
    locationPages.push({
      url: `${siteUrl}/locations/${emirate.slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    });
    for (const city of emirate.cities) {
      locationPages.push({
        url: `${siteUrl}/locations/${emirate.slug}/${city.slug}`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.7,
      });
    }
  }

  // Service-by-area pages. They are only reachable through the city pages, so
  // without this Google has to crawl its way in rather than being told.
  const comboPages: MetadataRoute.Sitemap = SERVICE_AREA_COMBOS.map((c) => ({
    url: `${siteUrl}/locations/${c.emirate}/${c.city}/${c.service}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticPages, ...servicePages, ...locationPages, ...comboPages, ...blogPages];
}
