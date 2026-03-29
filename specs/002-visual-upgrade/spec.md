# Feature Specification: Visual Upgrade — Premium Branding & Background Images

**Feature Branch**: `002-visual-upgrade`
**Created**: 2026-03-28
**Status**: Draft
**Input**: User description: "Website visual upgrade — header enhancement, hero background image, service/city/area card images, gold color vibrance, WhatsApp number update"

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Premium First Impression (Priority: P1)

A visitor lands on the Al Haya homepage and immediately sees a visually stunning hero section with a professional cleaning service background image, vibrant gold accents, and a polished header with the Al Haya logo. The premium feel builds trust and encourages the visitor to explore further.

**Why this priority**: The homepage hero and header are the first things every visitor sees. A premium, trustworthy appearance directly impacts bounce rate and conversion. Gold color vibrance in light theme is currently too dim to convey luxury.

**Independent Test**: Load the homepage in both light and dark themes. Verify the hero has a professional background image with dark overlay, gold text is vibrant and shiny (not dim/muted), the header displays the Al Haya logo with bold navigation links, and the overall feel is premium and luxurious.

**Acceptance Scenarios**:

1. **Given** a visitor on the homepage in light theme, **When** the page loads, **Then** they see a full-width hero image with dark overlay, vibrant gold accent text, and a header with the Al Haya logo and bold navigation links
2. **Given** a visitor on mobile, **When** they view the homepage, **Then** the hero image, logo, and navigation are properly sized and positioned for the screen
3. **Given** a visitor in dark theme, **When** viewing the homepage, **Then** gold accents are still clearly visible and the overall design remains consistent with light theme quality

---

### User Story 2 - Service Discovery via Visual Cards (Priority: P2)

A visitor browses the "Our Cleaning Services" section and sees each service card with a relevant, professional background image (e.g., a sparkling kitchen for Kitchen Cleaning, a luxury villa interior for Villa Cleaning). The visual cues help them quickly understand and connect with each service offering.

**Why this priority**: Service cards are the primary conversion driver. Background images make services tangible and relatable, increasing click-through to service detail pages.

**Independent Test**: Navigate to the services section on the homepage. Verify each service card displays a relevant background image with dark overlay, text is readable over the image, and cards have a hover zoom effect.

**Acceptance Scenarios**:

1. **Given** a visitor viewing the services section, **When** they see the service cards, **Then** each card displays a relevant professional background image with readable text overlay
2. **Given** a visitor hovering over a service card (desktop), **When** they hover, **Then** the card shows a subtle zoom animation on the background image
3. **Given** a visitor on mobile, **When** viewing service cards, **Then** images are properly sized, text is readable, and cards stack responsively

---

### User Story 3 - Emirates & City Visual Navigation (Priority: P3)

A visitor explores the "We Serve All Emirates" section and sees each city card with an iconic landmark image (e.g., Burj Khalifa for Dubai, Sheikh Zayed Mosque for Abu Dhabi). When they click into a city page, they see a different hero image of that city and service cards with relevant service images.

**Why this priority**: Location pages drive local SEO traffic. Iconic city images build geographic trust and help visitors find services in their area. Using different images for cards vs. hero pages adds visual richness.

**Independent Test**: Click through each emirate card and verify: card shows iconic city image, city page hero shows a different famous image of the same city, and service cards on the city page display relevant service images.

**Acceptance Scenarios**:

1. **Given** a visitor on the homepage, **When** they view the emirates section, **Then** each city card shows an iconic landmark image of that city with overlay and text
2. **Given** a visitor clicking on "Dubai", **When** the Dubai page loads, **Then** the hero shows a different Dubai image than the card (e.g., card = Burj Khalifa skyline, hero = Dubai Marina night view)
3. **Given** a visitor on a city page, **When** they scroll to "Our Services", **Then** service cards display the same service images used on the homepage (reused for performance)

---

### User Story 4 - Area-Level Visual Discovery (Priority: P4)

A visitor on a city page scrolls to the "Areas We Serve" section and sees each area card with a recognizable image representing that area (e.g., JBR beachfront for JBR, Downtown skyline for Downtown Dubai).

**Why this priority**: Area pages are the deepest level of local SEO. Visual area cards help visitors identify their neighborhood and increase engagement with location-specific pages.

**Independent Test**: Navigate to a city page (e.g., Dubai) and verify area cards display relevant area images with the same overlay/hover design pattern as service and city cards.

**Acceptance Scenarios**:

1. **Given** a visitor on the Dubai page, **When** they view the areas section, **Then** each area card shows a recognizable image of that area with dark overlay and readable text
2. **Given** an area without a specific landmark, **When** displayed, **Then** the nearest city landmark or a generic professional image is used as fallback

---

### User Story 5 - WhatsApp Contact Update (Priority: P5)

A visitor wants to contact Al Haya via WhatsApp. The floating WhatsApp button and all WhatsApp references across the site use the updated number +971 545567799.

**Why this priority**: Correct contact information is essential for business continuity. An outdated number means lost leads.

**Independent Test**: Click the floating WhatsApp button on any page. Verify it opens WhatsApp with the number 971545567799. Search all pages for any other WhatsApp number references.

**Acceptance Scenarios**:

1. **Given** a visitor on any page, **When** they click the WhatsApp floating button, **Then** it opens WhatsApp with the number +971 545567799
2. **Given** the contact page or footer, **When** a WhatsApp number is displayed, **Then** it shows +971 545567799

---

### Edge Cases

- What happens when an image fails to load? Graceful fallback with a solid dark background so text remains readable.
- What happens on very slow connections? Lazy-loaded images below the fold; hero image loads with priority. Placeholder/skeleton shown while loading.
- What happens when a city or area has no specific landmark image available? Use the nearest city-level landmark or a generic professional cleaning image as fallback.
- What happens on ultrawide screens (>2560px)? Images MUST still cover the card/hero area without distortion or visible tiling.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: Header MUST display a custom Al Haya logo (SVG format) on the left side, with gold accent matching brand identity
- **FR-002**: Navigation links MUST use increased font size (18px desktop) and bold weight (600-700) with smooth gold hover transitions
- **FR-003**: Hero section MUST display a full-width professional cleaning background image with dark gradient overlay (50-70% opacity)
- **FR-004**: Hero section MUST have sufficient height (min 90vh desktop, 70vh mobile) for visual impact
- **FR-005**: Gold color MUST be updated to vibrant shiny gold (#D4A843 or similar) across all CSS variables for light theme; dark theme MUST remain consistent
- **FR-006**: Each of the 8 service cards MUST display a relevant professional background image:
  - Deep Cleaning → cleaning action shot
  - Regular Cleaning → clean organized home
  - Move In/Out Cleaning → empty clean apartment
  - Villa Cleaning → luxury villa interior
  - Office Cleaning → clean modern office
  - Sofa/Carpet Cleaning → cleaning process image
  - Kitchen Cleaning → sparkling kitchen
  - Window Cleaning → window cleaning action
- **FR-007**: Service cards MUST have dark gradient overlay (bottom to top), minimum 280px height, text at bottom, and hover zoom effect (scale 1.05 with overflow hidden)
- **FR-008**: Each of the 7 emirate cards MUST display an iconic city landmark image:
  - Dubai → Burj Khalifa / skyline
  - Abu Dhabi → Sheikh Zayed Grand Mosque
  - Sharjah → Al Noor Mosque / waterfront
  - Ajman → Museum / beach
  - Ras Al Khaimah → Jebel Jais / mountains
  - Fujairah → Fort / coastline
  - Umm Al Quwain → Fort / mangrove
- **FR-009**: Each city page hero MUST display a different famous image of that city than the card image used on the homepage
- **FR-010**: City pages MUST reuse the same service background images from the homepage service cards for consistency and performance
- **FR-011**: Area cards MUST display recognizable images representing each area; fallback to nearest city landmark if specific area image is unavailable
- **FR-012**: WhatsApp floating button MUST use number +971 545567799 (link: wa.me/971545567799) on all pages
- **FR-013**: All WhatsApp number references across the entire site (footer, contact page, etc.) MUST be updated to +971 545567799
- **FR-014**: All images MUST be in WebP format, compressed (hero: max 200KB, cards: max 150KB, areas: max 100KB), and lazy loaded (except hero which loads with priority)
- **FR-015**: All background images MUST have consistent dark/gradient overlay for text readability across all pages
- **FR-016**: All image cards MUST be fully responsive across mobile, tablet, and desktop breakpoints

### Key Entities

- **Service Card**: A visual card representing one cleaning service — has name, slug, description, background image path, overlay style
- **Emirate Card**: A visual card for each UAE emirate — has name, slug, card image (landmark), hero image (different landmark)
- **Area Card**: A visual card for each area/neighborhood — has name, slug, area image (local landmark or fallback)
- **Gold Color Token**: CSS variable set for gold accent — primary, hover, and light variants used across themes

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: Homepage loads completely in under 3 seconds on a standard 4G connection
- **SC-002**: All 8 service cards display relevant background images with readable text overlay
- **SC-003**: All 7 emirate cards display iconic city landmark images
- **SC-004**: Each city page hero uses a different image than its corresponding homepage card
- **SC-005**: Gold accent color is visibly vibrant and shiny in light theme — clearly distinguishable from background without squinting
- **SC-006**: Header displays Al Haya logo with navigation text that is bold and easily readable
- **SC-007**: WhatsApp button on every page opens chat with +971 545567799
- **SC-008**: Lighthouse performance score remains at 90 or above after all image additions
- **SC-009**: All pages render correctly on mobile (375px), tablet (768px), and desktop (1440px) with no broken layouts or unreadable text
- **SC-010**: No existing site functionality (routing, forms, SEO, theme toggle) is broken by the visual upgrade

## Assumptions

- All images will be sourced as royalty-free or properly licensed stock photos and placed in `public/images/`
- The Al Haya logo will be created as an SVG with gold accent, not sourced from an external designer
- The existing site already uses CSS custom properties for theming; gold values will be updated in the existing variable system
- Service images defined in the `services.ts` data file already reference `/images/services/*.webp` paths — actual image files need to be provided
- Location data in `locations.ts` already has `image` fields for emirates — city hero and area images will require data structure additions
- The current WhatsApp number is set via the `NEXT_PUBLIC_WHATSAPP_NUMBER` environment variable with a hardcoded fallback in the component
