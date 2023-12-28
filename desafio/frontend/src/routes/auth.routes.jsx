import { Navigate, Route, Routes } from "react-router-dom";
import { SignIn } from "./../pages/SignIn/index";
import { SignUp } from "./../pages/SignUp/index";

export function AuthRoutes() {
  const user = localStorage.getItem(`@rocketmovies:user`);

  return (
    <Routes>
      {!user && <Route element={<Navigate to={`/`} />} path="*" />}

      <Route element={<SignIn />} path="/" />

      <Route element={<SignUp />} path="/register" />
    </Routes>
  );
}
