import { useContext } from "react";

import StatisticsContext from "../context/StatisticsContext";

export default function useStatistics() {
  const context = useContext(StatisticsContext);

  if (!context) {
    throw new Error("useStatistics must be used inside StatisticsProvider");
  }

  return context;
}
