import { useState } from "react";

import QuestionCard from "../components/Question/QuestionCard";
import { useQuestions } from "../hooks/useQuestions";

import type { Question } from "../types/Question";

function shuffleQuestions(questions: Question[]): Question[] {
  const shuffled = [...questions];

  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled;
}

export default function RandomExam() {
  const { questions, loading } = useQuestions();

  const [examSize, setExamSize] = useState(40);

  const [currentIndex, setCurrentIndex] = useState(0);

  const [examQuestions, setExamQuestions] = useState<Question[]>([]);

  const generateExam = () => {
    const randomized = shuffleQuestions(questions);

    setExamQuestions(
      randomized.slice(0, Math.min(examSize, randomized.length)),
    );

    setCurrentIndex(0);
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  const currentQuestion = examQuestions[currentIndex];

  return (
    <div>
      <h1>🎲 Random Exam</h1>

      <select
        value={examSize}
        onChange={(e) => setExamSize(Number(e.target.value))}
      >
        <option value={10}>10 Questions</option>

        <option value={20}>20 Questions</option>

        <option value={40}>40 Questions</option>

        <option value={60}>60 Questions</option>
      </select>

      <button
        onClick={generateExam}
        style={{
          marginLeft: "10px",
        }}
      >
        Generate Exam
      </button>

      {examQuestions.length > 0 && (
        <>
          <p>
            Question {currentIndex + 1}
            {" / "}
            {examQuestions.length}
          </p>

          <QuestionCard question={currentQuestion} />

          <div
            style={{
              marginTop: "20px",
            }}
          >
            <button
              disabled={currentIndex === 0}
              onClick={() => setCurrentIndex(currentIndex - 1)}
            >
              Previous
            </button>

            <button
              disabled={currentIndex === examQuestions.length - 1}
              onClick={() => setCurrentIndex(currentIndex + 1)}
              style={{
                marginLeft: "10px",
              }}
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
}
