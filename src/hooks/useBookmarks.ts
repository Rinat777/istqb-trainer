import { useEffect, useState } from "react";

const STORAGE_KEY = "istqb-bookmarks";

export default function useBookmarks() {
  const [bookmarks, setBookmarks] = useState<string[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEY);

    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(bookmarks));
  }, [bookmarks]);

  const addBookmark = (questionId: string) => {
    setBookmarks((prev) => {
      if (prev.includes(questionId)) {
        return prev;
      }

      return [...prev, questionId];
    });
  };

  const removeBookmark = (questionId: string) => {
    setBookmarks((prev) => prev.filter((id) => id !== questionId));
  };

  const toggleBookmark = (questionId: string) => {
    setBookmarks((prev) =>
      prev.includes(questionId)
        ? prev.filter((id) => id !== questionId)
        : [...prev, questionId],
    );
  };

  const isBookmarked = (questionId: string) => {
    return bookmarks.includes(questionId);
  };

  const clearBookmarks = () => {
    setBookmarks([]);
  };

  return {
    bookmarks,
    addBookmark,
    removeBookmark,
    toggleBookmark,
    isBookmarked,
    clearBookmarks,
  };
}
