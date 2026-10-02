import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div>
      <h1>ISTQB Exam Trainer</h1>

      <ul>
        <li>
          <Link to="/study">Study Mode</Link>
        </li>

        <li>
          <Link to="/exam">Exam Simulator</Link>
        </li>

        <li>
          <Link to="/statistics">Statistics</Link>
        </li>

        <li>
          <Link to="/bookmarks">Bookmarks</Link>
        </li>
      </ul>
    </div>
  );
}
