import { createContext } from "react";
import type { Question } from "../types/Question";

export interface QuestionContextType {
  questions: Question[];
  loading: boolean;
  currentQuestionIndex: number;
  setCurrentQuestionIndex: (index: number) => void;
}

export const QuestionContext = createContext<QuestionContextType | null>(null);
