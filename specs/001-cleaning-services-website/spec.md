# Feature Specification: Al Haya Cleaning Services Website

**Feature Branch**: `001-cleaning-services-website`
**Created**: 2026-03-27
**Status**: Draft
**Input**: User description: "Full website build for Al Haya Cleaning Services — homepage, service pages, location pages, about, contact, theme toggle, WhatsApp button, SEO, and content"

## Clarifications

### Session 2026-03-28

- Q: Website content language — English only, bilingual (English + Arabic with RTL), or English primary with Arabic contact info? → A: English only

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Browse Services & Request a Quote (Priority: P1)

A potential customer in the UAE searches Google for villa cleaning services. They land on the homepage, see a compelling hero section with a clear value proposition, browse available services (e.g., villa cleaning, deep cleaning, move-in/move-out), and tap the WhatsApp button or fill in the contact form to request a quote.

**Why this priority**: This is the primary revenue-generating flow. Without it, the website has no business value. The homepage, service pages, contact form, and WhatsApp integration form the core conversion funnel.

**Independent Test**: Can be fully tested by navigating from homepage to any service page and submitting the contact form or tapping the WhatsApp CTA — delivers a complete lead-generation path.

**Acceptance Scenarios**:

1. **Given** a visitor on any device, **When** they load the homepage, **Then** the hero section, service highlights, location highlights, and primary CTA are visible without scrolling on desktop (and within one scroll on mobile).
2. **Given** a visitor on the homepage, **When** they click a service card, **Then** they navigate to the dedicated service detail page showing description, benefits, and a CTA.
3. **Given** a visitor on any page, **When** they tap the floating WhatsApp button, **Then** a WhatsApp chat opens pre-filled with a greeting message directed to the Al Haya business number.
4. **Given** a visitor on the contact page, **When** they fill in name, email, phone, service type, and message, **Then** the form validates inputs and submits successfully, displaying a confirmation message.
5. **Given** a visitor submits the contact form with invalid data (empty required fields, malformed email), **When** they press submit, **Then** inline validation errors appear and the form is not submitted.

---

### User Story 2 - Find Services by Location (Priority: P2)

A visitor wants to confirm that Al Haya operates in their specific emirate or city. They navigate to the locations section, select their emirate (e.g., Dubai), then drill down to their sub-city (e.g., Jumeirah, Al Barsha) to see localized content and available services for that area.

**Why this priority**: Location pages are critical for local SEO ranking in UAE markets and help users trust that the service covers their area. This story builds on US1 by adding geographic targeting to the conversion funnel.

**Independent Test**: Can be tested by navigating from homepage locations section to an emirate page, then to a sub-city page — confirms localized content renders correctly and links to relevant service/contact pages.

**Acceptance Scenarios**:

1. **Given** a visitor on the homepage, **When** they view the locations section, **Then** all 7 Emirates are listed with clear navigation links.
2. **Given** a visitor clicks on an emirate (e.g., Dubai), **When** the emirate page loads, **Then** it displays a list of sub-cities served, localized content about services in that emirate, and CTAs to contact or request a quote.
3. **Given** a visitor clicks on a sub-city (e.g., Jumeirah), **When** the sub-city page loads, **Then** it shows content specific to that area, available services, and contact CTAs.
4. **Given** any location page, **When** it is rendered, **Then** it includes unique meta title, description, and LocalBusiness schema markup for that location.

---

### User Story 3 - Switch Between Dark & Light Themes (Priority: P3)

A visitor browsing at night (or one who prefers dark mode) toggles the theme switch. The entire site re-themes smoothly without a page reload, and the preference persists across page navigations.

**Why this priority**: Theme toggle enhances user comfort and positions Al Haya as a modern, user-focused brand. It is not part of the core conversion funnel but differentiates the brand experience.

**Independent Test**: Can be tested by toggling the theme on any page and navigating to other pages — verifies the theme persists and all components render correctly in both modes.

**Acceptance Scenarios**:

1. **Given** a visitor on any page, **When** they click the theme toggle, **Then** the entire page transitions to the alternate theme (dark ↔ light) smoothly within 300ms.
2. **Given** a visitor has selected dark mode, **When** they navigate to a different page, **Then** the dark mode preference persists.
3. **Given** a first-time visitor with OS-level dark mode, **When** they load the site, **Then** the site defaults to dark theme (respecting `prefers-color-scheme`).
4. **Given** either theme is active, **When** the visitor views any page, **Then** all text, images, cards, and CTAs maintain sufficient contrast and visual harmony.

---

### User Story 4 - Learn About Al Haya (Priority: P4)

A visitor wants to learn about the company before trusting them with a booking. They visit the About Us page to read the company story, values, and any social proof (testimonials, years of experience, team highlights).

**Why this priority**: The About page builds trust and brand authority. It supports conversion but is not the primary path. Visitors who need reassurance will seek this page.

**Independent Test**: Can be tested by navigating to the About page and verifying company information, testimonials, and CTAs render correctly.

**Acceptance Scenarios**:

1. **Given** a visitor navigates to the About page, **When** the page loads, **Then** it displays company story, mission/values, and at least one form of social proof (testimonials or experience highlights).
2. **Given** the About page, **When** rendered, **Then** it includes a CTA to contact or view services.

---

### User Story 5 - Discover the Site via Search Engines (Priority: P5)

A potential customer in Dubai searches "villa cleaning services Dubai" on Google. The Al Haya website appears in search results with a rich snippet showing the business name, rating, and service summary. The user clicks through to a fast-loading, relevant page.

**Why this priority**: SEO is the long-term traffic driver but depends on all content pages (US1, US2, US4) being in place first. This story covers the cross-cutting SEO infrastructure.

**Independent Test**: Can be tested by auditing any page for meta tags, schema markup, sitemap presence, and Lighthouse SEO score >= 90.

**Acceptance Scenarios**:

1. **Given** any public page, **When** its HTML source is inspected, **Then** it contains a unique meta title (under 60 chars), meta description (under 160 chars), Open Graph tags, and canonical URL.
2. **Given** the homepage and service pages, **When** schema markup is validated, **Then** valid JSON-LD LocalBusiness and Service schemas are present.
3. **Given** the site is deployed, **When** `/sitemap.xml` is requested, **Then** a valid XML sitemap listing all public pages is returned.
4. **Given** the site is deployed, **When** `/robots.txt` is requested, **Then** it allows search engine crawling and references the sitemap URL.
5. **Given** any page on mobile, **When** a Lighthouse audit runs, **Then** the SEO score is 90 or above.

---

### Edge Cases

- What happens when the contact form submission fails (server error)? A user-friendly error message MUST be displayed with a fallback option (WhatsApp link or phone number).
- What happens when a visitor navigates to a non-existent URL? A custom 404 page MUST be shown with navigation back to the homepage and popular services.
- What happens when images fail to load? Alt text MUST be displayed, and layout MUST NOT break.
- What happens on extremely slow connections (2G)? Critical content (text, CTAs) MUST load first; images MUST be lazy-loaded.
- What happens when JavaScript is disabled? Core content and navigation MUST still be accessible via server-rendered HTML.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: Site MUST include a homepage with hero section, service highlights (8 services), location highlights (7 Emirates), customer testimonials, and a primary call-to-action.
- **FR-002**: Site MUST include 8 individual service detail pages, each with unique content describing the service, its benefits, and a CTA to contact.
- **FR-003**: Site MUST include 7 emirate-level location pages and sub-city pages under each emirate, each with localized content and service links.
- **FR-004**: Site MUST include an About Us page with company story, mission/values, and social proof.
- **FR-005**: Site MUST include a Contact page with a form capturing name, email, phone number, selected service, and message.
- **FR-006**: Contact form MUST validate all required fields client-side before submission and display inline errors for invalid inputs.
- **FR-007**: Contact form submissions MUST be processed server-side and stored or forwarded (email notification to business owner).
- **FR-008**: A floating WhatsApp button MUST be visible on every page, linking to a WhatsApp chat with a pre-filled greeting.
- **FR-009**: A theme toggle (dark/light) MUST be accessible from the site header on every page.
- **FR-010**: Theme preference MUST persist across page navigations within the same session and default to the user's OS preference on first visit.
- **FR-011**: Every public page MUST include unique, keyword-optimized meta title, meta description, and Open Graph/Twitter Card tags.
- **FR-012**: Homepage and service pages MUST include JSON-LD structured data (LocalBusiness schema, Service schema).
- **FR-013**: Location pages MUST include JSON-LD LocalBusiness schema with location-specific details.
- **FR-014**: Site MUST generate and serve a valid XML sitemap at `/sitemap.xml` and a `robots.txt` referencing it.
- **FR-015**: Site MUST include a custom 404 error page with navigation to homepage and popular services.
- **FR-016**: All images MUST use next-gen formats (WebP/AVIF), responsive sizing, and lazy loading below the fold.
- **FR-017**: Site MUST be fully responsive from 320px to 2560px viewport widths without horizontal scrolling.
- **FR-018**: All interactive elements MUST be keyboard-navigable with visible focus indicators.
- **FR-019**: Site navigation MUST include a responsive header with logo, page links, theme toggle, and a mobile hamburger menu.
- **FR-020**: Animations MUST respect `prefers-reduced-motion` media query.

### Key Entities

- **Service**: Represents a cleaning service offered (e.g., villa cleaning, deep cleaning, move-in/move-out cleaning). Attributes: name, slug, description, benefits, image, keywords.
- **Location (Emirate)**: A top-level geographic area (Abu Dhabi, Dubai, Sharjah, Ajman, Umm Al Quwain, Ras Al Khaimah, Fujairah). Attributes: name, slug, description, sub-cities list.
- **Sub-City**: A district or neighborhood within an emirate. Attributes: name, slug, parent emirate, localized description.
- **Contact Submission**: A lead captured via the contact form. Attributes: name, email, phone, selected service, message, timestamp.
- **Testimonial**: Customer review displayed as social proof. Attributes: customer name, review text, rating, location.

### Assumptions

- All website content MUST be in English only. No Arabic/RTL support is required for this release. Bilingual support may be added as a future feature.
- The 8 services will be defined during content creation; the spec assumes service content will be provided or authored as part of the content phase.
- Sub-city lists per emirate will be curated based on Al Haya's actual service areas; the spec assumes at least 3-5 sub-cities per emirate.
- Contact form submissions will be forwarded via email to the business owner; no CRM integration is required for the initial launch.
- The WhatsApp business number will be provided as an environment variable.
- Testimonials will be provided by the client or sourced from existing reviews.
- Analytics integration (Google Analytics, Search Console) is configured post-deployment using standard tag insertion.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: Every page achieves a Lighthouse Performance score of 90 or above on mobile emulation.
- **SC-002**: Every page achieves a Lighthouse SEO score of 90 or above.
- **SC-003**: Every page achieves a Lighthouse Accessibility score of 90 or above.
- **SC-004**: Initial page load completes in under 3 seconds on a simulated 4G connection.
- **SC-005**: The site renders correctly and is fully functional on Chrome, Safari, Firefox, and Edge (latest two versions) and on iOS Safari and Chrome Android.
- **SC-006**: A visitor can navigate from the homepage to any service or location page and reach a contact method (form or WhatsApp) in 3 clicks or fewer.
- **SC-007**: The contact form successfully submits valid data and the business receives the lead notification within 1 minute.
- **SC-008**: The site ranks in the top 10 Google results for at least 3 primary keywords (e.g., "villa cleaning Dubai", "cleaning services UAE", "deep cleaning Dubai") within 4 months of launch.
- **SC-009**: Organic traffic increases by 30% within 4 months of launch compared to baseline (or from zero if no prior site).
- **SC-010**: Lead submissions via contact form or WhatsApp increase by 20% within 4 months compared to baseline.
- **SC-011**: Theme toggle switches the entire site theme within 300 milliseconds without a page reload.
- **SC-012**: All pages pass WCAG 2.1 AA automated checks with zero critical violations.
