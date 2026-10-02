import QuestionCard from "../components/Question/QuestionCard";

import { useQuestions } from "../hooks/useQuestions";

export default function WrongAnswers() {
  const { questions, loading } = useQuestions();

  const wrongAnswers: string[] = JSON.parse(
    localStorage.getItem("istqb-wrong-answers") || "[]",
  );

  if (loading) {
    return <p>Loading...</p>;
  }

  const failedQuestions = questions.filter((q) => wrongAnswers.includes(q.id));

  if (failedQuestions.length === 0) {
    return (
      <div>
        <h1>❌ Wrong Answers Review</h1>

        <p>No wrong answers have been recorded yet.</p>
      </div>
    );
  }

  return (
    <div>
      <h1>❌ Wrong Answers Review</h1>

      <p>
        Questions requiring review: <strong>{failedQuestions.length}</strong>
      </p>

      {failedQuestions.map((question) => (
        <div
          key={question.id}
          style={{
            marginBottom: "30px",
            padding: "20px",
            border: "1px solid #ddd",
            borderRadius: "10px",
            backgroundColor: "#ffffff",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "10px",
            }}
          >
            <strong>{question.id}</strong>

            <span>Exam {question.exam}</span>
          </div>

          <QuestionCard question={question} />
        </div>
      ))}
    </div>
  );
}
