"use client";

import Link from "next/link";
import { useState } from "react";
import MatchCard from "../components/MatchCard";
import WorkspaceShell from "../components/WorkspaceShell";
import { IconCalendar, IconWarn, IconGlobe, IconUser } from "../components/icons";

type SortKey = "All" | "Recommended" | "Matchability" | "Deadline" | "Tracking";
type FilterKey = "Shortlist" | "Saved" | "Tracking";

export default function DashboardPage() {
  const [activeSort, setActiveSort] = useState<SortKey>("All");
  const [activeFilters, setActiveFilters] = useState<FilterKey[]>(["Shortlist"]);
  const sortOptions: SortKey[] = ["All", "Recommended", "Matchability", "Deadline", "Tracking"];
  const filterOptions: FilterKey[] = ["Shortlist", "Saved", "Tracking"];

  const toggleFilter = (filter: FilterKey) => {
    setActiveFilters((previous) => previous.includes(filter) ? previous.filter((item) => item !== filter) : [...previous, filter]);
  };

  return (
    <WorkspaceShell pageTitle="Overview">
        <div className="w-full px-4 py-8 md:px-8 xl:px-10">
          <section className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8B8C89]">Monday, October 12, 2026</p>
              <h1 className="mt-2 text-4xl leading-tight text-[#14213D] md:text-[3.25rem]" style={{ fontFamily: "'Newsreader', Georgia, serif" }}>Good morning, Amina.</h1>
              <p className="mt-2 max-w-xl text-sm leading-6 text-[#5D605E]">Your shortlist is ready. Start with the opportunities that best fit your profile and have the nearest deadlines.</p>
            </div>
            <Link href="/profile" className="inline-flex w-fit items-center gap-2 rounded-xl border border-[#D9D4CA] bg-[#FBF9F5] px-4 py-2.5 text-xs font-medium text-[#14213D] hover:bg-white">Review profile <span aria-hidden>↗</span></Link>
          </section>

          <section aria-label="At a glance" className="mb-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {[
              { label: "Relevant opportunities", value: "14", note: "Across 6 countries" },
              { label: "Closing this week", value: "3", note: "Next: Commonwealth · Oct 12" },
              { label: "In progress", value: "4", note: "1 needs your attention" },
              { label: "Profile completeness", value: "67%", note: "Add 2 details to improve fit" },
            ].map((item, index) => (
              <article key={item.label} className="rounded-2xl border border-[#E8E3DA] bg-[#FBF9F5] p-5">
                <p className="text-[11px] font-medium text-[#6B7280]">{item.label}</p>
                <div className="mt-2 flex items-end justify-between gap-3"><span className="text-[2.5rem] leading-none tracking-[-0.04em] text-[#14213D]" style={{ fontFamily: "'Newsreader', Georgia, serif" }}>{item.value}</span>{index === 1 && <span className="mb-1 flex items-center gap-1.5 text-[10px] text-[#9A6410]"><IconWarn className="h-3.5 w-3.5" /> Time-sensitive</span>}</div>
                <p className="mt-3 text-[10px] leading-4 text-[#8B8C89]">{item.note}</p>
              </article>
            ))}
          </section>

          <div className="grid items-start gap-6 2xl:grid-cols-[minmax(0,1fr)_330px]">
            <section className="min-w-0">
              <div className="mb-4 flex flex-col justify-between gap-4 border-b border-[#E1DDD4] pb-4 sm:flex-row sm:items-end">
                <div><p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8B8C89]">Your shortlist</p><h2 className="mt-1 text-2xl text-[#14213D]" style={{ fontFamily: "'Newsreader', Georgia, serif" }}>Opportunities worth your time</h2></div>
                <Link href="/scholarship/horizon-global" className="text-xs font-medium text-[#14213D] underline underline-offset-4">Browse all matches</Link>
              </div>

              <div className="mb-4 flex flex-wrap items-center gap-1.5">
                {sortOptions.map((option) => <button key={option} onClick={() => setActiveSort(option)} className={`rounded-full border px-3.5 py-1.5 text-[11px] font-medium transition-colors ${activeSort === option ? "border-[#14213D] bg-[#14213D] text-white" : "border-[#E8E3DA] bg-[#FBF9F5] text-[#5D605E] hover:border-[#B9B3A8]"}`}>{option}{option === "All" && <span className={`ml-1.5 ${activeSort === option ? "text-white/70" : "text-[#8B8C89]"}`}>14</span>}</button>)}
              </div>
              <div className="mb-5 flex flex-wrap items-center gap-2">
                <span className="mr-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#8B8C89]">Show</span>
                {filterOptions.map((filter) => { const on = activeFilters.includes(filter); return <button key={filter} onClick={() => toggleFilter(filter)} aria-pressed={on} className={`rounded-lg border px-2.5 py-1.5 text-[10px] transition-colors ${on ? "border-[#CFC9BE] bg-white text-[#14213D]" : "border-transparent text-[#777A77] hover:border-[#E8E3DA] hover:bg-white"}`}>{filter}</button>; })}
              </div>

              <div className="space-y-3.5">
                <MatchCard award="Barkson Global Master's Fellowship" institution="University of Oxford — Fully-Funded MSc Students" amount="$48,500" fitScore={92} verdict="apply" deadlineDays={0} tags={["STEM", "Africa", "Fully Funded"]} location="Oxford, UK" dates="Oct 12, 2026 · Round 1" />
                <MatchCard award="Commonwealth Shared Scholarship" institution="Commonwealth Scholarship Commission · FCDO Funding" amount="£32,000" fitScore={87} verdict="apply" deadlineDays={10} tags={["Developing Nation", "Research", "Full Tuition"]} location="London, UK" dates="Oct 22, 2026 · Round Open" />
                <MatchCard award="Horizon Europe Doctoral Grant" institution="European Commission · MSCA Doctoral Networks" amount="€54,000" fitScore={78} verdict="fix-first" verdictText="Review recommendation" deadlineDays={21} tags={["EU / EEA", "PhD", "Research"]} location="Brussels, EU" dates="Nov 02, 2026 · Round Open" />
                <MatchCard award="Rhodes Scholarship Global" institution="University of Oxford · Rhodes Trust" amount="£45,000" fitScore={81} verdict="apply" deadlineDays={27} tags={["Leadership", "Global", "Postgraduate"]} location="Oxford, UK" dates="Nov 08, 2026 · Round Open" />
              </div>
            </section>

            <aside className="space-y-4">
              <section className="rounded-2xl border border-[#E8E3DA] bg-[#FBF9F5] p-5">
                <div className="flex items-start justify-between gap-3"><div><p className="text-[10px] font-semibold uppercase tracking-[0.17em] text-[#8B8C89]">Eligibility profile</p><h2 className="mt-1 text-xl text-[#14213D]" style={{ fontFamily: "'Newsreader', Georgia, serif" }}>Your match signals</h2></div><Link href="/profile" aria-label="Edit academic profile" className="text-xs text-[#6B7280] hover:text-[#14213D]">Edit ↗</Link></div>
                <div className="mt-5 space-y-4">{[{ label: "Academic record", value: 92 }, { label: "Eligibility details", value: 78 }, { label: "Funding preferences", value: 100 }].map((item) => <div key={item.label}><div className="mb-1.5 flex justify-between text-[11px]"><span className="text-[#5D605E]">{item.label}</span><span className="tabular-nums text-[#14213D]">{item.value}%</span></div><div className="h-1.5 rounded-full bg-[#EEEAE2]"><div className="h-1.5 rounded-full bg-[#53617C]" style={{ width: `${item.value}%` }} /></div></div>)}</div>
                <p className="mt-5 border-t border-[#E8E3DA] pt-4 text-xs leading-5 text-[#5D605E]">Add your language-test details to improve eligibility checks for international programs.</p>
              </section>

              <section className="rounded-2xl border border-[#E8E3DA] bg-[#FBF9F5] p-5">
                <div className="flex items-center justify-between"><div><p className="text-[10px] font-semibold uppercase tracking-[0.17em] text-[#8B8C89]">Coming up</p><h2 className="mt-1 text-xl text-[#14213D]" style={{ fontFamily: "'Newsreader', Georgia, serif" }}>Next deadlines</h2></div><IconCalendar className="h-4 w-4 text-[#66718A]" /></div>
                <ul className="mt-4 divide-y divide-[#E8E3DA]">{[{ award: "Barkson Fellowship", date: "Today · Oct 12", tone: "text-[#9A6410]" }, { award: "Commonwealth Shared", date: "Oct 22", tone: "text-[#5D605E]" }, { award: "Horizon Europe", date: "Nov 02", tone: "text-[#5D605E]" }].map((item) => <li key={item.award} className="flex items-center justify-between gap-3 py-3 first:pt-0 last:pb-0"><div className="min-w-0"><p className="truncate text-xs font-medium text-[#14213D]">{item.award}</p><p className={`mt-1 text-[10px] ${item.tone}`}>{item.date}</p></div><span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#C68A37]" /></li>)}</ul>
                <Link href="/tracker" className="mt-4 block border-t border-[#E8E3DA] pt-3 text-xs font-medium text-[#14213D] underline underline-offset-4">Open application tracker</Link>
              </section>

              <section className="rounded-2xl border border-[#E8E3DA] bg-[#FBF9F5] p-5">
                <div className="flex items-center gap-2"><IconUser className="h-4 w-4 text-[#66718A]" /><p className="text-[10px] font-semibold uppercase tracking-[0.17em] text-[#8B8C89]">References</p></div>
                <p className="mt-2 text-xl text-[#14213D]" style={{ fontFamily: "'Newsreader', Georgia, serif" }}>One letter pending</p>
                <p className="mt-2 text-xs leading-5 text-[#5D605E]">Prof. Kone has not uploaded a recommendation for your Commonwealth application.</p>
                <Link href="/tracker" className="mt-4 inline-flex items-center gap-2 text-xs font-medium text-[#14213D]">Review requests <IconWarn className="h-3.5 w-3.5 text-[#A8752C]" /></Link>
              </section>

              <div className="flex items-start gap-3 rounded-2xl bg-[#EEEAE2] p-4 text-[11px] leading-5 text-[#5D605E]"><IconGlobe className="mt-0.5 h-4 w-4 shrink-0 text-[#66718A]" /><p>Opportunity details are sourced from official providers. Confirm eligibility and dates with the funder before applying.</p></div>
            </aside>
          </div>
        </div>
    </WorkspaceShell>
  );
}
