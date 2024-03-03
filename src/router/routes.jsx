import { Route, Routes } from "react-router-dom";
import Header from "../components/Header.js";
import { Main } from "../components/Main.js";
import { Login } from "../components/Login";
import { Register } from "../components/Register.jsx";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Main />} />
          <Route
            path="login"
            element={<Login/ >}
          />
          <Route
            path="register"
            element={<Register/ >}
          />
        </Route>
      </Routes>
    </>
  );
};
