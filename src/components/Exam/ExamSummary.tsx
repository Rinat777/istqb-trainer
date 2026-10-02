interface ExamSummaryProps {
  totalQuestions: number;
  correctAnswers: number;
  wrongAnswers: number;
  skippedAnswers: number;
  onRestart?: () => void;
}

export default function ExamSummary({
  totalQuestions,
  correctAnswers,
  wrongAnswers,
  skippedAnswers,
  onRestart,
}: ExamSummaryProps) {
  const score = Math.round((correctAnswers / totalQuestions) * 100);

  const passed = score >= 65; // ISTQB passing score

  return (
    <div
      style={{
        maxWidth: "700px",
        margin: "0 auto",
        padding: "24px",
        border: "1px solid #ddd",
        borderRadius: "12px",
      }}
    >
      <h1>Exam Results</h1>

      <h2>{passed ? "✅ PASS" : "❌ FAIL"}</h2>

      <div
        style={{
          fontSize: "2rem",
          marginBottom: "20px",
        }}
      >
        {score}%
      </div>

      <hr />

      <p>
        <strong>Total Questions:</strong> {totalQuestions}
      </p>

      <p>
        <strong>Correct Answers:</strong> {correctAnswers}
      </p>

      <p>
        <strong>Wrong Answers:</strong> {wrongAnswers}
      </p>

      <p>
        <strong>Skipped Questions:</strong> {skippedAnswers}
      </p>

      <p>
        <strong>Score:</strong> {correctAnswers} / {totalQuestions}
      </p>

      {onRestart && (
        <button
          onClick={onRestart}
          style={{
            marginTop: "20px",
            padding: "10px 20px",
            cursor: "pointer",
          }}
        >
          Start New Exam
        </button>
      )}
    </div>
  );
}
