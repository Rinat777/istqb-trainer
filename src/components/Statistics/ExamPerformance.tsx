interface ExamResult {
  exam: string;
  correct: number;
  total: number;
}

interface ExamPerformanceProps {
  results: ExamResult[];
}

export default function ExamPerformance({ results }: ExamPerformanceProps) {
  return (
    <div
      style={{
        backgroundColor: "#ffffff",
        padding: "20px",
        borderRadius: "12px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
      }}
    >
      <h3>Performance by Exam</h3>

      {results.map((result) => {
        const percentage =
          result.total > 0
            ? Math.round((result.correct / result.total) * 100)
            : 0;

        const color =
          percentage >= 80
            ? "#22c55e"
            : percentage >= 60
              ? "#f59e0b"
              : "#ef4444";

        return (
          <div
            key={result.exam}
            style={{
              marginBottom: "20px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "8px",
              }}
            >
              <strong>Exam {result.exam}</strong>

              <span>
                {result.correct}/{result.total}
                {" ("}
                {percentage}%)
              </span>
            </div>

            <div
              style={{
                width: "100%",
                height: "12px",
                backgroundColor: "#e5e7eb",
                borderRadius: "10px",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  width: `${percentage}%`,
                  height: "100%",
                  backgroundColor: color,
                  transition: "width 0.3s ease",
                }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
