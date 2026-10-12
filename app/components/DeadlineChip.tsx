interface DeadlineChipProps {
  daysRemaining: number;
  text: string;
}

export default function DeadlineChip({
  daysRemaining,
  text,
}: DeadlineChipProps) {
  let bgColor = "#F3F4F6";
  let textColor = "#4B5563";
  let icon = null;

  if (daysRemaining <= 3) {
    bgColor = "#FDF2F2";
    textColor = "#DC2626";
    icon = (
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
        <path d="M7 1v3m0 6v3M2.17 5l2.59 6M9.24 11l2.59-6M1 7h13"></path>
      </svg>
    );
  } else if (daysRemaining <= 14) {
    bgColor = "#FEF3D6";
    textColor = "#D98A00";
    icon = (
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
        <circle cx="7" cy="7" r="6"></circle>
        <polyline points="7,3 7,7 10,9"></polyline>
      </svg>
    );
  }

  return (
    <span
      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium"
      style={{
        backgroundColor: bgColor,
        color: textColor,
        fontFamily: "Inter, system-ui, sans-serif",
      }}
    >
      {icon}
      {text}
    </span>
  );
}
