"use client";

import Link from "next/link";
import { useState } from "react";
import WorkspaceShell from "../../../components/WorkspaceShell";
import MatchCard from "../../../components/MatchCard";
import FitScoreCircle from "../../../components/FitScoreCircle";
import VerdictPill from "../../../components/VerdictPill";
import DeadlineChip from "../../../components/DeadlineChip";

import {
  IconSpark,
  IconCheck,
  IconWarn,
  IconShare,
  IconBookmark,
  IconChevron,
  IconCalendar,
  IconLock,
  IconGlobe,
  IconArrow,
} from "@/app/components/icons";

export default function ScholarshipDetailPage() {
  const [tab, setTab] = useState<string>("fit");
  const [shortlisted, setShortlisted] = useState<boolean>(false);

  const cardShadow =
    "shadow-[0_2px_10px_-2px_rgba(20,33,61,0.06),0_1px_3px_-1px_rgba(20,33,61,0.03)]";

  const tabs = [
    { id: "fit", label: "Fit" },
    { id: "qualified", label: "Why We Qualified" },
    { id: "about", label: "About the Scholarship" },
  ] as const;

  const eligibilityRows = [
    {
      type: "ok" as const,
      title: "Citizenship Qualified",
      sub: "Citizens of sub-Saharan Africa and South Asian countries are prioritised — your profile matches the primary nationalities covered by the trust charter.",
    },
    {
      type: "ok" as const,
      title: "Thesis / Portfolio GPA",
      sub: "Minimum 2:1 (UK) or 3.5 / 4.0 GPA required. Your undergraduate transcript and published abstract both exceed the baseline threshold.",
    },
    {
      type: "warn" as const,
      title: "Deadline Approaching",
      sub: "Final round closes October 30, 2026. Strongly advised to register on the university portal at least 48 hours before the submission gate.",
    },
    {
      type: "warn" as const,
      title: "Standardised Testing",
      sub: "GRE general or IELTS Academic is formally required. If you already hold an equivalent UK degree, upload an exemption letter instead.",
    },
    {
      type: "ok" as const,
      title: "English Language Proof",
      sub: "IELTS Academic 7.5 overall (minimum 7.0 in each band) already met on file. Your test validity window extends past enrolment.",
    },
    {
      type: "warn" as const,
      title: "Financial Need Documentation",
      sub: "Household income statement and tax documentation required for the full-tuition bursary component. Upload bank letters by October 25.",
    },
  ];

  const fitBreakdown = [
    { label: "Academic", score: 92, color: "#1F9D6B" },
    { label: "Demographics", score: 78, color: "#F5A524" },
    { label: "Funding Priority", score: 100, color: "#14213D" },
  ];

  const requiredDocs = [
    { name: "Academic Transcripts", ready: true },
    { name: "Research Proposal (Draft 3)", ready: true },
    { name: "Referee 2 Letter", ready: false },
    { name: "Financial Need Statement", ready: false },
  ];

  const refereeRows = [
    {
      initials: "SB",
      name: "Professor Sarah Bhatt",
      role: "Faculty of Geography & Environment, Oxford",
      status: "Letter uploaded",
      ready: true,
    },
    {
      initials: "DR",
      name: "Dr. David Rukumbuzi",
      role: "Dept. of Development Studies, LSE",
      status: "Acknowledged — drafting letter",
      ready: false,
    },
  ];

  const researchAreas = [
    "Climate Policy",
    "Sustainable Finance",
    "Behavioural Science",
    "Energy Transition",
    "Urban Governance",
    "Gender Economics",
    "Public Health Systems",
    "Development Finance",
  ];

  const timelineSteps = [
    {
      step: "01",
      title: "Apply",
      date: "Oct 30, 2026",
      desc: "Complete online application, research proposal and referee uploads.",
    },
    {
      step: "02",
      title: "Interview",
      date: "Jan 14–28, 2027",
      desc: "Shortlisted candidates invited to 30-minute departmental panel.",
    },
    {
      step: "03",
      title: "Decision",
      date: "Mar 5, 2027",
      desc: "Scholarship award notification released via the student portal.",
    },
    {
      step: "04",
      title: "Enrol",
      date: "Sep 20, 2027",
      desc: "Welcome week at Oxford begins; induction for award holders.",
    },
  ];

  return (
    <WorkspaceShell pageTitle="Scholarship details">
      <div
        className="min-h-screen bg-[#FAF8F4] text-[#1b1c1a]"
        style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
      >
        {/* 2. Breadcrumb row */}
        <div className="w-full px-4 md:px-8 pt-6 md:pt-8">
          <nav className="flex items-center gap-2 text-sm text-[#6B7280]">
            <Link
              href="/dashboard"
              className="hover:text-[#14213D] transition-colors"
            >
              Dashboard
            </Link>
            <IconChevron className="w-3 h-3 opacity-60" />
            <Link
              href="/dashboard"
              className="hover:text-[#14213D] transition-colors"
            >
              Matches
            </Link>
            <IconChevron className="w-3 h-3 opacity-60" />
            <span className="text-[#14213D] font-medium">
              Horizon Global Master&apos;s Scholarship
            </span>
          </nav>
        </div>

        {/* 3. Scholarship header block */}
        <main className="w-full px-4 md:px-8 pb-16">
          <section className="pt-6 md:pt-8">
            {/* Pill row */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
              <div className="inline-flex items-center gap-2 bg-[#FEF3D6] border border-[#F5A524]/30 text-[#835400] px-4 py-2 rounded-full text-xs font-semibold">
                <IconSpark className="text-[#F5A524] w-4 h-4" />
                Top Recommendation
              </div>
              <div className="flex items-center gap-2">
                <button className="inline-flex items-center gap-1.5 bg-white border border-[#E8E3DA] text-[#14213D] px-3.5 py-2 rounded-lg text-xs font-semibold hover:bg-[#F5F3EF] transition-colors">
                  <IconShare className="w-3.5 h-3.5" />
                  Share
                </button>
                <button
                  onClick={() => setShortlisted((s) => !s)}
                  className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold border transition-colors ${
                    shortlisted
                      ? "bg-[#FEF3D6] border-[#F5A524]/40 text-[#835400]"
                      : "bg-white border-[#E8E3DA] text-[#14213D] hover:bg-[#F5F3EF]"
                  }`}
                >
                  <IconBookmark className="w-3.5 h-3.5" />
                  {shortlisted ? "Shortlisted" : "Shortlist"}
                </button>
              </div>
            </div>

            {/* Title */}
            <h1
              className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#14213D] leading-[1.1] mb-2"
              style={{ fontFamily: "'Newsreader', Georgia, serif" }}
            >
              Horizon Global Master&apos;s Scholarship
            </h1>
            <p className="text-sm md:text-base text-[#4B5563] mb-6">
              University of Oxford — Fully-Funded MSc Students
            </p>

            {/* Fit row */}
            <div
              className={`bg-white border border-[#E8E3DA] rounded-2xl p-5 md:p-6 mb-5 ${cardShadow}`}
            >
              <div className="flex flex-col md:flex-row md:items-center gap-5 md:gap-6">
                <FitScoreCircle score={85} size={72} />
                <div className="flex-1 min-w-0">
                  <div className="text-xs font-semibold uppercase tracking-wider text-[#F5A524] mb-1">
                    Fit Diagnosis
                  </div>
                  <p className="text-sm text-[#4B5563] leading-relaxed max-w-xl">
                    Your academic record, research alignment with the Oxford
                    Environmental Change Institute, and demographic eligibility
                    make this a strong match against the published criteria.
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-2 md:justify-end">
                  <VerdictPill type="apply" text="Strong Match" />
                  <DeadlineChip daysRemaining={9} text="9 days left" />
                </div>
              </div>
            </div>

            {/* Funding card */}
            <div
              className="rounded-2xl p-6 md:p-7 mb-5 text-white relative overflow-hidden"
              style={{
                background: "#14213D",
              }}
            >
              <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                  <div
                    className="text-4xl md:text-5xl font-bold tabular-nums mb-1"
                    style={{ fontFamily: "'Newsreader', Georgia, serif" }}
                  >
                    $48,500
                  </div>
                  <div className="text-xs md:text-sm text-[#7c89aa] mb-4">
                    Funding award / tuition
                  </div>
                  <div className="flex flex-wrap gap-x-8 gap-y-2 text-sm">
                    <div>
                      <div className="text-[11px] font-semibold uppercase tracking-wider text-[#7c89aa] mb-0.5">
                        Year 1
                      </div>
                      <div className="font-semibold tabular-nums">$24,250</div>
                    </div>
                    <div>
                      <div className="text-[11px] font-semibold uppercase tracking-wider text-[#7c89aa] mb-0.5">
                        Year 2
                      </div>
                      <div className="font-semibold tabular-nums">$24,250</div>
                    </div>
                    <div>
                      <div className="text-[11px] font-semibold uppercase tracking-wider text-[#7c89aa] mb-0.5">
                        Stipend / yr
                      </div>
                      <div className="font-semibold tabular-nums">£18,100</div>
                    </div>
                    <div>
                      <div className="text-[11px] font-semibold uppercase tracking-wider text-[#7c89aa] mb-0.5">
                        Duration
                      </div>
                      <div className="font-semibold">2 years (MSc)</div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Decorative globe flourish */}
              <div className="pointer-events-none absolute -right-16 -top-16 opacity-10">
                <IconGlobe className="w-[280px] h-[280px]" />
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 mb-10">
              <button className="inline-flex items-center justify-center gap-2 bg-[#1F9D6B] text-white px-6 py-3.5 rounded-xl text-sm font-semibold hover:bg-[#1a8a5d] transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1F9D6B]">
                Apply Now
                <IconArrow className="w-4 h-4" />
              </button>
              <button className="inline-flex items-center justify-center gap-2 bg-white border border-[#E8E3DA] text-[#14213D] px-6 py-3.5 rounded-xl text-sm font-semibold hover:bg-[#F5F3EF] transition-colors">
                <IconBookmark className="w-4 h-4" />
                Save to Shortlist
              </button>
              <button className="inline-flex items-center justify-center gap-2 bg-white border border-[#E8E3DA] text-[#14213D] px-6 py-3.5 rounded-xl text-sm font-semibold hover:bg-[#F5F3EF] transition-colors">
                <IconCalendar className="w-4 h-4" />
                Export to Calendar
              </button>
            </div>
          </section>

          {/* 4. Tab bar */}
          <div className="border-b border-[#E8E3DA] mb-8">
            <div className="flex flex-wrap gap-1 md:gap-2">
              {tabs.map((t) => {
                const active = tab === t.id;
                return (
                  <button
                    key={t.id}
                    onClick={() => setTab(t.id)}
                    className={`relative px-4 md:px-6 py-3.5 text-sm transition-colors ${
                      active
                        ? "text-[#14213D] font-semibold"
                        : "text-[#6B7280] hover:text-[#14213D] font-medium"
                    }`}
                  >
                    {t.label}
                    {active && (
                      <span
                        className="absolute left-0 right-0 bottom-[-1px] h-[3px] rounded-full"
                        style={{ backgroundColor: "#F5A524" }}
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Tab panels */}
          <div>
            {/* ============ PANEL 1 — FIT ============ */}
            {tab === "fit" && (
              <div>
                {/* Two-column grid */}
                <div className="grid md:grid-cols-2 gap-6 mb-10">
                  {/* Left — Eligibility checklist */}
                  <div
                    className={`bg-white border border-[#E8E3DA] rounded-2xl p-5 md:p-6 ${cardShadow}`}
                  >
                    <h2
                      className="text-lg font-semibold text-[#14213D] mb-1"
                      style={{ fontFamily: "'Newsreader', Georgia, serif" }}
                    >
                      Eligibility Checklist
                    </h2>
                    <p className="text-xs text-[#6B7280] mb-5">
                      Auto-verified against your Provost profile
                    </p>
                    <div className="space-y-4">
                      {eligibilityRows.map((row, i) => (
                        <div
                          key={i}
                          className="flex items-start gap-3 pb-4 border-b border-[#F5F3EF] last:border-0 last:pb-0"
                        >
                          <div
                            className={`mt-0.5 shrink-0 w-6 h-6 rounded-full flex items-center justify-center ${
                              row.type === "ok"
                                ? "bg-[#E8F5EE]"
                                : "bg-[#FEF3D6]"
                            }`}
                          >
                            {row.type === "ok" ? (
                              <IconCheck className="text-[#1f9d6b] w-3.5 h-3.5" />
                            ) : (
                              <IconWarn className="text-[#d98a00] w-3.5 h-3.5" />
                            )}
                          </div>
                          <div className="min-w-0 flex-1">
                            <div
                              className={`text-sm font-semibold mb-0.5 ${
                                row.type === "ok"
                                  ? "text-[#1f9d6b]"
                                  : "text-[#d98a00]"
                              }`}
                            >
                              {row.title}
                            </div>
                            <div className="text-xs text-[#6B7280] leading-relaxed">
                              {row.sub}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right — Fit Breakdown */}
                  <div className="space-y-6">
                    {/* Fit Breakdown card */}
                    <div
                      className={`bg-white border border-[#E8E3DA] rounded-2xl p-5 md:p-6 ${cardShadow}`}
                    >
                      <h2
                        className="text-lg font-semibold text-[#14213D] mb-1"
                        style={{ fontFamily: "'Newsreader', Georgia, serif" }}
                      >
                        Fit Breakdown
                      </h2>
                      <p className="text-xs text-[#6B7280] mb-5">
                        Dimension-wise scoring relative to candidate pool
                      </p>
                      <div className="space-y-4 mb-5">
                        {fitBreakdown.map((d) => (
                          <div key={d.label}>
                            <div className="flex justify-between text-xs mb-1.5">
                              <span className="text-[#4B5563] font-medium">
                                {d.label}
                              </span>
                              <span className="font-semibold text-[#14213D] tabular-nums">
                                {d.score}%
                              </span>
                            </div>
                            <div className="h-2 bg-[#E8E3DA] rounded-full overflow-hidden">
                              <div
                                className="h-full rounded-full transition-all"
                                style={{
                                  width: `${d.score}%`,
                                  backgroundColor: d.color,
                                }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Confidence callout */}
                      <div className="bg-[#E8F5EE] border border-[#1F9D6B]/20 rounded-xl p-4 flex items-start gap-3 mb-5">
                        <div className="w-7 h-7 rounded-full bg-[#1F9D6B] flex items-center justify-center shrink-0">
                          <IconCheck className="text-white w-3.5 h-3.5" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-[#002817] mb-0.5">
                            Apply with confidence
                          </div>
                          <p className="text-xs text-[#003b23] leading-relaxed">
                            Your profile meets several published requirements.
                            Confirm the remaining items with the scholarship
                            provider before applying.
                          </p>
                        </div>
                      </div>

                      {/* Required Documents */}
                      <div className="mb-5">
                        <h3 className="text-sm font-semibold text-[#14213D] mb-3">
                          Required Documents
                        </h3>
                        <ul className="space-y-2">
                          {requiredDocs.map((doc) => (
                            <li
                              key={doc.name}
                              className="flex items-center justify-between bg-[#F5F3EF] rounded-lg px-3.5 py-2.5"
                            >
                              <div className="flex items-center gap-2.5 min-w-0">
                                {doc.ready ? (
                                  <div className="w-5 h-5 rounded-full bg-[#E8F5EE] flex items-center justify-center shrink-0">
                                    <IconCheck className="text-[#1f9d6b] w-3 h-3" />
                                  </div>
                                ) : (
                                  <div className="w-5 h-5 rounded-full bg-[#E8E3DA] flex items-center justify-center shrink-0">
                                    <IconLock className="text-[#6B7280] w-3 h-3" />
                                  </div>
                                )}
                                <span
                                  className={`text-xs font-medium truncate ${
                                    doc.ready
                                      ? "text-[#14213D]"
                                      : "text-[#6B7280]"
                                  }`}
                                >
                                  {doc.name}
                                </span>
                              </div>
                              <span
                                className={`text-[10px] font-semibold px-2 py-0.5 rounded-full shrink-0 ml-2 ${
                                  doc.ready
                                    ? "bg-[#E8F5EE] text-[#1f9d6b]"
                                    : "bg-[#FEF3D6] text-[#835400]"
                                }`}
                              >
                                {doc.ready ? "In File" : "Pending"}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Referee status */}
                      <div>
                        <h3 className="text-sm font-semibold text-[#14213D] mb-3">
                          Referee Status
                        </h3>
                        <div className="space-y-2.5">
                          {refereeRows.map((r) => (
                            <div
                              key={r.initials}
                              className="flex items-start gap-3 bg-[#F5F3EF] rounded-lg p-3.5"
                            >
                              <div
                                className="w-10 h-10 rounded-full bg-[#14213D] text-white text-xs font-bold flex items-center justify-center shrink-0"
                                aria-label={r.name}
                              >
                                {r.initials}
                              </div>
                              <div className="min-w-0 flex-1">
                                <div className="text-xs font-semibold text-[#14213D]">
                                  {r.name}
                                </div>
                                <div className="text-[11px] text-[#6B7280] mb-1.5">
                                  {r.role}
                                </div>
                                <span
                                  className={`inline-flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                                    r.ready
                                      ? "bg-[#E8F5EE] text-[#1f9d6b]"
                                      : "bg-[#FEF3D6] text-[#835400]"
                                  }`}
                                >
                                  {r.ready ? (
                                    <IconCheck className="w-2.5 h-2.5" />
                                  ) : (
                                    <IconWarn className="w-2.5 h-2.5" />
                                  )}
                                  {r.status}
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Why it's a good fit */}
                <section className="mb-10">
                  <h3
                    className="text-xl md:text-2xl font-semibold text-[#14213D] mb-4"
                    style={{ fontFamily: "'Newsreader', Georgia, serif" }}
                  >
                    Why it&apos;s a good fit
                  </h3>
                  <div className="space-y-4 text-sm md:text-base text-[#4B5563] leading-relaxed max-w-3xl">
                    <p>
                      The Horizon Global Master&apos;s Scholarship is one of a
                      very small number of UK awards that explicitly prioritises
                      mid-career researchers from emerging market contexts — a
                      match for your work on smallholder climate adaptation in
                      the Lake Victoria basin. Your undergraduate dissertation
                      title (scored 78/100) maps directly onto three active
                      projects inside the Environmental Change Institute, and
                      two of the named lead investigators sit on the selection
                      committee this cycle.
                    </p>
                    <p>
                      Your language profile and internship at the Kenya National
                      Treasury further strengthen the package: the scholarship
                      trust has increasingly tilted selection toward candidates
                      who can articulate a plausible civil-service pathway back
                      to their home country after completion. We estimate that
                      your application statement, once polished with the Provost
                      essay coach, will place you in the second-round interview
                      pool with high confidence.
                    </p>
                  </div>
                </section>

                {/* Other Matches */}
                <section>
                  <div className="flex items-end justify-between mb-5">
                    <div>
                      <h3
                        className="text-xl md:text-2xl font-semibold text-[#14213D] mb-1"
                        style={{ fontFamily: "'Newsreader', Georgia, serif" }}
                      >
                        Other Matches You May Qualify For
                      </h3>
                      <p className="text-xs md:text-sm text-[#6B7280]">
                        Similar profile-compatible awards in your pipeline
                      </p>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-3 gap-4">
                    <MatchCard
                      compact
                      award="Commonwealth Shared Scholarship"
                      institution="FCDO / UK Universities (London School of Economics)"
                      amount="£42,000"
                      fitScore={81}
                      deadlineDays={18}
                      verdict="apply"
                      verdictText="Strong Match"
                      tags={["Development", "Policy"]}
                      location="London, UK"
                    />
                    <MatchCard
                      compact
                      award="Chevening Fellowship (Environment Cohort)"
                      institution="Foreign, Commonwealth & Development Office"
                      amount="$39,500"
                      fitScore={76}
                      deadlineDays={26}
                      verdict="fix-first"
                      verdictText="Referee Missing"
                      tags={["Fellowship", "Public Sector"]}
                      location="UK (multi-city)"
                    />
                    <MatchCard
                      compact
                      award="Gates Cambridge Full MPhil Award"
                      institution="University of Cambridge — Gates Trust"
                      amount="£51,000"
                      fitScore={88}
                      deadlineDays={33}
                      verdict="apply"
                      verdictText="Top 5% Fit"
                      tags={["MPhil", "Research"]}
                      location="Cambridge, UK"
                    />
                  </div>
                </section>
              </div>
            )}

            {/* ============ PANEL 2 — WHY WE QUALIFIED ============ */}
            {tab === "qualified" && (
              <div className="grid md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                  <h2
                    className="text-2xl md:text-3xl font-semibold text-[#14213D] mb-5 leading-tight"
                    style={{ fontFamily: "'Newsreader', Georgia, serif" }}
                  >
                    Why Provost matched you here
                  </h2>

                  <div className="space-y-6 text-[15px] text-[#4B5563] leading-relaxed">
                    <p>
                      Every scholarship in the Provost database is scored on
                      thirty-seven dimensions of fit. This particular award
                      returned a composite score of{" "}
                      <b className="text-[#14213D]">85%</b>, placing it within
                      the 92nd percentile of your entire match universe. The
                      strongest signals were departmental research overlap,
                      demographic priority, and explicit funding alignment.
                    </p>

                    <p>
                      Unlike many Oxford awards administered by individual
                      colleges, the Horizon Global Master&apos;s Scholarship is
                      routed centrally through the Graduate Admissions and
                      Funding Office. That means your referee letters and
                      transcript travel through a single common portal rather
                      than competing against per-college quotas — a structural
                      advantage for international candidates.
                    </p>

                    <h3
                      className="text-xl font-semibold text-[#14213D] pt-2"
                      style={{ fontFamily: "'Newsreader', Georgia, serif" }}
                    >
                      Research alignment
                    </h3>

                    <p>
                      Your draft proposal on{" "}
                      <i>
                        Climate Finance Additionality in East African
                        Smallholder Value Chains
                      </i>{" "}
                      overlaps 74% with published work from the Environmental
                      Change Institute&apos;s Food, Climate and Place research
                      cluster. Prof. Bhatt, who leads the programme&apos;s
                      admissions committee, co-authored three papers that share
                      a citation graph with your undergraduate literature review
                      — a signal the selection panel will notice immediately
                      during shortlisting.
                    </p>

                    <p>
                      You also hold a summer research internship with the Kenya
                      National Treasury that is explicitly mentioned in the
                      programme&apos;s preferred experience rubric. Two of four
                      past winners from East Africa had similar public-sector
                      attachments on their CV at time of application.
                    </p>

                    <h3
                      className="text-xl font-semibold text-[#14213D] pt-2"
                      style={{ fontFamily: "'Newsreader', Georgia, serif" }}
                    >
                      About the department
                    </h3>

                    <p>
                      The School of Geography and the Environment at Oxford
                      houses approximately 350 graduate students across MSc,
                      MPhil and DPhil pathways. The MSc in Environmental Change
                      and Management — the specific degree attached to this
                      scholarship — retains a placement record of 92% within six
                      months of graduation, primarily in multilateral finance,
                      national ministries, and the IFIs (World Bank, IMF, AfDB).
                      Faculty graduate supervision remains notably hands-on,
                      with a student-to-advisor ratio of approximately 3.8 to 1
                      at the MSc level.
                    </p>

                    <p>
                      As a Horizon award holder, you will automatically be
                      invited to the annual Global Sustainability Leadership
                      Retreat in Green Templeton College and paired with a
                      mid-career mentor drawn from the programme&apos;s alumni
                      network — a cohort that includes three current cabinet
                      officials across East and Southern Africa.
                    </p>
                  </div>

                  {/* Professor reference cards */}
                  <div className="grid sm:grid-cols-2 gap-4 mt-10">
                    {[
                      {
                        initials: "SB",
                        name: "Prof. Sarah Bhatt",
                        title:
                          "Chair in Climate & Society, Oxford (Admissions Lead)",
                        line1: "This scholarship matches your record",
                        line2: "Willing to write recommendation",
                        color: "from-[#14213D] to-[#000a24]",
                      },
                      {
                        initials: "DR",
                        name: "Dr. David Rukumbuzi",
                        title: "Lecturer in Development Studies, LSE",
                        line1: "This scholarship matches your record",
                        line2: "Willing to write recommendation",
                        color: "from-[#F5A524] to-[#c98013]",
                      },
                    ].map((p) => (
                      <div
                        key={p.initials}
                        className={`bg-white border border-[#E8E3DA] rounded-2xl p-5 ${cardShadow}`}
                      >
                        <div className="flex items-start gap-4 mb-4">
                          <div
                            className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${p.color} text-white text-sm font-bold flex items-center justify-center shrink-0`}
                          >
                            {p.initials}
                          </div>
                          <div>
                            <div
                              className="text-base font-semibold text-[#14213D]"
                              style={{
                                fontFamily: "'Newsreader', Georgia, serif",
                              }}
                            >
                              {p.name}
                            </div>
                            <div className="text-xs text-[#6B7280]">
                              {p.title}
                            </div>
                          </div>
                        </div>
                        <ul className="space-y-2 mb-4">
                          <li className="flex items-center gap-2 text-xs text-[#4B5563]">
                            <span className="w-5 h-5 rounded-full bg-[#E8F5EE] flex items-center justify-center shrink-0">
                              <IconCheck className="text-[#1f9d6b] w-3 h-3" />
                            </span>
                            {p.line1}
                          </li>
                          <li className="flex items-center gap-2 text-xs text-[#4B5563]">
                            <span className="w-5 h-5 rounded-full bg-[#E8F5EE] flex items-center justify-center shrink-0">
                              <IconCheck className="text-[#1f9d6b] w-3 h-3" />
                            </span>
                            {p.line2}
                          </li>
                        </ul>
                        <button className="w-full inline-flex items-center justify-center gap-1.5 bg-[#F5F3EF] border border-[#E8E3DA] text-[#14213D] px-4 py-2 rounded-lg text-xs font-semibold hover:bg-[#EDE9E1] transition-colors">
                          Message on portal
                          <IconArrow className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    ))}
                  </div>

                  {/* Primary CTA */}
                  <div className="mt-10">
                    <button className="inline-flex items-center justify-center gap-2 bg-[#14213D] text-white px-7 py-4 rounded-xl text-sm font-semibold hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#14213D]">
                      Mark Scholarship Complete
                      <IconCheck className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Right sidebar quick facts */}
                <aside className="md:sticky md:top-20 self-start space-y-5">
                  <div
                    className={`bg-white border border-[#E8E3DA] rounded-2xl p-5 ${cardShadow}`}
                  >
                    <h3
                      className="text-base font-semibold text-[#14213D] mb-3"
                      style={{ fontFamily: "'Newsreader', Georgia, serif" }}
                    >
                      Quick eligibility facts
                    </h3>
                    <ul className="space-y-3 text-xs">
                      {[
                        { k: "Awards issued / year", v: "~42 globally" },
                        { k: "Acceptance rate", v: "4.1%" },
                        { k: "Avg. profile score of winners", v: "82%" },
                        { k: "Your percentile", v: "Top 8%" },
                        { k: "Your closest peer (last cycle)", v: "Awarded" },
                      ].map((f) => (
                        <li
                          key={f.k}
                          className="flex justify-between gap-4 py-2 border-b border-[#F5F3EF] last:border-0"
                        >
                          <span className="text-[#6B7280]">{f.k}</span>
                          <span className="text-[#14213D] font-semibold text-right">
                            {f.v}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-[#FEF3D6] border border-[#F5A524]/30 rounded-2xl p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <IconSpark className="text-[#F5A524] w-4 h-4" />
                      <h3
                        className="text-sm font-semibold text-[#835400]"
                        style={{ fontFamily: "'Newsreader', Georgia, serif" }}
                      >
                        Provost Tip
                      </h3>
                    </div>
                    <p className="text-xs text-[#6c4400] leading-relaxed">
                      Candidates who email Prof. Bhatt a two-paragraph alignment
                      note <b>before</b> submitting are 2.3× more likely to be
                      shortlisted. Keep attachments under 300 KB.
                    </p>
                  </div>
                </aside>
              </div>
            )}

            {/* ============ PANEL 3 — ABOUT THE SCHOLARSHIP ============ */}
            {tab === "about" && (
              <div className="space-y-10">
                {/* Program description */}
                <section>
                  <h2
                    className="text-2xl md:text-3xl font-semibold text-[#14213D] mb-5 leading-tight"
                    style={{ fontFamily: "'Newsreader', Georgia, serif" }}
                  >
                    About the Programme
                  </h2>
                  <div className="space-y-4 text-[15px] text-[#4B5563] leading-relaxed max-w-3xl">
                    <p>
                      The Horizon Global Master&apos;s Scholarship is the
                      flagship fully-funded award operated by the University of
                      Oxford&apos;s International Graduate Programme, supporting
                      outstanding students from under-represented national
                      contexts who wish to pursue a two-year taught MSc in the
                      Mathematical, Physical, and Life Sciences Division or the
                      Social Sciences Division. First established in 2018 with
                      support from the Horizon Trust, the programme has grown to
                      accommodate forty-two scholars annually across seven
                      departments.
                    </p>
                    <p>
                      The MSc in Environmental Change and Management — the
                      degree track associated with your match — is one of the
                      longest-running interdisciplinary master&apos;s degrees at
                      Oxford, having welcomed its first cohort in 1994. Teaching
                      is split between three Michaelmas Term core courses
                      (Climate Systems, Policy Instruments, and Quantitative
                      Methods), two Hilary Term electives chosen from a menu of
                      seventeen options, and a twelve-thousand word dissertation
                      completed over Trinity Term and the summer under
                      individual supervision.
                    </p>
                    <p>
                      Award holders automatically receive a two-year college
                      membership at Green Templeton College, with full access to
                      the college&apos;s alumni network, on-site accommodation
                      guarantee in year one, and the Global Sustainability
                      Leaders mentoring programme administered by the Oxford
                      Foundry.
                    </p>
                  </div>
                </section>

                {/* Research area pills */}
                <section>
                  <h3
                    className="text-xl font-semibold text-[#14213D] mb-4"
                    style={{ fontFamily: "'Newsreader', Georgia, serif" }}
                  >
                    Research Areas
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {researchAreas.map((area) => (
                      <span
                        key={area}
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full border border-[#E8E3DA] text-sm font-medium text-[#14213D] bg-white hover:border-[#F5A524]/50 hover:bg-[#fffdf7] transition-colors"
                      >
                        <span
                          className="w-1.5 h-1.5 rounded-full"
                          style={{ backgroundColor: "#F5A524" }}
                        />
                        {area}
                      </span>
                    ))}
                  </div>
                </section>

                {/* Timeline grid */}
                <section>
                  <h3
                    className="text-xl font-semibold text-[#14213D] mb-4"
                    style={{ fontFamily: "'Newsreader', Georgia, serif" }}
                  >
                    Selection Timeline
                  </h3>
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    {timelineSteps.map((t, idx) => (
                      <div
                        key={t.step}
                        className={`bg-white border border-[#E8E3DA] rounded-2xl p-5 ${cardShadow} relative`}
                      >
                        {idx < timelineSteps.length - 1 && (
                          <div className="hidden lg:block absolute top-10 -right-2 z-10 w-4 h-4 border-t-2 border-r-2 border-[#F5A524] rotate-45" />
                        )}
                        <div className="flex items-center justify-between mb-3">
                          <span
                            className="text-2xl font-bold text-[#F5A524] tabular-nums"
                            style={{
                              fontFamily: "'Newsreader', Georgia, serif",
                            }}
                          >
                            {t.step}
                          </span>
                          <span className="text-[10px] font-semibold uppercase tracking-wider text-[#6B7280]">
                            Step
                          </span>
                        </div>
                        <div
                          className="text-base font-semibold text-[#14213D] mb-1"
                          style={{ fontFamily: "'Newsreader', Georgia, serif" }}
                        >
                          {t.title}
                        </div>
                        <div className="text-[11px] font-semibold text-[#1F9D6B] mb-2">
                          {t.date}
                        </div>
                        <p className="text-xs text-[#6B7280] leading-relaxed">
                          {t.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* About the university */}
                <section className="grid md:grid-cols-2 gap-6">
                  {/* Decorative image block */}
                  <div
                    className="relative rounded-2xl overflow-hidden min-h-[280px] md:min-h-[360px] flex items-center justify-center"
                    style={{
                      background:
                        "linear-gradient(135deg, #14213D 0%, #2b4170 40%, #F5A524 100%)",
                    }}
                  >
                    {/* Overlay pattern */}
                    <div
                      className="absolute inset-0 opacity-20"
                      style={{
                        backgroundImage:
                          "radial-gradient(circle at 20% 30%, rgba(255,255,255,0.6) 0px, transparent 2px), radial-gradient(circle at 70% 60%, rgba(255,255,255,0.5) 0px, transparent 2px), radial-gradient(circle at 40% 80%, rgba(255,255,255,0.4) 0px, transparent 2px)",
                        backgroundSize: "60px 60px, 80px 80px, 40px 40px",
                      }}
                    />
                    <div className="relative z-10 flex flex-col items-center text-white text-center px-8">
                      <div className="w-20 h-20 rounded-3xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center mb-4">
                        <IconGlobe className="w-10 h-10 text-white" />
                      </div>
                      <div
                        className="text-3xl md:text-4xl font-bold mb-1"
                        style={{ fontFamily: "'Newsreader', Georgia, serif" }}
                      >
                        Oxford
                      </div>
                      <div className="text-xs uppercase tracking-[0.28em] text-white/80">
                        University of · Est. 1096
                      </div>
                    </div>
                  </div>

                  {/* Side text */}
                  <div
                    className={`bg-white border border-[#E8E3DA] rounded-2xl p-6 md:p-7 ${cardShadow}`}
                  >
                    <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#F5A524] mb-2">
                      About the University
                    </div>
                    <h3
                      className="text-2xl font-semibold text-[#14213D] mb-4 leading-tight"
                      style={{ fontFamily: "'Newsreader', Georgia, serif" }}
                    >
                      A nine-hundred-year-old collegiate research community
                    </h3>
                    <div className="space-y-3 text-sm text-[#4B5563] leading-relaxed">
                      <p>
                        The University of Oxford is the oldest university in the
                        English-speaking world and consistently ranks in the
                        global top three across most graduate disciplines.
                        Thirty-eight self-governing colleges and six permanent
                        private halls together host roughly 26,000 students, of
                        whom 45% are pursuing graduate degrees and 62% come from
                        outside the United Kingdom.
                      </p>
                      <p>
                        For international scholarship holders, the Oxford
                        experience is unusual in its collegiate structure: in
                        addition to your department, you will belong to a
                        residential college that provides tutorials, hall meals,
                        common-room societies, and pastoral care independent of
                        faculty. Green Templeton College — the college attached
                        to this award — is a graduate-only community of roughly
                        550 members and sits on the historic Norham Gardens site
                        in north Oxford, a five-minute walk from the School of
                        Geography.
                      </p>
                    </div>
                  </div>
                </section>
              </div>
            )}
          </div>
        </main>

        {/* 5. Page footer */}
        <footer className="border-t border-[#E8E3DA] bg-white/60">
          <div className="w-full px-4 md:px-8 py-10 md:py-12">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[#14213D] rounded-[6px] flex items-center justify-center shrink-0">
                  <span
                    className="text-white font-semibold text-sm"
                    style={{ fontFamily: "'Newsreader', Georgia, serif" }}
                  >
                    P
                  </span>
                </div>
                <span
                  className="text-lg font-semibold text-[#14213D]"
                  style={{ fontFamily: "'Newsreader', Georgia, serif" }}
                >
                  Provost
                </span>
                <span className="text-xs text-[#6B7280] ml-2">
                  © 2026 Provost Technologies, Inc. All rights reserved.
                </span>
              </div>
              <nav className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-[#6B7280]">
                <Link
                  href="/pricing"
                  className="hover:text-[#14213D] transition-colors"
                >
                  Pricing
                </Link>
                <Link
                  href="/privacy"
                  className="hover:text-[#14213D] transition-colors"
                >
                  Privacy
                </Link>
                <Link
                  href="/terms"
                  className="hover:text-[#14213D] transition-colors"
                >
                  Terms
                </Link>
                <Link
                  href="/security"
                  className="hover:text-[#14213D] transition-colors"
                >
                  Security
                </Link>
                <Link
                  href="/contact"
                  className="hover:text-[#14213D] transition-colors"
                >
                  Contact
                </Link>
              </nav>
            </div>
          </div>
        </footer>
      </div>
    </WorkspaceShell>
  );
}
