# Tasks: Provost Additional Pages

Derived from `spec.md`. All tasks target `/home/giress/provost`.

Status: {pending | in_progress | blocked | completed | cancelled}

Dependencies (DAG):
- T1 → T2, T3, T4, T5, T6, T7  (shared AppHeader + MatchCard first, then all pages can use it)
- T3 → T8  (build passes only after all pages exist)
- T9 comes after Implement queue drains.

---

## Task 1: Shared authenticated UI components (AppHeader, MatchCard, PricingPlanCard)

**Status:** pending
**Priority:** high

Build 3 reusable components (and any small inline SVG icon helpers needed) that multiple pages will import:
- `app/components/AppHeader.tsx` — authenticated sub-nav (logo, title/breadcrumb area, search pill, notifications icon, messages icon, AM avatar).
- `app/components/MatchCard.tsx` — single match list card used by Dashboard and detail page "Other matches" strip. Props: `{ id, award, institution, amount, fitScore, tags, deadlineDays, verdict, ... }`. Uses FitScoreCircle + VerdictPill + DeadlineChip.
- `app/components/PricingPlanCard.tsx` — pricing card (Free + Plus variants) shared by home page future use and `/pricing`.
- Consolidate small SVG icons used across pages into a single `app/components/icons.tsx` barrel (IconSpark, IconCheck, IconWarn, IconPlay, IconArrow, IconUp, IconStar, IconBell, IconSearch, IconClipboard, IconCalendar, IconShield, IconLock, IconChevron, IconDoc, IconSync).

**Maps to AC coverage:**
- AC-3 (shared components imported & reused), AC-8 (design tokens consistent).

**Test Requirements:**
- TR-T1a (rule): `grep -r "from.*AppHeader"` matches at least 4 page files.
- TR-T1b (rule): `grep -r "from.*MatchCard"` matches at least 2 page files.
- TR-T1c (rule): MatchCard renders all required props (fit score, verdict pill, deadline chip) without errors — TS compile check.
- TR-T1d (rubric 0-2, threshold ≥1): Component API cleanliness. 2 = typed props, no `any`. 1 = some `any`. 0 = component does not compile.

---

## Task 2: Dashboard `/app/dashboard/page.tsx`

**Status:** pending
**Priority:** high

The Dashboard / Matches List screen.
- Top area: "Hi Amina, you have 14 matches" greeting with "All / Recommended / Matchability / Deadline / Tracking" sort pills and Shortlist / Saved / Tracking filter toggles.
- Two-column grid (md+):
  - Left: MatchCard vertical list with at least 5 mock matches (varying fit scores, verdict types apply/fix-first/skip, deadlines).
  - Right sidebar cards: Smart Match fit breakdown (Academic / Demographics / Funding Priority progress bars), Global Reference Letters status card (2 letters requested, 1 pending), Upcoming Deadlines mini-list.
- Bottom: footer row matching the screenshot footer links bar.
- Use mock data typed as a `Match[]` interface at the top of the file.

**Maps to AC coverage:**
- AC-1 (route renders), AC-3 (shared components), AC-8 (tokens), AC-9 (visual fidelity).

**Test Requirements:**
- TR-T2a (rule): `/dashboard` renders (visually or via HTTP 200 + body has "Hi Amina" and "14 matches" text).
- TR-T2b (rule): At least 5 MatchCard instances are rendered (grep the JSX return or inspect DOM for count).
- TR-T2c (rule): Right sidebar contains at minimum 3 card blocks (Smart Match, Referee, Upcoming Deadlines).
- TR-T2d (rubric 0-2, threshold ≥1): layout matches reference screenshot's 2-col density.
  - 2 = list density, sidebar widths, card paddings match home page style.
  - 1 = correct structure but some spacing differs.
  - 0 = single-column or missing big chunks.

---

## Task 3: Scholarship Detail `/app/scholarship/[slug]/page.tsx` (tabs: Fit, Why We Qualified, About the Scholarship)

**Status:** pending
**Priority:** high

Dynamic route that renders the Horizon Global Master's Scholarship detail view regardless of slug param.
- Header block: breadcrumbs, Top Recommendation tag, FitScoreCircle (85), award title, institution, funding block $48,500, "Apply Now" CTA, "Shortlist" toggle, share.
- Tab bar: **Fit** | **Why We Qualified** | **About the Scholarship** — active tab highlighted with saffron underline or active state (use `useState`).
- Fit tab body: left eligibility checklist rows (4+ rows with ok/warn icons and copy), right fit breakdown progress bars, documents list, referee status with avatar.
- Why We Qualified tab: long narrative paragraphs, research alignment, 2 "reference signature" cards from professors, "Mark Scholarship Complete" primary button.
- About the Scholarship tab: long body copy, research areas keyword pills, timeline grid, about the university block with image placeholder (use gradient or inline decorative pattern).
- Footer: "Other Matches You May Qualify For" horizontal strip with 3-4 MatchCard mini.

**Maps to AC coverage:**
- AC-1 (route renders), AC-3 (shared components), AC-4 (3-tab state works), AC-8 (tokens), AC-9.

**Test Requirements:**
- TR-T3a (rule): `/scholarship/horizon` route resolves to HTTP 200 with "Horizon Global Master's Scholarship" in the body.
- TR-T3b (rule): 3 tab buttons exist; clicking each changes a visible content panel without reload (inspect state or active class).
- TR-T3c (rule): Eligibility checklist has at least 4 rows with mixed ok/warn verdicts.
- TR-T3d (rule): "Other Matches" strip renders at least 3 mini cards.
- TR-T3e (rubric 0-2, threshold ≥1): Tab bar visual design matches the reference screenshot's density.
  - 2 = Tab bar layout, content layout proportions, fit/breakdown side-by-side all correct.
  - 1 = Tabs work but some content is vertical instead of split.
  - 0 = No tab state or missing major blocks.

---

## Task 4: Application Tracker `/app/tracker/page.tsx`

**Status:** pending
**Priority:** high

The Application Tracker dashboard page.
- Header: "Application Tracker" title, Priority sidebar counters (High, Medium, Low).
- Main card: Commonwealth Shared Scholarship tracker with:
  * Roadmap title "3 of 5 Steps Complete" + progress bar (60% gradient fill navy→saffron→green).
  * 5 task rows with colored status dots (green/ambery) and status pill badges.
  * Two buttons: "Ping Recommender" (navy), "Resume Draft" (outlined white).
- Empty state card: "Nothing submitted yet. You've got this." with two outlined CTAs (Book a Strategist, Research Programs).
- October calendar grid (4–5 weeks × 7 cols, specific highlighted dates e.g., 12, 18, 24, 30).
- Bottom task table with columns: Scholarship / Deadline / Progress / Status / Assignee / Last Update, 3-4 rows.

**Maps to AC coverage:**
- AC-1 (route), AC-3 (shared via FitScoreCircle, verdict-like pills), AC-7 (calendar grid w/ ≥3 highlights), AC-8, AC-9.

**Test Requirements:**
- TR-T4a (rule): `/tracker` renders with text "Application Tracker" and "Commonwealth Shared Scholarship".
- TR-T4b (rule): October calendar renders a 7-column grid with ≥3 cells highlighted (distinct bg-color or border).
- TR-T4c (rule): Bottom data table renders 3+ rows with visible status values.
- TR-T4d (rule): Empty-state card shows with text and 2 CTA buttons.
- TR-T4e (rubric 0-2, threshold ≥1): density and layout.
  - 2 = Roadmap card, empty state, calendar, and task table are arranged with the correct spacing as shown.
  - 1 = all 4 sections present but layout is all-stacked or cramped.
  - 0 = missing sections.

---

## Task 5: Academic Profile & Credentials `/app/profile/page.tsx`

**Status:** pending
**Priority:** medium

Student profile wizard screen.
- 5-step wizard header as pills or chips: Academic Profile → Documents → Personal Statement → LOR Details → Final Review. Active (step 1/5: Academic Profile) has filled saffron/navy styling.
- Left main column, sections:
  * "Your education background" header.
  * Country dropdown (with check icon, "Currently studying at University of Khartoum").
  * Degree-awarding university row (University of Khartoum, Sudan, with "Verified" badge).
  * Degree title: BSc Architecture (Hons) — dropdown toggles.
  * GPA row: "First-class Hons / 3.93/4.00 GPA" with toggle.
  * Primary field + Secondary field chips.
  * Relevant coursework chip cloud (Building Science, Construction, Structures, Urban Planning...).
  * Research projects cards (2 cards with titles, dates, tags).
  * Academic awards list (3 awards with year badges).
- Right sidebar: Profile Completeness meter (67%), "Next actions to reach 100%" todo list with checkboxes, "Recommended Programs" list (3 matches).

**Maps to AC coverage:**
- AC-1, AC-6 (5-step wizard indicator active), AC-8, AC-9.

**Test Requirements:**
- TR-T5a (rule): `/profile` renders with text "Academic Profile" or "Academic Profile & Credentials" and shows a 5-step wizard header.
- TR-T5b (rule): Exactly 5 wizard step labels rendered; the first/active one has distinct CSS styling (bg or border).
- TR-T5c (rule): Right sidebar includes a Profile Completeness meter/progress bar or percentage.
- TR-T5d (rule): Left column contains at least 6 distinct sections (education, country, university, degree, GPA, fields, coursework, research, awards — count whichever present ≥ 6).
- TR-T5e (rubric 0-2, threshold ≥1): wizard visual design.
  - 2 = step pills styled as active/upcoming connectors between them match reference aesthetics.
  - 1 = steps exist but are basic.
  - 0 = steps missing.

---

## Task 6: Pricing, Testimonials & FAQ `/app/pricing/page.tsx`

**Status:** pending
**Priority:** medium

Reuses or mirrors the home page pricing section, extends with billing toggle + testimonials + FAQ + CTA banner.
- Header: "Invest in your funding journey", subtitle, billing cycle toggle chip row (Monthly / Quarterly / Annual, monthly pre-selected), billing help pill ("Bill monthly • Cancel anytime").
- Two-column pricing grid:
  * Free plan ($0) with 4 checked features + 2 locked "Plus" features.
  * Plus plan ($19/mo, best-value rotated corner ribbon) with 6 checked features.
- Below plans: Restrictions/Legal Payments badges row (Payment Methods, Cancellation, Refunds, Privacy, Security, Auto-Renew Policy icons + labels).
- Testimonial block: Student profile card (name + star rating + program + year), big quote text, attribute tags (Easy Matching, Saved Time, Great Support).
- FAQ accordion: 4 questions with chevron + collapsible body.
- Final CTA banner: dark navy card with "Begin crafting your winning funding applications today" + two buttons (yellow primary + outline secondary).
- Footer links matching home page.

**Maps to AC coverage:**
- AC-1, AC-5 (FAQ expand/collapse ≥2 items clickable), AC-8, AC-9.

**Test Requirements:**
- TR-T6a (rule): `/pricing` renders with "Invest in your funding journey" H1.
- TR-T6b (rule): Billing cycle chip row has 3 labels (Monthly/Quarterly/Annual).
- TR-T6c (rule): Pricing FAQ accordion has ≥4 items; 2 different clicks expand their respective bodies (content appears or class toggles).
- TR-T6d (rule): Testimonial section renders with a 5-star rating visualization and a quote block.
- TR-T6e (rule): Final CTA banner contains at least 2 button elements.
- TR-T6f (rubric 0-2, threshold ≥1): layout and density.
  - 2 = Plans, legal badges row, testimonial card, FAQ, and CTA banner proportions match.
  - 1 = All 5 blocks but spacing/width approximate.
  - 0 = ≥2 blocks missing.

---

## Task 7: Consistent authenticated sub-nav + footer

**Status:** pending
**Priority:** medium

Ensure the 5 authenticated pages (Dashboard, Scholarship Detail, Tracker, Profile, Pricing) have either the AppHeader (T1) or an equivalent minimal navbar so the visual language is consistent.
- The home `/` keeps its marketing nav.
- `/pricing` may use marketing nav OR authenticated nav; we use authenticated AppHeader for consistency with the other 4 pages shown in the screenshot.
- Add a light bottom footer with links (Privacy, Terms, Contact, Support) + © 2026 Provost line on every authenticated page.

**Maps to AC coverage:**
- AC-2 (shared components), AC-8 (tokens).

**Test Requirements:**
- TR-T7a (rule): Dashboard, tracker, scholarship detail, profile, pricing pages all render an app header containing the Provost logo mark and an "AM" user avatar.
- TR-T7b (rule): Footer with copyright text "Provost" appears on all 5 pages.

---

## Task 8: Build & TypeScript verification

**Status:** pending
**Priority:** high

Run:
```
npx tsc --noEmit --pretty false
```
Accept only the pre-existing `@types/three` declaration warning. All other errors must be fixed.

Also run:
```
npm run build  # or pnpm build
```
Ensure Next build completes successfully.

**Maps to AC coverage:**
- AC-2 (tsc 0).

**Test Requirements:**
- TR-T8a (rule): `tsc --noEmit` returns exit 0, and stderr contains no new type errors outside the `three` module line.
- TR-T8b (rule): `next build` returns exit 0 with all pages compiled.

---

## Implementation sequence (atomic)
1. Task 1 (shared components) — required for 4+ other tasks.
2. Tasks 2, 3, 4, 5, 6 in any order after T1 — each page is independent.
3. Task 7 last (pages exist; add AppHeader/footer where any is missing).
4. Task 8 final compile/build check.

## Note on cancelled items
None to start.
