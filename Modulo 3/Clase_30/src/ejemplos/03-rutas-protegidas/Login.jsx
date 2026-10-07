import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

export const Login = ({ setIsAuthenticated }) => {
  const navigate = useNavigate();

  const iniciarSesion = () => {
    setIsAuthenticated(true);
    /* <Navigate to="<Dashboard />"/> */
    navigate("/protegidas/dashboard");
  };

  return (
    <div>
      <h1>Login</h1>
      <p>Para ver el Dashboard necesitás iniciar sesión.</p>
      <button onClick={iniciarSesion}>Iniciar Sesion</button>
    </div>
  );
};
