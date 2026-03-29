# Quickstart: Visual Upgrade Implementation

**Branch**: `002-visual-upgrade`

## Prerequisites

- Node.js 18+ installed
- Git on branch `002-visual-upgrade`

## Setup

```bash
npm install
npm run dev
```

Open http://localhost:3000 to view the site.

## Implementation Order

1. **Gold color** — Edit `src/styles/globals.css` to update `--color-gold` values
2. **Logo** — Create SVG at `public/images/logo/al-haya-logo.svg`, update `Header.tsx`
3. **Header** — Update nav font size/weight in `Header.tsx`
4. **WhatsApp** — Update number in `WhatsAppButton.tsx`, `Footer.tsx`, `contact/page.tsx`, `.env.example`
5. **Service cards** — Redesign `ServiceGrid.tsx` with background images
6. **Emirate cards** — Redesign `LocationGrid.tsx` with background images
7. **Type updates** — Add `heroImage` to Emirate, `image` to SubCity in `types/index.ts`
8. **Location data** — Add `heroImage` and area `image` fields in `locations.ts`
9. **Emirate page hero** — Update `locations/[emirate]/page.tsx` with hero image
10. **City page** — Update `locations/[emirate]/[city]/page.tsx` with hero + service images
11. **Area cards** — Add background images to area card sections
12. **Performance audit** — Run `npm run build` then Lighthouse

## Image Placeholders

Until real images are provided, create placeholder WebP images:
- Use any solid-color WebP image named correctly
- Paths defined in `services.ts` and `locations.ts`
- Replace with real images later without code changes

## Verification

```bash
npm run build    # No build errors
npm run start    # Check all pages manually
# Run Lighthouse on homepage — target 90+ performance
```
