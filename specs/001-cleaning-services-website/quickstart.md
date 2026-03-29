# Quickstart: Al Haya Cleaning Services Website

**Phase**: 1 — Design | **Date**: 2026-03-28

## Prerequisites

- Node.js 18+ installed
- npm or pnpm package manager
- Git

## Setup

```bash
# Clone and enter project
git clone <repo-url>
cd villa-cleaning-services

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local
# Edit .env.local with your actual values
```

## Environment Variables

Create `.env.local` with:

```env
WHATSAPP_NUMBER=+971501234567
CONTACT_EMAIL=info@alhaya.ae
EMAIL_FROM=noreply@alhaya.ae
RESEND_API_KEY=re_your_api_key_here
SITE_URL=http://localhost:3000
NEXT_PUBLIC_GA_ID=
```

## Development

```bash
# Start dev server
npm run dev
# Open http://localhost:3000
```

## Build & Preview

```bash
# Production build
npm run build

# Preview production build locally
npm run start
```

## Testing

```bash
# Unit tests
npm run test

# E2E tests (requires dev server running)
npm run test:e2e

# Lighthouse audit
npm run lighthouse
```

## Project Structure

```text
src/
├── app/          # Next.js App Router pages
├── components/   # Reusable UI components
├── data/         # Content data (services, locations, testimonials)
├── lib/          # Utility functions (metadata, schema, validators)
├── styles/       # Global styles and theme CSS variables
└── types/        # TypeScript interfaces
```

## Key Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Create production build |
| `npm run start` | Serve production build |
| `npm run lint` | Run ESLint |
| `npm run test` | Run unit tests |
| `npm run test:e2e` | Run Playwright E2E tests |

## Adding Content

### New Service

1. Add entry to `src/data/services.ts`
2. Add image to `public/images/services/`
3. Page auto-generates at `/services/{slug}`

### New Location (Sub-City)

1. Add sub-city entry to the parent emirate in `src/data/locations.ts`
2. Page auto-generates at `/locations/{emirate}/{city}`

### New Testimonial

1. Add entry to `src/data/testimonials.ts`
2. Appears on homepage and about page automatically

## Deployment

```bash
# Deploy to Vercel
npx vercel

# Or push to main branch for automatic deployment
git push origin main
```

## Validation Checklist

After setup, verify:

- [ ] Dev server starts without errors
- [ ] Homepage loads with hero section
- [ ] Theme toggle switches dark/light
- [ ] WhatsApp button visible on all pages
- [ ] Contact form validates and submits
- [ ] Service pages accessible at `/services/{slug}`
- [ ] Location pages accessible at `/locations/{emirate}`
- [ ] `npm run build` completes without errors
