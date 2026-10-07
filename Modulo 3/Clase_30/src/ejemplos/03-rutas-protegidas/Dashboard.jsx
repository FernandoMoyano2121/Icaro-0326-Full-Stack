import React from "react";

export const Dashboard = ({ setIsAuthenticated }) => {
  return (
    <div>
      <h1>Dashboard privado</h1>
      <p>Solo ves esto porque iniciaste sesión.</p>
      <button onClick={() => setIsAuthenticated(false)}>Cerrar Sesion</button>
    </div>
  );
};
