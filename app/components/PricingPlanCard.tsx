import { IconCheck, IconLock } from './icons';

export type PricingPlanTier = 'free' | 'plus';

export interface PricingPlanCardProps {
  tier: PricingPlanTier;
  showButtonText?: string;
  ctaHref?: string;
}

type Feature = { text: string; ok: boolean; locked?: boolean; badge?: string };

const FREE_FEATURES: Feature[] = [
  { text: 'Up to 15 curated scholarship matches', ok: true },
  { text: 'Basic eligibility scoring & baselines', ok: true },
  { text: 'Standard deadline calendar export', ok: true },
  { text: 'Weekly new + GMAT deadline alerts', ok: true },
  { text: 'AI essay critique & statement drafting', ok: false, locked: true, badge: 'Plus' },
  { text: 'Recommender reminder scheduling', ok: false, locked: true, badge: 'Plus' },
];

const PLUS_FEATURES: Feature[] = [
  { text: 'Unlimited grant & fellowship matches', ok: true },
  { text: 'Deep eligibility & criteria diagnosis', ok: true },
  { text: 'AI Personal Statement feedback coach', ok: true },
  { text: 'Pre-Prepared Recommender shares (Shortlist/SMS)', ok: true },
  { text: 'Multi-channel deadline alerts (WhatsApp/SMS)', ok: true },
  { text: 'Recommendation letter page tracking', ok: true },
];

export default function PricingPlanCard({
  tier,
  showButtonText,
  ctaHref = '/account',
}: PricingPlanCardProps) {
  const isPlus = tier === 'plus';
  const features: Feature[] = isPlus ? PLUS_FEATURES : FREE_FEATURES;
  const price = isPlus ? 19 : 0;
  const label = isPlus ? 'Provost Plus' : 'Free Discovery';
  const sub = isPlus
    ? 'Full design pipeline & in-app review support'
    : 'Essential tools to get started on baseline matches';
  const ctaText = showButtonText ?? (isPlus ? 'Unlock Provost Plus' : 'Start with Free Search');

  const baseWrap = [
    'relative',
    'overflow-hidden',
    'rounded-2xl',
    'p-6',
    'md:p-7',
    'border',
    'flex',
    'flex-col',
  ];
  if (isPlus) {
    baseWrap.push(
      'bg-[#14213D]',
      'text-white',
      'border-[#14213D]',
      'shadow-[0_14px_40px_-12px_rgba(20,33,61,0.4)]'
    );
  } else {
    baseWrap.push(
      'bg-white',
      'border-[#E8E3DA]',
      'text-[#14213D]',
      'shadow-[0_2px_10px_-2px_rgba(20,33,61,0.06),0_1px_3px_-1px_rgba(20,33,61,0.03)]'
    );
  }

  const headingMuted = isPlus ? 'text-[#7c89aa]' : 'text-[#6B7280]';
  const bodyMuted = isPlus ? 'text-[#7c89aa]' : 'text-[#6B7280]';
  const bodyOk = isPlus ? 'text-white/85' : 'text-[#4B5563]';
  const bodyLocked = isPlus ? 'text-white/60' : 'text-[#9CA3AF]';
  const chipBgOk = isPlus ? 'bg-[#E8F5EE]/10' : 'bg-[#E8F5EE]';
  const chipBgLocked = isPlus ? 'bg-white/5' : 'bg-[#E8E3DA]';
  const chipIconLocked = isPlus ? 'text-[#7c89aa] w-3 h-3' : 'text-[#9CA3AF] w-3 h-3';

  const ctaBase = [
    'w-full',
    'inline-flex',
    'items-center',
    'justify-center',
    'px-5',
    'py-3',
    'rounded-xl',
    'text-sm',
    'font-semibold',
    'transition-colors',
    'focus:outline-none',
    'focus:ring-2',
    'focus:ring-offset-2',
  ];
  if (isPlus) {
    ctaBase.push(
      'bg-[#F5A524]',
      'hover:bg-[#ffb83e]',
      'text-[#6c4400]',
      'focus:ring-offset-[#14213D]',
      'focus:ring-[#F5A524]'
    );
  } else {
    ctaBase.push(
      'bg-white',
      'border',
      'border-[#E8E3DA]',
      'text-[#14213D]',
      'hover:bg-[#F5F3EF]',
      'focus:ring-[#14213D]'
    );
  }

  return (
    <div className={baseWrap.join(' ')}>
      {isPlus && (
        <div className="absolute -top-1 -right-12 rotate-45 bg-[#F5A524] text-[#6c4400] text-[10px] font-bold px-14 py-1.5 uppercase tracking-wider z-10 shadow-md">
          Best Value
        </div>
      )}

      <div className="mb-5">
        <div className={`text-sm font-semibold mb-1 ${headingMuted}`}>{label}</div>
        <div className="flex items-baseline gap-1 mb-1">
          <span
            className="text-4xl font-bold"
            style={{ fontFamily: "'Newsreader', Georgia, serif" }}
          >
            ${price}
          </span>
          {isPlus && <span className={`text-sm ${bodyMuted}`}>/mo</span>}
        </div>
        <p className={`text-sm ${bodyMuted}`}>{sub}</p>
      </div>

      <ul className="space-y-3 mb-7 flex-1">
        {features.map((f, i) => (
          <li key={i} className="flex items-start gap-2.5 text-sm">
            <span
              className={`mt-0.5 shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${
                f.ok ? chipBgOk : chipBgLocked
              }`}
            >
              {f.ok ? (
                <IconCheck className="text-[#1f9d6b] w-3 h-3" />
              ) : (
                <IconLock className={chipIconLocked} />
              )}
            </span>
            <span className={f.ok ? bodyOk : bodyLocked}>{f.text}</span>
            {f.badge && (
              <span className="ml-auto text-[10px] font-semibold text-[#6c4400] bg-[#F5A524] px-2 py-0.5 rounded-full">
                {f.badge}
              </span>
            )}
          </li>
        ))}
      </ul>

      <a href={ctaHref} className={ctaBase.join(' ')}>
        {ctaText}
      </a>
    </div>
  );
}
