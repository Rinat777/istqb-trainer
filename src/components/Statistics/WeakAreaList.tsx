interface WeakArea {
  topic: string;
  wrongAnswers: number;
  totalQuestions: number;
}

interface WeakAreaListProps {
  weakAreas: WeakArea[];
}

export default function WeakAreaList({ weakAreas }: WeakAreaListProps) {
  const sortedAreas = [...weakAreas].sort(
    (a, b) => b.wrongAnswers - a.wrongAnswers,
  );

  return (
    <div
      style={{
        backgroundColor: "#ffffff",
        padding: "20px",
        borderRadius: "12px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
      }}
    >
      <h3>Weak Areas</h3>

      {sortedAreas.length === 0 ? (
        <p>No statistics available yet.</p>
      ) : (
        sortedAreas.map((area) => {
          const errorRate = Math.round(
            (area.wrongAnswers / area.totalQuestions) * 100,
          );

          return (
            <div
              key={area.topic}
              style={{
                marginBottom: "20px",
                paddingBottom: "10px",
                borderBottom: "1px solid #e5e7eb",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <strong>{area.topic}</strong>

                <span>
                  {area.wrongAnswers}/{area.totalQuestions}
                  {" wrong"}
                </span>
              </div>

              <div
                style={{
                  marginTop: "8px",
                  width: "100%",
                  height: "12px",
                  backgroundColor: "#e5e7eb",
                  borderRadius: "10px",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    width: `${errorRate}%`,
                    height: "100%",
                    backgroundColor: "#ef4444",
                    transition: "width 0.3s ease",
                  }}
                />
              </div>

              <small>Error Rate: {errorRate}%</small>
            </div>
          );
        })
      )}
    </div>
  );
}
