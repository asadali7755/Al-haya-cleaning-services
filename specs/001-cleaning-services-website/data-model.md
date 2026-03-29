# Data Model: Al Haya Cleaning Services Website

**Phase**: 1 — Design | **Date**: 2026-03-28

## Overview

All content is stored as TypeScript data files in `src/data/`. No database
is required. Each entity is defined as a typed interface and exported as a
constant array.

## Entities

### Service

Represents one of 8 cleaning services offered by Al Haya.

```typescript
interface Service {
  name: string;           // Display name, e.g., "Villa Cleaning"
  slug: string;           // URL segment, e.g., "villa-cleaning"
  shortDescription: string; // One-liner for cards (~120 chars)
  description: string;    // Full page description (2-3 paragraphs)
  benefits: string[];     // List of key benefits (4-6 items)
  image: string;          // Path to hero image, e.g., "/images/services/villa-cleaning.webp"
  icon: string;           // Icon identifier for service cards
  keywords: string[];     // SEO keywords for meta tags
  metaTitle: string;      // Page-specific meta title (<60 chars)
  metaDescription: string; // Page-specific meta description (<160 chars)
}
```

**Validation rules**:
- `slug` MUST be unique across all services
- `slug` MUST match `[a-z0-9-]+` pattern
- `metaTitle` MUST be under 60 characters
- `metaDescription` MUST be under 160 characters
- `benefits` MUST have at least 3 items
- `image` MUST reference an existing file in `public/images/services/`

**Initial services** (8):
1. Villa Cleaning
2. Apartment Cleaning
3. Deep Cleaning
4. Move-In / Move-Out Cleaning
5. Office Cleaning
6. Sofa & Carpet Cleaning
7. Window Cleaning
8. Post-Construction Cleaning

---

### Emirate (Location)

Represents one of the 7 UAE Emirates.

```typescript
interface Emirate {
  name: string;           // Display name, e.g., "Dubai"
  slug: string;           // URL segment, e.g., "dubai"
  description: string;    // Emirate-level content (1-2 paragraphs)
  cities: SubCity[];      // Sub-cities served within this emirate
  image: string;          // Hero/card image path
  metaTitle: string;      // Page-specific meta title
  metaDescription: string; // Page-specific meta description
}
```

**Validation rules**:
- `slug` MUST be unique across all emirates
- `cities` MUST have at least 3 entries
- Each emirate MUST have localized content (not generic)

**Emirates** (7):
1. Abu Dhabi
2. Dubai
3. Sharjah
4. Ajman
5. Umm Al Quwain
6. Ras Al Khaimah
7. Fujairah

---

### SubCity

Represents a district or neighborhood within an emirate.

```typescript
interface SubCity {
  name: string;           // Display name, e.g., "Jumeirah"
  slug: string;           // URL segment, e.g., "jumeirah"
  emirateSlug: string;    // Parent emirate slug for URL construction
  description: string;    // Localized content for this area
  metaTitle: string;
  metaDescription: string;
}
```

**Validation rules**:
- `slug` MUST be unique within its parent emirate
- `emirateSlug` MUST reference a valid Emirate slug
- Full URL pattern: `/locations/{emirateSlug}/{slug}`

**Example sub-cities for Dubai**:
- Jumeirah, Al Barsha, Downtown Dubai, Dubai Marina, Business Bay,
  Palm Jumeirah, JBR, Silicon Oasis

---

### ContactSubmission

Represents a lead captured via the contact form. Processed server-side
and forwarded via email — not stored in a database.

```typescript
interface ContactSubmission {
  name: string;           // Full name (required)
  email: string;          // Email address (required, validated)
  phone: string;          // Phone number (required)
  service: string;        // Selected service slug (required)
  message: string;        // Free-text message (required, max 1000 chars)
  timestamp: string;      // ISO 8601 datetime (set server-side)
}
```

**Validation rules**:
- `name` MUST be 2-100 characters
- `email` MUST be a valid email format
- `phone` MUST be a valid UAE phone format or international format
- `service` MUST match a valid service slug
- `message` MUST be 10-1000 characters

---

### Testimonial

Customer review displayed as social proof on the homepage and about page.

```typescript
interface Testimonial {
  customerName: string;   // Display name
  reviewText: string;     // Review content (1-3 sentences)
  rating: number;         // 1-5 star rating
  location: string;       // City/emirate for context, e.g., "Dubai"
}
```

**Validation rules**:
- `rating` MUST be between 1 and 5 (integer)
- `reviewText` MUST be 20-500 characters

---

### SiteMetadata

Global SEO/metadata configuration shared across pages.

```typescript
interface SiteMetadata {
  siteName: string;       // "Al Haya Cleaning Services"
  siteUrl: string;        // Production URL
  defaultTitle: string;   // Fallback meta title
  defaultDescription: string;
  whatsappNumber: string; // From env var
  contactEmail: string;   // From env var
  socialLinks: {
    facebook?: string;
    instagram?: string;
  };
}
```

## Relationships

```text
SiteMetadata (global singleton)
    │
    ├── Service[] (8 items)
    │       └── referenced by ContactSubmission.service
    │
    ├── Emirate[] (7 items)
    │       └── SubCity[] (3-8 per emirate)
    │
    └── Testimonial[] (5-10 items)
```

## State Transitions

No complex state machines. The only state flow is:

```text
ContactForm (empty)
  → User fills fields (client validation)
  → Submit (server validation)
  → Success: show confirmation message
  → Failure: show error with WhatsApp fallback
```
