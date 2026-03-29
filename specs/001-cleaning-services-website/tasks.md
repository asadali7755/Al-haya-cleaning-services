# Tasks: Al Haya Cleaning Services Website

**Input**: Design documents from `/specs/001-cleaning-services-website/`
**Prerequisites**: plan.md (required), spec.md (required), research.md, data-model.md, contracts/api-contracts.md, quickstart.md

**Tests**: Not explicitly requested in spec — test tasks omitted. Add via `/sp.tasks --tdd` if needed.

**Organization**: Tasks grouped by user story to enable independent implementation and testing.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

---

## Phase 1: Setup

**Purpose**: Project initialization and base configuration

- [x] T001 Initialize Next.js 14+ project with TypeScript and App Router in repository root (`npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir`)
- [x] T002 Configure `tsconfig.json` with strict mode and path aliases (`@/` → `src/`)
- [x] T003 [P] Configure `tailwind.config.ts` with custom theme: gold accent color (`#C5A47E`), two font families (Playfair Display + DM Sans), dark mode via `class` strategy, and extended spacing/breakpoints
- [x] T004 [P] Create `src/styles/globals.css` with Tailwind directives, CSS custom properties for light theme tokens (backgrounds, text, borders, surfaces) and dark theme tokens under `[data-theme="dark"]`
- [x] T005 [P] Create `.env.example` with all environment variables: `WHATSAPP_NUMBER`, `CONTACT_EMAIL`, `EMAIL_FROM`, `RESEND_API_KEY`, `SITE_URL`, `NEXT_PUBLIC_GA_ID`
- [x] T006 [P] Create `src/types/index.ts` with TypeScript interfaces: `Service`, `Emirate`, `SubCity`, `ContactSubmission`, `Testimonial`, `SiteMetadata` per data-model.md
- [x] T007 [P] Configure `next.config.ts` with image optimization (WebP/AVIF formats), remote patterns if needed, and security headers
- [x] T008 Install additional dependencies: `resend` (email), `next-sitemap` (sitemap generation), `clsx` (class merging), `lucide-react` (icons)

**Checkpoint**: Project builds with `npm run build`, Tailwind classes render, theme tokens defined.

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before ANY user story can begin

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [x] T009 Create `src/data/services.ts` — define all 8 services (villa cleaning, apartment cleaning, deep cleaning, move-in/move-out cleaning, office cleaning, sofa & carpet cleaning, window cleaning, post-construction cleaning) with name, slug, shortDescription, description, benefits[], image, icon, keywords[], metaTitle, metaDescription per data-model.md
- [x] T010 [P] Create `src/data/locations.ts` — define all 7 Emirates with name, slug, description, image, metaTitle, metaDescription, and nested SubCity[] arrays (3-8 sub-cities per emirate) per data-model.md
- [x] T011 [P] Create `src/data/testimonials.ts` — define 6-8 sample testimonials with customerName, reviewText, rating (1-5), and location per data-model.md
- [x] T012 [P] Create `src/lib/metadata.ts` — helper functions: `generatePageMetadata(title, description, path)` returning Next.js Metadata object with Open Graph, Twitter Card, and canonical URL
- [x] T013 [P] Create `src/lib/schema.ts` — JSON-LD generators: `generateLocalBusinessSchema(location?)`, `generateServiceSchema(service)`, `generateBreadcrumbSchema(items[])` returning valid Schema.org JSON-LD objects
- [x] T014 [P] Create `src/lib/validators.ts` — contact form validation: `validateContactForm(data)` returning `{ valid: boolean, errors: Record<string, string> }` with rules per contracts/api-contracts.md (name 2-100 chars, valid email, valid phone, valid service slug, message 10-1000 chars)
- [x] T015 Create `src/components/theme/ThemeProvider.tsx` — client component wrapping children, reading `localStorage` for saved theme, defaulting to `prefers-color-scheme`, setting `data-theme` attribute on `<html>`. Include inline script in `src/app/layout.tsx` `<head>` to prevent FOUC
- [x] T016 Create `src/components/theme/ThemeToggle.tsx` — client component: sun/moon icon button, toggles `data-theme` on `<html>`, saves to `localStorage`, smooth 300ms transition
- [x] T017 Create `src/components/layout/Header.tsx` — responsive header: logo (left), nav links (Home, Services, Locations, About, Contact), ThemeToggle, mobile hamburger menu with slide-out drawer. Sticky on scroll
- [x] T018 [P] Create `src/components/layout/Footer.tsx` — site footer: logo, quick links (services, locations), contact info (phone, email, WhatsApp), copyright. Responsive grid layout
- [x] T019 [P] Create `src/components/layout/WhatsAppButton.tsx` — floating button (bottom-right, fixed position): WhatsApp icon, links to `https://wa.me/{WHATSAPP_NUMBER}?text={greeting}`, pulse animation, z-index above all content, visible on all pages
- [x] T020 Create `src/app/layout.tsx` — root layout: import fonts (Playfair Display + DM Sans via `next/font/google`), wrap with ThemeProvider, include Header, Footer, WhatsAppButton, anti-FOUC inline script, default metadata via `generatePageMetadata()`
- [x] T021 [P] Create `src/components/seo/JsonLd.tsx` — server component rendering `<script type="application/ld+json">` with passed schema object
- [x] T022 [P] Create `src/components/ui/Button.tsx` — reusable button: variants (primary with gold accent, secondary, outline, ghost), sizes (sm, md, lg), renders as `<button>` or `<a>` via `asChild` prop, focus-visible ring for keyboard nav
- [x] T023 [P] Create `src/components/ui/Card.tsx` — reusable card: themed surface background, rounded corners, hover elevation, responsive padding
- [x] T024 [P] Create `src/components/ui/SectionHeading.tsx` — reusable section heading: h2 with decorative gold underline, optional subtitle, centered by default

**Checkpoint**: Foundation ready — `npm run build` passes, layout renders with header/footer/WhatsApp/theme toggle on all pages, data files importable, utility functions tested manually.

---

## Phase 3: User Story 1 — Browse Services & Request a Quote (Priority: P1) 🎯 MVP

**Goal**: Visitor lands on homepage, browses services, and contacts via form or WhatsApp

**Independent Test**: Navigate homepage → click service card → view service page → submit contact form OR tap WhatsApp button

### Implementation for User Story 1

- [x] T025 [US1] Create `src/components/home/Hero.tsx` — full-width hero section: background image with dark overlay, headline ("Premium Cleaning Services in UAE"), subheadline, primary CTA button ("Get a Free Quote" linking to `/contact`), secondary CTA ("Our Services" linking to services section). Responsive: full-viewport on desktop, appropriate height on mobile
- [x] T026 [P] [US1] Create `src/components/home/ServiceGrid.tsx` — grid of 8 service cards using data from `src/data/services.ts`: service icon, name, shortDescription, link to `/services/{slug}`. Responsive: 1 col mobile, 2 col tablet, 4 col desktop. Gold hover accent
- [x] T027 [P] [US1] Create `src/components/home/Testimonials.tsx` — testimonial carousel/grid using data from `src/data/testimonials.ts`: customer name, review text, star rating, location. Responsive: 1 col mobile, 3 col desktop
- [x] T028 [P] [US1] Create `src/components/home/CTASection.tsx` — call-to-action banner: compelling headline, description, two buttons (Contact Form + WhatsApp). Gold accent background, high contrast text
- [x] T029 [US1] Create `src/app/page.tsx` — homepage assembling: Hero, ServiceGrid, LocationGrid (placeholder for US2), Testimonials, CTASection. Add page-specific metadata via `generatePageMetadata()`. Add LocalBusiness JSON-LD via `JsonLd` component
- [x] T030 [US1] Create `src/components/services/ServiceDetail.tsx` — service detail layout: hero image, service name (h1), full description, benefits list with checkmark icons, CTA section (contact form link + WhatsApp). Breadcrumb navigation (Home > Services > {name})
- [x] T031 [US1] Create `src/app/services/[slug]/page.tsx` — dynamic service page: `generateStaticParams()` from services data, load service by slug, render ServiceDetail, add per-service metadata, add Service JSON-LD + BreadcrumbList JSON-LD. Return `notFound()` for invalid slugs
- [x] T032 [US1] Create `src/components/contact/ContactForm.tsx` — client component: form fields (name, email, phone, service dropdown populated from services data, message textarea), client-side validation using `validateContactForm()`, submit via `fetch('/api/contact')`, show inline errors, show success message on 200, show error with WhatsApp fallback on failure. Accessible: labels, aria-describedby for errors, focus management
- [x] T033 [US1] Create `src/app/api/contact/route.ts` — POST handler: parse JSON body, validate with `validateContactForm()`, send email via Resend (to `CONTACT_EMAIL`, from `EMAIL_FROM`), return JSON responses per contracts/api-contracts.md (200 success, 400 validation errors, 500 server error). Rate limit: 5 per IP per 15 min (in-memory Map)
- [x] T034 [US1] Create `src/app/contact/page.tsx` — contact page: heading, description, ContactForm component, alternative contact info (WhatsApp, phone, email), page-specific metadata, LocalBusiness JSON-LD

**Checkpoint**: Full MVP flow works — homepage → service pages → contact form submission → email notification. WhatsApp button works on all pages. All pages have meta tags and JSON-LD.

---

## Phase 4: User Story 2 — Find Services by Location (Priority: P2)

**Goal**: Visitor discovers services available in their specific emirate and sub-city

**Independent Test**: Homepage locations section → emirate page → sub-city page → all have localized content and CTAs

### Implementation for User Story 2

- [x] T035 [P] [US2] Create `src/components/home/LocationGrid.tsx` — grid of 7 Emirates using data from `src/data/locations.ts`: emirate name, image, link to `/locations/{slug}`. Responsive: 2 col mobile, 3-4 col desktop. Gold accent on hover
- [x] T036 [US2] Update `src/app/page.tsx` — replace LocationGrid placeholder with actual LocationGrid component between ServiceGrid and Testimonials sections
- [x] T037 [US2] Create `src/components/locations/EmirateCard.tsx` — card for emirate listing: image, name, number of areas served, link. Used in LocationGrid
- [x] T038 [P] [US2] Create `src/components/locations/CityCard.tsx` — card for sub-city listing: name, brief description, link to `/locations/{emirate}/{city}`
- [x] T039 [P] [US2] Create `src/components/locations/LocationBreadcrumb.tsx` — breadcrumb: Home > Locations > {Emirate} > {City}. Uses BreadcrumbList JSON-LD
- [x] T040 [US2] Create `src/app/locations/[emirate]/page.tsx` — emirate page: `generateStaticParams()` from locations data, heading (h1: "Cleaning Services in {Emirate}"), emirate description, grid of sub-city cards (CityCard), list of available services with links, CTA section. Per-emirate metadata, LocalBusiness JSON-LD with location, BreadcrumbList JSON-LD. Return `notFound()` for invalid emirates
- [x] T041 [US2] Create `src/app/locations/[emirate]/[city]/page.tsx` — sub-city page: `generateStaticParams()` from nested locations data, heading (h1: "Cleaning Services in {City}, {Emirate}"), localized description, available services grid, CTA (contact + WhatsApp). Per-city metadata, LocalBusiness JSON-LD with city-level location, BreadcrumbList JSON-LD. Return `notFound()` for invalid cities

**Checkpoint**: All 7 emirate pages and ~25 sub-city pages render with localized content, unique meta tags, and JSON-LD. Homepage locations section links correctly.

---

## Phase 5: User Story 3 — Dark & Light Theme Toggle (Priority: P3)

**Goal**: Theme switching works smoothly across all pages with persistence

**Independent Test**: Toggle theme on any page → verify all components render correctly → navigate to another page → theme persists

### Implementation for User Story 3

- [x] T042 [US3] Verify and refine theme CSS variables in `src/styles/globals.css` — ensure all component surfaces, text colors, borders, shadows, and card backgrounds have both light and dark tokens. Add smooth `transition: background-color 300ms, color 300ms` on `body` and key elements
- [x] T043 [US3] Audit all components for theme compatibility — verify every component (Header, Footer, Hero, ServiceGrid, LocationGrid, Testimonials, CTASection, ContactForm, ServiceDetail, all Cards) renders correctly in both themes. Fix any contrast or visibility issues. Ensure gold accent works in both modes
- [x] T044 [US3] Add `prefers-reduced-motion` media query to `src/styles/globals.css` — disable theme transition animations and any decorative animations when user prefers reduced motion (Constitution Principle IV, FR-020)

**Checkpoint**: Toggle theme on homepage → navigate to service page → navigate to contact page — theme persists, all elements visible, contrast passes in both modes.

---

## Phase 6: User Story 4 — Learn About Al Haya (Priority: P4)

**Goal**: About page builds trust with company story and social proof

**Independent Test**: Navigate to About page → verify company info, testimonials, and CTAs render

### Implementation for User Story 4

- [x] T045 [US4] Create `src/app/about/page.tsx` — About page: hero section with company tagline, company story section (mission, values, years of experience), team/expertise highlights, testimonials reuse (Testimonials component from US1), CTA section linking to contact and services. Page-specific metadata, LocalBusiness JSON-LD

**Checkpoint**: About page renders with company story, social proof, and working CTAs.

---

## Phase 7: User Story 5 — SEO Infrastructure (Priority: P5)

**Goal**: All pages optimized for search engines with structured data and sitemap

**Independent Test**: Audit any page for meta tags, JSON-LD, sitemap presence; Lighthouse SEO >= 90

### Implementation for User Story 5

- [x] T046 [US5] Create `src/app/sitemap.ts` — dynamic sitemap using Next.js `MetadataRoute.Sitemap`: list all pages (homepage, 8 services, 7 emirates, ~25 sub-cities, about, contact) with lastModified dates and priority values
- [x] T047 [P] [US5] Create `public/robots.txt` — allow all crawlers, disallow `/api/`, reference sitemap URL (`{SITE_URL}/sitemap.xml`)
- [x] T048 [US5] Create `src/app/not-found.tsx` — custom 404 page: friendly message, illustration/icon, links to homepage and popular services (top 4), search suggestion. Themed for dark/light. Page metadata with noindex
- [x] T049 [US5] Audit and finalize all page metadata — verify every page (home, 8 services, 7 emirates, ~25 sub-cities, about, contact) has unique metaTitle (<60 chars), metaDescription (<160 chars), Open Graph image, canonical URL. Update any missing or duplicate metadata in data files
- [x] T050 [US5] Validate all JSON-LD structured data — test LocalBusiness schema on homepage, Service schema on service pages, LocalBusiness with location on emirate/city pages, BreadcrumbList on all inner pages. Ensure valid against Schema.org specs

**Checkpoint**: `/sitemap.xml` returns valid sitemap, `/robots.txt` is correct, 404 page works, all pages have unique meta, JSON-LD validates, Lighthouse SEO >= 90.

---

## Phase 8: Polish & Cross-Cutting Concerns

**Purpose**: Final refinements affecting multiple user stories

- [x] T051 [P] Add hover and interaction animations across all components — subtle scale on cards, smooth button transitions, fade-in on scroll for sections. All animations respect `prefers-reduced-motion`
- [x] T052 [P] Optimize all images in `public/images/` — add hero images, service images, location images, ensure all are WebP format, create appropriate sizes for srcset, add blur placeholder data URLs
- [x] T053 Accessibility audit on all pages — verify keyboard navigation (tab order, focus indicators), screen reader flow (heading hierarchy, landmarks, alt text), color contrast (WCAG 2.1 AA) in both themes. Fix any violations
- [x] T054 [P] Add `next-sitemap` configuration in `next-sitemap.config.js` for post-build sitemap generation as a fallback/supplement to the dynamic sitemap
- [x] T055 Performance optimization — run Lighthouse on all page types, optimize any route with score < 90: check bundle size, image loading, font loading, third-party scripts. Ensure LCP < 2.5s, FID < 100ms, CLS < 0.1
- [x] T056 Cross-browser testing — verify all pages on Chrome, Safari, Firefox, Edge (latest 2 versions), iOS Safari, Chrome Android at breakpoints 320px, 375px, 768px, 1024px, 1440px. Document and fix any rendering issues
- [x] T057 Final content review — proofread all user-visible text across every page for spelling, grammar, keyword alignment. Verify all CTAs link correctly, WhatsApp number is correct, contact form delivers emails
- [x] T058 Run `quickstart.md` validation — follow quickstart.md end-to-end on a clean checkout to verify setup instructions work. Fix any discrepancies

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies — start immediately
- **Foundational (Phase 2)**: Depends on Setup completion — BLOCKS all user stories
- **US1 (Phase 3)**: Depends on Foundational — MVP flow
- **US2 (Phase 4)**: Depends on Foundational — can parallel with US1 but integrates into homepage
- **US3 (Phase 5)**: Depends on US1 + US2 (needs components to audit for theme compatibility)
- **US4 (Phase 6)**: Depends on Foundational — can parallel with US1/US2
- **US5 (Phase 7)**: Depends on US1 + US2 + US4 (needs all pages to exist for sitemap and meta audit)
- **Polish (Phase 8)**: Depends on all user stories complete

### User Story Dependencies

- **US1 (P1)**: After Foundational — core conversion funnel, no story dependencies
- **US2 (P2)**: After Foundational — adds LocationGrid to homepage (minor US1 integration at T036)
- **US3 (P3)**: After US1 + US2 — needs all components rendered to audit themes
- **US4 (P4)**: After Foundational — standalone About page, reuses Testimonials from US1
- **US5 (P5)**: After US1 + US2 + US4 — needs all pages for sitemap and meta audit

### Within Each User Story

- Models/data before components
- Components before pages
- Pages before integration
- Story complete before moving to next priority

### Parallel Opportunities

- T003, T004, T005, T006, T007 can all run in parallel (Setup phase)
- T009, T010, T011 can run in parallel (data files)
- T012, T013, T014 can run in parallel (utility libs)
- T015-T024: T018, T019, T021, T022, T023, T024 can run in parallel (independent components)
- T025-T028 in US1: T026, T027, T028 can run in parallel (homepage sections)
- T035, T037, T038, T039 in US2 can run in parallel
- T046, T047 in US5 can run in parallel
- T051, T052, T054 in Polish can run in parallel

---

## Parallel Example: Phase 2 Foundation

```bash
# Data files (all independent):
Task: T009 "Create src/data/services.ts"
Task: T010 "Create src/data/locations.ts"
Task: T011 "Create src/data/testimonials.ts"

# Utility libraries (all independent):
Task: T012 "Create src/lib/metadata.ts"
Task: T013 "Create src/lib/schema.ts"
Task: T014 "Create src/lib/validators.ts"

# Independent UI components:
Task: T018 "Create src/components/layout/Footer.tsx"
Task: T019 "Create src/components/layout/WhatsAppButton.tsx"
Task: T021 "Create src/components/seo/JsonLd.tsx"
Task: T022 "Create src/components/ui/Button.tsx"
Task: T023 "Create src/components/ui/Card.tsx"
Task: T024 "Create src/components/ui/SectionHeading.tsx"
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational (CRITICAL — blocks all stories)
3. Complete Phase 3: User Story 1 (Browse Services & Request a Quote)
4. **STOP and VALIDATE**: Test full conversion funnel independently
5. Deploy to Vercel for preview

### Incremental Delivery

1. Setup + Foundational → Foundation ready
2. Add US1 (Services + Contact) → Test → Deploy (MVP!)
3. Add US2 (Locations) → Test → Deploy
4. Add US4 (About) → Test → Deploy (can parallel with US2)
5. Add US3 (Theme audit) → Test → Deploy
6. Add US5 (SEO finalization) → Test → Deploy
7. Polish phase → Final deploy

---

## Notes

- [P] tasks = different files, no dependencies
- [Story] label maps task to specific user story for traceability
- Each user story should be independently completable and testable
- Commit after each task or logical group
- Stop at any checkpoint to validate story independently
- Avoid: vague tasks, same file conflicts, cross-story dependencies that break independence
