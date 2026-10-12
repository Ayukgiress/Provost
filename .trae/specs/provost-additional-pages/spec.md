# Spec: Provost Additional Pages (6 Screens)

## Problem
Provost is a scholarship/grant discovery & tracking platform. The landing home page (`/`) is implemented. Six additional authenticated product screens are referenced in the Figma-style preview and must be built in Next.js App Router as routeable pages with consistent design tokens, shared components, and working UI scaffolding (client-side mock data).

## Users & Goals
- **Primary user**: A prospective applicant (e.g., "Amina") who has signed in and wants to browse her personalized scholarship matches, open a detail page, view the About tab, track her application pipeline, complete her academic profile, and see pricing/FAQ.
- **Product goal**: Deliver working, visually faithful, routeable implementations of the 6 screens shown in the preview, reusing the existing design system and shareable UI pieces.

## Non-Goals
- Backend / real data layer / authentication (use mock in-page data).
- Form submission persistence (except trivial client state).
- Mobile 390px bespoke layouts (responsive is required, but no separate mobile artboards).
- SSO, payment processing, or real calendar sync.

## Pages to Build (App Router)
1. **Dashboard / Matches List**  — route: `/dashboard`
   - Top header with search, filters ("All / Recommended / Matchability / Deadline / Tracking"), status pills ("Shortlist", "Saved", "Tracking"), and a "Hi Amina, you have 14 matches" greeting.
   - Left column: match list cards. Each card has award name, institution, funding amount, fit-percentage circle, matchability tags, deadline chip, verdict pill (Apply Now / Fix Profile First / Shortlist), and quick actions.
   - Right sidebar: "Smart Match" breakdown card, "Global Reference Letters", "Upcoming Deadlines" minicard.
   - Bottom pagination / footer bar.

2. **Scholarship Detail — Main (Fit) Tab**  — route: `/scholarship/[slug]` (default view)
   - Fixed app header with breadcrumbs, "Share" button, "Shortlist" toggle, "Apply Now" CTA.
   - Header block: award name, institution, "Top Recommendation" tag, FitScoreCircle, fit-diagnosis text.
   - Funding block: $48,500 tuition + per-year breakdown.
   - Two-column body:
     * Left: Eligibility checklist (green check / amber warn rows with detail) with expandable subtext.
     * Right: Fit Breakdown mini progress bars (Academic Score / Demographics / Funding Priority), referee status, "Apply with confidence" card, required docs list.
   - "Why it's a good fit" section with paragraphs.
   - Bottom "Other Matches You May Qualify For" carousel strip of 3-4 mini cards.

3. **Scholarship Detail — About Tab**  — same route, client-side tab switcher showing "Why We Qualified" view (deep narrative + references + university image + research alignment paragraph + long body copy + reference signature cards from professors + "Mark Scholarship Complete" action).
   - Tabs: "Fit" (default) | "Why We Qualified" | "About the Scholarship"
   - About Scholarship: long description, research areas keywords, timeline, about the university with image.

4. **Application Tracker**  — route: `/tracker`
   - Header: "Application Tracker" title, priority sidebar (High/Medium/Low counts).
   - Main: The Commonwealth Shared Scholarship tracker card — application roadmap (5 steps with progress bar), task list with colored status dots and badges, action buttons ("Ping Recommender", "Resume Draft").
   - Empty-state card: "Nothing submitted yet. You've got this." with CTA buttons.
   - Deadline calendar strip: October month grid with marked deadline dates.
   - Bottom task table with deadline, progress %, status, assignee, last update.

5. **Academic Profile & Credentials**  — route: `/profile`
   - 5-step wizard header (Academic Profile → Documents → Personal Statement → LOR Details → Final Review).
   - "Your education background" section with country of residence, degree awarding university, degree title, GPA toggle, coursework areas, primary/secondary fields, research projects, awards.
   - Right sidebar: Profile Completeness meter, "Next actions to 100%" list, "Recommended Programs" list.

6. **Pricing, Testimonials & FAQ**  — route: `/pricing`
   - Header: "Invest in your funding journey" with monthly/annual toggle + billing cycle pills, plan chips (Monthly, Quarterly, Annual)
   - Two pricing cards (Free vs Plus Plan) matching home page style, with feature grid.
   - "Restrictions / Legal Payments" row below plans (Payment Methods, Cancellation, Refund, Privacy, Security badges).
   - Testimonial card: image + quote + name/degree + star rating + "What students say" + tags (Easy Matching, Saved Time, Great Support).
   - FAQ accordion: 4 expandable questions.
   - Final CTA banner: "Begin crafting your winning funding applications today" with two CTAs.

## Functional Requirements (Rules)
FR1. Every page must be routeable via App Router: `/dashboard`, `/scholarship/[slug]`, `/tracker`, `/profile`, `/pricing` all must render without errors.
FR2. A consistent **app-level sub-navigation bar** (not the marketing nav from home) must appear on all 5 authenticated pages (Dashboard, Detail, Tracker, Profile, Pricing pages can keep marketing nav). The authenticated nav has: Provost logo, page breadcrumbs/title, Search pill, Notifications, Messages, User avatar (AM).
FR3. Tab state on `/scholarship/[slug]` (Fit / Why We Qualified / About the Scholarship) must persist in client state and switch the visible body without full reload.
FR4. FAQ accordion items on `/pricing` must expand/collapse with onClick.
FR5. Profile wizard step indicator shows active step.
FR6. Deadline calendar in `/tracker` renders a real static October calendar with specific dates highlighted.
FR7. FitScoreCircle, VerdictPill, DeadlineChip shared components are reused; no copy-pasted duplicate component definitions.
FR8. All pages share the design token colors (`#14213D`, `#F5A524`, `#1F9D6B`, `#E8E3DA`, `#FAF8F4`), Inter + Newsreader fonts, rounded-2xl card radii, and `border-[#E8E3DA]` 1px borders.
FR9. `npm run build` succeeds (TypeScript check passes; no new type errors beyond the pre-existing `three` ambient module warning).

## Non-functional Requirements (Rubrics)
NFR1. Visual fidelity to the reference screenshot thumbnails: component density, spacing, typographic hierarchy.
NFR2. Component reuse: FitScoreCircle, VerdictPill, DeadlineChip, icon SVGs are reused rather than redefined.
NFR3. Maintainability: large pages are split into at least one shared sub-component (e.g., `AppHeader`, `MatchCard`, `TrackerCard`, `PricingPlanCard`) — but we keep things pragmatic.
NFR4. Accessibility: all buttons have labels; tab switching and accordions support keyboard.
NFR5. Responsive: layout stacks gracefully at md breakpoint (max-w grid collapse).

## Constraints & Dependencies
- Next.js 16 App Router, TypeScript strict, Tailwind v4 (`@import "tailwindcss"`), existing `globals.css` theme tokens.
- React 19, GSAP already installed (reuse gsap if animations are added; not required).
- Do not install new npm packages.
- All mock data must be plain TS objects defined at the top of each page file.
- Routes use the existing `/app` directory with `page.tsx` / `layout.tsx` files.
- No server actions or fetching; everything is client component or `'use client'` when state/hooks are used.

## Assumptions
- The `[slug]` detail route will render one canonical scholarship ("Horizon Global Master's Scholarship") regardless of slug — mock data only.
- The user ("Amina") avatar uses the letters "AM" monogram with dark background (same pattern as homepage testimonial avatars).
- SVG icons may be inlined (consistent with page.tsx icon components).

## Open Questions (none blocking)
- None — we will implement reasonable defaults for any ambiguity in the reference screenshots (e.g., copy length, exact dollar values are approximated from the visible numbers).

---

## Acceptance Criteria
All ACs are typed either `rule` (objective pass/fail) or `rubric` (evaluative with threshold ≥ pass mark).

### AC-1 (rule)
All 5 new routes render a page without runtime errors: `/dashboard`, `/scholarship/horizon-global`, `/tracker`, `/profile`, `/pricing`. Evidence: dev-server HTTP 200 + body renders.

### AC-2 (rule)
`npx tsc --noEmit` exits with code 0 (ignoring only the pre-existing `@types/three` ambient warning in BackgroundParticles). Evidence: `tsc` output.

### AC-3 (rule)
Shared components (FitScoreCircle, VerdictPill, DeadlineChip) are imported and used on detail/dashboard/tracker pages. Evidence: grep of imports across files.

### AC-4 (rule)
Scholarship detail page supports three tab states ("Fit", "Why We Qualified", "About the Scholarship") with a visual tab bar and clickable state switch. Evidence: snapshot or manual click behavior.

### AC-5 (rule)
Pricing FAQ accordion expands and collapses on click (at least 2 items, only clicked one changes). Evidence: manual click → DOM textContent change.

### AC-6 (rule)
Profile page shows a 5-step wizard header with a highlighted active step. Evidence: DOM snapshot showing active step styling applied.

### AC-7 (rule)
Tracker page shows an October month calendar grid with at least 3 highlighted deadline dates. Evidence: DOM snapshot confirms a calendar grid with visual markers.

### AC-8 (rule)
Design tokens are consistent: every page uses bg `#FAF8F4`/`#F5F3EF` areas, border `#E8E3DA`, primary navy `#14213D`, saffron `#F5A524`, success green `#1F9D6B`. Newsreader for headings, Inter for body. Evidence: CSS classnames / style props match the same variables as page.tsx.

### AC-9 (rubric, 0-2, threshold ≥1)
Visual fidelity to reference screenshot layout proportions and density.
- 2: Layout sections appear in correct order, relative sizes match, card hierarchy is faithful.
- 1: Key sections exist but some proportions or density are off.
- 0: Major sections missing or severely mis-ordered.

### AC-10 (rubric, 0-2, threshold ≥1)
Code structure quality:
- 2: Routes follow Next.js conventions, heavy UI is split into ≥2 reusable components per page, no duplicated SVG icon code.
- 1: Pages are correctly structured but some pages are monolithic with inline code.
- 0: Files misplaced, duplicate components, or TS anti-patterns.
