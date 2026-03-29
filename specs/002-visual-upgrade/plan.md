# Implementation Plan: Visual Upgrade — Premium Branding & Background Images

**Branch**: `002-visual-upgrade` | **Date**: 2026-03-28 | **Spec**: [spec.md](./spec.md)
**Input**: Feature specification from `/specs/002-visual-upgrade/spec.md`

## Summary

Transform the Al Haya Cleaning Services website from a text-heavy design to a visually rich, image-driven premium experience. The upgrade covers: vibrant gold color system, SVG logo, hero background image, background images on all service/city/area cards, WhatsApp number update, and performance optimization — all within the existing Next.js 16 + Tailwind CSS 4 architecture.

## Technical Context

**Language/Version**: TypeScript 6.0 / Next.js 16.2 / React 19.2
**Primary Dependencies**: Tailwind CSS 4.2, Lucide React, clsx
**Storage**: N/A (static site, images in `public/`)
**Testing**: Manual visual review + Lighthouse CI (no unit test framework configured)
**Target Platform**: Web (all modern browsers, mobile/tablet/desktop)
**Project Type**: Web application (Next.js App Router, single-project structure)
**Performance Goals**: Lighthouse 90+, LCP < 2.5s, page load < 3s
**Constraints**: WebP images only, hero max 200KB, cards max 150KB, areas max 100KB
**Scale/Scope**: ~20 pages (home, about, contact, 7 emirate pages, ~30 city pages, 8 service pages)

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

| Principle | Status | Notes |
|-----------|--------|-------|
| I. Visual-First Premium Branding | ✅ PASS | Plan directly implements gold upgrade, logo, hero images, card images |
| II. Performance Budget | ✅ PASS | Image size budgets defined; lazy loading + priority hero; WebP only |
| III. Image Management | ✅ PASS | Every card/hero gets relevant image; naming convention `public/images/<category>/<slug>.webp` |
| IV. Responsive & Accessible Design | ✅ PASS | All changes responsive; overlay ensures WCAG AA contrast |
| V. Content Integrity | ✅ PASS | No content/copy changes; structure/routing/forms/SEO untouched; WhatsApp updated to correct number |
| VI. Smallest Viable Diff | ✅ PASS | Only modifying visual presentation layer; editing existing components, not creating new ones where possible |

**GATE RESULT: PASS** — Proceeding to Phase 0.

## Project Structure

### Documentation (this feature)

```text
specs/002-visual-upgrade/
├── plan.md              # This file
├── research.md          # Phase 0 output
├── data-model.md        # Phase 1 output (data structure changes)
├── spec.md              # Feature specification
├── checklists/
│   └── requirements.md  # Spec quality checklist
└── tasks.md             # Phase 2 output (via /sp.tasks)
```

### Source Code (repository root)

```text
src/
├── app/
│   ├── layout.tsx                    # Root layout (fonts, theme, WhatsApp)
│   ├── page.tsx                      # Homepage
│   ├── about/page.tsx
│   ├── contact/page.tsx              # WhatsApp number reference
│   ├── services/[slug]/page.tsx
│   └── locations/
│       ├── [emirate]/page.tsx        # Emirate hero + area cards
│       └── [emirate]/[city]/page.tsx # City page + service cards
├── components/
│   ├── home/
│   │   ├── Hero.tsx                  # Hero section (already has bg image)
│   │   ├── ServiceGrid.tsx           # Service cards (needs bg images)
│   │   └── LocationGrid.tsx          # Emirate cards (needs bg images)
│   ├── layout/
│   │   ├── Header.tsx                # Logo + nav (needs upgrade)
│   │   ├── Footer.tsx                # WhatsApp number reference
│   │   └── WhatsAppButton.tsx        # Floating button (number update)
│   └── ui/
│       └── Card.tsx                  # Reusable card (may need image variant)
├── data/
│   ├── services.ts                   # Service data (has `image` field)
│   └── locations.ts                  # Location data (needs heroImage, area images)
├── styles/
│   └── globals.css                   # Gold color variables + theme tokens
└── types/
    └── index.ts                      # Type definitions (needs heroImage fields)

public/
└── images/
    ├── hero/
    │   └── hero-main.webp            # Already exists (may need replacement)
    ├── services/
    │   ├── villa-cleaning.webp       # Path referenced in data, file may not exist
    │   ├── apartment-cleaning.webp
    │   ├── deep-cleaning.webp
    │   ├── regular-cleaning.webp
    │   ├── move-in-out-cleaning.webp
    │   ├── office-cleaning.webp
    │   ├── sofa-carpet-cleaning.webp
    │   ├── kitchen-cleaning.webp
    │   └── window-cleaning.webp
    ├── locations/
    │   ├── dubai.webp                # Emirate card images
    │   ├── abu-dhabi.webp
    │   ├── sharjah.webp
    │   ├── ajman.webp
    │   ├── ras-al-khaimah.webp
    │   ├── fujairah.webp
    │   └── umm-al-quwain.webp
    ├── heroes/                       # NEW: City hero images (different from card)
    │   ├── dubai-hero.webp
    │   ├── abu-dhabi-hero.webp
    │   ├── sharjah-hero.webp
    │   ├── ajman-hero.webp
    │   ├── ras-al-khaimah-hero.webp
    │   ├── fujairah-hero.webp
    │   └── umm-al-quwain-hero.webp
    ├── areas/                        # NEW: Area card images
    │   ├── dubai/
    │   │   ├── jumeirah.webp
    │   │   ├── al-barsha.webp
    │   │   ├── downtown-dubai.webp
    │   │   └── ...
    │   ├── abu-dhabi/
    │   │   └── ...
    │   └── ...
    └── logo/
        └── al-haya-logo.svg          # NEW: Brand logo
```

**Structure Decision**: Existing Next.js App Router structure is maintained. New directories added only for image assets (`public/images/heroes/`, `public/images/areas/`, `public/images/logo/`). No new component files needed — existing components are modified to accept/display background images.

## Implementation Phases

### Phase 1: Design System Foundation (Gold + Header)

**Files modified**: `src/styles/globals.css`, `src/components/layout/Header.tsx`, `public/images/logo/al-haya-logo.svg`

1. **Gold Color Update** — Update CSS variables in `globals.css`:
   - `--color-gold`: `#C5A47E` → `#D4AF37` (vibrant luxurious gold)
   - `--color-gold-light`: `#D4B896` → `#F5E6B8` (subtle gold background)
   - `--color-gold-dark`: `#A88B65` → `#C5A028` (hover state gold)
   - Add gold text-shadow utility for shine effect

2. **SVG Logo Creation** — Create `public/images/logo/al-haya-logo.svg`:
   - Professional script/serif wordmark "Al Haya" with gold accent
   - Cleaning-related subtle icon element (sparkle/leaf)
   - Works on both light and dark backgrounds (gold on dark, gold on light)
   - Viewbox sized for ~180px desktop width

3. **Header Upgrade** — Modify `src/components/layout/Header.tsx`:
   - Replace text "Al Haya" with SVG logo via `next/image`
   - Increase nav link font size: add `text-lg` (18px) class
   - Increase font weight: add `font-semibold` (600) class
   - Add `tracking-wide` for premium letter spacing
   - Ensure mobile hamburger menu retains same styling

### Phase 2: Hero Section + WhatsApp

**Files modified**: `src/components/home/Hero.tsx`, `src/components/layout/WhatsAppButton.tsx`, `src/components/layout/Footer.tsx`, `src/app/contact/page.tsx`, `.env.example`

1. **Hero Section** — `src/components/home/Hero.tsx`:
   - Hero already has background image setup (`/images/hero/hero-main.webp` with `bg-black/60` overlay) — verify image file exists and is high quality
   - If image needs replacement: source professional cleaning team image, convert to WebP ≤200KB, place at `public/images/hero/hero-main.webp`
   - Height already set to `min-h-[90vh]` — verify mobile responsiveness
   - Add `text-shadow: 0 2px 4px rgba(0,0,0,0.3)` to gold text for shine effect

2. **WhatsApp Number Update**:
   - `WhatsAppButton.tsx`: Change fallback from `+971501234567` to `+971545567799`
   - `Footer.tsx`: Update WhatsApp href to `wa.me/971545567799`
   - `contact/page.tsx`: Update WhatsApp number reference
   - `.env.example`: Update `NEXT_PUBLIC_WHATSAPP_NUMBER` value

### Phase 3: Service Cards with Background Images

**Files modified**: `src/components/home/ServiceGrid.tsx`, `src/components/ui/Card.tsx` (optional), `src/data/services.ts` (verify image paths)

1. **ServiceGrid Component Redesign** — `src/components/home/ServiceGrid.tsx`:
   - Replace icon-based card layout with image-based card layout
   - Each card gets: `position: relative`, `overflow: hidden`, `min-height: 280px`
   - Background image via `next/image` with `fill` + `object-cover` for optimization
   - Dark gradient overlay: `bg-gradient-to-t from-black/80 via-black/40 to-transparent`
   - Text positioned at bottom: `absolute bottom-0 left-0 right-0 p-6`
   - Hover: image scales to 1.05 via `group-hover:scale-105 transition-transform duration-500`
   - Service name in white, description in gray-200
   - Gold accent on icon or service name

2. **Image Assets** — Place in `public/images/services/`:
   - Verify `services.ts` already references correct paths
   - Each image: WebP, ≤150KB, min 800x600px resolution
   - Images needed (8 total): deep-cleaning, regular-cleaning, move-in-out-cleaning, villa-cleaning, office-cleaning, sofa-carpet-cleaning, kitchen-cleaning, window-cleaning

### Phase 4: Emirates/City Cards + City Page Heroes

**Files modified**: `src/components/home/LocationGrid.tsx`, `src/app/locations/[emirate]/page.tsx`, `src/app/locations/[emirate]/[city]/page.tsx`, `src/data/locations.ts`, `src/types/index.ts`

1. **Type Extensions** — `src/types/index.ts`:
   - Add `heroImage: string` to `Emirate` interface
   - Add `image?: string` to `SubCity` interface (for area card images)

2. **Location Data Update** — `src/data/locations.ts`:
   - Add `heroImage` field to each emirate (different from existing `image`)
   - Add `image` field to each SubCity entry with area-specific image path
   - Fallback: areas without specific images use parent emirate image

3. **LocationGrid Redesign** — `src/components/home/LocationGrid.tsx`:
   - Same card design pattern as service cards (image bg, overlay, hover zoom)
   - Use emirate `image` field for card background
   - Min height 280px, gold accent on emirate name or city count

4. **Emirate Page Hero** — `src/app/locations/[emirate]/page.tsx`:
   - Replace solid color hero with `heroImage` background
   - Dark overlay with text overlay (emirate name, tagline)
   - Min height 60vh
   - Area cards section: each card shows area `image` with overlay

5. **City Page Hero** — `src/app/locations/[emirate]/[city]/page.tsx`:
   - Add city image as hero background (use city's `image` field)
   - Service cards on city pages reuse same images from `services.ts`

6. **Image Assets**:
   - 7 emirate card images in `public/images/locations/` (may already exist)
   - 7 emirate hero images in `public/images/heroes/` (NEW, different from cards)
   - ~30+ area images in `public/images/areas/<emirate-slug>/` (NEW)

### Phase 5: Area Cards Images

**Files modified**: `src/app/locations/[emirate]/page.tsx` (area cards section), `src/app/locations/[emirate]/[city]/page.tsx` (if area listing exists)

1. **Area Card Design** — Same visual pattern as service/city cards:
   - Background image with dark overlay
   - Hover zoom effect
   - Text at bottom with area name
   - Fallback: if no area-specific image, use emirate-level image

2. **Image Assets**:
   - Per-area images in `public/images/areas/<emirate-slug>/<area-slug>.webp`
   - Each ≤100KB, WebP format
   - Dubai areas (8): jumeirah, al-barsha, downtown-dubai, dubai-marina, business-bay, palm-jumeirah, jbr, silicon-oasis
   - Abu Dhabi areas (5): al-reem-island, saadiyat-island, khalifa-city, corniche, al-ain
   - Sharjah areas (4): al-nahda, al-majaz, al-khan, muwaileh
   - Other emirates: 2-4 areas each

### Phase 6: Performance Optimization & QA

1. **Image Audit**:
   - Verify all images are WebP and within size budgets
   - Verify `next/image` used with proper `width`, `height`, `sizes`
   - Hero image has `priority` prop; all others use default lazy loading
   - No layout shift (CLS < 0.1) — images have explicit dimensions

2. **Lighthouse Audit**:
   - Run `npx next build` to check for build errors
   - Run Lighthouse on homepage, service page, emirate page, city page
   - Target: Performance 90+, LCP < 2.5s

3. **Cross-Device QA**:
   - Mobile 375px, tablet 768px, desktop 1440px
   - Verify: overlays consistent, text readable, images cover properly
   - Both light and dark themes

4. **Regression Check**:
   - Routing works correctly
   - Contact form submits
   - Theme toggle works
   - SEO meta tags unchanged
   - Footer links work

## Complexity Tracking

No constitution violations. All changes are within the smallest viable diff principle — only visual presentation layer is modified.

## Risk Analysis

| Risk | Mitigation |
|------|------------|
| Image files not available (stock/generated) | User must provide or approve AI-generated placeholder images before implementation |
| Gold color too bright on certain backgrounds | Test against both themes; adjust with opacity or darker variant |
| Image-heavy pages slow on mobile | Strict size budgets; lazy loading; `sizes` attribute for responsive images |
| Layout shift from images loading | Always set explicit `width`/`height` on `next/image`; use `fill` with parent sizing |

## Dependencies & Blockers

1. **IMAGE ASSETS**: ~50+ images needed before implementation can complete. User must provide or approve the sourcing strategy (stock photos, AI-generated, or placeholder strategy).
2. **Logo Design**: SVG logo needs creation — can be done in code as an inline SVG component.
3. No external API or service dependencies.

## Post-Phase 1 Constitution Re-Check

| Principle | Status | Notes |
|-----------|--------|-------|
| I. Visual-First Premium Branding | ✅ | Gold #D4AF37 vibrant; logo SVG; all cards get images |
| II. Performance Budget | ✅ | Size budgets per image type; lazy loading; next/image |
| III. Image Management | ✅ | Naming convention followed; per-category directories |
| IV. Responsive & Accessible Design | ✅ | Overlay ensures contrast; responsive grid patterns preserved |
| V. Content Integrity | ✅ | Only visual changes; WhatsApp = +971 545567799 |
| VI. Smallest Viable Diff | ✅ | Editing existing components; no new abstractions |

**Re-Check RESULT: PASS**
