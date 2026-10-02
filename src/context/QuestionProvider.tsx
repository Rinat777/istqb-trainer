import { useEffect, useState } from "react";
import type { ReactNode } from "react";

import type { Question } from "../types/Question";

import { loadAllExams } from "../services/questionService";

import { QuestionContext } from "./QuestionContext";

interface Props {
  children: ReactNode;
}

export default function QuestionProvider({ children }: Props) {
  const [questions, setQuestions] = useState<Question[]>([]);

  const [loading, setLoading] = useState(true);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  useEffect(() => {
    loadAllExams()
      .then(setQuestions)
      .finally(() => setLoading(false));
  }, []);

  return (
    <QuestionContext.Provider
      value={{
        questions,
        loading,
        currentQuestionIndex,
        setCurrentQuestionIndex,
      }}
    >
      {children}
    </QuestionContext.Provider>
  );
}
