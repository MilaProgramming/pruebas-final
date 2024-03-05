import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
  const rol = localStorage.getItem("rol");

  return rol === "administrador" ? children : <Navigate to="/" />;
};
