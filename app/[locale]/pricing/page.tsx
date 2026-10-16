"use client";

import { useState } from "react";
import { Link } from "@/i18n/routing";
import WorkspaceShell from "../../components/WorkspaceShell";

const plans = [
  {
    name: "Free Discovery",
    summary: "Explore relevant opportunities and keep your search organized.",
    monthly: 0,
    features: [
      "Up to 15 curated scholarship matches",
      "Basic eligibility filtering",
      "Deadline calendar",
    ],
    featured: false,
  },
  {
    name: "Provost Plus",
    summary: "For active applicants managing several applications at once.",
    monthly: 19,
    features: [
      "Unlimited opportunity matches",
      "Detailed eligibility breakdowns",
      "Recommendation tracking and reminders",
      "Application workflow support",
    ],
    featured: true,
  },
] as const;

const billingOptions = [
  { label: "Monthly", months: 1 },
  { label: "Quarterly", months: 3 },
  { label: "Annual", months: 12 },
] as const;

const questions = [
  {
    q: "What is included in Free Discovery?",
    a: "Free Discovery includes up to 15 curated matches, basic eligibility filtering, and a deadline calendar. You can create a profile and review opportunities before deciding whether a paid plan is useful.",
  },
  {
    q: "How is the fit information calculated?",
    a: "Provost compares profile details with eligibility criteria published by each opportunity provider. Treat a match as a guide, not a guarantee; confirm requirements and deadlines with the official funder before applying.",
  },
  {
    q: "Can I change or cancel my plan?",
    a: "You can change your plan or cancel from your account billing settings. A cancellation prevents future renewals; access continues through the period already paid for.",
  },
  {
    q: "Does Provost submit applications for me?",
    a: "No. Provost helps organize your search and application tasks. You review each opportunity and submit your application directly to its provider.",
  },
];

type BillingCycle = (typeof billingOptions)[number]["label"];

export default function PricingPage() {
  const [billing, setBilling] = useState<BillingCycle>("Monthly");
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const months =
    billingOptions.find((option) => option.label === billing)?.months ?? 1;

  return (
    <WorkspaceShell pageTitle="Plans & pricing">
    <div className="min-h-screen bg-[#FAF8F4] text-[#1B1C1A]">
      <main>
        <section className="border-b border-[#E8E3DA] bg-[#F5F3EF] px-4 py-16 md:px-8 md:py-20">
          <div className="grid w-full gap-8 md:grid-cols-[minmax(0,1fr)_300px] md:items-end">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#777A77]">
                Plans &amp; pricing
              </p>
              <h1
                className="mt-4 max-w-2xl text-5xl leading-[0.98] tracking-[-0.04em] text-[#14213D] md:text-6xl"
                style={{ fontFamily: "'Newsreader', Georgia, serif" }}
              >
                A clearer way to plan your search.
              </h1>
              <p className="mt-5 max-w-xl text-base leading-7 text-[#5D605E]">
                Start with the essentials. Choose additional support when your
                application workload calls for it.
              </p>
            </div>
            <div className="border-l border-[#DCD7CD] pl-5 text-sm leading-6 text-[#5D605E]">
              <p className="font-medium text-[#14213D]">
                Straightforward billing
              </p>
              <p className="mt-1">
                No hidden fees. No application outcome promises. Cancel future
                renewals at any time.
              </p>
            </div>
          </div>
        </section>

        <section className="w-full px-4 py-12 md:px-8 md:py-16">
          <div className="mb-7 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8B8C89]">
                Choose a plan
              </p>
              <h2
                className="mt-2 text-2xl text-[#14213D]"
                style={{ fontFamily: "'Newsreader', Georgia, serif" }}
              >
                Built around the work you need to do.
              </h2>
            </div>
            <div
              className="inline-flex w-fit rounded-lg border border-[#E1DDD4] bg-[#FBF9F5] p-1"
              aria-label="Billing interval"
            >
              {billingOptions.map((option) => (
                <button
                  key={option.label}
                  type="button"
                  aria-pressed={billing === option.label}
                  onClick={() => setBilling(option.label)}
                  className={`rounded-md px-3 py-2 text-xs transition-colors ${billing === option.label ? "bg-[#14213D] text-white" : "text-[#5D605E] hover:bg-white"}`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {plans.map((plan) => {
              const total = plan.monthly * months;
              return (
                <article
                  key={plan.name}
                  className={`flex flex-col rounded-2xl border p-6 md:p-8 ${plan.featured ? "border-[#14213D] bg-[#14213D] text-white" : "border-[#E8E3DA] bg-[#FBF9F5] text-[#14213D]"}`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p
                        className={`text-xs font-medium ${plan.featured ? "text-white/65" : "text-[#777A77]"}`}
                      >
                        {plan.name}
                      </p>
                      <p
                        className={`mt-2 max-w-sm text-sm leading-6 ${plan.featured ? "text-white/75" : "text-[#5D605E]"}`}
                      >
                        {plan.summary}
                      </p>
                    </div>
                    {plan.featured && (
                      <span className="border-l border-white/20 pl-3 text-[10px] uppercase tracking-[0.16em] text-white/65">
                        More support
                      </span>
                    )}
                  </div>
                  <div
                    className="mt-8 border-y py-5"
                    style={{
                      borderColor: plan.featured
                        ? "rgba(255,255,255,.16)"
                        : "#E8E3DA",
                    }}
                  >
                    {plan.monthly === 0 ? (
                      <>
                        <div
                          className="text-4xl"
                          style={{ fontFamily: "'Newsreader', Georgia, serif" }}
                        >
                          Free
                        </div>
                        <p
                          className={`mt-1 text-xs ${plan.featured ? "text-white/60" : "text-[#777A77]"}`}
                        >
                          No card required
                        </p>
                      </>
                    ) : (
                      <>
                        <div className="flex items-baseline gap-2">
                          <span
                            className="text-4xl"
                            style={{
                              fontFamily: "'Newsreader', Georgia, serif",
                            }}
                          >
                            ${total}
                          </span>
                          <span
                            className={`text-xs ${plan.featured ? "text-white/60" : "text-[#777A77]"}`}
                          >
                            {" "}
                            / {billing.toLowerCase()}
                          </span>
                        </div>
                        <p
                          className={`mt-1 text-xs ${plan.featured ? "text-white/60" : "text-[#777A77]"}`}
                        >
                          ${plan.monthly} per month · billed{" "}
                          {billing.toLowerCase()}
                        </p>
                      </>
                    )}
                  </div>
                  <ul className="mt-6 flex-1 space-y-3">
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className={`flex items-start gap-3 text-sm ${plan.featured ? "text-white/85" : "text-[#4B5563]"}`}
                      >
                        <span
                          className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${plan.featured ? "bg-[#D4B889]" : "bg-[#66718A]"}`}
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/account"
                    className={`mt-8 inline-flex min-h-11 items-center justify-center rounded-lg px-4 text-sm font-medium transition-colors ${plan.featured ? "bg-[#F5F3EF] text-[#14213D] hover:bg-white" : "border border-[#D9D4CA] text-[#14213D] hover:bg-white"}`}
                  >
                    {plan.featured ? "Choose Provost Plus" : "Get started free"}
                  </Link>
                </article>
              );
            })}
          </div>

          <section className="mt-16 grid gap-10 border-t border-[#E8E3DA] pt-12 md:grid-cols-[250px_1fr]">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8B8C89]">
                Questions
              </p>
              <h2
                className="mt-2 text-3xl text-[#14213D]"
                style={{ fontFamily: "'Newsreader', Georgia, serif" }}
              >
                Before you decide.
              </h2>
              <p className="mt-3 text-sm leading-6 text-[#5D605E]">
                A few details about plans, matching, and how applications work.
              </p>
            </div>
            <div className="divide-y divide-[#E8E3DA] border-y border-[#E8E3DA]">
              {questions.map((item, index) => {
                const isOpen = openFaq === index;
                return (
                  <div key={item.q}>
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                      className="flex w-full items-center justify-between gap-5 py-5 text-left text-sm font-medium text-[#14213D]"
                    >
                      <span>{item.q}</span>
                      <span className="text-lg font-normal text-[#777A77]">
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>
                    {isOpen && (
                      <p className="max-w-3xl pb-5 pr-8 text-sm leading-6 text-[#5D605E]">
                        {item.a}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </section>

          <div className="mt-12 flex flex-col justify-between gap-5 border-t border-[#E8E3DA] pt-7 sm:flex-row sm:items-center">
            <p className="max-w-2xl text-xs leading-5 text-[#777A77]">
              Eligibility matches are informational and do not guarantee
              selection. Confirm award details directly with the official
              provider before applying.
            </p>
            <Link
              href="/account"
              className="shrink-0 text-sm font-medium text-[#14213D] underline underline-offset-4"
            >
              Create your profile
            </Link>
          </div>
        </section>
      </main>
    </div>
    </WorkspaceShell>
  );
}