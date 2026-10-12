"use client";

import Link from "next/link";
import { useState } from "react";
import WorkspaceShell from "../components/WorkspaceShell";
import {
  IconLock,
  IconCheck,
  IconChevron,
  IconArrow,
  IconAward,
} from "../components/icons";
import FitScoreCircle from "../components/FitScoreCircle";

const steps = [
  { id: 1, label: "Academic Profile" },
  { id: 2, label: "Documents" },
  { id: 3, label: "Personal Statement" },
  { id: 4, label: "LOR Details" },
  { id: 5, label: "Final Review" },
];

const InfoIcon = ({ className = "" }: { className?: string }) => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="16" x2="12" y2="12" />
    <line x1="12" y1="8" x2="12.01" y2="8" />
  </svg>
);

const ChevronRight = ({ className = "" }: { className?: string }) => (
  <svg
    width="14"
    height="14"
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

export default function ProfilePage() {
  const [toggles, setToggles] = useState<Record<string, boolean>>({
    degree: false,
  });
  const [checks, setChecks] = useState<Record<string, boolean>>({
    research: false,
    lor: false,
    language: false,
  });

  const toggle = (key: string) => setToggles((t) => ({ ...t, [key]: !t[key] }));
  const check = (key: string) => setChecks((c) => ({ ...c, [key]: !c[key] }));

  return (
    <WorkspaceShell pageTitle="Academic profile">
    <div className="min-h-screen bg-[#FBF9F5] text-[#1B1C1A]">

      {/* Page header */}
      <div className="w-full px-4 md:px-8 py-6">
        <h1
          className="text-2xl md:text-3xl text-[#14213D] font-semibold"
          style={{ fontFamily: "'Newsreader', Georgia, serif" }}
        >
          Your academic profile
        </h1>
        <p className="mt-2 text-sm text-[#4B5563] max-w-2xl">
          A few details help us compare published eligibility requirements with
          your academic plans.
        </p>
      </div>

      {/* 5-Step Wizard Header */}
      <div className="w-full border-y border-[#E8E3DA] bg-white">
        <div className="w-full px-4 md:px-8 py-4">
          <div className="flex items-center gap-2 overflow-x-auto">
            {steps.map((step, i) => (
              <div key={step.id} className="flex items-center gap-2 shrink-0">
                <div
                  className={[
                    "flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium whitespace-nowrap transition-colors",
                    i === 0
                      ? "bg-[#14213D] text-white"
                      : "bg-white border border-[#E8E3DA] text-[#6B7280]",
                  ].join(" ")}
                >
                  <span
                    className={[
                      "w-5 h-5 rounded-full flex items-center justify-center text-[11px] font-bold",
                      i === 0
                        ? "bg-white/15 text-white"
                        : "bg-[#F5F3EF] text-[#6B7280]",
                    ].join(" ")}
                  >
                    {i === 0 ? <IconCheck className="text-white" /> : step.id}
                  </span>
                  {step.label}
                </div>
                {i < steps.length - 1 && (
                  <ChevronRight className="text-[#C5C6CE] shrink-0" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main two-column grid */}
      <div className="grid md:grid-cols-[minmax(0,1fr)_340px] gap-6 w-full px-4 md:px-8 py-6 pb-16">
        {/* Left column */}
        <div className="flex flex-col gap-4">
          {/* Intro banner */}
          <div className="rounded-2xl border border-[#E8E3DA] bg-white p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#FFF6E3] flex items-center justify-center text-[#F5A524] shrink-0">
                <InfoIcon />
              </div>
              <div>
                <p className="text-[#14213D] font-semibold text-sm">
                  Add the details that shape your eligibility
                </p>
                <p className="text-xs text-[#6B7280] mt-1 flex items-center gap-1.5">
                  <IconLock className="text-[#1F9D6B]" />
                  Your details help personalize the opportunities shown to you.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="text-right shrink-0">
                <div className="text-2xl font-bold text-[#F5A524]">67%</div>
                <div className="text-[11px] text-[#6B7280]">complete</div>
              </div>
              <Link
                href="/dashboard"
                className="inline-flex items-center justify-center rounded-xl bg-[#14213D] px-4 py-2.5 text-xs font-semibold text-white transition hover:opacity-90"
              >
                Open dashboard
              </Link>
            </div>
          </div>

          {/* Card: Basic rows */}
          <div className="rounded-2xl border border-[#E8E3DA] bg-white divide-y divide-[#E8E3DA]">
            {/* Country */}
            <div className="p-5 flex items-center justify-between gap-4">
              <div>
                <div className="text-xs uppercase tracking-wide text-[#6B7280] font-medium">
                  Country of Residence / Citizenship
                </div>
                <div className="mt-1.5 flex items-center gap-2">
                  <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#FDF1E6] text-sm">
                    🇸🇩
                  </span>
                  <span className="text-sm font-medium text-[#14213D]">
                    Sudan
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-[#E8F6EF] text-[#1F9D6B] text-[11px] font-medium px-2 py-0.5">
                    <IconCheck />
                    Verified
                  </span>
                </div>
              </div>
              <button className="text-[#6B7280] hover:text-[#14213D]">
                <ChevronRight />
              </button>
            </div>

            {/* University */}
            <div className="p-5 flex items-center justify-between gap-4">
              <div>
                <div className="text-xs uppercase tracking-wide text-[#6B7280] font-medium">
                  Degree-awarding University
                </div>
                <div className="mt-1.5 flex items-center gap-2">
                  <span className="text-sm font-medium text-[#14213D]">
                    University of Khartoum, Sudan
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-[#E8F6EF] text-[#1F9D6B] text-[11px] font-medium px-2 py-0.5">
                    <IconCheck />
                    Verified
                  </span>
                </div>
              </div>
              <button className="text-[#6B7280] hover:text-[#14213D]">
                <ChevronRight />
              </button>
            </div>

            {/* Degree Title */}
            <div className="p-5 flex items-center justify-between gap-4">
              <div>
                <div className="text-xs uppercase tracking-wide text-[#6B7280] font-medium">
                  Degree Title
                </div>
                <div className="mt-1.5 text-sm font-medium text-[#14213D]">
                  BSc Architecture (Hons)
                </div>
              </div>
              <button
                onClick={() => toggle("degree")}
                className="flex items-center gap-1 text-sm text-[#14213D] hover:text-[#F5A524] transition-colors"
              >
                <span className="text-xs font-medium">Edit</span>
                <ChevronRight />
              </button>
            </div>

            {/* GPA */}
            <div className="p-5 flex items-center justify-between gap-4">
              <div className="flex-1">
                <div className="text-xs uppercase tracking-wide text-[#6B7280] font-medium">
                  Grading / GPA
                </div>
                <div className="mt-1.5 flex items-center gap-2">
                  <span className="text-sm font-medium text-[#14213D]">
                    First-class Hons / 3.93/4.00 GPA
                  </span>
                  <button
                    className="w-5 h-5 rounded-full bg-[#F5F3EF] flex items-center justify-center text-[#6B7280] hover:bg-[#E8E3DA] transition-colors"
                    title="First-class honours classification (UK-equivalent) with weighted cumulative GPA."
                  >
                    <InfoIcon className="w-3 h-3" />
                  </button>
                </div>
              </div>
              <button className="text-[#6B7280] hover:text-[#14213D]">
                <ChevronRight />
              </button>
            </div>
          </div>

          {/* Fields section */}
          <div className="rounded-2xl border border-[#E8E3DA] bg-white p-5">
            <h3
              className="text-lg font-semibold text-[#14213D] mb-4"
              style={{ fontFamily: "'Newsreader', Georgia, serif" }}
            >
              Field of Study
            </h3>
            <div className="space-y-4">
              <div>
                <div className="text-xs uppercase tracking-wide text-[#6B7280] font-medium mb-2">
                  Primary Field of Study
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#14213D] text-white text-sm font-medium px-3.5 py-1.5">
                  Architecture &amp; Urban Design
                  <IconCheck />
                </span>
              </div>
              <div>
                <div className="text-xs uppercase tracking-wide text-[#6B7280] font-medium mb-2">
                  Secondary Fields
                </div>
                <div className="flex flex-wrap gap-2">
                  {["Building Science", "Sustainability"].map((f) => (
                    <span
                      key={f}
                      className="inline-flex items-center gap-1.5 rounded-full bg-[#FFF6E3] text-[#835400] text-sm font-medium px-3.5 py-1.5 border border-[#F5A524]/20"
                    >
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Coursework section */}
          <div className="rounded-2xl border border-[#E8E3DA] bg-white p-5">
            <h3
              className="text-lg font-semibold text-[#14213D] mb-4"
              style={{ fontFamily: "'Newsreader', Georgia, serif" }}
            >
              Relevant Coursework
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
              {[
                "Building Science",
                "Construction Technology",
                "Structures",
                "Urban Planning",
                "Architectural History",
                "Environmental Design",
                "Materials Science",
                "Human Factors",
              ].map((c) => (
                <span
                  key={c}
                  className="rounded-full bg-[#F5F3EF] text-[#14213D] text-xs font-medium px-3 py-1.5 text-center border border-[#E8E3DA]"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>

          {/* Research Projects */}
          <div className="rounded-2xl border border-[#E8E3DA] bg-white p-5">
            <h3
              className="text-lg font-semibold text-[#14213D] mb-4"
              style={{ fontFamily: "'Newsreader', Georgia, serif" }}
            >
              Research Projects
            </h3>
            <div className="grid sm:grid-cols-2 gap-3">
              <div className="rounded-xl border border-[#E8E3DA] bg-[#FBF9F5] p-4 flex flex-col gap-2">
                <h4 className="text-sm font-semibold text-[#14213D]">
                  Informal Settlements Upgrading in Omdurman
                </h4>
                <div className="text-xs text-[#6B7280]">
                  Sept 2025 – May 2026
                </div>
                <div className="text-xs text-[#4B5563]">
                  Advisor: Prof. A. Mahmoud
                </div>
                <div className="flex flex-wrap gap-1.5 mt-1">
                  {["Urban Design", "Community Housing"].map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-[#EEF4FF] text-[#14213D] text-[11px] font-medium px-2.5 py-1"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="rounded-xl border border-[#E8E3DA] bg-[#FBF9F5] p-4 flex flex-col gap-2">
                <h4 className="text-sm font-semibold text-[#14213D]">
                  Sustainable Facade Performance in Desert Climates
                </h4>
                <div className="text-xs text-[#6B7280]">
                  Lab Research · 2025
                </div>
                <div className="text-xs text-[#4B5563]">
                  Materials Performance Lab
                </div>
                <div className="flex flex-wrap gap-1.5 mt-1">
                  {["Energy", "Materials"].map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-[#EEF4FF] text-[#14213D] text-[11px] font-medium px-2.5 py-1"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Academic Awards */}
          <div className="rounded-2xl border border-[#E8E3DA] bg-white p-5">
            <h3
              className="text-lg font-semibold text-[#14213D] mb-4"
              style={{ fontFamily: "'Newsreader', Georgia, serif" }}
            >
              Academic Awards &amp; Honors
            </h3>
            <ul className="divide-y divide-[#E8E3DA]">
              {[
                {
                  year: "2026",
                  name: "Vice-Chancellor's Research Medal",
                  tint: "#FFF6E3",
                },
                {
                  year: "2025",
                  name: "National Architecture Design Award (Finalist)",
                  tint: "#EEF4FF",
                },
                {
                  year: "2024",
                  name: "Dean's List of Academic Excellence",
                  tint: "#E8F6EF",
                },
              ].map((award) => (
                <li
                  key={award.name}
                  className="py-3 flex items-center gap-3 first:pt-0 last:pb-0"
                >
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center text-[#F5A524] shrink-0"
                    style={{ backgroundColor: award.tint }}
                  >
                    <IconAward />
                  </div>
                  <div className="text-xs font-semibold text-[#6B7280] w-12 shrink-0">
                    {award.year}
                  </div>
                  <div className="text-sm font-medium text-[#14213D] flex-1">
                    {award.name}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right sidebar */}
        <div className="flex flex-col gap-4">
          {/* Profile Completeness */}
          <div className="rounded-2xl border border-[#E8E3DA] bg-white p-5">
            <div className="flex items-start justify-between">
              <div>
                <div className="text-xs uppercase tracking-wide text-[#6B7280] font-medium">
                  Profile Completeness
                </div>
                <div
                  className="mt-1 text-5xl font-bold text-[#14213D] tracking-tight"
                  style={{ fontFamily: "'Newsreader', Georgia, serif" }}
                >
                  67%
                </div>
              </div>
              <div className="w-14 h-14 rounded-full border-4 border-[#F5A524]/20 flex items-center justify-center">
                <span className="text-sm font-bold text-[#F5A524]">67</span>
              </div>
            </div>
            <div className="mt-4 w-full h-2 rounded-full bg-[#F5F3EF] overflow-hidden">
              <div
                className="h-full bg-[#F5A524] rounded-full"
                style={{ width: "67%" }}
              />
            </div>
            <p className="mt-4 text-sm font-semibold text-[#14213D]">
              Next actions to reach 100%
            </p>
            <ul className="mt-3 space-y-2.5">
              {[
                { key: "research", label: "Add research projects" },
                { key: "lor", label: "Upload 2 referee letters" },
                { key: "language", label: "Link language test results" },
              ].map((item) => (
                <li key={item.key} className="flex items-start gap-2.5">
                  <button
                    onClick={() => check(item.key)}
                    aria-checked={checks[item.key]}
                    role="checkbox"
                    className={[
                      "mt-0.5 w-4 h-4 rounded border flex items-center justify-center shrink-0 transition-colors",
                      checks[item.key]
                        ? "bg-[#1F9D6B] border-[#1F9D6B]"
                        : "bg-white border-[#C5C6CE] hover:border-[#14213D]",
                    ].join(" ")}
                  >
                    {checks[item.key] && <IconCheck className="text-white" />}
                  </button>
                  <span
                    className={[
                      "text-sm flex-1",
                      checks[item.key]
                        ? "text-[#9CA3AF] line-through"
                        : "text-[#14213D]",
                    ].join(" ")}
                  >
                    {item.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Recommended Programs */}
          <div className="rounded-2xl border border-[#E8E3DA] bg-white p-5">
            <h3
              className="text-lg font-semibold text-[#14213D] mb-4"
              style={{ fontFamily: "'Newsreader', Georgia, serif" }}
            >
              Recommended Programs
            </h3>
            <ul className="space-y-3">
              {[
                {
                  name: "Rhodes Scholarship",
                  institution: "Oxford University",
                  score: 92,
                },
                {
                  name: "Horizon Global Fellowship",
                  institution: "Global Scholars Trust",
                  score: 88,
                },
                {
                  name: "Commonwealth Shared",
                  institution: "UK Universities",
                  score: 85,
                },
              ].map((prog) => (
                <li
                  key={prog.name}
                  className="rounded-xl border border-[#E8E3DA] p-3 flex items-center gap-3 hover:border-[#14213D]/30 transition-colors"
                >
                  <FitScoreCircle score={prog.score} size={44} />
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-semibold text-[#14213D] truncate">
                      {prog.name}
                    </div>
                    <div className="text-xs text-[#6B7280] truncate">
                      {prog.institution}
                    </div>
                  </div>
                  <ChevronRight className="text-[#14213D] shrink-0" />
                </li>
              ))}
            </ul>
            <button className="mt-4 w-full text-center text-sm font-semibold text-[#14213D] hover:text-[#F5A524] transition-colors py-2">
              See full match →
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-[#E8E3DA] bg-white">
        <div className="w-full px-4 md:px-8 py-5 text-xs text-[#9CA3AF] text-center">
          © 2026 Provost
        </div>
      </footer>
    </div>
    </WorkspaceShell>
  );
}
