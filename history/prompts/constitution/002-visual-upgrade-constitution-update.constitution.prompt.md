---
id: 002
title: Visual Upgrade Constitution Update
stage: constitution
date: 2026-03-28
surface: agent
model: claude-opus-4-6
feature: none
branch: 001-cleaning-services-website
user: leo ali
command: /sp.constitution
labels: ["constitution", "visual-upgrade", "branding", "performance"]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
  - .specify/memory/constitution.md
tests:
  - none
---

## Prompt

Update Scope
1. Header Enhancement

Al Haya ka custom logo create karo aur header mein lagao (professional, luxury feel)
Navigation links (Home, Services, About, Contact etc.) ka font size increase karo — readable aur bold hona chahiye
Header overall polished aur premium dikhna chahiye

2. Hero Section Overhaul

Current gray background hata ke background image lagao jo cleaning services ko showcase kare (professional cleaning team at work, sparkling clean space, etc.)
Image dark overlay ke saath taake text readable rahe
Gold color ko shiny/vibrant banao — current light theme mein gold bahut dim hai, isko bright luxurious gold banana hai
Hero section ki height sufficient ho taake image impactful lage

3. Service Cards — Background Images

"Our Cleaning Services" section ke har card pe relevant background image lagao:

Deep Cleaning → deep cleaning action shot
Regular Cleaning → clean organized home
Move In/Out Cleaning → empty clean apartment
Villa Cleaning → luxury villa interior
Office Cleaning → clean modern office
Sofa/Carpet Cleaning → sofa/carpet cleaning process
Kitchen Cleaning → sparkling kitchen
Window Cleaning → window cleaning action

Images professional quality honi chahiye with dark overlay for text readability

4. Emirates/City Pages — Visual Upgrade

"We Serve All Emirates" section ke har city card pe city ki iconic image lagao:

Dubai → Burj Khalifa / skyline
Abu Dhabi → Sheikh Zayed Mosque
Sharjah → Sharjah landmarks
Ajman → Ajman fort/beach
Ras Al Khaimah → Jebel Jais / mountains
Fujairah → Fujairah fort / coast
Umm Al Quwain → UAQ landmarks

Har city ke individual page ka hero section mein bhi city ki image lagao — lekin card image se different famous image use karo
City pages ke andar "Our Services" cards mein bhi relevant service images lagao
Sections ki height adjust karo taake images properly fit hon aur impactful lagein

5. Area Pages — Background Images

"Areas We Serve in [City]" section ke har area card pe bhi area ki background image lagao
Professional, recognizable images hon jo area ko represent karein

6. WhatsApp Number Update

WhatsApp floating button ka number update karo: +971 545567799
Har jagah jahan WhatsApp number display ho raha hai wahan update karo

Design Principles (For All Updates)

Gold Color: Shiny, vibrant, luxurious gold — not dim/muted. Light theme mein clearly visible aur eye-catching hona chahiye
Images: High quality but optimized — WebP format, compressed, lazy loaded
Performance: Website load time 2-3 seconds max — images ko optimize karna mandatory hai
Text Readability: Har background image pe dark/gradient overlay lagao taake white/gold text clearly readable rahe
Consistency: Sab pages ka visual style consistent rahe — same overlay style, same font treatment, same spacing
Responsive: Sab images mobile, tablet, desktop pe properly fit hon

Technical Constraints

Next.js existing project structure maintain karo
Image optimization: WebP format, lazy loading, proper sizing (srcSet if needed)
CSS variables mein gold color values update karo for both themes
No external image hosting — sab images project ke public folder mein hon
Lighthouse performance score 90+ maintain karna hai

What NOT to Change

Overall site structure aur routing
Content/copy of pages (sirf visual changes)
Contact form functionality
SEO meta tags aur schema markup
Theme toggle functionality (dark/light)
Footer design (unless gold color update applies)
Any page that is not mentioned above

Success Criteria

Hero section visually stunning with background image
All cards across site have relevant, professional background images
Gold color is vibrant and shiny in light theme
Header looks premium with logo and bold navigation
Page load time under 3 seconds
All images lazy loaded and optimized
WhatsApp number updated everywhere
Responsive on all devices

## Response snapshot

Updated the project constitution to v1.0.0 with 6 core principles derived from the visual upgrade scope: (I) Visual-First Premium Branding, (II) Performance Budget, (III) Image Management, (IV) Responsive & Accessible Design, (V) Content Integrity, (VI) Smallest Viable Diff. Added Design Standards section (gold color palette, overlay specs, typography), Technical Constraints section (Next.js 16, Tailwind 4, WebP images), and Governance section with versioning policy. All templates checked for consistency — no updates needed.

## Outcome

- ✅ Impact: Constitution established with 6 principles covering branding, performance, images, responsiveness, content integrity, and minimal diffs
- 🧪 Tests: none (governance document)
- 📁 Files: .specify/memory/constitution.md (created v1.0.0)
- 🔁 Next prompts: /sp.specify to create feature spec for visual upgrade, then /sp.plan and /sp.tasks
- 🧠 Reflection: User scope is comprehensive — constitution captures the invariants well, leaving specific implementation details for spec/plan phases

## Evaluation notes (flywheel)

- Failure modes observed: none
- Graders run and results (PASS/FAIL): manual review PASS — no unresolved placeholders, all principles testable
- Prompt variant (if applicable): N/A
- Next experiment (smallest change to try): N/A
