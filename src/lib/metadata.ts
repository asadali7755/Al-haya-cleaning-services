import type { Metadata } from "next";

export const SITE_NAME = "Al Haya Cleaning Services";
export const DEFAULT_DESCRIPTION =
  "Professional villa, apartment, and office cleaning services across the UAE. Deep cleaning, move-in/move-out, and specialized cleaning in Dubai, Abu Dhabi, and all Emirates.";

const TITLE_SUFFIX = " | Al Haya";
const MAX_TITLE_LENGTH = 60;

/** Appends a short brand suffix only if the result stays within Google's ~60-char title display limit. */
export function buildTitle(pageTitle: string): string {
  const withSuffix = `${pageTitle}${TITLE_SUFFIX}`;
  return withSuffix.length <= MAX_TITLE_LENGTH ? withSuffix : pageTitle;
}

export function generatePageMetadata(
  title: string,
  description: string,
  path?: string
): Metadata {
  const siteUrl = process.env.SITE_URL || "http://localhost:3000";
  const url = path ? `${siteUrl}${path}` : siteUrl;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      type: "website",
      locale: "en_AE",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    alternates: {
      canonical: url,
    },
  };
}
