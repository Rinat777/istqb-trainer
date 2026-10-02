export interface ExamStatistics {
  exam: string;

  attempted: number;

  correct: number;

  wrong: number;

  accuracy: number;
}

export interface Statistics {
  totalAnswered: number;

  totalCorrect: number;

  totalWrong: number;

  accuracy: number;

  totalBookmarks: number;

  totalExamsTaken: number;

  averageScore: number;

  examStatistics: ExamStatistics[];
}
