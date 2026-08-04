# 🎯 SEO / GEO / AEO Master Plan — villadeepcleaning.com
**Business:** Al Haya Cleaning Services (Villa & Apartment Deep Cleaning, Dubai/UAE)
**Goal:** A fully healthy, high-ranking, AI-search-ready website that generates real leads (calls, WhatsApp, bookings).
**Method:** Work phase-by-phase, top to bottom. Finish & verify one phase before starting the next. Nothing skipped.

**Legend:** `[ ]` = to do · `[~]` = in progress · `[x]` = done
**Owner tags:** 🧑‍💻 = code change (we do in repo) · ☁️ = Vercel/dashboard · 🔑 = Google account/GBP/GSC · ✍️ = content writing

---

## 📌 Phase Overview (work in this order)

| Phase | Name | Focus | Status |
|---|---|---|---|
| 0 | Baseline & Access | Measurement, tools, accounts | `[x]` GSC+GA4+GTM+rankings+backlinks baseline done ✅ |
| 1 | Critical Fixes | Stop the bleeding (leads + indexing) | `[x]` ✅ verified live |
| 2 | Technical SEO | Site health hardening | `[x]` done ✅ (CWV 92/100) |
| 3 | On-Page & Content | Unique content, FAQs, internal links | `[x]` done ✅ (30 cities + 11 services + 7 emirates live) |
| 4 | Local SEO | GBP, NAP, reviews, map pack | `[~]` GBP confirmed + map + rating live ✅, optimization ongoing |
| 5 | Content / Topical Authority | Blog cluster, guides | `[x]` blog + 10 articles live ✅ |
| 6 | AEO / GEO | AI search visibility & entity | `[~]` llms.txt + entity live ✅ |
| 7 | Authority / Backlinks | Local links, citations, PR | `[ ]` not started — action sheet ready, client to execute |
| 8 | Conversion (CRO) | Turn traffic into leads | `[x]` tracking + trust + GA4 conversions ✅ |
| 9 | Monitoring & Reporting | Track, iterate, grow | `[~]` GSC↔GA4 linked ✅ |

---

## ✅ PHASE 0 — Baseline & Access *(measure before changing)*
**Objective:** Get accurate "before" data so we can prove improvement and avoid guessing.

- [x] 🔑 **Google Search Console** — `https://www.villadeepcleaning.com` URL-prefix property verified (auto via HTML tag) + sitemap.xml submitted (62 URLs, Success) + indexing requested ✅
- [x] 🔑 **GA4 + GTM (GTM-WRFCQCG7) live** — GA4 property "Villadeep Cleaning" (`G-TN6GSZQ2JP`), data active; GTM has GA4 Config + Call + WhatsApp + Generate-Lead event tags, published v3 ✅
- [ ] 🔑 Locate / claim the **Google Business Profile** ("AL HAYA cleaning services" map listing already exists)
- [ ] ☁️ Record current **Core Web Vitals** (PageSpeed Insights) for home, a service page, a city page
- [x] 🔑 **Capture baseline rankings** for 12 money keywords ✅ *(2026-08-04, via Apify `apify/google-search-scraper`, UAE geo, top ~8-9 organic results per query)* — **villadeepcleaning.com did not appear in the captured organic results for ANY of the 12 keywords**: villa cleaning dubai, villa deep cleaning dubai, villa deep cleaning services dubai, villa cleaning services dubai, deep cleaning services dubai, apartment cleaning dubai, office cleaning dubai, sofa cleaning dubai, carpet cleaning dubai, move out cleaning dubai, cleaning services abu dhabi, cleaning company dubai. Page-1 is dominated by Urban Company, ServiceMarket, JustClean, AllClean Dubai, The Healthy Home, Easy Maid. Matches GSC data (avg position ~38 for these terms). Full raw data: `/tmp/apify_output.json` (not committed — regenerate via Apify if needed).
- [x] 🔑 **Capture backlink baseline** ✅ *(2026-08-04, via GSC → Links)* — **Total external links: 3.** Linking domains: `servedubai.ae` (2 links, our own other site), `magicpin.com` (1 link). Practically zero independent third-party backlink authority — confirms Phase 7 is the right next investment once GBP is fixed.

**Done when:** GSC + GA4 + GBP access confirmed and a one-page "baseline snapshot" is saved. ✅ *Rankings + backlink baseline both captured 2026-08-04 — see above. Only remaining item: locate/claim GBP (client-side, see Phase 4).*

---

## 🔴 PHASE 1 — Critical Fixes *(highest ROI — do first)*
**Objective:** Stop losing leads and fix the issues splitting our ranking power.

- [x] ☁️ **Fix WhatsApp number** — `NEXT_PUBLIC_WHATSAPP_NUMBER=+971563129254` ✅ *verified live (`wa.me/971563129254` ×5)*
- [x] ☁️ **Set `SITE_URL=https://www.villadeepcleaning.com`** ✅ *verified: canonical + sitemap now www*
- [x] ☁️ **www Primary + non-www → www 308 Permanent** ✅ *verified live (308)*
- [x] 🧑‍💻 **robots.txt** sitemap line → www ✅ *deployed & verified live (commit 848b928)*
- [x] ☁️ **Redeploy** ✅ *env changes are live*
- [ ] 🔑 Submit corrected sitemap in GSC; request indexing of key pages *(needs GSC — Phase 0)*
- [x] ✅ Verify: canonical, sitemap URLs, live URL all use **www** ✅

**Note:** `sitemap.xml` is generated natively from `SITE_URL` (the `next-sitemap` package is unused) — no code regeneration needed; changing `SITE_URL` is enough.
**Done when:** WhatsApp links go to the correct number, everything uses www, and the non-www redirect is permanent.

---

## ⚙️ PHASE 2 — Technical SEO Hardening
**Objective:** Make the site technically clean so Google can crawl, index, and trust it.

- [x] 🧑‍💻 **Heading fix:** emirate & city pages — `{description}` moved from `<h2>` to `<p>` ✅ *(repo, typecheck passed)*
- [x] 🧑‍💻 **Geo accuracy:** per-emirate coordinates added (`EMIRATE_GEO` map in `lib/schema.ts`) ✅ *(repo, typecheck passed)*
- [x] 🧑‍💻 **aggregateRating:** ✅ Real rating (4.0★ / 12 reviews) added, matching the confirmed GBP ✅ *(2026-08-04, commit 66f3635 — see Phase 4)*
- [x] ☁️ **Core Web Vitals:** ✅ EXCELLENT — official PageSpeed Insights: Performance **92** (mobile + desktop), SEO **100**, Best Practices **100**, Accessibility **96**, CLS 0. No optimization needed. *(An earlier Apify-lab reading of 64 was server-contention noise — confirmed false on pagespeed.web.dev.)*
- [x] 🧑‍💻 **Internal linking audit:** related-services block (service pages) + new "Nearby Areas" block (city pages) confirmed/added ✅ *(2026-08-04, commit fe6e581)*
- [x] 🧑‍💻 **Image alt audit:** no empty `alt=""` found across `src` ✅ *(verified 2026-08-04)*
- [x] 🧑‍💻 Remove unused global `keywords` meta ✅ *(2026-08-04, commit 1bac2b3)*
- [x] ✅ Validate schema in Google Rich Results Test ✅ *(2026-08-04 — homepage, service page, blog post all tested: zero errors, only expected non-critical "missing aggregateRating" notes since no fake rating is used by design. FAQPage/Service don't appear as separate categories — Google retired generic-site FAQ rich results in 2023, this is expected, not a bug.)*

**Done when:** Rich Results Test passes clean, headings are correct, and no thin/technical errors remain.

---

## 📝 PHASE 3 — On-Page & Content Depth
**Objective:** Kill the near-duplicate problem and make every page uniquely valuable.

- [x] ✍️🧑‍💻 **Rewrite all 30 location pages** with unique local content (intro + 2-3 sections + property-type chips + 4-5 local FAQs, visible + `FAQPage` schema) ✅ *deployed (commits 16ed8d1, 682f90c) — ~350-450 unique words/page*
- [x] ✍️🧑‍💻 **Add service-specific FAQ** (visible + `FAQPage` schema) to all 11 service pages ✅ *deployed (commit a5bc3ea) — 4 tailored FAQs each; service hero h2→p fixed too*
- [x] ✍️🧑‍💻 **Enrich emirate hub pages** with unique emirate-level content ✅ *(2026-08-04, commit 74b0746 — all 7 emirates: intro + 2 sections + 4 FAQs, visible + FAQPage schema)*
- [ ] 🧑‍💻 Add **NAP + map embed + 1–2 local reviews** to each city page (supports Phase 4) — blocked until real GBP is confirmed/renamed (see Phase 4)
- [x] ✍️ Trim home meta description to ≤ 158 chars; review all titles/metas for uniqueness ✅ *(2026-08-04 — home desc already 153 chars; service/emirate/city titles were 75-89 chars, fixed via `buildTitle()` helper to stay ≤60, commit fe6e581)*
- [x] 🧑‍💻 Add **"related services" + "nearby areas"** internal link blocks ✅ *(related-services already existed; nearby-areas added 2026-08-04, commit fe6e581)*

**Done when:** Every location & service page has unique content, its own FAQ, and strong internal links.

---

## 📍 PHASE 4 — Local SEO *(biggest lead opportunity)*
**Objective:** Win the Google Maps pack and local "near me" searches — the #1 lead source for cleaning.

> 🔎 **Audit findings to act on here (updated 2026-08-04):**
> - ✅ **Official phone = `+971 56 312 9254`** (website number). All NAP must use this.
> - ✅ **Confirmed 2026-08-04 via live Google Maps lookup** (`google.com/maps?cid=4238858076274093430`): this GBP's **website field = villadeepcleaning.com** and **phone = +971 56 312 9254** — genuinely this business's listing. Display name is "Servedubai", category is "Corporate office" (both could be tidied up later but are not blocking). **Real rating: 4.0★ / 12 reviews.**
> - 🎯 **Client decision (2026-08-04):** keep using this GBP as-is rather than creating a new one or renaming it for now. Map embed restored + real rating (4.0/12) added to schema.

- [x] 🔑 **Use the existing GBP as-is** ✅ *(client decision 2026-08-04 — website/phone already match, no rename/new-GBP needed for now)*
- [x] 🧑‍💻 **Map embed live** on homepage + contact page ✅ *(commit 66f3635)*
- [x] 🧑‍💻 **Real `aggregateRating` added** to LocalBusiness schema — 4.0★ / 12 reviews, matches live GBP ✅ *(commit 66f3635)*
- [x] 🧑‍💻 **Removed placeholder `4.9/500`** from schema ✅ — real GBP rating is 3.9/11; rating kept OFF for now (client decision), add a real one when reviews improve
- [ ] 🔑 **Optimize Google Business Profile:** correct categories, all services, service areas, hours, 20+ photos
- [ ] 🔑 Add GBP **posts, products/services, and Q&A**
- [ ] 🔑 Set up a **review generation flow** (WhatsApp/QR after each job) + reply to all reviews
- [ ] 🧑‍💻 Ensure **NAP consistency** — name + address + phone `+971 56 312 9254` identical across site, new GBP, and all listings
- [ ] 🔑 Build **UAE local citations** (directories: Yellow Pages UAE, Yalla, Connect.ae, etc.)
- [ ] 🔑 Track **map pack rankings** for "cleaning services [area]" terms

**Done when:** GBP is fully optimized, reviews are growing weekly, and NAP is identical everywhere.

---

## 📚 PHASE 5 — Content / Topical Authority
**Objective:** Capture top-of-funnel searches and build authority that lifts money pages.

- [x] 🧑‍💻 Add a **/blog** section — index + `/blog/[slug]` with BlogPosting + Breadcrumb + FAQPage schema, in sitemap + header nav ✅ *(commit 64c1e8a)*
- [x] ✍️ First **3 cornerstone articles** published: deep cleaning cost guide, move-out checklist, deep-clean frequency ✅
- [x] 🧑‍💻 Internal-link every article to relevant **money pages** (Related Services) ✅
- [x] ✍️ Scaled to **10 articles** total ✅ *(commit b8aa156)* — premium blog UI redesign approved & live *(commit eb0a4d5)*
- [ ] ✍️ Optional: ongoing posts + keyword-to-page map / content calendar (publish 1–2/month)

**Done when:** A live blog with 8–12 quality articles is interlinked to service/location pages.

---

## 🤖 PHASE 6 — AEO / GEO (AI Search Visibility)
**Objective:** Get understood, trusted, and cited by ChatGPT, Gemini, Perplexity & Google AI Overviews.

- [x] ✍️🧑‍💻 **Direct answer blocks** — service + location FAQs (visible + FAQPage) act as answer blocks ✅ *(Phase 3)*
- [x] 🧑‍💻 Strengthen the **brand entity** — Organization schema now has `contactPoint` + `knowsAbout` (11 services), plus new `WebSite` schema; founding date 2015 ✅ *(commit b23ba97)*
- [x] 🧑‍💻 **/public/llms.txt** for AI crawlers (ChatGPT/Perplexity/Gemini) ✅ *deployed*
- [ ] 🧑‍💻 Add **cost ranges / comparison tables / step-by-step process** sections on service pages (deeper AEO — optional next)
- [ ] ✍️ Build a **reputation/proof stack** (third-party mentions, verifiable claims) — ties to Phase 7
- [x] ✅ AI-readability: key pages render full content in raw HTML (SSR) ✅

**Done when:** Pages answer specific questions clearly, entity is consistent, and llms.txt is live.

---

## 🔗 PHASE 7 — Authority / Backlinks *(quality over quantity)*
**Objective:** Earn relevant local authority — no spam, no bulk packages.

- [ ] 🔑 Run a **backlink audit + competitor link gap** (Apify/Ahrefs)
- [ ] 🔑 Get listed on **UAE local & niche directories** (NAP-consistent)
- [ ] 🔑 Pursue **partner links** (real-estate agencies, property managers, building communities)
- [ ] ✍️ Place **2–3 genuine guest articles** on relevant UAE sites (branded/partial anchors → money pages)
- [ ] 🔑 Explore **local PR / community sponsorship** opportunities
- [ ] ✅ Monitor for and disavow any toxic links

**Done when:** 5–10 quality, relevant referring domains acquired and tracked.

---

## 💰 PHASE 8 — Conversion (CRO)
**Objective:** Make sure traffic actually turns into calls, messages, and bookings.

- [x] 🧑‍💻 **Click tracking** — site-wide `ConversionTracking` pushes `whatsapp_click` + `call_click` to GTM dataLayer (one delegated listener, covers every button) ✅ *(commit 8bb0c22)*
- [x] 🧑‍💻 **Lead event** — contact form pushes `generate_lead` on submit ✅
- [x] 🧑‍💻 **Trust proof near CTAs** — `TrustBadges` (Licensed & Insured · 5000+ Homes · Eco-Friendly · Same-Day) on homepage + service CTAs ✅
- [x] 🧑‍💻 **Sticky WhatsApp button** present site-wide (layout) ✅
- [x] 🔑 **GTM → GA4 mapping done** — GA4 Event tags for Call + WhatsApp (native Just Links triggers) + `generate_lead` (form) published (v3). All events verified firing in GA4 Realtime ✅
- [x] 🔑 **GA4 Key Events marked:** `call_click` ⭐ + `whatsapp_click` ⭐ + `generate_lead` ⭐ — all 3 conversions live ✅
- [ ] 🧑‍💻 *(Note)* Contact form currently redirects to WhatsApp (good for leads); the `resend` email API route is unused — wire it up later if you also want email copies.

**Done when:** Every lead action is tracked in GA4 and CTAs are trust-backed.

---

## 📊 PHASE 9 — Monitoring & Reporting
**Objective:** Track progress, prove ROI, and keep improving.

- [ ] 🔑 Set up a **monthly report** (rankings, impressions, clicks, leads, GBP calls)
- [ ] 🔑 Watch **positions 4–20** in GSC and double down on near-win pages
- [x] 🧑‍💻 **Legacy URL cleanup:** robots.txt simplified (only /api/, /_next/) so Google can crawl old WordPress URLs (from the previous Hostinger site) and drop them via their 301/404 ✅ *(commit c44ed5a)*
- [ ] 🔑 **Re-validate** GSC "Redirect error" on the non-www property (now a permanent 308) + let legacy 404s drop naturally (2–4 weeks)
- [ ] ✅ Re-run a **full technical audit** every 60–90 days
- [ ] 🔑 Review **review velocity, map pack position, and conversions** monthly
- [ ] ✅ Adjust the plan based on what's actually moving

**Done when:** A repeatable monthly tracking + reporting rhythm is in place.

---

## 🚦 Suggested Working Rhythm
1. **Phase 0 + Phase 1 first** (this week) — measurement + critical fixes = immediate lead recovery.
2. Then **Phase 2 → 3 → 4** (weeks 2–6) — the core ranking engine.
3. Then **Phase 5 → 6 → 7** (weeks 6–10) — authority + AI visibility.
4. **Phase 8** runs alongside; **Phase 9** is ongoing.

> Honest expectation: contact-number fix recovers leads immediately; local & long-tail rankings improve over 60–90 days. No guaranteed overnight #1 rankings — steady, compounding growth.

---

*Master plan created 2026-06-08 · Update statuses as we complete each item · This file is the single source of truth.*
