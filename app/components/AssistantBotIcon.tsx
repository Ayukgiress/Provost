'use client';

interface AssistantBotIconProps {
  size?: number;
  className?: string;
  isThinking?: boolean;
  'aria-hidden'?: boolean;
}

export default function AssistantBotIcon({
  size = 32,
  className = "",
  isThinking = false,
  'aria-hidden': ariaHidden = true,
}: AssistantBotIconProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      width={size}
      height={size}
      className={className}
      aria-hidden={ariaHidden}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="64" height="64" rx="20" fill="#14213D" />
      <path d="M32 9 L38 19 H26 Z" fill="#F5A524" />
      <rect x="14" y="21" width="36" height="28" rx="12" fill="#FAF8F4" />
      <circle
        cx="25"
        cy="34"
        r="3.5"
        fill="#14213D"
        className={`origin-center transition-transform ${isThinking ? 'animate-blink' : ''}`}
        style={{
          animation: isThinking ? 'blink 4s infinite' : 'none',
        }}
      />
      <circle
        cx="39"
        cy="34"
        r="3.5"
        fill="#14213D"
        className={`origin-center transition-transform ${isThinking ? 'animate-blink' : ''}`}
        style={{
          animation: isThinking ? 'blink 4s infinite' : 'none',
        }}
      />
      <path
        d="M26 42 Q32 47 38 42"
        stroke="#F5A524"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
      <style jsx>{`
        @media (prefers-reduced-motion: reduce) {
          .animate-blink {
            animation: none !important;
          }
        }
        @keyframes blink {
          0%, 45%, 55%, 100% {
            transform: scaleY(1);
          }
          50% {
            transform: scaleY(0.1);
          }
        }
      `}</style>
    </svg>
  );
}