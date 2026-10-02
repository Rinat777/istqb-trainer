import useBookmarks from "../hooks/useBookmarks";
import { useQuestions } from "../hooks/useQuestions";

export default function Bookmarks() {
  const { bookmarks, removeBookmark } = useBookmarks();

  const { questions, loading } = useQuestions();

  if (loading) {
    return <p>Loading...</p>;
  }

  const bookmarkedQuestions = questions.filter((question) =>
    bookmarks.includes(question.id),
  );

  return (
    <div>
      <h1>⭐ Bookmarks</h1>

      <p>
        Total Bookmarked Questions:{" "}
        <strong>{bookmarkedQuestions.length}</strong>
      </p>

      {bookmarkedQuestions.length === 0 ? (
        <div>
          <p>No bookmarked questions found.</p>
        </div>
      ) : (
        bookmarkedQuestions.map((question) => (
          <div
            key={question.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "10px",
              padding: "16px",
              marginBottom: "16px",
              backgroundColor: "#fff",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <h3>
                {question.id} ({question.exam})
              </h3>

              <button onClick={() => removeBookmark(question.id)}>
                Remove ⭐
              </button>
            </div>

            <p>{question.question}</p>

            <p>
              <strong>Correct Answer:</strong> {question.answer.toUpperCase()}
            </p>

            <p>
              <strong>Explanation:</strong> {question.explanation}
            </p>
          </div>
        ))
      )}
    </div>
  );
}
