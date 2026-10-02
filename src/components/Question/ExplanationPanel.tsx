interface ExplanationPanelProps {
  correctAnswer: string;
  explanation: string;
  userAnswer?: string;
  show: boolean;
}

export default function ExplanationPanel({
  correctAnswer,
  explanation,
  userAnswer,
  show,
}: ExplanationPanelProps) {
  if (!show) {
    return null;
  }

  const isCorrect = userAnswer?.toLowerCase() === correctAnswer.toLowerCase();

  return (
    <div
      style={{
        marginTop: "20px",
        padding: "16px",
        borderRadius: "10px",
        border: "1px solid #ddd",
        backgroundColor: isCorrect ? "#f0fdf4" : "#fef2f2",
      }}
    >
      <h3>{isCorrect ? "✅ Correct" : "❌ Incorrect"}</h3>

      <p>
        <strong>Your Answer:</strong>{" "}
        {userAnswer ? userAnswer.toUpperCase() : "Not Answered"}
      </p>

      <p>
        <strong>Correct Answer:</strong> {correctAnswer.toUpperCase()}
      </p>

      <hr />

      <h4>Explanation</h4>

      <p>{explanation}</p>
    </div>
  );
}
