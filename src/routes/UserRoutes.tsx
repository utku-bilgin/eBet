import { Route, Routes } from "react-router";
import MatchList from "../pages/matchList/MatchList";

const UserRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MatchList />} />
        <Route path="matchlist" element={<MatchList />} />
      </Routes>
    </div>
  );
};

export default UserRoutes;
