type VerdictType = "apply" | "fix-first" | "skip";

interface VerdictPillProps {
  type: VerdictType;
  text: string;
}

const pillConfig = {
  apply: {
    bg: "#E8F5EE",
    text: "#1F9D6B",
    icon: (
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="3 7 6 10 11 4"></polyline>
      </svg>
    ),
  },
  "fix-first": {
    bg: "#FEF3D6",
    text: "#D98A00",
    icon: (
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M7 4v4M7 10h.01M1 7c0-3.3 2.7-6 6-6s6 2.7 6 6-2.7 6-6 6-6-2.7-6-6z"></path>
      </svg>
    ),
  },
  skip: {
    bg: "#F3F4F6",
    text: "#6B7280",
    icon: (
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="4" y1="4" x2="10" y2="10"></line>
        <line x1="10" y1="4" x2="4" y2="10"></line>
      </svg>
    ),
  },
};

export default function VerdictPill({ type, text }: VerdictPillProps) {
  const config = pillConfig[type];

  return (
    <span
      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium"
      style={{
        backgroundColor: config.bg,
        color: config.text,
        fontFamily: "Inter, system-ui, sans-serif",
      }}
    >
      {config.icon}
      {text}
    </span>
  );
}
