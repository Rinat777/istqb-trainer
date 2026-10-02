const STORAGE_KEY = "istqb-trainer";

export interface UserData {
  bookmarks: string[];
  wrongAnswers: string[];
}

export function loadData(): UserData {
  const raw = localStorage.getItem(STORAGE_KEY);

  if (!raw) {
    return {
      bookmarks: [],
      wrongAnswers: [],
    };
  }

  return JSON.parse(raw);
}

export function saveData(data: UserData) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}
