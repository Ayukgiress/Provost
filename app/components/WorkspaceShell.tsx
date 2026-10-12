'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { ReactNode } from 'react';

const workspaceLinks = [
  { label: 'Overview', href: '/dashboard', icon: 'overview' },
  { label: 'Scholarships', href: '/scholarship/horizon-global', icon: 'search' },
  { label: 'Application tracker', href: '/tracker', icon: 'tracker' },
  { label: 'Academic profile', href: '/profile', icon: 'profile' },
] as const;

function NavigationIcon({ name }: { name: (typeof workspaceLinks)[number]['icon'] }) {
  const icons = {
    overview: <><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" /></>,
    search: <><circle cx="10.8" cy="10.8" r="6.8" /><path d="m16 16 5 5" /></>,
    tracker: <><rect x="4" y="5" width="16" height="16" rx="2" /><path d="M8 3v4m8-4v4M4 10h16m-11 4h6m-6 3h4" /></>,
    profile: <><circle cx="12" cy="8" r="3.5" /><path d="M5 21a7 7 0 0 1 14 0" /></>,
  };

  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="h-[18px] w-[18px] shrink-0" aria-hidden="true">{icons[name]}</svg>;
}

function isActive(pathname: string, href: string) {
  if (href === '/dashboard') return pathname === href;
  if (href.startsWith('/scholarship/')) return pathname.startsWith('/scholarship/');
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function WorkspaceShell({ children, pageTitle }: { children: ReactNode; pageTitle: string }) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-[#F7F5F0] text-[#1B1C1A] lg:flex">
      <aside className="flex w-full shrink-0 flex-col border-b border-[#E8E3DA] bg-[#FBF9F5] lg:fixed lg:inset-y-0 lg:left-0 lg:w-[252px] lg:border-b-0 lg:border-r">
        <Link href="/dashboard" className="flex h-[76px] items-center gap-3 border-b border-[#E8E3DA] px-6">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#14213D] text-lg text-white" style={{ fontFamily: "'Newsreader', Georgia, serif" }}>P</span>
          <span className="text-xl font-semibold text-[#14213D]" style={{ fontFamily: "'Newsreader', Georgia, serif" }}>Provost</span>
        </Link>

        <div className="hidden px-5 pt-7 lg:block">
          <p className="px-3 text-[10px] font-semibold uppercase tracking-[0.19em] text-[#8B8C89]">Workspace</p>
          <nav className="mt-3 space-y-1" aria-label="Workspace navigation">
            {workspaceLinks.map((item) => {
              const active = isActive(pathname, item.href);
              return <Link key={item.href} href={item.href} aria-current={active ? 'page' : undefined} className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-[13px] transition-colors ${active ? 'bg-[#14213D] font-medium text-white' : 'text-[#4B5563] hover:bg-[#F0EDE6] hover:text-[#14213D]'}`}>
                <NavigationIcon name={item.icon} /><span className="flex-1">{item.label}</span>{item.href === '/scholarship/horizon-global' && <span className={`text-[11px] tabular-nums ${active ? 'text-white/65' : 'text-[#8B8C89]'}`}>14</span>}
              </Link>;
            })}
          </nav>
        </div>

        <div className="hidden px-5 pt-8 lg:block">
          <p className="px-3 text-[10px] font-semibold uppercase tracking-[0.19em] text-[#8B8C89]">Account</p>
          <nav className="mt-3 space-y-1" aria-label="Account navigation">
            <Link href="/pricing" aria-current={pathname === '/pricing' ? 'page' : undefined} className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-[13px] transition-colors ${pathname === '/pricing' ? 'bg-[#14213D] font-medium text-white' : 'text-[#4B5563] hover:bg-[#F0EDE6] hover:text-[#14213D]'}`}><span className="flex h-[18px] w-[18px] items-center justify-center text-base">＋</span> Plans &amp; billing</Link>
            <Link href="/" className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-[13px] text-[#4B5563] transition-colors hover:bg-[#F0EDE6] hover:text-[#14213D]"><span className="flex h-[18px] w-[18px] items-center justify-center text-base">↗</span> Back to website</Link>
          </nav>
        </div>

        <div className="mt-auto hidden p-5 lg:block">
          <div className="rounded-2xl border border-[#E8E3DA] bg-white p-4">
            <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#8B8C89]">Profile completeness</p>
            <div className="mt-2 flex items-baseline justify-between"><span className="text-2xl text-[#14213D]" style={{ fontFamily: "'Newsreader', Georgia, serif" }}>67%</span><span className="text-[11px] text-[#6B7280]">2 steps left</span></div>
            <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-[#F0EDE6]"><div className="h-full rounded-full bg-[#53617C]" style={{ width: '67%' }} /></div>
            <Link href="/profile" className="mt-3 inline-block text-xs font-medium text-[#14213D] underline underline-offset-4">Complete your profile</Link>
          </div>
          <div className="mt-4 flex items-center gap-3 border-t border-[#E8E3DA] pt-4">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#E8E3DA] text-xs font-semibold text-[#14213D]">AM</div>
            <div className="min-w-0"><p className="truncate text-sm font-medium text-[#14213D]">Amina M.</p><p className="text-[11px] text-[#6B7280]">Master&apos;s applicant</p></div>
          </div>
        </div>

        <nav aria-label="Workspace navigation" className="flex gap-1 overflow-x-auto px-3 py-2 lg:hidden">
          {workspaceLinks.map((item) => <Link key={item.href} href={item.href} aria-current={isActive(pathname, item.href) ? 'page' : undefined} className={`shrink-0 rounded-lg px-3 py-2 text-xs ${isActive(pathname, item.href) ? 'bg-[#14213D] text-white' : 'text-[#4B5563] hover:bg-[#F0EDE6]'}`}>{item.label}</Link>)}
          <Link href="/pricing" className={`shrink-0 rounded-lg px-3 py-2 text-xs ${pathname === '/pricing' ? 'bg-[#14213D] text-white' : 'text-[#4B5563]'}`}>Plans</Link>
        </nav>
      </aside>

      <main className="min-w-0 flex-1 lg:ml-[252px]">
        <header className="hidden h-[76px] items-center justify-between border-b border-[#E8E3DA] bg-[#FBF9F5] px-8 lg:flex xl:px-10">
          <p className="text-sm text-[#6B7280]">Your funding workspace <span className="px-2 text-[#C5C3BD]">/</span><span className="text-[#14213D]">{pageTitle}</span></p>
          <div className="flex items-center gap-5"><Link href="/tracker" className="text-xs text-[#4B5563] hover:text-[#14213D]">Deadlines</Link><span className="h-5 w-px bg-[#E8E3DA]" /><div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-[#1F9D6B]" /><span className="text-xs text-[#4B5563]">Profile synced</span></div></div>
        </header>
        {children}
      </main>
    </div>
  );
}
