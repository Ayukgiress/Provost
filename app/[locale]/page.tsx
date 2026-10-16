'use client';

import Link from 'next/link';

const steps = [
  {
    id: '01',
    title: 'Build your profile once',
    text: 'Add your degree, country, field, and goals. Provost filters out options that are not relevant before you waste time.',
    status: 'Research, citizenship, degree',
  },
  {
    id: '02',
    title: 'See the matches that matter',
    text: 'Each listing is ranked by fit, funding type, and deadline so you can focus on where you are genuinely competitive.',
    status: 'Strong match · deadline in 12 days',
  },
  {
    id: '03',
    title: 'Track deadlines and documents',
    text: 'Keep your references, statements, and required files in one place with reminders and a clear next step for each award.',
    status: 'One recommender follow-up pending',
  },
  {
    id: '04',
    title: 'Apply with more clarity',
    text: 'Review your shortlist, compare deadlines, and submit only the awards that fit your goals and capacity.',
    status: 'Final review scheduled for next week',
  },
] as const;

const checkItems = [
  'Official university portals',
  'Public funders and foundations',
  'Updated weekly before live deadlines are shown',
] as const;

function ArrowIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M5 12h14" />
      <path d="M13 5l7 7-7 7" />
    </svg>
  );
}

function CheckIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M5 12.5l4.2 4.2L19 2.8" />
    </svg>
  );
}

function ClockIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="12" r="8" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

function ShieldIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12 3l7 3v6c0 4.5-2.8 8.3-7 10-4.2-1.7-7-5.5-7-10V6l7-3z" />
    </svg>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FAF8F4] text-[#1B1C1A]">
      <header className="sticky top-0 z-50 border-b border-[#E8E3DA] bg-[#FAF8F4]/90 backdrop-blur-sm">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between px-4 py-4 md:px-8 lg:px-12">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-[7px] bg-[#14213D] text-sm font-semibold text-white" style={{ fontFamily: "'Newsreader', Georgia, serif" }}>
              P
            </div>
            <span className="text-xl font-semibold text-[#14213D]" style={{ fontFamily: "'Newsreader', Georgia, serif" }}>
              Provost
            </span>
          </Link>

          <nav className="hidden items-center gap-7 text-sm text-[#4B5563] md:flex">
            <Link href="/dashboard" className="transition-colors hover:text-[#14213D]">Dashboard</Link>
            <Link href="/scholarship/horizon-global" className="transition-colors hover:text-[#14213D]">Scholarships</Link>
            <Link href="/tracker" className="transition-colors hover:text-[#14213D]">Tracker</Link>
            <Link href="/pricing" className="transition-colors hover:text-[#14213D]">Pricing</Link>
            <Link href="/profile" className="transition-colors hover:text-[#14213D]">Profile</Link>
          </nav>

          <Link
            href="/account"
            className="inline-flex items-center justify-center rounded-xl bg-[#14213D] px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#1a2d4f]"
          >
            Create account
          </Link>
        </div>
      </header>

      <main>
        <section className="px-4 pb-16 pt-16 md:px-8 md:pb-20 md:pt-20 lg:px-12">
          <div className="mx-auto grid max-w-[1200px] items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-[#6B7280]">Scholarship discovery</p>
              <h1 className="mt-5 max-w-xl text-[3.3rem] leading-[0.95] tracking-[-0.06em] text-[#14213D] md:text-[5rem]" style={{ fontFamily: "'Newsreader', Georgia, serif" }}>
                Find the funding you qualify for.
                <span className="mt-2 block italic font-medium text-[#1D2438]">Skip the rest.</span>
              </h1>

              <p className="mt-6 max-w-lg text-base leading-7 text-[#4B5563] md:text-lg">
                Provost narrows scholarships, fellowships, and study-abroad funding by country, eligibility, and deadline so you can focus on what is real.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link
                  href="/account"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#14213D] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#1a2d4f]"
                >
                  Create profile
                  <ArrowIcon className="h-4 w-4" />
                </Link>
                <Link
                  href="#how-it-works"
                  className="inline-flex items-center justify-center text-sm font-medium text-[#14213D] underline-offset-4 transition-colors hover:text-[#2a3f6d] hover:underline"
                >
                  See how it works
                </Link>
              </div>

              <p className="mt-6 text-sm text-[#4B5563]">
                Official listings from university and public-funder portals, checked for deadline and eligibility.
              </p>
            </div>

            <div className="lg:pl-4">
              <div className="rounded-[28px] border border-[#E8E3DA] bg-white p-5 shadow-[0_10px_30px_rgba(20,33,61,0.04)] md:p-6">
                <div className="flex items-center justify-between border-b border-[#E8E3DA] pb-4">
                  <div>
                    <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#6B7280]">Sample opportunity</p>
                    <h2 className="mt-2 text-[2rem] leading-none text-[#14213D]" style={{ fontFamily: "'Newsreader', Georgia, serif" }}>
                      Barkson Global Master&apos;s Fellowship
                    </h2>
                  </div>
                  <span className="rounded-full border border-[#E8E3DA] bg-[#F5F3EF] px-2.5 py-1 text-[10px] font-medium text-[#4B5563]">
                    85% fit
                  </span>
                </div>

                <div className="mt-5 flex items-end justify-between gap-4">
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.2em] text-[#6B7280]">Funding</p>
                    <div className="mt-2 text-4xl font-semibold text-[#14213D]" style={{ fontFamily: "'Newsreader', Georgia, serif" }}>$48,500</div>
                  </div>
                  <div className="rounded-xl border border-[#E8E3DA] bg-[#F5F3EF] px-3 py-2 text-[10px] font-medium uppercase tracking-[0.15em] text-[#4B5563]">
                    Deadline 12 Oct
                  </div>
                </div>

                <div className="mt-6 space-y-3">
                  {[
                    { label: 'Citizenship eligible', ok: true },
                    { label: 'Academic threshold met', ok: true },
                    { label: 'Reference letter needed', ok: false },
                    { label: 'English test required', ok: false },
                  ].map((row) => (
                    <div key={row.label} className="flex items-center justify-between rounded-2xl border border-[#E8E3DA] bg-[#F8F6F3] px-3.5 py-3 text-sm">
                      <span className="text-[#14213D]">{row.label}</span>
                      <span className={`inline-flex h-7 w-7 items-center justify-center rounded-full ${row.ok ? 'bg-[#E8F5EE] text-[#1F9D6B]' : 'bg-[#FEF3D6] text-[#9B6B00]'}`}>
                        <CheckIcon className="h-3.5 w-3.5" />
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex items-center justify-between gap-3 border-t border-[#E8E3DA] pt-4">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-[#6B7280]">Institution</p>
                    <p className="mt-1 text-sm text-[#14213D]">University of Oxford</p>
                  </div>
                  <Link href="/scholarship/horizon-global" className="inline-flex items-center justify-center rounded-xl bg-[#14213D] px-4 py-2.5 text-xs font-medium text-white">
                    Review fit
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-[#E8E3DA] bg-white/50">
          <div className="mx-auto max-w-[1200px] px-4 py-10 md:px-8 lg:px-12">
            <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-[#6B7280]">Verified sources</p>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {checkItems.map((item) => (
                <div key={item} className="rounded-2xl border border-[#E8E3DA] bg-[#F8F6F3] p-4 text-sm text-[#4B5563]">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="how-it-works" className="px-4 py-20 md:px-8 md:py-24 lg:px-12">
          <div className="mx-auto max-w-[1200px]">
            <div className="max-w-2xl">
              <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-[#6B7280]">How it works</p>
              <h2 className="mt-4 text-[clamp(2rem,4vw,3rem)] leading-[1.05] text-[#14213D]" style={{ fontFamily: "'Newsreader', Georgia, serif" }}>
                A quiet system for a high-stakes decision.
              </h2>
            </div>

            <div className="mt-12 space-y-10">
              {steps.map((step, index) => (
                <div key={step.id} className="grid items-center gap-6 md:grid-cols-2 md:gap-10">
                  <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                    <div className="text-[11px] font-medium uppercase tracking-[0.2em] text-[#6B7280]">{step.id}</div>
                    <h3 className="mt-3 text-2xl text-[#14213D] md:text-3xl" style={{ fontFamily: "'Newsreader', Georgia, serif" }}>
                      {step.title}
                    </h3>
                    <p className="mt-4 max-w-lg text-base leading-7 text-[#4B5563]">{step.text}</p>
                    <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#E8E3DA] bg-white px-3 py-1.5 text-xs text-[#4B5563]">
                      <span className="h-2 w-2 rounded-full bg-[#14213D]" />
                      {step.status}
                    </div>
                  </div>

                  <div className="rounded-[28px] border border-[#E8E3DA] bg-white p-5 md:p-6">
                    <div className="flex items-center justify-between border-b border-[#E8E3DA] pb-3">
                      <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#6B7280]">Workflow</span>
                      <span className="text-[10px] text-[#6B7280]">Sample</span>
                    </div>
                    <div className="mt-4 rounded-2xl bg-[#F5F3EF] p-4">
                      <div className="flex items-center justify-between text-sm font-medium text-[#14213D]">
                        <span>{step.status}</span>
                        <span className="text-[#6B7280]">{step.id}/04</span>
                      </div>
                      <div className="mt-4 space-y-3">
                        {[1, 2, 3].map((item) => (
                          <div key={item} className="flex items-center justify-between rounded-xl border border-[#E8E3DA] bg-white px-3 py-2.5 text-xs text-[#4B5563]">
                            <span>Checklist item {item}</span>
                            <span className="inline-flex items-center gap-2">
                              <span className="h-2 w-2 rounded-full bg-[#1F9D6B]" />
                              Ready
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#F5F3EF] px-4 py-20 md:px-8 md:py-24 lg:px-12">
          <div className="mx-auto grid max-w-[1200px] items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-[#6B7280]">Deadline tracking</p>
              <h2 className="mt-4 text-[clamp(2rem,4vw,3rem)] leading-[1.05] text-[#14213D]" style={{ fontFamily: "'Newsreader', Georgia, serif" }}>
                A calm way to keep every deadline visible.
              </h2>
              <p className="mt-5 max-w-xl text-base leading-7 text-[#4B5563]">
                See the award, the due date, and the exact next step without bouncing between portals, spreadsheets, and inboxes.
              </p>
              <ul className="mt-7 space-y-4 text-sm text-[#14213D]">
                {[
                  'Deadline reminders tied to application steps',
                  'Recommendation follow-ups with status and due dates',
                  'Single view across scholarships, fellowships, and grants',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1.5 h-2.5 w-2.5 rounded-full bg-[#14213D]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[28px] border border-[#E8E3DA] bg-white p-5 md:p-6">
              <div className="flex items-center justify-between border-b border-[#E8E3DA] pb-4">
                <div>
                  <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#6B7280]">Funding pipeline</p>
                  <h3 className="mt-2 text-xl text-[#14213D]" style={{ fontFamily: "'Newsreader', Georgia, serif" }}>This month</h3>
                </div>
                <span className="rounded-full border border-[#E8E3DA] bg-[#F5F3EF] px-3 py-1.5 text-[10px] font-medium text-[#4B5563]">4 active</span>
              </div>

              <div className="mt-5 space-y-3">
                {[
                  { name: 'Commonwealth Shared', date: '12 Oct', tone: 'bg-[#14213D] text-white' },
                  { name: 'Horizon Europe', date: '18 Oct', tone: 'bg-[#F5F3EF] text-[#14213D]' },
                  { name: 'Rhodes Global', date: '24 Oct', tone: 'bg-[#F5F3EF] text-[#14213D]' },
                ].map((item) => (
                  <div key={item.name} className="flex items-center justify-between rounded-2xl border border-[#E8E3DA] p-3">
                    <div>
                      <div className="text-sm font-medium text-[#14213D]">{item.name}</div>
                      <div className="mt-1 text-[11px] text-[#6B7280]">Referee reminder due in 2 days</div>
                    </div>
                    <span className={`inline-flex items-center rounded-full px-2.5 py-1 text-[10px] font-medium ${item.tone}`}>
                      {item.date}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 py-20 md:px-8 md:py-24 lg:px-12">
          <div className="mx-auto max-w-[1200px]">
            <div className="rounded-[30px] border border-[#E8E3DA] bg-[#14213D] p-7 text-white md:p-12">
              <div className="max-w-3xl">
                <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-[#C9D3EF]">Data assurance</p>
                <h2 className="mt-4 text-[clamp(2rem,4vw,3rem)] leading-[1.05] text-white" style={{ fontFamily: "'Newsreader', Georgia, serif" }}>
                  We only use the information you give us. You review and submit every application yourself.
                </h2>
              </div>

              <div className="mt-8 grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-[#F5A524]">
                    <ShieldIcon className="h-5 w-5" />
                  </div>
                  <div className="text-lg font-semibold text-white">Read-only by default</div>
                  <p className="mt-2 text-sm leading-6 text-[#C9D3EF]">
                    Provost helps you evaluate fit, but nothing is submitted without your own review and final approval.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-[#F5A524]">
                    <ClockIcon className="h-5 w-5" />
                  </div>
                  <div className="text-lg font-semibold text-white">No lead resale</div>
                  <p className="mt-2 text-sm leading-6 text-[#C9D3EF]">
                    Your profile, essays, and documents stay in your own workflow and are not sold to outside brokers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 py-20 md:px-8 md:py-24 lg:px-12">
          <div className="mx-auto max-w-[1200px]">
            <div className="max-w-2xl">
              <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-[#6B7280]">Pricing</p>
              <h2 className="mt-3 text-[clamp(2rem,4vw,3rem)] leading-[1.05] text-[#14213D]" style={{ fontFamily: "'Newsreader', Georgia, serif" }}>
                Clear pricing. No clutter.
              </h2>
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div className="rounded-[28px] border border-[#E8E3DA] bg-white p-6 md:p-7">
                <div className="text-sm font-medium text-[#6B7280]">Free</div>
                <div className="mt-4 text-4xl font-semibold text-[#14213D]" style={{ fontFamily: "'Newsreader', Georgia, serif" }}>$0</div>
                <p className="mt-3 text-sm leading-6 text-[#4B5563]">Good for exploring the field and reviewing the most relevant options.</p>
                <ul className="mt-6 space-y-3 text-sm text-[#14213D]">
                  <li className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-[#14213D]" /> Up to 15 curated matches</li>
                  <li className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-[#14213D]" /> Basic eligibility filtering</li>
                  <li className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-[#14213D]" /> Deadline calendar</li>
                </ul>
                <Link href="/account" className="mt-8 inline-flex items-center justify-center rounded-xl border border-[#E8E3DA] px-4 py-2.5 text-sm font-medium text-[#14213D] transition-colors hover:bg-[#F5F3EF]">
                  Start free
                </Link>
              </div>

              <div className="rounded-[28px] border border-[#14213D] bg-[#14213D] p-6 text-white md:p-7">
                <div className="text-sm font-medium text-[#C9D3EF]">Provost Plus</div>
                <div className="mt-4 text-4xl font-semibold text-white" style={{ fontFamily: "'Newsreader', Georgia, serif" }}>
                  $19<span className="text-base font-sans text-[#C9D3EF]">/mo</span>
                </div>
                <p className="mt-3 text-sm leading-6 text-[#C9D3EF]">Best for active applicants who want more depth, reminders, and application support.</p>
                <ul className="mt-6 space-y-3 text-sm text-white">
                  <li className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-[#F5A524]" /> Unlimited matches</li>
                  <li className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-[#F5A524]" /> Deeper fit diagnosis</li>
                  <li className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-[#F5A524]" /> Recommendation tracking and reminders</li>
                </ul>
                <Link href="/account" className="mt-8 inline-flex items-center justify-center rounded-xl bg-[#F5A524] px-4 py-2.5 text-sm font-semibold text-[#1D2A3E] transition-colors hover:bg-[#f8b84c]">
                  Choose Plus
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#F5F3EF] px-4 py-20 md:px-8 md:py-24 lg:px-12">
          <div className="mx-auto max-w-[1200px]">
            <div className="max-w-2xl">
              <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-[#6B7280]">Verification</p>
              <h2 className="mt-3 text-[clamp(2rem,4vw,3rem)] leading-[1.05] text-[#14213D]" style={{ fontFamily: "'Newsreader', Georgia, serif" }}>
                How listings are sourced and checked.
              </h2>
            </div>
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {[
                ['Official portals', 'University, fellowship, and public-funder pages are reviewed before a listing is added.'],
                ['Deadline checks', 'Dates are rechecked at least weekly and refreshed when the funding body changes a deadline.'],
                ['Eligibility notes', 'Requirements are matched to your profile only after they are explicitly listed by the provider.'],
              ].map(([title, body]) => (
                <div key={title} className="rounded-[24px] border border-[#E8E3DA] bg-white p-5">
                  <div className="text-lg font-semibold text-[#14213D]">{title}</div>
                  <p className="mt-3 text-sm leading-6 text-[#4B5563]">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-20 md:px-8 md:py-24 lg:px-12">
          <div className="mx-auto max-w-[1200px] rounded-[30px] border border-[#E8E3DA] bg-white p-7 md:p-10">
            <div className="grid items-center gap-6 lg:grid-cols-[1fr_auto]">
              <div>
                <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-[#6B7280]">Startup jobs</p>
                <h2 className="mt-3 text-[clamp(2rem,4vw,3rem)] leading-[1.05] text-[#14213D]" style={{ fontFamily: "'Newsreader', Georgia, serif" }}>
                  We are building the next phase of Provost.
                </h2>
              </div>
              <div className="text-sm text-[#4B5563]">Coming soon</div>
            </div>

            <form className="mt-8 flex max-w-xl flex-col gap-3 sm:flex-row">
              <input
                type="email"
                placeholder="Email address"
                aria-label="Email address"
                className="w-full rounded-xl border border-[#E8E3DA] bg-[#F5F3EF] px-4 py-3 text-sm text-[#14213D] outline-none transition focus:border-[#14213D]"
              />
              <button type="submit" className="inline-flex items-center justify-center rounded-xl bg-[#14213D] px-5 py-3 text-sm font-medium text-white transition-colors hover:opacity-90">
                Join waitlist
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#E8E3DA] bg-[#FAF8F4] px-4 py-10 md:px-8 lg:px-12">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-[7px] bg-[#14213D] text-white" style={{ fontFamily: "'Newsreader', Georgia, serif" }}>
              P
            </div>
            <span className="text-base font-semibold text-[#14213D]" style={{ fontFamily: "'Newsreader', Georgia, serif" }}>
              Provost
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-5 text-sm text-[#4B5563]">
            <Link href="/dashboard">Dashboard</Link>
            <Link href="/profile">Profile</Link>
            <Link href="/tracker">Tracker</Link>
            <Link href="/pricing">Pricing</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
