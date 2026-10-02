import type { Question } from "../types/Question";
import type { ExamResult } from "../types/ExamResult";

export interface UserAnswers {
  [questionId: string]: string;
}

/**
 * Normalize answers for comparison.
 */
function normalizeAnswer(answer: string): string {
  return answer.toLowerCase().replace(/\s/g, "").split(",").sort().join(",");
}

/**
 * Checks whether a user's answer is correct.
 */
export function isCorrectAnswer(
  question: Question,
  userAnswer: string,
): boolean {
  return normalizeAnswer(userAnswer) === normalizeAnswer(question.answer);
}

/**
 * Calculate the result of an exam.
 */
export function calculateScore(
  questions: Question[],
  answers: UserAnswers,
): ExamResult {
  let correct = 0;
  let wrong = 0;
  let skipped = 0;

  questions.forEach((question) => {
    const userAnswer = answers[question.id];

    if (!userAnswer) {
      skipped++;
      return;
    }

    if (isCorrectAnswer(question, userAnswer)) {
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

    completedAt: new Date().toISOString(),

    durationInSeconds: 0,

    examType: "Random",

    flaggedQuestions: [],

    reviewQuestions: [],
  };
}

/**
 * Percentage calculation helper.
 */
export function calculatePercentage(achieved: number, total: number): number {
  if (total === 0) {
    return 0;
  }

  return Math.round((achieved / total) * 100);
}

/**
 * Determine pass/fail.
 */
export function hasPassed(score: number, passMark = 65): boolean {
  return score >= passMark;
}

/**
 * Count answered questions.
 */
export function getAnsweredCount(answers: UserAnswers): number {
  return Object.keys(answers).length;
}

/**
 * Count skipped questions.
 */
export function getSkippedCount(
  totalQuestions: number,
  answers: UserAnswers,
): number {
  return totalQuestions - Object.keys(answers).length;
}
