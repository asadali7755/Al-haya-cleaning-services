# Tasks: Visual Upgrade — Premium Branding & Background Images

**Input**: Design documents from `/specs/002-visual-upgrade/`
**Prerequisites**: plan.md (required), spec.md (required), research.md, data-model.md

**Tests**: No unit tests requested. Validation via manual visual review and Lighthouse audit.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Path Conventions

- **Single project**: `src/`, `public/` at repository root (Next.js App Router)

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Create image directory structure and placeholder assets so all story phases can reference valid paths

- [x] T001 Create image directory structure: `public/images/logo/`, `public/images/heroes/`, `public/images/areas/dubai/`, `public/images/areas/abu-dhabi/`, `public/images/areas/sharjah/`, `public/images/areas/ajman/`, `public/images/areas/ras-al-khaimah/`, `public/images/areas/fujairah/`, `public/images/areas/umm-al-quwain/`
- [x] T002 [P] Create a default fallback area image placeholder at `public/images/default-area.webp` (dark background, 800x600, WebP, ≤100KB)
- [x] T003 [P] Verify existing image directories and files: check which files already exist under `public/images/hero/`, `public/images/services/`, `public/images/locations/` — document missing files

**Checkpoint**: Directory structure ready. All subsequent phases can reference image paths without broken references.

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Gold color system update and type extensions that ALL user stories depend on

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [x] T004 Update gold color CSS variables in `src/styles/globals.css`: change `--color-gold` from `#C5A47E` to `#D4AF37`, `--color-gold-light` from `#D4B896` to `#F5E6B8`, `--color-gold-dark` from `#A88B65` to `#C5A028` in the `@theme` block
- [x] T005 [P] Add `heroImage: string` field to `Emirate` interface in `src/types/index.ts`
- [x] T006 [P] Add `image?: string` optional field to `SubCity` interface in `src/types/index.ts`
- [x] T007 Add `heroImage` field to every emirate entry in `src/data/locations.ts` with paths to hero images (different from existing `image` field): Dubai → `/images/heroes/dubai-hero.webp`, Abu Dhabi → `/images/heroes/abu-dhabi-hero.webp`, Sharjah → `/images/heroes/sharjah-hero.webp`, Ajman → `/images/heroes/ajman-hero.webp`, Ras Al Khaimah → `/images/heroes/ras-al-khaimah-hero.webp`, Fujairah → `/images/heroes/fujairah-hero.webp`, Umm Al Quwain → `/images/heroes/umm-al-quwain-hero.webp`
- [x] T008 Add `image` field to every SubCity entry in `src/data/locations.ts` with area-specific image paths following pattern `/images/areas/<emirate-slug>/<area-slug>.webp` for all areas across all emirates

**Checkpoint**: Foundation ready — gold colors vibrant, types extended, data fields populated. User story implementation can now begin.

---

## Phase 3: User Story 1 — Premium First Impression (Priority: P1) 🎯 MVP

**Goal**: Visitor lands on homepage and immediately sees a premium, luxurious website — vibrant gold accents, Al Haya logo in header, bold navigation, and a stunning hero with background image.

**Independent Test**: Load homepage in light and dark themes. Verify: header shows Al Haya logo with bold nav links, hero has professional background image with dark overlay, gold text is vibrant and shiny (not dim), overall feel is premium.

### Implementation for User Story 1

- [x] T009 [US1] Create Al Haya SVG logo as an inline React component in `src/components/layout/Header.tsx` — professional wordmark "Al Haya" with gold accent color (`currentColor` or `var(--color-gold)`), plus a subtle sparkle/star decorative element. Logo should render at ~180px wide on desktop, ~120px on mobile
- [x] T010 [US1] Update header in `src/components/layout/Header.tsx`: replace the text-only `<Link>` logo with the new SVG logo component, increase nav link font size to `text-lg` (18px), set font weight to `font-semibold` (600), add `tracking-wide` for premium letter spacing, ensure mobile menu links get same font treatment
- [x] T011 [P] [US1] Verify hero background image exists at `public/images/hero/hero-main.webp` — if missing or low quality, create/source a professional cleaning service image (team at work or sparkling clean space), convert to WebP ≤200KB, place at that path
- [x] T012 [US1] Add gold text-shadow shine effect to hero section in `src/components/home/Hero.tsx`: add inline style `textShadow: '0 2px 8px rgba(212, 175, 55, 0.3)'` to the gold-colored `<span>` element for a subtle glow effect
- [x] T013 [US1] Verify hero section responsive behavior in `src/components/home/Hero.tsx`: confirm `min-h-[90vh]` on desktop and adjust for mobile if needed (70vh), ensure dark overlay `bg-black/60` keeps text readable, confirm background image covers without distortion

**Checkpoint**: Homepage looks premium — vibrant gold, professional logo, bold nav, stunning hero. User Story 1 is fully functional and testable independently.

---

## Phase 4: User Story 2 — Service Discovery via Visual Cards (Priority: P2)

**Goal**: Each service card in the "Our Cleaning Services" section displays a relevant professional background image with dark overlay, text at bottom, and hover zoom effect.

**Independent Test**: View services section on homepage. Each of 8 service cards shows a relevant background image, text is readable over overlay, hover triggers zoom animation on desktop.

### Implementation for User Story 2

- [x] T014 [P] [US2] Source/create 8 service placeholder images (WebP, ≤150KB each, min 800x600) and place at paths referenced in `src/data/services.ts`: `public/images/services/villa-cleaning.webp`, `apartment-cleaning.webp`, `deep-cleaning.webp`, `regular-cleaning.webp`, `move-in-out-cleaning.webp`, `office-cleaning.webp`, `sofa-carpet-cleaning.webp`, `kitchen-cleaning.webp`, `window-cleaning.webp`
- [x] T015 [US2] Redesign service cards in `src/components/home/ServiceGrid.tsx`: replace the icon-based card layout with image-based cards. Each card: `relative overflow-hidden rounded-xl min-h-[280px]` container, `next/image` with `fill` + `object-cover` using service `image` field, dark gradient overlay `bg-gradient-to-t from-black/80 via-black/40 to-transparent`, text content absolute-positioned at bottom (`absolute bottom-0 left-0 right-0 p-6`), service name in white bold, short description in `text-gray-200`
- [x] T016 [US2] Add hover zoom effect to service cards in `src/components/home/ServiceGrid.tsx`: wrap `next/image` in a `group` container, add `transition-transform duration-500 group-hover:scale-105` to the Image element, ensure `overflow-hidden` on parent clips the zoom
- [x] T017 [US2] Verify service card responsiveness in `src/components/home/ServiceGrid.tsx`: grid should be 1 column mobile, 2 columns tablet (`md:`), 3-4 columns desktop (`lg:`). Cards should maintain consistent height and overlay appearance across breakpoints

**Checkpoint**: All 8 service cards display relevant background images with readable overlay text and hover zoom. Independently testable on homepage.

---

## Phase 5: User Story 3 — Emirates & City Visual Navigation (Priority: P3)

**Goal**: Each emirate card on homepage shows iconic city landmark image. City pages have different hero images. City page service cards reuse service images.

**Independent Test**: Click each of 7 emirate cards — verify card has landmark image. On each city page, verify hero uses a different image than the card. Service cards on city pages show service images.

### Implementation for User Story 3

- [x] T018 [P] [US3] Source/create 7 emirate card images (WebP, ≤150KB each) and verify they exist at paths in `src/data/locations.ts`: `public/images/locations/dubai.webp` (Burj Khalifa/skyline), `abu-dhabi.webp` (Sheikh Zayed Mosque), `sharjah.webp` (Al Noor Mosque/waterfront), `ajman.webp` (Museum/beach), `ras-al-khaimah.webp` (Jebel Jais/mountains), `fujairah.webp` (Fort/coastline), `umm-al-quwain.webp` (Fort/mangrove)
- [x] T019 [P] [US3] Source/create 7 emirate hero images (WebP, ≤200KB each, DIFFERENT from card images) at `public/images/heroes/`: `dubai-hero.webp` (Dubai Marina night), `abu-dhabi-hero.webp` (Louvre/Corniche), `sharjah-hero.webp` (Heritage Area), `ajman-hero.webp` (Corniche/cityscape), `ras-al-khaimah-hero.webp` (desert/mountain), `fujairah-hero.webp` (beach/Al Bidyah), `umm-al-quwain-hero.webp` (waterfront/skyline)
- [x] T020 [US3] Redesign emirate cards in `src/components/home/LocationGrid.tsx`: same image-card pattern as service cards — `relative overflow-hidden rounded-xl min-h-[280px]`, `next/image` with `fill` + `object-cover` using emirate `image` field, dark gradient overlay, emirate name and area count at bottom, hover zoom effect (`group-hover:scale-105`)
- [x] T021 [US3] Update emirate page hero in `src/app/locations/[emirate]/page.tsx`: replace the solid-color hero section with a background image hero using the emirate's `heroImage` field, add `relative min-h-[60vh]` container with `next/image fill object-cover`, dark overlay `bg-black/60`, position emirate name and tagline text over the overlay
- [x] T022 [US3] Update emirate page area cards section in `src/app/locations/[emirate]/page.tsx`: for each area/city card, use the area's `image` field (with fallback chain: `city.image || emirate.image || '/images/default-area.webp'`) as background, apply same overlay + hover zoom pattern
- [x] T023 [US3] Update city page hero in `src/app/locations/[emirate]/[city]/page.tsx`: add city image as hero background using the city's `image` field (with fallback to emirate `image`), apply same hero pattern — `relative min-h-[60vh]`, `next/image fill`, dark overlay, city name overlay text
- [x] T024 [US3] Update city page service cards in `src/app/locations/[emirate]/[city]/page.tsx`: for each service listed, use the service `image` field from `services.ts` to display image-based cards (same pattern as Phase 4 ServiceGrid), reusing the same images for performance

**Checkpoint**: All 7 emirate cards have landmark images. Each city page has a unique hero image different from its card. Service cards on city pages display service images. All independently testable.

---

## Phase 6: User Story 4 — Area-Level Visual Discovery (Priority: P4)

**Goal**: Each area card on city pages displays a recognizable image of that area with consistent overlay and hover design.

**Independent Test**: Navigate to Dubai page, verify all 8 area cards show relevant area images. Check fallback works for areas without specific images.

### Implementation for User Story 4

- [x] T025 [P] [US4] Source/create area images for Dubai areas (WebP, ≤100KB each) at `public/images/areas/dubai/`: `jumeirah.webp`, `al-barsha.webp`, `downtown-dubai.webp`, `dubai-marina.webp`, `business-bay.webp`, `palm-jumeirah.webp`, `jbr.webp`, `silicon-oasis.webp`
- [x] T026 [P] [US4] Source/create area images for Abu Dhabi areas at `public/images/areas/abu-dhabi/`: `al-reem-island.webp`, `saadiyat-island.webp`, `khalifa-city.webp`, `corniche.webp`, `al-ain.webp`
- [x] T027 [P] [US4] Source/create area images for Sharjah areas at `public/images/areas/sharjah/`: `al-nahda.webp`, `al-majaz.webp`, `al-khan.webp`, `muwaileh.webp`
- [x] T028 [P] [US4] Source/create area images for remaining emirates at `public/images/areas/<emirate>/`: Ajman (2-3 areas), RAK (2-3 areas), Fujairah (2-3 areas), UAQ (2-3 areas) — use city-level landmarks or scenic images as fallback
- [x] T029 [US4] Verify fallback chain works in area card components: when an area image file is missing, the component should gracefully fall back to emirate image, then to `default-area.webp` — test by temporarily removing one area image and confirming no broken UI

**Checkpoint**: All area cards across all city pages show relevant images. Fallback chain works for missing images.

---

## Phase 7: User Story 5 — WhatsApp Contact Update (Priority: P5)

**Goal**: WhatsApp number updated to +971 545567799 everywhere on the site.

**Independent Test**: Click WhatsApp floating button on any page — opens WhatsApp with 971545567799. Check contact page and footer for correct number.

### Implementation for User Story 5

- [x] T030 [P] [US5] Update WhatsApp fallback number in `src/components/layout/WhatsAppButton.tsx`: change `+971501234567` to `+971545567799` in the fallback value on line 7
- [x] T031 [P] [US5] Update WhatsApp number in `src/components/layout/Footer.tsx`: find the WhatsApp link href and update the number to `971545567799` in the `wa.me` URL
- [x] T032 [P] [US5] Update WhatsApp number in `src/app/contact/page.tsx`: find the hardcoded number `+971 50 123 4567` and replace with `+971 545567799`, update the `wa.me` link to `wa.me/971545567799`
- [x] T033 [P] [US5] Update `.env.example` file: set `NEXT_PUBLIC_WHATSAPP_NUMBER=+971545567799`
- [x] T034 [US5] Search entire codebase for any remaining references to old WhatsApp numbers (`971501234567`, `+971 50 123 4567`, or any other variant) and update to `+971545567799`

**Checkpoint**: WhatsApp number is +971 545567799 in every location across the entire site.

---

## Phase 8: Polish & Cross-Cutting Concerns

**Purpose**: Performance optimization, cross-device QA, and regression testing across all stories

- [x] T035 Verify all images use `next/image` component with proper `width`, `height`, or `fill` props — audit `src/components/home/ServiceGrid.tsx`, `src/components/home/LocationGrid.tsx`, `src/app/locations/[emirate]/page.tsx`, `src/app/locations/[emirate]/[city]/page.tsx`
- [x] T036 Verify hero image in `src/components/home/Hero.tsx` has priority loading (not lazy) since it is above the fold — ensure no Largest Contentful Paint regression
- [x] T037 Audit all image file sizes: hero images ≤200KB, service/emirate card images ≤150KB, area images ≤100KB — compress any that exceed budget
- [x] T038 [P] Verify dark theme consistency: load every page type (home, service detail, emirate, city, contact, about) in dark theme and confirm gold color, overlays, and text readability are correct
- [x] T039 [P] Verify light theme gold vibrance: load every page type in light theme and confirm gold `#D4AF37` is vibrant, shiny, and clearly visible against white/light backgrounds
- [x] T040 Test responsive behavior across breakpoints: mobile (375px), tablet (768px), desktop (1440px) — verify all image cards, heroes, header, and nav render correctly on each
- [x] T041 Run `npm run build` to check for TypeScript errors and build-time issues — fix any errors before proceeding
- [x] T042 Run Lighthouse audit on homepage, one emirate page, and one city page — verify Performance score ≥90, LCP <2.5s, CLS <0.1
- [x] T043 Regression check: verify routing works, contact form submits, theme toggle works, SEO meta tags unchanged, footer links work, sitemap generates correctly

**Checkpoint**: All visual upgrade work complete, performant, responsive, and regression-free.

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies — start immediately
- **Foundational (Phase 2)**: Depends on Phase 1 — BLOCKS all user stories
- **US1 (Phase 3)**: Depends on Phase 2 — MVP, implement first
- **US2 (Phase 4)**: Depends on Phase 2 — can run parallel with US1 (different files)
- **US3 (Phase 5)**: Depends on Phase 2 (type extensions + data) — can run parallel with US1/US2
- **US4 (Phase 6)**: Depends on US3 (area card design established in Phase 5)
- **US5 (Phase 7)**: Depends on Phase 2 only — fully independent, can run anytime after foundation
- **Polish (Phase 8)**: Depends on ALL user stories being complete

### User Story Dependencies

- **US1 (P1)**: Independent — header/hero/gold are standalone
- **US2 (P2)**: Independent — ServiceGrid is separate from other components
- **US3 (P3)**: Independent — LocationGrid and location pages are separate; depends on T005-T008 for type/data
- **US4 (P4)**: Depends on US3 — area card design pattern established in emirate page updates
- **US5 (P5)**: Fully independent — simple text replacement across 4 files

### Parallel Opportunities

- **Phase 1**: T002 and T003 can run in parallel
- **Phase 2**: T005 and T006 can run in parallel (different type fields)
- **Phase 3**: T011 can run in parallel with T009/T010 (image sourcing vs code)
- **Phase 4**: T014 (image sourcing) can run in parallel with other phases
- **Phase 5**: T018 and T019 (image sourcing) can run in parallel with each other and T020
- **Phase 6**: T025, T026, T027, T028 can ALL run in parallel (different directories)
- **Phase 7**: T030, T031, T032, T033 can ALL run in parallel (different files)
- **Phase 8**: T038 and T039 can run in parallel (different themes)

---

## Parallel Example: User Story 5 (WhatsApp)

```text
# All 4 file updates can run simultaneously:
Task T030: Update WhatsAppButton.tsx
Task T031: Update Footer.tsx
Task T032: Update contact/page.tsx
Task T033: Update .env.example
# Then sequential:
Task T034: Search for remaining old numbers
```

## Parallel Example: User Story 4 (Area Images)

```text
# All area image sourcing tasks run simultaneously:
Task T025: Dubai areas (8 images)
Task T026: Abu Dhabi areas (5 images)
Task T027: Sharjah areas (4 images)
Task T028: Other emirates areas (~10 images)
# Then sequential:
Task T029: Verify fallback chain
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup (directory structure)
2. Complete Phase 2: Foundational (gold colors, types, data)
3. Complete Phase 3: User Story 1 (logo, header, hero)
4. **STOP and VALIDATE**: Homepage looks premium with vibrant gold and professional header
5. Deploy/demo if ready

### Incremental Delivery

1. Setup + Foundational → Gold system live, types ready
2. Add US1 → Premium homepage (MVP!)
3. Add US2 → Service cards with images → Deploy
4. Add US3 → City cards and page heroes → Deploy
5. Add US5 → WhatsApp updated (can slot in anytime) → Deploy
6. Add US4 → Area cards with images → Deploy
7. Polish → Performance verified, cross-device QA → Final deploy

---

## Notes

- [P] tasks = different files, no dependencies on incomplete tasks
- [Story] label maps task to specific user story for traceability
- Image sourcing tasks (T011, T014, T018, T019, T025-T028) can be done by the user in parallel with code implementation
- No unit tests — validation is visual (manual) + Lighthouse (automated)
- Commit after each phase completion for easy rollback
