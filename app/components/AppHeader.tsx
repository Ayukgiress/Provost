"use client";

import Link from "next/link";
import { IconSearchSm } from "./icons";

/** Shared, compact header for secondary product pages. */
export default function AppHeader({
  breadcrumb,
  pageTitle,
}: {
  breadcrumb?: React.ReactNode;
  pageTitle?: string;
}) {
  return (
    <header className="sticky top-0 z-40 border-b border-[#E8E3DA] bg-[#FAF8F4]/95 backdrop-blur-sm">
      <div className="mx-auto flex h-[68px] max-w-[1280px] items-center gap-5 px-4 md:px-8">
        <Link href="/" className="flex shrink-0 items-center gap-2.5">
          <span
            className="flex h-8 w-8 items-center justify-center rounded-[7px] bg-[#14213D] text-sm font-semibold text-white"
            style={{ fontFamily: "'Newsreader', Georgia, serif" }}
          >
            P
          </span>
          <span
            className="text-lg font-semibold text-[#14213D]"
            style={{ fontFamily: "'Newsreader', Georgia, serif" }}
          >
            Provost
          </span>
        </Link>

        <span className="hidden h-5 w-px bg-[#E8E3DA] sm:block" />
        <div className="hidden min-w-0 items-center gap-2 text-xs text-[#777A77] sm:flex">
          {pageTitle && (
            <span className="truncate font-medium text-[#14213D]">
              {pageTitle}
            </span>
          )}
          {breadcrumb && <span className="truncate">{breadcrumb}</span>}
        </div>

        <nav
          className="ml-auto hidden items-center gap-5 text-xs text-[#5D605E] lg:flex"
          aria-label="Product navigation"
        >
          <Link
            href="/dashboard"
            className="transition-colors hover:text-[#14213D]"
          >
            Workspace
          </Link>
          <Link
            href="/scholarship/horizon-global"
            className="transition-colors hover:text-[#14213D]"
          >
            Opportunities
          </Link>
          <Link
            href="/tracker"
            className="transition-colors hover:text-[#14213D]"
          >
            Tracker
          </Link>
          <Link
            href="/profile"
            className="transition-colors hover:text-[#14213D]"
          >
            Profile
          </Link>
          <Link
            href="/pricing"
            className="transition-colors hover:text-[#14213D]"
          >
            Plans
          </Link>
        </nav>

        <label className="hidden items-center gap-2 rounded-lg border border-[#E8E3DA] bg-[#FBF9F5] px-3 py-2 text-xs text-[#8B8C89] md:flex">
          <IconSearchSm className="text-[#8B8C89]" />
          <input
            aria-label="Search opportunities"
            type="search"
            placeholder="Search"
            className="w-24 bg-transparent text-[#14213D] outline-none placeholder:text-[#8B8C89]"
          />
        </label>
        <Link
          href="/profile"
          aria-label="Open profile"
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#E8E3DA] text-[10px] font-semibold text-[#14213D]"
        >
          AM
        </Link>
      </div>
      <nav
        className="flex gap-1 overflow-x-auto border-t border-[#E8E3DA] px-4 py-2 lg:hidden"
        aria-label="Product navigation"
      >
        <Link href="/dashboard" className="shrink-0 rounded-md px-2.5 py-1.5 text-[11px] text-[#4B5563] hover:bg-white">Workspace</Link>
        <Link href="/scholarship/horizon-global" className="shrink-0 rounded-md px-2.5 py-1.5 text-[11px] text-[#4B5563] hover:bg-white">Opportunities</Link>
        <Link href="/tracker" className="shrink-0 rounded-md px-2.5 py-1.5 text-[11px] text-[#4B5563] hover:bg-white">Tracker</Link>
        <Link href="/profile" className="shrink-0 rounded-md px-2.5 py-1.5 text-[11px] text-[#4B5563] hover:bg-white">Profile</Link>
        <Link href="/pricing" className="shrink-0 rounded-md px-2.5 py-1.5 text-[11px] text-[#4B5563] hover:bg-white">Plans</Link>
      </nav>
    </header>
  );
}
