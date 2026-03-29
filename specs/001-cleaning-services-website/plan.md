# Implementation Plan: Al Haya Cleaning Services Website

**Branch**: `001-cleaning-services-website` | **Date**: 2026-03-28 | **Spec**: [spec.md](./spec.md)
**Input**: Feature specification from `/specs/001-cleaning-services-website/spec.md`

## Summary

Build a full marketing website for Al Haya Cleaning Services using
Next.js App Router with TypeScript. The site includes a homepage,
8 service detail pages, 7 emirate location pages with sub-city pages,
an About page, and a Contact page. Key features: dark/light theme
toggle, floating WhatsApp CTA, contact form with server-side
processing, JSON-LD structured data, and full SEO optimization
targeting the UAE market. Mobile-first responsive design with
luxurious gold-accent branding. All pages must achieve Lighthouse
scores of 90+ across Performance, SEO, Accessibility, and Best
Practices.

## Technical Context

**Language/Version**: TypeScript 5.x (strict mode)
**Primary Dependencies**: Next.js 14+ (App Router), React 18+, Tailwind CSS 3.x
**Storage**: File-based content (TypeScript data files for services, locations, testimonials); no database required for MVP
**Testing**: Playwright (E2E), Vitest (unit), Lighthouse CI (performance/SEO/a11y)
**Target Platform**: Web — Vercel deployment (Node.js 18+ runtime)
**Project Type**: Web application (single Next.js project)
**Performance Goals**: Lighthouse 90+ all categories; LCP < 2.5s; FID < 100ms; CLS < 0.1
**Constraints**: Sub-3s initial load on 4G; responsive 320px–2560px; WCAG 2.1 AA; SSR/SSG only (no client-only rendering for public content)
**Scale/Scope**: ~30+ public pages (1 home + 8 services + 7 emirates + ~25 sub-cities + about + contact + 404); single developer

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

| # | Principle | Status | Notes |
|---|-----------|--------|-------|
| I | Mobile-First Responsive Design | ✅ PASS | Tailwind CSS with mobile-first utilities; CSS custom properties for theme tokens; responsive from 320px |
| II | SEO Excellence | ✅ PASS | Next.js `metadata` API for per-page meta; JSON-LD via components; SSR/SSG for all public routes; sitemap.xml via next-sitemap |
| III | Performance First | ✅ PASS | `next/image` for WebP/AVIF; code-split per route by default in App Router; async third-party scripts |
| IV | Luxurious Design Language | ✅ PASS | Gold accent via Tailwind theme extension; max 2 font families; `prefers-reduced-motion` respected in animation utilities |
| V | Accessibility & Semantic Markup | ✅ PASS | Semantic HTML structure; ARIA where needed; keyboard nav; contrast checked via Lighthouse a11y |
| VI | Clean Next.js Architecture | ✅ PASS | App Router with route segments matching URL; `components/` for shared UI; env vars for WhatsApp number and API keys |

**Gate Result**: ALL PASS — proceed to Phase 0.

## Project Structure

### Documentation (this feature)

```text
specs/001-cleaning-services-website/
├── plan.md              # This file
├── research.md          # Phase 0 output
├── data-model.md        # Phase 1 output
├── quickstart.md        # Phase 1 output
├── contracts/           # Phase 1 output
│   └── api-contracts.md
└── tasks.md             # Phase 2 output (/sp.tasks)
```

### Source Code (repository root)

```text
src/
├── app/
│   ├── layout.tsx               # Root layout (fonts, theme provider, header, footer, WhatsApp)
│   ├── page.tsx                 # Homepage
│   ├── not-found.tsx            # Custom 404
│   ├── services/
│   │   └── [slug]/
│   │       └── page.tsx         # Service detail page (8 services)
│   ├── locations/
│   │   ├── [emirate]/
│   │   │   ├── page.tsx         # Emirate page
│   │   │   └── [city]/
│   │   │       └── page.tsx     # Sub-city page
│   ├── about/
│   │   └── page.tsx             # About Us page
│   ├── contact/
│   │   └── page.tsx             # Contact page with form
│   ├── api/
│   │   └── contact/
│   │       └── route.ts         # Contact form server endpoint
│   └── sitemap.ts               # Dynamic sitemap generation
├── components/
│   ├── ui/                      # Reusable UI primitives (Button, Card, etc.)
│   ├── layout/                  # Header, Footer, MobileNav, WhatsAppButton
│   ├── home/                    # Hero, ServiceGrid, LocationGrid, Testimonials
│   ├── services/                # ServiceDetail, ServiceCard, BenefitsList
│   ├── locations/               # EmirateCard, CityCard, LocationBreadcrumb
│   ├── contact/                 # ContactForm, FormField, SuccessMessage
│   ├── seo/                     # JsonLd, BreadcrumbSchema
│   └── theme/                   # ThemeProvider, ThemeToggle
├── data/
│   ├── services.ts              # Service definitions (name, slug, description, etc.)
│   ├── locations.ts             # Emirates and sub-cities data
│   └── testimonials.ts          # Customer reviews
├── lib/
│   ├── metadata.ts              # SEO metadata helpers
│   ├── schema.ts                # JSON-LD schema generators
│   └── validators.ts            # Contact form validation
├── styles/
│   └── globals.css              # Tailwind base + CSS custom properties for themes
└── types/
    └── index.ts                 # Shared TypeScript interfaces

public/
├── images/                      # Optimized hero, service, location images
├── robots.txt                   # Search engine directives
└── favicon.ico

next.config.ts
tailwind.config.ts
tsconfig.json
package.json
.env.local                       # WhatsApp number, email config (not committed)
.env.example                     # Template for env vars
```

**Structure Decision**: Single Next.js project using App Router. This is a
content-focused marketing site with one API endpoint (contact form). No
backend/frontend split is needed — Next.js handles both SSR pages and the
API route. Content is stored as TypeScript data files rather than a CMS,
keeping the stack simple and the site fully statically optimizable.

## Complexity Tracking

> No Constitution Check violations — no entries needed.
