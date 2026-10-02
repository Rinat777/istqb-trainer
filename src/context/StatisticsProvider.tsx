import { useEffect, useState } from "react";
import type { ReactNode } from "react";

import StatisticsContext from "./StatisticsContext";
import type { Statistics, StatisticsContextType } from "./StatisticsContext";

interface Props {
  children: ReactNode;
}

const STORAGE_KEY = "istqb-statistics";

export default function StatisticsProvider({ children }: Props) {
  const [statistics, setStatistics] = useState<Statistics>(() => {
    const saved = localStorage.getItem(STORAGE_KEY);

    return saved
      ? (JSON.parse(saved) as Statistics)
      : {
          totalAnswered: 0,
          totalCorrect: 0,
          totalWrong: 0,
        };
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(statistics));
  }, [statistics]);

  const updateCorrectAnswer = () => {
    setStatistics((prev) => ({
      totalAnswered: prev.totalAnswered + 1,
      totalCorrect: prev.totalCorrect + 1,
      totalWrong: prev.totalWrong,
    }));
  };

  const updateWrongAnswer = () => {
    setStatistics((prev) => ({
      totalAnswered: prev.totalAnswered + 1,
      totalCorrect: prev.totalCorrect,
      totalWrong: prev.totalWrong + 1,
    }));
  };

  const resetStatistics = () => {
    setStatistics({
      totalAnswered: 0,
      totalCorrect: 0,
      totalWrong: 0,
    });
  };

  const accuracy =
    statistics.totalAnswered > 0
      ? Math.round((statistics.totalCorrect / statistics.totalAnswered) * 100)
      : 0;

  const value: StatisticsContextType = {
    statistics,
    updateCorrectAnswer,
    updateWrongAnswer,
    resetStatistics,
    accuracy,
  };

  return (
    <StatisticsContext.Provider value={value}>
      {children}
    </StatisticsContext.Provider>
  );
}
