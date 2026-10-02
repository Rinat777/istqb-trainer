import { BrowserRouter } from "react-router-dom";

import StatisticsProvider from "./context/StatisticsProvider";

import QuestionProvider from "./context/QuestionProvider";

import AppRoutes from "./routes/AppRoutes";

export default function App() {
  return (
    <BrowserRouter>
      <StatisticsProvider>
        <QuestionProvider>
          <AppRoutes />
        </QuestionProvider>
      </StatisticsProvider>
    </BrowserRouter>
  );
}
