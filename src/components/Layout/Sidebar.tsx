import { Link, useLocation } from "react-router-dom";

export default function Sidebar() {
  const location = useLocation();

  const menuItems = [
    { label: "🏠 Dashboard", path: "/" },
    { label: "📚 Study Mode", path: "/study" },
    { label: "📝 Exam Simulator", path: "/exam" },
    { label: "🎲 Random Exam", path: "/random" },
    { label: "❌ Wrong Answers", path: "/wrong" },
    { label: "⭐ Bookmarks", path: "/bookmarks" },
    { label: "📊 Statistics", path: "/statistics" },
  ];

  return (
    <aside
      style={{
        width: "250px",
        backgroundColor: "#ffffff",
        borderRight: "1px solid #ddd",
        padding: "20px",
        minHeight: "100vh",
      }}
    >
      <h2
        style={{
          marginBottom: "20px",
        }}
      >
        ISTQB Trainer
      </h2>

      <nav>
        <ul
          style={{
            listStyle: "none",
            padding: 0,
            margin: 0,
          }}
        >
          {menuItems.map((item) => (
            <li
              key={item.path}
              style={{
                marginBottom: "10px",
              }}
            >
              <Link
                to={item.path}
                style={{
                  display: "block",
                  padding: "10px",
                  borderRadius: "8px",
                  textDecoration: "none",
                  color:
                    location.pathname === item.path ? "#ffffff" : "#333333",
                  backgroundColor:
                    location.pathname === item.path ? "#2563eb" : "transparent",
                  fontWeight:
                    location.pathname === item.path ? "bold" : "normal",
                }}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
