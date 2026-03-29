# Research: Al Haya Cleaning Services Website

**Phase**: 0 — Research | **Date**: 2026-03-28

## Decision Log

### 1. Framework & Rendering Strategy

**Decision**: Next.js 14+ with App Router, React Server Components (RSC) by default
**Rationale**: App Router provides built-in SSR/SSG, file-based routing matching
our URL structure, built-in metadata API for SEO, and Server Components for
zero-JS page shells. Constitution Principle II (SEO Excellence) requires
SSR/SSG — App Router makes this the default, not an opt-in.
**Alternatives considered**:
- Pages Router: Mature but lacks RSC, streaming, and the new metadata API.
  Would require additional boilerplate for per-page SEO.
- Astro: Great for static sites but weaker ecosystem for interactive components
  (theme toggle, form validation). Would require separate solutions for API routes.
- Gatsby: GraphQL data layer is overkill for file-based content. Build times
  scale poorly with 30+ pages.

### 2. Styling Approach

**Decision**: Tailwind CSS 3.x with CSS custom properties for theme tokens
**Rationale**: Tailwind's utility-first approach enables rapid mobile-first
development (Constitution Principle I). CSS custom properties allow theme
switching without re-rendering the component tree — a `data-theme` attribute
on `<html>` swaps all color tokens instantly. Gold accent color defined as
a Tailwind theme extension.
**Alternatives considered**:
- CSS Modules: Good isolation but verbose for responsive design; no built-in
  design system utilities.
- Styled Components: Runtime CSS-in-JS conflicts with RSC (Server Components
  can't use `useState`/context required by styled-components).
- Chakra UI: Opinionated component library would conflict with the luxurious
  custom design direction (Constitution Principle IV).

### 3. Content Storage

**Decision**: TypeScript data files (`src/data/*.ts`) with typed interfaces
**Rationale**: For ~8 services, ~7 emirates, and ~25 sub-cities, a full CMS
or database is unnecessary complexity. TS data files are type-safe, version-
controlled, co-located with code, and enable full static generation. Content
changes require a code commit and redeploy — acceptable for a business site
that changes infrequently.
**Alternatives considered**:
- Headless CMS (Contentful, Sanity): Adds external dependency, API latency,
  and cost for content that changes rarely. Overkill for MVP.
- Markdown/MDX files: Good for blog content but services/locations have
  structured data (benefits lists, sub-city arrays) better expressed as TS objects.
- Database (PostgreSQL/Supabase): Massive overkill; adds hosting complexity
  and a runtime dependency for static content.

### 4. Contact Form Processing

**Decision**: Next.js Server Action posting to an API route that sends email
via a transactional email service (Resend or Nodemailer with SMTP)
**Rationale**: Server Actions keep form handling within Next.js. Email
forwarding to the business owner is the simplest notification path per spec
assumption. Resend offers a generous free tier (100 emails/day) and a simple
API. Fallback: Nodemailer with any SMTP provider.
**Alternatives considered**:
- Third-party form service (Formspree, Getform): Adds external dependency
  and monthly cost; less control over validation and response formatting.
- Database storage + admin dashboard: Out of scope for MVP per spec assumption
  ("no CRM integration required").

### 5. Theme Implementation

**Decision**: CSS custom properties toggled via `data-theme` attribute on `<html>`,
persisted in `localStorage`, with `prefers-color-scheme` as default
**Rationale**: Pure CSS variable switching avoids re-rendering the React tree.
`localStorage` persists preference across navigations (FR-010). Reading
`prefers-color-scheme` on first visit respects OS preference (US3 acceptance
scenario 3). A small inline script in `<head>` prevents flash of wrong theme
(FOUC).
**Alternatives considered**:
- next-themes library: Viable and would reduce boilerplate, but adds a
  dependency for ~30 lines of custom code. Acceptable to use if preferred.
- React Context only: Would cause hydration mismatch on SSR pages since
  server doesn't know client preference. CSS variables with inline script
  solve this.

### 6. SEO & Structured Data

**Decision**: Next.js `metadata` export per page + custom `<JsonLd>` component
for structured data; `next-sitemap` for sitemap/robots.txt generation
**Rationale**: App Router's `metadata` export is the native way to define
per-page meta tags, Open Graph, and Twitter Cards. A reusable `<JsonLd>`
component renders JSON-LD in `<script type="application/ld+json">` for
LocalBusiness, Service, and BreadcrumbList schemas. `next-sitemap` auto-
generates sitemap.xml from the page tree.
**Alternatives considered**:
- Manual `<Head>` tags: Not available in App Router; `metadata` export is
  the replacement.
- Schema.org via microdata: JSON-LD is Google's preferred format and is
  easier to maintain as a separate component.

### 7. Image Optimization

**Decision**: `next/image` component with local image files in `public/images/`
**Rationale**: `next/image` handles responsive srcset, WebP/AVIF conversion,
lazy loading, and blur placeholder out of the box — directly satisfying
Constitution Principle III (Performance First) and FR-016. Local files avoid
external image CDN dependency.
**Alternatives considered**:
- Cloudinary/Imgix: Adds external dependency and cost for a site with
  ~30-50 static images that rarely change.
- Manual `<img>` with srcset: Requires manual optimization pipeline;
  `next/image` automates this.

### 8. Testing Strategy

**Decision**: Playwright for E2E (user stories), Vitest for unit (validators,
schema generators), Lighthouse CI for performance gates
**Rationale**: Playwright tests the full user journey (navigate → click →
verify) matching our acceptance scenarios. Vitest is fast for unit tests
of pure functions. Lighthouse CI automates the Constitution's quality gates
(90+ scores) in CI/CD.
**Alternatives considered**:
- Cypress: Heavier than Playwright; Playwright has better multi-browser
  support including mobile Safari emulation.
- Jest: Viable for unit tests but Vitest is faster and has native ESM support
  matching Next.js.

### 9. Deployment Platform

**Decision**: Vercel (primary) with any Node.js platform as fallback
**Rationale**: Vercel is the native hosting for Next.js with zero-config
deployment, edge CDN, ISR support, and built-in analytics. Free tier is
sufficient for a marketing site. Constitution lists Vercel as the deployment
target.
**Alternatives considered**:
- Netlify: Good but Next.js support is via adapter with occasional edge
  cases in App Router features.
- Self-hosted (Docker): Adds DevOps overhead for a marketing site with
  no special infrastructure needs.

### 10. Font Strategy

**Decision**: `next/font/google` with two families — a serif display font
for headings (e.g., Playfair Display) and a clean sans-serif for body
(e.g., Inter or DM Sans)
**Rationale**: `next/font` self-hosts fonts, eliminating external requests
to Google Fonts (performance win). Two families maximum per Constitution
Principle IV. Serif display font conveys luxury; sans-serif body ensures
readability.
**Alternatives considered**:
- Google Fonts CDN link: Adds external request, potential layout shift,
  and privacy concerns.
- System fonts only: Would not achieve the premium luxury aesthetic required.
