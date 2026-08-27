/**
 * Service × Area landing pages at /locations/[emirate]/[city]/[service].
 *
 * Curated, not generated. 12 services × 30 cities would be 360 near-identical
 * pages, which post-"Helpful Content" costs a site more than it earns. Each
 * combo below is one Search Console actually asks for, and each page combines
 * that city's own local content with that service's own copy, so no two are
 * thin duplicates of each other.
 *
 * Demand behind the current list (3 months, villadeepcleaning.com):
 *   floorcare in palm jumeirah        90 impressions, position 35.5
 *   deep cleaning palm jumeirah       74 impressions, position 20.7
 *   floorcare palm jumeirah           47 impressions, position 37.0
 *   cleaning services palm jumeirah   45 impressions, position 35.6
 *   deep cleaning dubai marina        83 impressions, position 37.6
 *   floorcare services palm jumeirah  12 impressions, position 36.7
 *
 * Every one of those sat past position 20 with no exact-match page behind it.
 */

export interface ServiceAreaCombo {
  emirate: string;
  city: string;
  service: string;
}

const dubai = (city: string, service: string): ServiceAreaCombo => ({
  emirate: "dubai",
  city,
  service,
});

export const SERVICE_AREA_COMBOS: ServiceAreaCombo[] = [
  // Palm Jumeirah — 306 impressions, the largest area gap, mostly floor work.
  dubai("palm-jumeirah", "floor-care"),
  dubai("palm-jumeirah", "deep-cleaning"),
  dubai("palm-jumeirah", "villa-cleaning"),

  // Jumeirah — 321 impressions across villa, deep-clean and floor queries.
  dubai("jumeirah", "floor-care"),
  dubai("jumeirah", "deep-cleaning"),
  dubai("jumeirah", "villa-cleaning"),

  // Dubai Marina — "deep cleaning dubai marina" alone is 83 impressions, and
  // the area is apartments rather than villas.
  dubai("dubai-marina", "deep-cleaning"),
  dubai("dubai-marina", "apartment-cleaning"),

  // JBR and Downtown are the same apartment-led pattern as Marina.
  dubai("jbr", "deep-cleaning"),
  dubai("jbr", "apartment-cleaning"),
  dubai("downtown-dubai", "deep-cleaning"),
  dubai("downtown-dubai", "apartment-cleaning"),

  // Al Barsha villas — currently position 85 for its area queries.
  dubai("al-barsha", "villa-cleaning"),
  dubai("al-barsha", "deep-cleaning"),
];

/** Is there a dedicated page for this exact (emirate, city, service)? */
export const hasCombo = (emirate: string, city: string, service: string): boolean =>
  SERVICE_AREA_COMBOS.some(
    (c) => c.emirate === emirate && c.city === city && c.service === service
  );

/** Service slugs with a combo page in a given city — for internal linking. */
export const combosForCity = (emirate: string, city: string): string[] =>
  SERVICE_AREA_COMBOS.filter((c) => c.emirate === emirate && c.city === city).map(
    (c) => c.service
  );

/** Areas with a combo page for a given service — for internal linking. */
export const combosForService = (
  service: string
): { emirate: string; city: string }[] =>
  SERVICE_AREA_COMBOS.filter((c) => c.service === service).map((c) => ({
    emirate: c.emirate,
    city: c.city,
  }));
