import type { Question } from "../types/Question";

export interface ExamResult {
  totalQuestions: number;
  correctAnswers: number;
  wrongAnswers: number;
  skippedAnswers: number;
  score: number;
  passed: boolean;
}

export interface UserAnswers {
  [questionId: string]: string;
}

/**
 * Generate a random exam.
 */
export function createRandomExam(
  questions: Question[],
  size: number,
): Question[] {
  const shuffled = [...questions];

  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled.slice(0, Math.min(size, shuffled.length));
}

/**
 * Filter questions by exam.
 */
export function getExamQuestions(
  questions: Question[],
  exam: string,
): Question[] {
  return questions.filter((q) => q.exam === exam);
}

/**
 * Calculate exam result.
 */
export function calculateExamResult(
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

    const expected = question.answer.toLowerCase().replace(/\s/g, "");

    const actual = userAnswer.toLowerCase().replace(/\s/g, "");

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

/**
 * Find incorrectly answered questions.
 */
export function getWrongQuestions(
  questions: Question[],
  answers: UserAnswers,
): Question[] {
  return questions.filter((q) => {
    const answer = answers[q.id];

    if (!answer) {
      return false;
    }

    return (
      answer.toLowerCase().replace(/\s/g, "") !==
      q.answer.toLowerCase().replace(/\s/g, "")
    );
  });
}

/**
 * Find correctly answered questions.
 */
export function getCorrectQuestions(
  questions: Question[],
  answers: UserAnswers,
): Question[] {
  return questions.filter((q) => {
    const answer = answers[q.id];

    if (!answer) {
      return false;
    }

    return (
      answer.toLowerCase().replace(/\s/g, "") ===
      q.answer.toLowerCase().replace(/\s/g, "")
    );
  });
}
