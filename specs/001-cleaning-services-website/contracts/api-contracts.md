# API Contracts: Al Haya Cleaning Services Website

**Phase**: 1 — Design | **Date**: 2026-03-28

## Overview

The site has a single API endpoint for contact form submission. All other
pages are statically generated or server-rendered — no data-fetching APIs
are needed since content lives in TypeScript data files.

---

## POST /api/contact

**Purpose**: Process contact form submissions and send email notification
to the business owner.

### Request

```
POST /api/contact
Content-Type: application/json
```

**Body**:

```json
{
  "name": "Ahmed Al Maktoum",
  "email": "ahmed@example.com",
  "phone": "+971501234567",
  "service": "villa-cleaning",
  "message": "I need villa cleaning for my 5-bedroom villa in Jumeirah."
}
```

**Field constraints**:

| Field   | Type   | Required | Constraints                          |
|---------|--------|----------|--------------------------------------|
| name    | string | yes      | 2-100 characters                     |
| email   | string | yes      | Valid email format                   |
| phone   | string | yes      | Valid phone (UAE or international)   |
| service | string | yes      | Must match a valid service slug      |
| message | string | yes      | 10-1000 characters                   |

### Response — Success (200)

```json
{
  "success": true,
  "message": "Thank you! We will contact you shortly."
}
```

### Response — Validation Error (400)

```json
{
  "success": false,
  "errors": {
    "email": "Please enter a valid email address.",
    "message": "Message must be at least 10 characters."
  }
}
```

### Response — Server Error (500)

```json
{
  "success": false,
  "message": "Something went wrong. Please try WhatsApp or call us directly."
}
```

### Rate Limiting

- Maximum 5 submissions per IP per 15-minute window
- Returns 429 with `Retry-After` header on breach

---

## Static Routes (No API — SSG/SSR Pages)

These routes are served as pre-rendered HTML. Listed here for completeness.

| Route | Method | Rendering | Description |
|-------|--------|-----------|-------------|
| `/` | GET | SSG | Homepage |
| `/services/[slug]` | GET | SSG | Service detail (8 pages) |
| `/locations/[emirate]` | GET | SSG | Emirate page (7 pages) |
| `/locations/[emirate]/[city]` | GET | SSG | Sub-city page (~25 pages) |
| `/about` | GET | SSG | About Us page |
| `/contact` | GET | SSG | Contact form page |
| `/sitemap.xml` | GET | SSG | XML sitemap |
| `/robots.txt` | GET | Static | Search engine directives |

---

## Environment Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `WHATSAPP_NUMBER` | Business WhatsApp number (with country code) | `+971501234567` |
| `CONTACT_EMAIL` | Email to receive form submissions | `info@alhaya.ae` |
| `EMAIL_FROM` | Sender address for notifications | `noreply@alhaya.ae` |
| `RESEND_API_KEY` | Resend API key for email sending | `re_xxxxx` |
| `SITE_URL` | Production URL for sitemap/canonical | `https://alhaya.ae` |
| `NEXT_PUBLIC_GA_ID` | Google Analytics measurement ID | `G-XXXXXXXXXX` |
