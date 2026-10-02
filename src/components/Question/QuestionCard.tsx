import { useState } from "react";

import type { Question } from "../../types/Question";

import AnswerOptions from "./AnswerOptions";

interface Props {
  question: Question;
}

export default function QuestionCard({ question }: Props) {
  const [selected, setSelected] = useState("");

  const [checked, setChecked] = useState(false);

  const correct = selected === question.answer;

  return (
    <div className="card">
      <h2>{question.question}</h2>

      <AnswerOptions
        options={question.options}
        value={selected}
        onChange={setSelected}
      />

      <button onClick={() => setChecked(true)}>Check Answer</button>

      {checked && (
        <>
          <h3>{correct ? "✅ Correct" : "❌ Incorrect"}</h3>

          <p>Correct: {question.answer.toUpperCase()}</p>

          <p>{question.explanation}</p>
        </>
      )}
    </div>
  );
}
