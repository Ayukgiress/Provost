"use client";

import { Link } from "@/i18n/routing";
import WorkspaceShell from "../../components/WorkspaceShell";
import FitScoreCircle from "../../components/FitScoreCircle";
import { IconCalendar, IconChevron } from "../../components/icons";

/* ------------------------- Inline small icons ---------------------------- */

const IconCompass = ({ className = "" }: { className?: string }) => (
  <svg
    width="44"
    height="44"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <circle cx="12" cy="12" r="10" />
    <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
  </svg>
);

const IconChevronLeft = ({ className = "" }: { className?: string }) => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <polyline points="15 18 9 12 15 6" />
  </svg>
);

const IconChevronRight = ({ className = "" }: { className?: string }) => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

/* --------------------------- Priority badges ----------------------------- */

const priorityBadges = [
  { label: "High", count: 2, color: "#DC2626", bg: "#FDF2F2" },
  { label: "Medium", count: 3, color: "#D98A00", bg: "#FEF3D6" },
  { label: "Low", count: 1, color: "#6B7280", bg: "#F3F4F6" },
];

/* ---------------------- Commonwealth tasks list -------------------------- */

const commonwealthTasks = [
  {
    label: "Research Proposal Outline",
    status: "Uploaded",
    statusColor: "#1F9D6B",
    statusBg: "#E8F5EE",
    dot: "#1F9D6B",
    badge: "Uploaded",
  },
  {
    label: "Referee 2",
    status: "Pending Letter",
    statusColor: "#D98A00",
    statusBg: "#FEF3D6",
    dot: "#D98A00",
    badge: "Pending Letter",
  },
  {
    label: "Personal Statement Draft 4/7",
    status: "Ready for Edit",
    statusColor: "#1F9D6B",
    statusBg: "#E8F5EE",
    dot: "#1F9D6B",
    badge: "Ready for Edit",
  },
  {
    label: "Transcript upload",
    status: "Not started",
    statusColor: "#6B7280",
    statusBg: "#F3F4F6",
    dot: "#D1D5DB",
    badge: "Not started",
  },
  {
    label: "Final review + Signature",
    status: "Not started",
    statusColor: "#6B7280",
    statusBg: "#F3F4F6",
    dot: "#D1D5DB",
    badge: "Not started",
  },
];

/* -------------------- Deadline / progress table rows --------------------- */

type StatusStyle = { bg: string; text: string; label: string };
const statusStyles: Record<string, StatusStyle> = {
  "In Progress": { bg: "#E8F5EE", text: "#1F9D6B", label: "In Progress" },
  Draft: { bg: "#FEF3D6", text: "#D98A00", label: "Draft" },
  Submitted: { bg: "#EEF2FF", text: "#4F46E5", label: "Submitted" },
  "Not started": { bg: "#F3F4F6", text: "#6B7280", label: "Not started" },
};

const tableRows = [
  {
    scholarship: "Commonwealth Shared",
    deadline: "Oct 12",
    progress: 60,
    status: "In Progress",
    assignee: "You",
    updated: "2h ago",
    progressColor: "#14213D",
  },
  {
    scholarship: "Barkson Global",
    deadline: "Oct 18",
    progress: 30,
    status: "Draft",
    assignee: "You + SB",
    updated: "Yesterday",
    progressColor: "#F5A524",
  },
  {
    scholarship: "Oxford MSc",
    deadline: "Oct 24",
    progress: 95,
    status: "Submitted",
    assignee: "You",
    updated: "Mon",
    progressColor: "#1F9D6B",
  },
  {
    scholarship: "Gates Cambridge",
    deadline: "Nov 1",
    progress: 10,
    status: "Not started",
    assignee: "You",
    updated: "—",
    progressColor: "#9CA3AF",
  },
];

/* -------------------------- Calendar generation -------------------------- */
// October 2026 starts on Thursday (index 4 = 0=Sun .. 6=Sat)
const octoberStartOffset = 4;
const octoberDays = 31;
const calendarCells: (number | null)[] = [];
for (let i = 0; i < octoberStartOffset; i++) calendarCells.push(null);
for (let d = 1; d <= octoberDays; d++) calendarCells.push(d);
while (calendarCells.length % 7 !== 0) calendarCells.push(null);

const highlightedDays: Record<
  number,
  { ring: string; bg: string; text?: string }
> = {
  12: { ring: "#DC2626", bg: "#FDF2F2" },
  18: { ring: "#D98A00", bg: "#FEF3D6" },
  24: { ring: "#F5A524", bg: "#FFF7E6" },
  30: { ring: "#14213D", bg: "#EEF2FF" },
};

const weekdayLabels = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

/* ============================== PAGE ==================================== */

export default function TrackerPage() {
  return (
    <WorkspaceShell pageTitle="Application tracker">
    <div className="min-h-screen bg-[#F7F5F0]">

      {/* --------------------- Page header bar ------------------------ */}
      <section className="w-full px-4 md:px-8 py-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="space-y-2">
            <h1
              className="text-3xl md:text-4xl text-[#14213D] leading-tight"
              style={{ fontFamily: "'Newsreader', Georgia, serif" }}
            >
              Application Tracker
            </h1>
            <p className="text-sm md:text-base text-[#4B5563] max-w-xl leading-relaxed">
              Sync your pipeline, manage every deadline, and keep your
              recommender network engaged — all in one place.
            </p>
          </div>

          {/* Priority Radar */}
          <div className="flex items-center gap-3 flex-wrap">
            <div className="flex items-center gap-2 pr-2">
              <span
                className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white border border-[#E8E3DA]"
                aria-hidden
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#14213D"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <circle cx="12" cy="12" r="6" />
                  <circle cx="12" cy="12" r="2" />
                </svg>
              </span>
              <span
                className="text-sm font-semibold text-[#14213D]"
                style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
              >
                Priority Radar
              </span>
            </div>
            <div className="flex items-center gap-2">
              {priorityBadges.map((p) => (
                <span
                  key={p.label}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium border"
                  style={{
                    backgroundColor: p.bg,
                    color: p.color,
                    borderColor: `${p.color}33`,
                    fontFamily: "'Inter', system-ui, sans-serif",
                  }}
                >
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: p.color }}
                  />
                  {p.label}
                  <span
                    className="px-1.5 py-0.5 rounded-full text-[10px] font-bold"
                    style={{
                      backgroundColor: "white",
                      color: p.color,
                      border: `1px solid ${p.color}33`,
                    }}
                  >
                    {p.count}
                  </span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------ Main grid --------------------------- */}
      <main className="w-full px-4 md:px-8 pb-16">
        <div className="grid md:grid-cols-[1fr_380px] gap-6">
          {/* ============= LEFT COLUMN ============= */}
          <div className="flex flex-col gap-4">
            {/* ------------ Card A: Commonwealth Main Card ------------ */}
            <section className="bg-white border border-[#E8E3DA] rounded-2xl p-6 shadow-sm">
              {/* Header row */}
              <div className="flex items-start justify-between flex-wrap gap-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold"
                    style={{
                      backgroundColor: "#FFF7E6",
                      color: "#B27300",
                      border: "1px solid #F5A52455",
                      fontFamily: "'Inter', system-ui, sans-serif",
                    }}
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ backgroundColor: "#F5A524" }}
                    />
                    Check In Edge
                  </span>
                  <span
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold"
                    style={{
                      backgroundColor: "#E8F5EE",
                      color: "#1F9D6B",
                      border: "1px solid #1F9D6B55",
                      fontFamily: "'Inter', system-ui, sans-serif",
                    }}
                  >
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                    Bond Priority
                  </span>
                </div>
                <FitScoreCircle score={72} size={64} />
              </div>

              {/* Title / subtitle */}
              <div className="mt-5 space-y-1">
                <h2
                  className="text-2xl text-[#14213D] leading-snug"
                  style={{ fontFamily: "'Newsreader', Georgia, serif" }}
                >
                  Commonwealth Shared Scholarship
                </h2>
                <p className="text-sm text-[#6B7280]">
                  DfID / FCDO Funding, CSC
                </p>
              </div>

              {/* Roadmap + progress */}
              <div className="mt-6 space-y-3">
                <div className="flex items-center justify-between">
                  <span
                    className="text-sm font-semibold text-[#14213D]"
                    style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
                  >
                    Roadmap
                  </span>
                  <span className="text-xs text-[#6B7280]">
                    3 of 5 Steps Complete
                  </span>
                </div>
                <div className="w-full h-2.5 bg-[#F5F3EF] rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full bg-[#53617C]"
                    style={{ width: "60%" }}
                  />
                </div>
              </div>

              {/* Task list */}
              <ul className="mt-6 space-y-2">
                {commonwealthTasks.map((t) => (
                  <li
                    key={t.label}
                    className="flex items-center justify-between gap-4 p-3 rounded-xl hover:bg-[#FBF9F5] transition-colors border border-transparent hover:border-[#E8E3DA]"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <span
                        className="w-2.5 h-2.5 rounded-full shrink-0"
                        style={{ backgroundColor: t.dot }}
                      />
                      <span
                        className="text-sm font-medium text-[#1B1C1A] truncate"
                        style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
                      >
                        {t.label}
                      </span>
                    </div>
                    <span
                      className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-semibold shrink-0"
                      style={{
                        backgroundColor: t.statusBg,
                        color: t.statusColor,
                        fontFamily: "'Inter', system-ui, sans-serif",
                      }}
                    >
                      {t.badge}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Bottom action buttons */}
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <button
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white shadow-sm hover:opacity-95 active:scale-[0.99] transition-all"
                  style={{
                    backgroundColor: "#14213D",
                    fontFamily: "'Inter', system-ui, sans-serif",
                  }}
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 2L11 13" />
                    <path d="M22 2l-7 20-4-9-9-4 20-7z" />
                  </svg>
                  Ping Recommender
                </button>
                <button
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold bg-white border text-[#14213D] hover:bg-[#FBF9F5] active:scale-[0.99] transition-all"
                  style={{
                    borderColor: "#E8E3DA",
                    fontFamily: "'Inter', system-ui, sans-serif",
                  }}
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5z" />
                  </svg>
                  Resume Draft
                </button>
              </div>
            </section>

            {/* -------------- Card B: Empty State card ---------------- */}
            <section className="bg-white border border-[#E8E3DA] rounded-2xl p-8 shadow-sm flex flex-col items-center text-center">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
                style={{
                  backgroundColor: "#FFF7E6",
                  color: "#F5A524",
                }}
              >
                <IconCompass />
              </div>
              <h3
                className="text-xl text-[#14213D] mb-2"
                style={{ fontFamily: "'Newsreader', Georgia, serif" }}
              >
                Nothing submitted yet. You&apos;ve got this.
              </h3>
              <p className="text-sm text-[#6B7280] mb-6 max-w-md">
                Once applications are submitted, they&apos;ll appear here — along
                with post-submission check-ins and follow-ups.
              </p>
              <div className="flex flex-wrap items-center gap-3 justify-center">
                <button
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold bg-white border text-[#14213D] hover:bg-[#FBF9F5] transition-all"
                  style={{
                    borderColor: "#E8E3DA",
                    fontFamily: "'Inter', system-ui, sans-serif",
                  }}
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                  Book a Strategist
                </button>
                <button
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold bg-white border text-[#14213D] hover:bg-[#FBF9F5] transition-all"
                  style={{
                    borderColor: "#E8E3DA",
                    fontFamily: "'Inter', system-ui, sans-serif",
                  }}
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="11" cy="11" r="8" />
                    <path d="M21 21l-4.3-4.3" />
                  </svg>
                  Research Programs
                </button>
              </div>
            </section>

            {/* --------------- Card C: October Calendar --------------- */}
            <section className="bg-white border border-[#E8E3DA] rounded-2xl p-6 shadow-sm">
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-2">
                  <span
                    className="inline-flex items-center justify-center w-8 h-8 rounded-lg text-[#F5A524]"
                    style={{ backgroundColor: "#FFF7E6" }}
                  >
                    <IconCalendar className="" />
                  </span>
                  <h3
                    className="text-lg text-[#14213D]"
                    style={{ fontFamily: "'Newsreader', Georgia, serif" }}
                  >
                    October 2026
                  </h3>
                </div>
                <div className="flex items-center gap-1">
                  <button
                    aria-label="Previous month"
                    className="w-8 h-8 rounded-lg border border-[#E8E3DA] bg-white flex items-center justify-center text-[#4B5563] hover:text-[#14213D] hover:border-[#d7cfbc] transition-colors"
                  >
                    <IconChevronLeft />
                  </button>
                  <button
                    aria-label="Next month"
                    className="w-8 h-8 rounded-lg border border-[#E8E3DA] bg-white flex items-center justify-center text-[#4B5563] hover:text-[#14213D] hover:border-[#d7cfbc] transition-colors"
                  >
                    <IconChevronRight />
                  </button>
                </div>
              </div>

              {/* Weekday labels */}
              <div className="grid grid-cols-7 gap-1 mb-2">
                {weekdayLabels.map((d) => (
                  <div
                    key={d}
                    className="text-[11px] font-semibold text-[#9CA3AF] text-center py-2"
                    style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
                  >
                    {d}
                  </div>
                ))}
              </div>

              {/* Day cells grid */}
              <div className="grid grid-cols-7 gap-1">
                {calendarCells.map((day, i) => {
                  if (day === null) {
                    return (
                      <div
                        key={`empty-${i}`}
                        className="aspect-square rounded-lg"
                      />
                    );
                  }
                  const hl = highlightedDays[day];
                  const isToday = day === 9; // Today 2026-10-09
                  return (
                    <div
                      key={`day-${day}`}
                      className={[
                        "aspect-square rounded-lg flex items-center justify-center relative text-sm font-medium transition-all",
                        hl ? "ring-2 cursor-pointer" : "",
                      ].join(" ")}
                      style={{
                        fontFamily: "'Inter', system-ui, sans-serif",
                        backgroundColor: hl
                          ? hl.bg
                          : isToday
                            ? "#FBF9F5"
                            : "transparent",
                        color: hl ? "#14213D" : "#1B1C1A",
                        boxShadow: hl ? "none" : undefined,
                        ...(hl ? { outline: "none" } : {}),
                      }}
                    >
                      {hl ? (
                        <div
                          className="absolute inset-0 rounded-lg ring-2"
                          style={
                            {
                              "--tw-ring-color": hl.ring,
                              boxShadow: `0 0 0 2px ${hl.ring}`,
                            } as React.CSSProperties
                          }
                        />
                      ) : null}
                      {isToday && !hl ? (
                        <div
                          className="absolute inset-0 rounded-lg border-2"
                          style={{ borderColor: "#14213D" }}
                        />
                      ) : null}
                      <span className="relative z-10">{day}</span>
                      {hl ? (
                        <span
                          className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full"
                          style={{ backgroundColor: hl.ring }}
                        />
                      ) : null}
                    </div>
                  );
                })}
              </div>

              {/* Calendar legend */}
              <div className="mt-5 flex flex-wrap items-center gap-4 text-[11px] text-[#6B7280]">
                {[
                  { color: "#DC2626", label: "Urgent deadline" },
                  { color: "#D98A00", label: "Draft due" },
                  { color: "#F5A524", label: "Submission" },
                  { color: "#14213D", label: "Interview" },
                ].map((l) => (
                  <span
                    key={l.label}
                    className="inline-flex items-center gap-1.5"
                  >
                    <span
                      className="w-2.5 h-2.5 rounded-full"
                      style={{ backgroundColor: l.color }}
                    />
                    {l.label}
                  </span>
                ))}
              </div>
            </section>
          </div>

          {/* ============= RIGHT COLUMN ============= */}
          <aside className="flex flex-col gap-4">
            {/* ----- Deadline / Progress data table ----- */}
            <section className="bg-white border border-[#E8E3DA] rounded-2xl shadow-sm overflow-hidden">
              <div className="flex items-center justify-between px-6 py-5 border-b border-[#E8E3DA]">
                <h3
                  className="text-lg text-[#14213D]"
                  style={{ fontFamily: "'Newsreader', Georgia, serif" }}
                >
                  Deadline &amp; Progress
                </h3>
                <button
                  className="text-xs font-semibold text-[#14213D] hover:text-[#F5A524] transition-colors inline-flex items-center gap-1"
                  style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
                >
                  View all
                  <IconChevron className="text-[10px]" />
                </button>
              </div>

              {/* Desktop-style horizontal table */}
              <div className="overflow-x-auto">
                <div className="min-w-[700px]">
                  {/* Header row */}
                  <div
                    className="grid px-6 py-3 text-[11px] font-semibold uppercase tracking-wider text-[#9CA3AF] border-b border-[#E8E3DA]"
                    style={{
                      gridTemplateColumns: "1.2fr 0.8fr 1fr 0.9fr 0.8fr 0.8fr",
                      fontFamily: "'Inter', system-ui, sans-serif",
                    }}
                  >
                    <div>Scholarship</div>
                    <div>Deadline</div>
                    <div>Progress</div>
                    <div>Status</div>
                    <div>Assignee</div>
                    <div>Updated</div>
                  </div>

                  {/* Data rows */}
                  {tableRows.map((r) => {
                    const s = statusStyles[r.status];
                    return (
                      <div
                        key={r.scholarship}
                        className="grid px-6 py-4 items-center text-sm border-b border-[#E8E3DA] last:border-b-0 hover:bg-[#FBF9F5] transition-colors"
                        style={{
                          gridTemplateColumns:
                            "1.2fr 0.8fr 1fr 0.9fr 0.8fr 0.8fr",
                          fontFamily: "'Inter', system-ui, sans-serif",
                        }}
                      >
                        <div className="font-semibold text-[#14213D] truncate">
                          {r.scholarship}
                        </div>
                        <div className="text-[#4B5563] text-xs">
                          {r.deadline}
                        </div>
                        <div className="space-y-1.5 pr-2">
                          <div className="w-full h-1.5 bg-[#F5F3EF] rounded-full overflow-hidden">
                            <div
                              className="h-full rounded-full"
                              style={{
                                width: `${r.progress}%`,
                                backgroundColor: r.progressColor,
                              }}
                            />
                          </div>
                          <div className="text-[10px] text-[#6B7280]">
                            {r.progress}%
                          </div>
                        </div>
                        <div>
                          <span
                            className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-semibold"
                            style={{
                              backgroundColor: s.bg,
                              color: s.text,
                            }}
                          >
                            {s.label}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-[#4B5563]">
                          <div
                            className="w-5 h-5 rounded-full text-white text-[9px] font-bold flex items-center justify-center"
                            style={{ backgroundColor: "#14213D" }}
                            aria-hidden
                          >
                            {r.assignee === "You + SB" ? "AM" : "AM"}
                          </div>
                          <span className="truncate">{r.assignee}</span>
                        </div>
                        <div className="text-xs text-[#9CA3AF]">
                          {r.updated}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>

            {/* Small summary card under the data table */}
            <section className="bg-white border border-[#E8E3DA] rounded-2xl p-5 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h3
                  className="text-base text-[#14213D]"
                  style={{ fontFamily: "'Newsreader', Georgia, serif" }}
                >
                  This week
                </h3>
                <span
                  className="text-xs font-semibold px-2 py-1 rounded-full"
                  style={{
                    backgroundColor: "#FFF7E6",
                    color: "#B27300",
                  }}
                >
                  4 tasks due
                </span>
              </div>
              <ul className="space-y-3 text-sm">
                {[
                  {
                    t: "Send follow-up to Referee 2",
                    sub: "Commonwealth Shared · Today",
                    color: "#DC2626",
                  },
                  {
                    t: "Upload official transcript",
                    sub: "Commonwealth Shared · Oct 12",
                    color: "#D98A00",
                  },
                  {
                    t: "Barkson Global — research CV",
                    sub: "Barkson · Oct 13",
                    color: "#F5A524",
                  },
                  {
                    t: "Oxford MSc post-submit thank-yous",
                    sub: "Oxford · Oct 25",
                    color: "#1F9D6B",
                  },
                ].map((item) => (
                  <li key={item.t} className="flex items-start gap-3">
                    <span
                      className="w-2 h-2 rounded-full mt-1.5 shrink-0"
                      style={{ backgroundColor: item.color }}
                    />
                    <div className="min-w-0">
                      <div
                        className="text-sm font-medium text-[#1B1C1A] truncate"
                        style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
                      >
                        {item.t}
                      </div>
                      <div className="text-xs text-[#9CA3AF]">{item.sub}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </section>
          </aside>
        </div>
      </main>

      {/* ----------------------------- Footer ------------------------------- */}
      <footer className="w-full px-4 md:px-8 pb-10">
        <div className="rounded-2xl border border-[#E8E3DA] bg-white/60 backdrop-blur-sm px-6 py-5 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p
            className="text-xs text-[#9CA3AF]"
            style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
          >
            © 2026 Provost. Crafted for scholars who refuse to miss a deadline.
          </p>
          <nav
            className="flex items-center gap-5 text-xs text-[#6B7280]"
            style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
          >
            <a
              href="/dashboard"
              className="hover:text-[#14213D] transition-colors"
            >
              Dashboard
            </a>
            <a
              href="/profile"
              className="hover:text-[#14213D] transition-colors"
            >
              Profile
            </a>
            <a
              href="/pricing"
              className="hover:text-[#14213D] transition-colors"
            >
              Pricing
            </a>
            <Link
              href="/scholarship/horizon-global"
              className="hover:text-[#14213D] transition-colors"
            >
              Matches
            </Link>
          </nav>
        </div>
      </footer>
    </div>
    </WorkspaceShell>
  );
}