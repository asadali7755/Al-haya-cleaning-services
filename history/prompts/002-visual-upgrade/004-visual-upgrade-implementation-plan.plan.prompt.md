---
id: 004
title: Visual Upgrade Implementation Plan
stage: plan
date: 2026-03-28
surface: agent
model: claude-opus-4-6
feature: 002-visual-upgrade
branch: 002-visual-upgrade
user: leo ali
command: /sp.plan
labels: ["plan", "visual-upgrade", "architecture", "images", "gold-color"]
links:
  spec: specs/002-visual-upgrade/spec.md
  ticket: null
  adr: null
  pr: null
files:
  - specs/002-visual-upgrade/plan.md
  - specs/002-visual-upgrade/research.md
  - specs/002-visual-upgrade/data-model.md
  - specs/002-visual-upgrade/quickstart.md
tests:
  - none
---

## Prompt

/sp.plan with 6-phase implementation plan: Phase 1 (gold color + header + logo), Phase 2 (hero + WhatsApp), Phase 3 (service cards images), Phase 4 (emirate/city cards + heroes), Phase 5 (area cards), Phase 6 (performance + QA). User provided detailed timeline, priority order, dependencies, risk mitigation, and what stays unchanged.

## Response snapshot

Created comprehensive implementation plan with 6 phases mapped to user's timeline. Research resolved 7 unknowns: gold color selection (#D4AF37), image overlay technique (next/image fill + gradient overlay), hero approach (keep existing CSS bg-image), SVG logo strategy (inline React component), image sourcing (placeholder-first), area image fallback chain (area → emirate → default), WhatsApp sources (4 files). Data model adds heroImage to Emirate and image to SubCity. ~55 images needed total. Constitution check PASS on all 6 principles. Quickstart guide created.

## Outcome

- ✅ Impact: Complete 6-phase plan, research, data model, quickstart — ready for /sp.tasks
- 🧪 Tests: none (planning phase)
- 📁 Files: plan.md, research.md, data-model.md, quickstart.md
- 🔁 Next prompts: /sp.tasks to generate actionable implementation tasks
- 🧠 Reflection: User's phased plan aligned well with spec. Key insight: hero already has bg-image pattern — just needs image quality check, not rebuild.

## Evaluation notes (flywheel)

- Failure modes observed: none
- Graders run and results (PASS/FAIL): constitution check PASS (both pre and post design)
- Prompt variant (if applicable): N/A
- Next experiment (smallest change to try): N/A
