interface FitScoreCircleProps {
  score: number;
  size?: number;
}

export default function FitScoreCircle({
  score,
  size = 64,
}: FitScoreCircleProps) {
  const strokeWidth = 4;
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (score / 100) * circumference;
  const isHighScore = score >= 85;
  const meterColor = isHighScore ? "#1F9D6B" : "#F5A524";

  return (
    <div
      className="relative flex items-center justify-center"
      style={{ width: size, height: size }}
    >
      <svg width={size} height={size} className="absolute transform -rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="#E8E3DA"
          strokeWidth={strokeWidth}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={meterColor}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          className="transition-all duration-1000 ease-out"
          style={{
            filter: `drop-shadow(0 0 2px ${meterColor}40)`,
          }}
        />
      </svg>
      <span
        className="text-sm font-semibold text-on-surface z-10"
        style={{ fontFamily: "Inter, system-ui, sans-serif" }}
      >
        {score}%
      </span>
    </div>
  );
}
