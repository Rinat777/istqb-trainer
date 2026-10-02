interface ProgressBarProps {
  current: number;
  total: number;
}

export default function ProgressBar({ current, total }: ProgressBarProps) {
  const percentage = total > 0 ? Math.round((current / total) * 100) : 0;

  return (
    <div
      style={{
        width: "100%",
        margin: "20px 0",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "8px",
          fontWeight: "bold",
        }}
      >
        <span>
          Question {current} of {total}
        </span>

        <span>{percentage}%</span>
      </div>

      <div
        style={{
          width: "100%",
          height: "20px",
          backgroundColor: "#e5e7eb",
          borderRadius: "10px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: `${percentage}%`,
            height: "100%",
            backgroundColor: "#2563eb",
            transition: "width 0.3s ease",
          }}
        />
      </div>
    </div>
  );
}
