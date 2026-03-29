# Research: Visual Upgrade — Premium Branding & Background Images

**Date**: 2026-03-28 | **Branch**: `002-visual-upgrade`

## Research Tasks & Findings

### R1: Gold Color Selection for Premium Branding

**Decision**: `#D4AF37` (primary), `#C5A028` (hover/dark), `#F5E6B8` (light bg)

**Rationale**: The current gold `#C5A47E` is a muted brownish-gold that lacks vibrancy in light theme. `#D4AF37` is the classic "metallic gold" hex — vibrant, warm, and universally recognized as luxurious. It passes WCAG AA contrast on dark backgrounds (white text + overlay) and stands out clearly on white backgrounds.

**Alternatives considered**:
- `#E8B84B` — slightly yellowish, less sophisticated
- `#B8860B` (DarkGoldenrod) — too dark, reads as brown
- `#FFD700` (CSS gold) — too bright/yellow, feels cheap

### R2: Image Overlay Technique for Next.js

**Decision**: Use `next/image` with `fill` prop inside a relative container + absolute overlay div with gradient

**Rationale**: `next/image` provides automatic WebP conversion, responsive sizing, lazy loading, and blur placeholder. Using `fill` mode with `object-cover` allows the image to fill the container while the overlay div sits on top via absolute positioning.

**Pattern**:
```tsx
<div className="relative overflow-hidden min-h-[280px]">
  <Image src={imagePath} alt={alt} fill className="object-cover" />
  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
  <div className="absolute bottom-0 left-0 right-0 p-6">
    {/* text content */}
  </div>
</div>
```

**Alternatives considered**:
- CSS `background-image` — no automatic optimization, no lazy loading
- `next/image` with fixed dimensions — doesn't fill container responsively

### R3: Hero Section Background Image Approach

**Decision**: Keep existing CSS background-image approach in Hero.tsx since it already works

**Rationale**: The Hero component already uses `background-image` with `bg-cover bg-center` and a `bg-black/60` overlay. This pattern is established and functional. The hero image uses `priority` loading semantics since it's above the fold. Switching to `next/image` for the hero would be a larger diff for minimal gain since Next.js can optimize images at build time.

**Alternatives considered**:
- Switch hero to `next/image` with `fill` — larger code change, hero already works
- Keep as-is — ✅ chosen, just ensure image file is high quality and ≤200KB

### R4: SVG Logo Strategy

**Decision**: Create inline SVG component in React for the Al Haya logo

**Rationale**: An inline SVG component allows:
- Theme-aware color changes (gold on light bg, gold on dark bg)
- No additional HTTP request
- Crisp at any resolution
- Easy to maintain in code

**Approach**: Create the logo as a functional React component that renders SVG markup with the Al Haya wordmark + a subtle sparkle/star accent element. Use `currentColor` or CSS variables for theme adaptation.

### R5: Image Sourcing Strategy

**Decision**: Placeholder strategy — create placeholder images with solid color + text label, to be replaced with real stock photos

**Rationale**: The implementation can proceed with placeholder images that match the correct dimensions and file paths. Real images can be swapped in later without code changes, since image paths are defined in data files.

**Placeholder format**: Solid dark background with white text label (e.g., "Villa Cleaning"), same dimensions as final images, WebP format. This allows full development and testing of the layout, overlay, and responsive behavior.

### R6: SubCity/Area Image Fallback Chain

**Decision**: Three-tier fallback: area image → emirate image → generic cleaning image

**Rationale**: With ~30+ areas across 7 emirates, not all will have specific landmark images immediately. The fallback chain ensures no broken images while allowing progressive enhancement.

**Implementation**: In `locations.ts`, areas without images leave the `image` field as `undefined`. Components check: `city.image || emirate.image || '/images/default-area.webp'`

### R7: WhatsApp Number Sources

**Decision**: Update in 4 locations: env file, WhatsAppButton.tsx fallback, Footer.tsx, contact/page.tsx

**Rationale**: Searched codebase for WhatsApp references:
- `WhatsAppButton.tsx`: Uses `NEXT_PUBLIC_WHATSAPP_NUMBER` env var with fallback `+971501234567`
- `Footer.tsx`: Direct WhatsApp link with same env var
- `contact/page.tsx`: Hardcoded WhatsApp number `+971 50 123 4567`
- `.env.example`: Documents the env var

All four must be updated to `+971 545567799`.
