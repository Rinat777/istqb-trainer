import type { Question } from "../types/Question";

export async function loadExam(exam: string): Promise<Question[]> {
  const response = await fetch(`/data/exam${exam}.json`);

  return response.json();
}

export async function loadAllExams() {
  const exams = await Promise.all([
    loadExam("A"),
    loadExam("B"),
    loadExam("C"),
    loadExam("D"),
  ]);

  return exams.flat();
}
