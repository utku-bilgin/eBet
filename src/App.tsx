import { Routes, Route } from "react-router";
import UserRoutes from "./routes/UserRoutes";
import { MatchProvider } from "./context/MatchContext";
import style from "./App.module.scss";
import { BetslipProvider } from "./context/BetslipContext";

function App() {
  return (
    <div className={style.container}>
      <MatchProvider>
        <BetslipProvider>
          <Routes>
            <Route path="/*" element={<UserRoutes />} />
            <Route path="user/*" element={<UserRoutes />} />
          </Routes>
        </BetslipProvider>
      </MatchProvider>
    </div>
  );
}

export default App;
