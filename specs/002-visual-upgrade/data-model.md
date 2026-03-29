# Data Model: Visual Upgrade — Premium Branding & Background Images

**Date**: 2026-03-28 | **Branch**: `002-visual-upgrade`

## Entity Changes

### Modified: `Emirate` (src/types/index.ts)

| Field | Type | Change | Description |
|-------|------|--------|-------------|
| name | string | existing | Emirate display name |
| slug | string | existing | URL slug |
| description | string | existing | Emirate description |
| image | string | existing | Card image path (landmark) |
| **heroImage** | **string** | **NEW** | Hero section image path (different landmark than card) |
| cities | SubCity[] | existing | Child areas/cities |
| metaTitle | string | existing | SEO title |
| metaDescription | string | existing | SEO description |

### Modified: `SubCity` (src/types/index.ts)

| Field | Type | Change | Description |
|-------|------|--------|-------------|
| name | string | existing | Area display name |
| slug | string | existing | URL slug |
| emirateSlug | string | existing | Parent emirate slug |
| description | string | existing | Area description |
| **image** | **string (optional)** | **NEW** | Area card image path; falls back to parent emirate image |
| metaTitle | string | existing | SEO title |
| metaDescription | string | existing | SEO description |

### Unchanged: `Service` (src/types/index.ts)

No changes needed. Already has `image: string` field pointing to `/images/services/<slug>.webp`. Just need to ensure actual image files exist at those paths.

## CSS Token Changes (src/styles/globals.css)

| Token | Old Value | New Value | Scope |
|-------|-----------|-----------|-------|
| --color-gold | #C5A47E | #D4AF37 | @theme (Tailwind) |
| --color-gold-light | #D4B896 | #F5E6B8 | @theme (Tailwind) |
| --color-gold-dark | #A88B65 | #C5A028 | @theme (Tailwind) |

## Image Asset Inventory

### Required Images (new files)

| Category | Count | Max Size | Path Pattern |
|----------|-------|----------|-------------- |
| Logo | 1 | SVG (tiny) | public/images/logo/al-haya-logo.svg |
| Hero (main) | 1 | 200KB | public/images/hero/hero-main.webp (may exist) |
| Services | 8 | 150KB each | public/images/services/<slug>.webp |
| Emirate cards | 7 | 150KB each | public/images/locations/<slug>.webp (may exist) |
| Emirate heroes | 7 | 200KB each | public/images/heroes/<slug>-hero.webp |
| Area cards | ~30 | 100KB each | public/images/areas/<emirate>/<area>.webp |
| Default fallback | 1 | 100KB | public/images/default-area.webp |

**Total**: ~55 images, estimated ~5-6MB total disk space

## Relationships

```
Service ──has──> image (string, path to service card image)

Emirate ──has──> image (string, path to emirate card image)
Emirate ──has──> heroImage (string, path to emirate hero image)
Emirate ──has many──> SubCity

SubCity ──has──> image? (optional string, path to area card image)
SubCity ──belongs to──> Emirate (via emirateSlug)
SubCity.image falls back to → Emirate.image → default-area.webp
```
