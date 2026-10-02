import { useContext } from "react";

import { QuestionContext } from "../context/QuestionContext";

export default function useQuestionContext() {
  const context = useContext(QuestionContext);

  if (!context) {
    throw new Error("useQuestionContext must be used inside QuestionProvider");
  }

  return context;
}
