# SEO + AEO/GEO Audit — villadeepcleaning.com
**Business:** Al Haya Cleaning Services — Villa & Apartment Deep Cleaning, Dubai / UAE
**Phone (correct):** +971 56 312 9254
**Audit date:** 2026-06-08
**Auditor:** Beyond SEO (Apify Intelligence Mode + source-code review)
**Stack:** Next.js 16 (App Router), Vercel, migrated from WordPress/Hostinger

---

## 1. Executive Summary

The site is **technically well-built** for a recent WordPress→Next.js migration: clean SSR HTML, valid structured data, proper 404s, good content depth on service pages, strong image optimization, and a thorough WordPress-cleanup redirect map. The foundations are above average.

However, **three issues are actively costing leads and rankings right now**:

1. 🔴 **All WhatsApp CTAs point to the WRONG phone number** (`971551275545` instead of `971563129254`). Every WhatsApp lead is misrouted. *This is the single highest-impact fix and takes 2 minutes.*
2. 🔴 **www / non-www conflict** — the site serves `www.` via a **temporary 307 redirect**, but every canonical tag and all 51 sitemap URLs use the **non-www** form. This splits ranking signals and confuses indexing.
3. 🟠 **33 near-duplicate location pages** — each city page has only ~50–60 words of unique content wrapped around an identical service-card grid. High doorway-page / thin-content risk.

**Ranking reality (Directional — single SERP sample, UAE):** villadeepcleaning.com does **not appear in the top ~9 organic results** for its three core money keywords (`villa cleaning dubai`, `cleaning services dubai`, `deep cleaning services dubai`). The market is dominated by aggregators (JustLife, Urban Company, ServiceMarket) and established cleaners (Busy Bees, AllClean Dubai, The Healthy Home). This is consistent with a freshly-migrated site that has not yet rebuilt authority.

**Realistic outlook:** With the config fixes (week 1) + content differentiation + local SEO + authority building, meaningful movement on long-tail and local-intent terms is achievable in 60–90 days. Head terms like "cleaning services dubai" are aggregator-controlled and will take longer / require Google Business Profile + links.

---

## 2. Current SEO Health Score

| Area | Score | Notes |
|---|---|---|
| Technical SEO | 7.5 / 10 | Strong, but www/non-www + sitemap host conflict drags it down |
| On-Page SEO | 7 / 10 | Service pages excellent; heading misuse; location pages thin |
| Structured Data | 8 / 10 | Valid & well-thought-out; minor risk on self-serving rating |
| Content Depth | 6.5 / 10 | Service pages strong; 33 location pages near-duplicate |
| Local SEO | 4 / 10 | No NAP/reviews/map on location pages; GBP not verified |
| Authority / Backlinks | Not verified | No data; assume low (new domain) |
| AEO / GEO | 6 / 10 | Good FAQ + entity schema; needs answer-blocks & sources |
| Conversion | 5 / 10 | **Broken by WhatsApp number bug**; otherwise decent |
| **Overall** | **~6.3 / 10** | Good bones, blocked by 3 fixable issues |

---

## 3. Data Sources Used
- **Confirmed:** Full source-code review (layout, schema lib, metadata lib, next.config, service/location templates, data files, components).
- **Confirmed:** Live HTTP checks (headers, status codes, redirects, canonical, rendered HTML, word counts, heading counts, sitemap).
- **Directional:** Apify Google SERP scrape (UAE, en, 3 queries, 1 page each) — single sample, subject to personalization/locale.
- **Not available:** Google Search Console, GA4, Google Business Profile, backlink/authority data. *These are the most important missing sources (see §24).*

---

## 4. Confirmed Findings (high confidence)
- ✅ `SITE_URL` is correctly set in production (canonical resolves to the real domain, **no localhost leak**).
- ✅ Valid JSON-LD: Organization, LocalBusiness (per-city `@id`), Service, FAQPage, BreadcrumbList. FAQ content is **visible** on the homepage (schema-compliant).
- ✅ Proper `404` status on missing pages (no soft-404).
- ✅ Single `<h1>` per page; SSR HTML with real body content (AI-crawlable).
- ✅ Strong image setup: AVIF/WebP, responsive `sizes`, blur placeholders, 1-year cache headers.
- ✅ Excellent WordPress-legacy redirect map; security headers present; `poweredByHeader` off.
- ✅ Service pages are content-rich (~4,500 words rendered incl. chrome; substantial unique body copy).
- 🔴 **WhatsApp links render `wa.me/971551275545`** (wrong number) on the live site.
- 🔴 **www/non-www:** `villadeepcleaning.com` → `www.villadeepcleaning.com` via **307 (temporary)**; canonicals & sitemap use non-www.
- 🟠 **Location pages near-duplicate** (~50–60 unique words each across 33 pages).
- 🟠 Emirate & city pages place the **description paragraph inside an `<h2>`** (heading misuse).

---

## 5. Technical SEO Issues

| # | Issue | Severity | Evidence | Fix |
|---|---|---|---|---|
| T1 | www/non-www conflict; 307 (temporary) redirect | **Critical** | `https://villadeepcleaning.com` → `307` → `https://www.villadeepcleaning.com/`; canonical = non-www | Pick ONE host. Recommended: set the **www** redirect to **301 permanent** (Vercel domain settings) AND change `SITE_URL` to `https://www.villadeepcleaning.com` so canonicals + sitemap match the served host. |
| T2 | Sitemap lists non-www URLs that all redirect | **High** | All 51 `<loc>` use non-www; site serves www | After T1, regenerate sitemap with the canonical host (next-sitemap `siteUrl`). |
| T3 | `geo` coordinates hardcoded to Dubai on every location page | Medium | `latitude:25.2048, longitude:55.2708` for Fujairah, RAK, etc. | Either set per-emirate coordinates or drop `geo` on non-Dubai pages to avoid contradicting `addressRegion`. |
| T4 | Verify Core Web Vitals (not measured here) | Medium | Hero images `quality={65}`, large 80vh heroes | Run PageSpeed/CrUX; confirm LCP on mobile for hero-heavy pages. |

---

## 6. Indexing / Crawlability
- robots.txt is clean and correctly blocks `/api/`, `/_next/`, and legacy WordPress paths. ✅
- **Action:** Confirm in Google Search Console which host (www vs non-www) is indexed and submit the corrected sitemap after T1. Without GSC, indexation coverage is **Not verified**.
- The 307 (T1) can cause Google to keep both hosts in limbo — fixing it is also an indexing fix.

---

## 7. On-Page SEO Issues
- 🟠 **Heading misuse (O1):** On emirate & city pages the `<h2>` contains the full descriptive sentence (`{description}`). H2 should be a short heading. Move the description into a `<p>` and use a real H2 like "Professional Cleaning in {City}".
- 🟢 Titles & meta descriptions are unique per service/emirate/city (data-driven `metaTitle`/`metaDescription`). Home meta description = 162 chars (trim to ≤ 158).
- 🟢 Keyword targeting per page is sensible and not stuffed.
- ⚠️ The global `metadata.keywords` array (layout) is ignored by Google — harmless, low priority to remove.

---

## 8. Content / E-E-A-T Issues
- 🟠 **Location pages (C1):** ~50–60 unique words each → 33 near-duplicate pages. **Biggest content risk.** Each city page needs unique local content: neighborhoods served, building/community types, typical villa/apartment sizes, local pricing notes, a local FAQ, and 1–2 local testimonials.
- 🟠 **Service pages lack FAQ schema** — FAQ schema only exists on the homepage. Each service page should carry its own 4–6 service-specific FAQs (visible + `FAQPage`).
- 🟠 **E-E-A-T:** No named team/owner, no "vetted staff" proof, no trade license / insurance mention, no real review attribution. Cleaning is borderline-trust; add company credentials, license number, and real reviews.
- 🟢 Service-page body copy is genuinely useful and specific (good).

---

## 9. Keyword Ranking Snapshot (Directional — 1 SERP sample, UAE)

| Keyword | villadeepcleaning.com | Who ranks (top of page) |
|---|---|---|
| villa cleaning dubai | **Not in top 9** | justlife, urbancompany, toponeservices, busybeesdubai, allcleandubai |
| cleaning services dubai | **Not in top 9** | servicemarket, urbancompany, justmaid, propertyfinder, mckleenz |
| deep cleaning services dubai | **Not in top 9** | urbancompany, servicemarket, reddit, mckleenz, smilehandyy |

> Confidence: **Directional.** Verify exact positions in Google Search Console (the authoritative source). No paid ads were captured in this sample; the local **map pack** is a major SERP feature for these terms and is a separate battleground (see §14).

---

## 10. Top Existing Winners to Defend
**Not verified** — requires GSC. Recommended check: GSC → Performance → Pages/Queries, filter to positions 4–20 to find "fastest win" pages already gaining traction.

---

## 11. Top Missing / Priority Money Keywords (intent-mapped)
| Keyword theme | Intent | Target page | Action |
|---|---|---|---|
| "villa deep cleaning dubai" / "villa cleaning [area]" | Local service | `/services/villa-cleaning` + city pages | Differentiate city pages; add area-specific copy |
| "move out cleaning dubai" / "move in move out cleaning" | High-intent transactional | `/services/move-in-move-out-cleaning` | Add deposit-refund angle, checklist, FAQ |
| "deep cleaning [area]" long-tail | Local service | City pages | Unique per-city deep-clean section |
| "cleaning company near me" / map intent | Local map | Google Business Profile | GBP optimization (§14) |
| "sofa cleaning dubai" / "mattress cleaning dubai" | Service | dedicated service pages exist | Add FAQ + internal links from blog |

---

## 12. Competitor Gap
Real SERP competitors fall into two tiers:
- **Aggregators/marketplaces:** justlife.com, urbancompany.com, servicemarket.com, propertyfinder.ae — win on brand + massive authority. *Don't try to outrank head terms head-on; win long-tail + local.*
- **Direct cleaning firms (beatable):** busybeesdubai.com, allcleandubai.com, thehealthyhome.me, mckleenz.com, toponeservices.ae, cleanpro.ae, dubaihousekeeping.com.

**Gap vs the beatable tier:** they typically have richer per-service content, visible reviews, GBP presence, and backlinks. Closing the location-page + local-SEO + reviews gap is the path in.

---

## 13. Content Gap
- No blog / supporting content cluster → no top-of-funnel capture and no internal-link equity to money pages.
- Missing comparison/cost content ("deep cleaning cost dubai", "how often should you deep clean a villa").
- No checklists / guides that earn links and answer AI-search questions.

---

## 14. Local SEO Gap (biggest opportunity)
- 🔴 Location pages have **no NAP, no embedded map, no local reviews, no unique local proof**.
- ⚠️ **Google Business Profile not verified** — for a UAE cleaning business, GBP + map pack is likely the #1 lead source. (The contact page embeds a Google Maps location for "AL HAYA cleaning services", so a listing may exist — confirm ownership/optimization.)
- **Actions:** Claim/optimize GBP (categories, services, photos, posts, Q&A, review velocity); add consistent NAP + map + 2–3 local reviews to each city page; build UAE local citations.

---

## 15. Schema Gap
- ✅ Strong base. 🟠 Add **FAQPage** to each service page. 🟠 Consider **Review/aggregateRating only when backed by real, on-page reviews** — the hardcoded `4.9 / 500 reviews` with no visible reviews is a **self-serving rating risk** (Google may ignore it or flag it). Either surface real reviews on-page or remove the rating.
- 🟢 BreadcrumbList, Organization, Service, LocalBusiness all valid.

---

## 16. AEO / GEO Visibility Gap
- ✅ SSR HTML + visible FAQ + entity schema = AI-crawlable and a good start.
- 🟠 Add **direct answer blocks** (1–2 sentence answers under H2 questions), **cost ranges**, **comparison tables**, and **step-by-step process** sections on service pages.
- 🟠 Strengthen the **entity**: consistent NAP, founding date (2015 is in schema ✅), license/insurance, named team — so answer engines can trust and cite the brand.
- 🟠 Reputation signals (third-party mentions, directory listings, reviews) increase citation probability. *No guarantee of AI citation — this raises probability.*

---

## 17. Backlink / Authority Gap
**Not verified** (no backlink data). For a newly migrated domain, assume low authority. Priority link types (no spam, no bulk packages):
1. UAE local directories & citations (NAP-consistent).
2. Niche/partner links (real-estate agencies, property managers, building communities).
3. Local PR / community sponsorships.
4. A few careful branded/partial-anchor guest articles → money pages.

> Recommended check: run an Apify Ahrefs/Moz-style actor or provide an Ahrefs/Semrush export to verify referring domains before any link spend.

---

## 18. Conversion SEO Gap
- 🔴 **WhatsApp number bug (CV1)** — see §19/§20. Fixing this likely recovers the majority of currently-lost chat leads.
- 🟢 Sticky WhatsApp button, tel: links, and contact form all present.
- 🟠 Add per-page trust proof near CTAs (reviews, license, "5000+ families" with substantiation) and UTM tags on call/WhatsApp links for attribution.

---

## 19. 30-Day Fix Plan (Must Fix Now)

| Priority | Task | Where | Effort |
|---|---|---|---|
| 1 🔴 | **Fix WhatsApp number** → set Vercel env `NEXT_PUBLIC_WHATSAPP_NUMBER=+971563129254` and redeploy. Verify live `wa.me` links. | Vercel env vars | 5 min |
| 2 🔴 | **Resolve www/non-www:** make www redirect **301**; set `SITE_URL=https://www.villadeepcleaning.com`; regenerate sitemap. | Vercel + env + next-sitemap | 30 min |
| 3 🟠 | Move location-page `{description}` out of `<h2>` into `<p>`; add a proper H2. | `locations/[emirate]/page.tsx`, `[city]/page.tsx` | 30 min |
| 4 🟠 | Decide on `aggregateRating`: surface real reviews on-page OR remove the hardcoded 4.9/500. | `lib/schema.ts` + UI | 1–2 hr |
| 5 🟢 | Connect/verify **Google Search Console** + submit corrected sitemap. | GSC | 30 min |
| 6 🟢 | Claim/optimize **Google Business Profile**. | GBP | 1–2 hr |

---

## 20. 60-Day Growth Plan
- Rewrite the **33 location pages** with unique local content (neighborhoods, property types, local FAQ, 1–2 local reviews, NAP + map). Target ~250–400 unique words each.
- Add **service-specific FAQ (visible + schema)** to all 11 service pages.
- Add **per-city geo** (or remove geo on non-Dubai pages).
- Launch a **blog cluster** (8–12 articles): cost guides, checklists, "how often", move-out guides → internal-link to money pages.
- Start **local citations + reviews** drive (consistent NAP; steady review velocity on GBP).

---

## 21. 90-Day Ranking Plan
- Build **topical authority**: complete the service + support-article cluster with strong internal linking.
- Earn **5–10 relevant referring domains** (local directories, partners, PR) — quality over quantity.
- Add **comparison/answer content** for AEO/GEO; pursue map-pack visibility via GBP optimization + reviews.
- Re-measure rankings in GSC; double down on pages sitting in positions 4–20.

---

## 22. Expected Query / Lead Growth Model (illustrative, not a guarantee)
Leads/month ≈ (organic sessions × CVR) + (GBP calls/chats) + recovered WhatsApp conversions.
- **Immediate:** fixing the WhatsApp number recovers chat leads that are currently misrouted (highest ROI, day 1).
- **60–90 days:** differentiated location pages + GBP + reviews + a few links → realistic gains on **long-tail and local-intent** terms.
- **Head terms** ("cleaning services dubai") are aggregator-dominated; expect slow progress and lean on GBP/map pack + long-tail instead.
> No ranking or traffic numbers are promised — actual volume depends on GSC baselines (not available) and execution.

---

## 23. Exact Next Actions (in order)
1. Vercel → set `NEXT_PUBLIC_WHATSAPP_NUMBER=+971563129254` → redeploy → verify `wa.me` links. **(today)**
2. Vercel domains → make `www` the primary with **301**; set `SITE_URL=https://www.villadeepcleaning.com`; rebuild sitemap. **(today)**
3. Patch location templates: `{description}` → `<p>`; add real H2. **(this week)**
4. Decide reviews vs. remove `aggregateRating`. **(this week)**
5. Verify GSC + GBP; submit sitemap. **(this week)**
6. Begin location-page rewrites + service FAQs. **(weeks 2–8)**

---

## 24. Data Not Available / Needed Next
To move from *Directional* to *Confirmed* and build an accurate plan, provide:
- **Google Search Console** access/export (rankings, impressions, indexed pages) — most important.
- **GA4** export (traffic, conversions).
- **Google Business Profile** access (local performance).
- **Backlink data** (Ahrefs/Semrush/Moz export, or run an Apify authority actor).
- **PageSpeed/CrUX** for Core Web Vitals confirmation.

---

### Confidence legend
Confirmed = verified from code/live checks · Directional = single live sample · Not verified = no data source available.

*No rankings, traffic, search volume, backlink, or review numbers were invented. Unknowns are labeled and assigned a recommended verification source.*
