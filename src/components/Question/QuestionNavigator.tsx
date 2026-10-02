interface QuestionNavigatorProps {
  totalQuestions: number;
  currentQuestion: number;
  answeredQuestions?: number[];
  flaggedQuestions?: number[];
  onSelectQuestion: (questionNumber: number) => void;
}

export default function QuestionNavigator({
  totalQuestions,
  currentQuestion,
  answeredQuestions = [],
  flaggedQuestions = [],
  onSelectQuestion,
}: QuestionNavigatorProps) {
  return (
    <div
      style={{
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "10px",
        backgroundColor: "#ffffff",
      }}
    >
      <h3>Question Navigator</h3>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(50px, 1fr))",
          gap: "10px",
        }}
      >
        {Array.from({ length: totalQuestions }, (_, index) => {
          const questionNumber = index + 1;

          const isCurrent = currentQuestion === questionNumber;

          const isAnswered = answeredQuestions.includes(questionNumber);

          const isFlagged = flaggedQuestions.includes(questionNumber);

          let backgroundColor = "#f1f5f9";

          if (isAnswered) {
            backgroundColor = "#22c55e";
          }

          if (isFlagged) {
            backgroundColor = "#f59e0b";
          }

          if (isCurrent) {
            backgroundColor = "#2563eb";
          }

          return (
            <button
              key={questionNumber}
              onClick={() => onSelectQuestion(questionNumber)}
              style={{
                width: "50px",
                height: "50px",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                color: "white",
                fontWeight: "bold",
                backgroundColor,
              }}
            >
              {questionNumber}
            </button>
          );
        })}
      </div>

      <div
        style={{
          marginTop: "20px",
          display: "flex",
          gap: "15px",
          flexWrap: "wrap",
          fontSize: "14px",
        }}
      >
        <span>🟦 Current</span>

        <span>🟩 Answered</span>

        <span>🟧 Flagged</span>

        <span>⬜ Not Answered</span>
      </div>
    </div>
  );
}
