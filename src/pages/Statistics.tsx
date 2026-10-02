import AccuracyCard from "../components/Statistics/AccuracyCard";
import ExamPerformance from "../components/Statistics/ExamPerformance";
import WeakAreaList from "../components/Statistics/WeakAreaList";

import useStatistics from "../hooks/useStatistics";

export default function Statistics() {
  const { statistics, accuracy, resetStatistics } = useStatistics();

  const examResults = [
    {
      exam: "A",
      correct: 52,
      total: 66,
    },
    {
      exam: "B",
      correct: 31,
      total: 40,
    },
    {
      exam: "C",
      correct: 29,
      total: 40,
    },
    {
      exam: "D",
      correct: 34,
      total: 40,
    },
  ];

  const weakAreas = [
    {
      topic: "Static Testing",
      wrongAnswers: 8,
      totalQuestions: 20,
    },
    {
      topic: "Test Techniques",
      wrongAnswers: 12,
      totalQuestions: 25,
    },
    {
      topic: "Test Analysis",
      wrongAnswers: 5,
      totalQuestions: 15,
    },
    {
      topic: "Test Management",
      wrongAnswers: 4,
      totalQuestions: 18,
    },
  ];

  return (
    <div
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "20px",
      }}
    >
      <h1>📊 Statistics</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
          gap: "20px",
          marginBottom: "20px",
        }}
      >
        <AccuracyCard
          totalAnswered={statistics.totalAnswered}
          totalCorrect={statistics.totalCorrect}
        />

        <div
          style={{
            background: "#ffffff",
            borderRadius: "12px",
            padding: "20px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          }}
        >
          <h3>Overall Summary</h3>

          <p>
            <strong>Total Answered:</strong> {statistics.totalAnswered}
          </p>

          <p>
            <strong>Correct:</strong> {statistics.totalCorrect}
          </p>

          <p>
            <strong>Wrong:</strong> {statistics.totalWrong}
          </p>

          <p>
            <strong>Accuracy:</strong> {accuracy}%
          </p>

          <button
            onClick={resetStatistics}
            style={{
              marginTop: "10px",
            }}
          >
            Reset Statistics
          </button>
        </div>
      </div>

      <div
        style={{
          marginBottom: "20px",
        }}
      >
        <ExamPerformance results={examResults} />
      </div>

      <div>
        <WeakAreaList weakAreas={weakAreas} />
      </div>
    </div>
  );
}
