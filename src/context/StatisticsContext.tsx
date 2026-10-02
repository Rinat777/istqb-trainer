import { createContext } from "react";

export interface Statistics {
  totalAnswered: number;
  totalCorrect: number;
  totalWrong: number;
}

export interface StatisticsContextType {
  statistics: Statistics;

  updateCorrectAnswer: () => void;

  updateWrongAnswer: () => void;

  resetStatistics: () => void;

  accuracy: number;
}

const StatisticsContext = createContext<StatisticsContextType | undefined>(
  undefined,
);

export default StatisticsContext;
