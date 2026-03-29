---
id: 007
title: Real Images Download from Unsplash
stage: green
date: 2026-03-29
surface: agent
model: claude-opus-4-6
feature: 002-visual-upgrade
branch: 002-visual-upgrade
user: leo ali
command: /sp.implement
labels: ["images", "unsplash", "download", "visual-upgrade"]
links:
  spec: specs/002-visual-upgrade/spec.md
  ticket: null
  adr: null
  pr: null
files:
  - public/images/hero/hero-main.webp
  - public/images/services/*.webp (10 files)
  - public/images/locations/*.webp (7 files)
  - public/images/heroes/*.webp (7 files)
  - public/images/areas/**/*.webp (30 files)
  - public/images/default-area.webp
tests:
  - npm run build PASS (0 errors, 52 pages generated)
---

## Prompt

yar images to kisi pe b n lagi howi kya tum agent ko bhej k images khud internet se laa k nhi laga skte ho ???

(Translation: Images aren't showing properly on anything, can you send agents to fetch real images from the internet yourself?)

## Response snapshot

Replaced all 56 placeholder images with real Unsplash photographs:
- 1 hero image (1920x1080): professional cleaning / luxury interior
- 10 service images (800x600): villa, apartment, deep, regular, move-in/out, office, sofa, window, post-construction, kitchen cleaning
- 7 emirate card images (800x600): Dubai skyline, Sheikh Zayed Mosque, Sharjah, Ajman beach, RAK mountains, Fujairah coast, UAQ mangroves
- 7 emirate hero images (1920x1080): Dubai Marina night, Abu Dhabi Corniche, Sharjah heritage, beach scenes, desert landscapes
- 30 area images (800x600): Dubai areas (Jumeirah, Downtown, Marina, Palm, JBR, etc.), Abu Dhabi areas, Sharjah areas, Ajman/RAK/Fujairah/UAQ areas
- 1 default fallback image

Process: Agent searched for Unsplash photo IDs → Node.js script downloaded via HTTPS with redirect handling → 4 initial 404s fixed with alternate photo IDs → Build verified.

## Outcome

- ✅ Impact: All 56 placeholder images replaced with real Unsplash photographs — site now shows actual Dubai skylines, clean interiors, beaches, landmarks
- 🧪 Tests: npm run build PASS (52 pages, 0 errors)
- 📁 Files: 56 image files replaced in public/images/
- 🔁 Next prompts: Visual QA in browser, Lighthouse audit, deploy
- 🧠 Reflection: Unsplash direct image URLs (images.unsplash.com) work well for stock photos. 4/56 photo IDs were stale (404), quickly fixed with alternates. Batch download in groups of 4 avoided rate limiting.

## Evaluation notes (flywheel)

- Failure modes observed: Initial agent lacked Bash access for download; resolved by splitting into URL-finding (agent) + downloading (Bash). 4 Unsplash photo IDs returned 404; fixed with alternative IDs.
- Graders run and results (PASS/FAIL): build PASS, all 56 images exist PASS
- Prompt variant (if applicable): N/A
- Next experiment (smallest change to try): Run Lighthouse to measure image performance, consider converting to next/image optimized serving
