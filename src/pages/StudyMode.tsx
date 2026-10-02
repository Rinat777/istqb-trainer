import { useState } from "react";

import QuestionCard from "../components/Question/QuestionCard";

import { useQuestions } from "../hooks/useQuestions";

export default function StudyMode() {
  const { questions, loading } = useQuestions();

  const [index, setIndex] = useState(0);

  if (loading) {
    return <p>Loading...</p>;
  }

  const q = questions[index];

  return (
    <div>
      <h1>
        Question {index + 1}
        {" / "}
        {questions.length}
      </h1>

      <QuestionCard question={q} />

      <button onClick={() => setIndex(Math.max(0, index - 1))}>Previous</button>

      <button
        onClick={() => setIndex(Math.min(questions.length - 1, index + 1))}
      >
        Next
      </button>
    </div>
  );
}
