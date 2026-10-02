interface AccuracyCardProps {
  totalAnswered: number;
  totalCorrect: number;
}

export default function AccuracyCard({
  totalAnswered,
  totalCorrect,
}: AccuracyCardProps) {
  const accuracy =
    totalAnswered > 0 ? Math.round((totalCorrect / totalAnswered) * 100) : 0;

  const color =
    accuracy >= 80 ? "#22c55e" : accuracy >= 60 ? "#f59e0b" : "#ef4444";

  return (
    <div
      style={{
        backgroundColor: "#ffffff",
        borderRadius: "12px",
        padding: "20px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
      }}
    >
      <h3>Accuracy</h3>

      <div
        style={{
          fontSize: "48px",
          fontWeight: "bold",
          color,
          margin: "15px 0",
        }}
      >
        {accuracy}%
      </div>

      <div>
        <p>
          <strong>Questions Answered:</strong> {totalAnswered}
        </p>

        <p>
          <strong>Correct Answers:</strong> {totalCorrect}
        </p>

        <p>
          <strong>Incorrect Answers:</strong> {totalAnswered - totalCorrect}
        </p>
      </div>

      <div
        style={{
          width: "100%",
          height: "12px",
          backgroundColor: "#e5e7eb",
          borderRadius: "10px",
          overflow: "hidden",
          marginTop: "15px",
        }}
      >
        <div
          style={{
            width: `${accuracy}%`,
            height: "100%",
            backgroundColor: color,
            transition: "width 0.3s ease",
          }}
        />
      </div>
    </div>
  );
}
