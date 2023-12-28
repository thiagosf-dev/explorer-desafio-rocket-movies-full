import { Navigate, Route, Routes } from "react-router-dom";
import { Details } from "./../pages/Details/index";
import { Home } from "./../pages/Home/index";
import { New } from "./../pages/New/index";
import { Profile } from "./../pages/Profile/index";

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<Navigate to={`/`} />} path="*" />

      <Route element={<Home />} path="/" />

      <Route element={<New />} path="/new" />

      <Route element={<Profile />} path="/profile" />

      <Route element={<Details />} path="/details/:id" />
    </Routes>
  );
}
