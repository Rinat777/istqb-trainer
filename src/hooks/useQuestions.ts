import { useEffect, useState } from "react";
import type { Question } from "../types/Question";
import { loadAllExams } from "../services/questionService";

export function useQuestions() {
  const [questions, setQuestions] = useState<Question[]>([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadAllExams().then((data) => {
      setQuestions(data);
      setLoading(false);
    });
  }, []);

  return {
    questions,
    loading,
  };
}
