import { Routes, Route } from "react-router-dom";

import Dashboard from "../pages/Dashboard";

import StudyMode from "../pages/StudyMode";

import ExamMode from "../pages/ExamMode";
import RandomExam from "../pages/RandomExam";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />

      <Route path="/study" element={<StudyMode />} />

      <Route path="/exam" element={<ExamMode />} />

      <Route path="/random" element={<RandomExam />} />
    </Routes>
  );
}
