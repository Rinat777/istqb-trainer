import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header
      style={{
        backgroundColor: "#1e3a8a",
        color: "white",
        padding: "16px 24px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h1>🎓 ISTQB Trainer</h1>

      <nav>
        <ul
          style={{
            display: "flex",
            gap: "20px",
            listStyle: "none",
            margin: 0,
            padding: 0,
          }}
        >
          <li>
            <Link to="/">Dashboard</Link>
          </li>

          <li>
            <Link to="/study">Study</Link>
          </li>

          <li>
            <Link to="/exam">Exam</Link>
          </li>

          <li>
            <Link to="/statistics">Statistics</Link>
          </li>

          <li>
            <Link to="/bookmarks">Bookmarks</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
