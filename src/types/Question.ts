export interface Question {
  id: string;
  exam: string;

  question: string;

  options: {
    a: string;
    b: string;
    c: string;
    d: string;
    e?: string;
  };

  answer: string;

  explanation: string;
}
