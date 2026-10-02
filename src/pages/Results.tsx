import { useNavigate } from "react-router-dom";

import ExamSummary from "../components/Exam/ExamSummary";

export default function Results() {
  const navigate = useNavigate();

  // Replace later with actual exam results
  const result = {
    totalQuestions: 40,
    correctAnswers: 31,
    wrongAnswers: 7,
    skippedAnswers: 2,
  };

  return (
    <div
      style={{
        maxWidth: "900px",
        margin: "0 auto",
        padding: "20px",
      }}
    >
      <h1>Exam Results</h1>

      <ExamSummary
        totalQuestions={result.totalQuestions}
        correctAnswers={result.correctAnswers}
        wrongAnswers={result.wrongAnswers}
        skippedAnswers={result.skippedAnswers}
        onRestart={() => {
          navigate("/exam");
        }}
      />

      <div
        style={{
          marginTop: "20px",
          display: "flex",
          gap: "10px",
          justifyContent: "center",
        }}
      >
        <button onClick={() => navigate("/exam")}>Start New Exam</button>

        <button onClick={() => navigate("/study")}>Study Mode</button>

        <button onClick={() => navigate("/statistics")}>Statistics</button>

        <button onClick={() => navigate("/")}>Dashboard</button>
      </div>
    </div>
  );
}
