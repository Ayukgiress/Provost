import FitScoreCircle from "./FitScoreCircle";
import VerdictPill from "./VerdictPill";
import DeadlineChip from "./DeadlineChip";
import { IconBookmark, IconChevron } from "./icons";

export type MatchCardVerdict = "apply" | "fix-first" | "skip";

export interface MatchCardProps {
  award: string;
  institution: string;
  amount: string;
  fitScore: number;
  tags?: string[];
  deadlineDays: number;
  verdict?: MatchCardVerdict;
  verdictText?: string;
  location?: string;
  dates?: string;
  compact?: boolean;
  onBookmark?: () => void;
  onOpen?: () => void;
}

/**
 * MatchCard — a single scholarship match card used in the dashboard list
 * and in detail-page "other matches" strips.
 */
export default function MatchCard({
  award,
  institution,
  amount,
  fitScore,
  tags = [],
  deadlineDays,
  verdict,
  verdictText,
  location,
  dates,
  compact = false,
  onBookmark,
  onOpen,
}: MatchCardProps) {
  const cardShadow = compact
    ? "shadow-[0_1px_3px_-1px_rgba(20,33,61,0.04)]"
    : "shadow-[0_2px_10px_-2px_rgba(20,33,61,0.06),0_1px_3px_-1px_rgba(20,33,61,0.03)]";

  const resolvedVerdictText =
    verdictText ??
    (verdict === "apply"
      ? "Apply Now"
      : verdict === "fix-first"
        ? "Fix Profile First"
        : verdict === "skip"
          ? "Shortlist"
          : "");

  return (
    <article
      className={`group bg-white border border-[#E8E3DA] rounded-2xl ${cardShadow} hover:border-[#F5A524]/40 transition-all cursor-pointer overflow-hidden`}
      onClick={onOpen}
      role="button"
      tabIndex={0}
      aria-label={`Open ${award}`}
    >
      <div className={`flex ${compact ? "gap-3 p-3" : "gap-4 p-4 md:p-5"}`}>
        {/* Left: award metadata */}
        <div className="flex-1 min-w-0">
          {/* Verdict row */}
          <div className="flex items-start justify-between gap-3 mb-2">
            <div className="flex flex-wrap items-center gap-2 min-w-0">
              {verdict && (
                <VerdictPill type={verdict} text={resolvedVerdictText} />
              )}
              <DeadlineChip
                daysRemaining={deadlineDays}
                text={deadlineLabel(deadlineDays)}
              />
              {location && (
                <span className="inline-flex items-center gap-1 text-[11px] text-[#6B7280]">
                  <span
                    className="w-1.5 h-1.5 rounded-full bg-[#14213D] opacity-60"
                    aria-hidden
                  />
                  {location}
                </span>
              )}
            </div>
            <button
              aria-label="Bookmark"
              onClick={(e) => {
                e.stopPropagation();
                onBookmark?.();
              }}
              className="shrink-0 w-8 h-8 rounded-lg border border-[#E8E3DA] text-[#6B7280] hover:text-[#F5A524] hover:border-[#F5A524]/50 bg-white flex items-center justify-center transition-colors"
            >
              <IconBookmark />
            </button>
          </div>

          {/* Title */}
          <h3
            className={`font-semibold text-[#14213D] leading-snug group-hover:text-[#14213D] ${
              compact ? "text-sm mb-1" : "text-base md:text-lg mb-1"
            }`}
            style={{ fontFamily: "'Newsreader', Georgia, serif" }}
          >
            {award}
          </h3>
          <p
            className={`text-[#4B5563] ${compact ? "text-[11px]" : "text-xs md:text-sm"}`}
          >
            {institution}
          </p>

          {/* Amount + dates */}
          <div
            className={`mt-3 flex flex-wrap items-end justify-between gap-2 ${
              compact ? "flex-col items-start" : ""
            }`}
          >
            <div>
              <div
                className={`font-bold text-[#14213D] tabular-nums ${
                  compact ? "text-lg" : "text-2xl"
                }`}
                style={{ fontFamily: "'Newsreader', Georgia, serif" }}
              >
                {amount}
              </div>
              {dates && (
                <div className="text-[10px] md:text-[11px] text-[#6B7280] mt-0.5">
                  {dates}
                </div>
              )}
            </div>

            {/* Tags */}
            {tags.length > 0 && (
              <div className="flex flex-wrap gap-1 max-w-full">
                {tags.slice(0, compact ? 2 : 3).map((t) => (
                  <span
                    key={t}
                    className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full border border-[#E8E3DA] text-[10px] md:text-[11px] font-medium text-[#4B5563] bg-[#F5F3EF]"
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full bg-[#1F9D6B]"
                      aria-hidden
                    />
                    {t}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Action row */}
          {!compact && (
            <div className="mt-4 flex items-center gap-2 pt-3 border-t border-[#E8E3DA]">
              <button
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center justify-center px-3.5 py-1.5 rounded-lg text-[11px] font-semibold bg-[#14213D] text-white hover:opacity-90 transition-opacity"
              >
                {verdict === "fix-first" ? "Fix Eligibility" : "Apply Now"}
              </button>
              <button
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center justify-center px-3.5 py-1.5 rounded-lg text-[11px] font-semibold text-[#14213D] border border-[#E8E3DA] hover:bg-[#F5F3EF] transition-colors"
              >
                View Details
                <IconChevron className="ml-1 rotate-[-90deg] text-[#6B7280]" />
              </button>
              <div className="ml-auto text-[11px] text-[#6B7280]">
                {deadlineSummary(deadlineDays)}
              </div>
            </div>
          )}
        </div>

        {/* Right: fit score */}
        <div className="shrink-0 flex flex-col items-center justify-start pt-0.5">
          <FitScoreCircle score={fitScore} size={compact ? 44 : 60} />
          <div className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-[#6B7280]">
            Fit
          </div>
        </div>
      </div>
    </article>
  );
}

function deadlineLabel(days: number) {
  if (days < 0) return "Closed";
  if (days === 0) return "Closes today";
  if (days === 1) return "1 day left";
  if (days <= 7) return `${days} days left`;
  if (days <= 30) return `in ${days} days`;
  const w = Math.floor(days / 7);
  return `in ${w} week${w === 1 ? "" : "s"}`;
}

function deadlineSummary(days: number) {
  if (days < 0) return "Round closed";
  if (days === 0) return "Round closes today";
  if (days <= 3) return "Round closes soon";
  if (days <= 14) return "Early-bird window open";
  if (days <= 30) return "Round open";
  return "Round 1 — Open now";
}
