import { useMemo, useState } from "react";

import type { Question } from "../types/Question";

export interface ExamResult {
  totalQuestions: number;
  correctAnswers: number;
  wrongAnswers: number;
  skippedAnswers: number;
  score: number;
  passed: boolean;
}

export default function useExam(questions: Question[]) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const [answers, setAnswers] = useState<Record<string, string>>({});

  const [flaggedQuestions, setFlaggedQuestions] = useState<string[]>([]);

  const currentQuestion = questions[currentQuestionIndex];

  const answerQuestion = (questionId: string, answer: string) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: answer,
    }));
  };

  const nextQuestion = () => {
    setCurrentQuestionIndex((prev) => Math.min(prev + 1, questions.length - 1));
  };

  const previousQuestion = () => {
    setCurrentQuestionIndex((prev) => Math.max(prev - 1, 0));
  };

  const goToQuestion = (index: number) => {
    if (index >= 0 && index < questions.length) {
      setCurrentQuestionIndex(index);
    }
  };

  const toggleFlag = (questionId: string) => {
    setFlaggedQuestions((prev) =>
      prev.includes(questionId)
        ? prev.filter((id) => id !== questionId)
        : [...prev, questionId],
    );
  };

  const isFlagged = (questionId: string) => {
    return flaggedQuestions.includes(questionId);
  };

  const result = useMemo<ExamResult>(() => {
    let correct = 0;
    let wrong = 0;
    let skipped = 0;

    questions.forEach((question) => {
      const answer = answers[question.id];

      if (!answer) {
        skipped++;
        return;
      }

      const expected = question.answer.toLowerCase().replaceAll(" ", "");

      const actual = answer.toLowerCase().replaceAll(" ", "");

      if (expected === actual) {
        correct++;
      } else {
        wrong++;
      }
    });

    const score =
      questions.length > 0 ? Math.round((correct / questions.length) * 100) : 0;

    return {
      totalQuestions: questions.length,
      correctAnswers: correct,
      wrongAnswers: wrong,
      skippedAnswers: skipped,
      score,
      passed: score >= 65,
    };
  }, [questions, answers]);

  return {
    currentQuestion,

    currentQuestionIndex,

    answers,

    flaggedQuestions,

    answerQuestion,

    nextQuestion,

    previousQuestion,

    goToQuestion,

    toggleFlag,

    isFlagged,

    result,
  };
}
