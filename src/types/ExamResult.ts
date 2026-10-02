export interface ExamResult {
  totalQuestions: number;

  correctAnswers: number;

  wrongAnswers: number;

  skippedAnswers: number;

  score: number;

  passed: boolean;

  completedAt: string;

  durationInSeconds: number;

  examType: "A" | "B" | "C" | "D" | "Random";

  flaggedQuestions: string[];

  reviewQuestions: string[];
}
