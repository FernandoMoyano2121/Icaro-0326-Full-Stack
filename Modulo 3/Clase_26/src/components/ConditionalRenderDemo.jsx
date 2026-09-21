import { useState } from "react";

export const ConditionalRenderDemo = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div
      style={{
        backgroundColor: "beige",
        fontFamily: "Sans serif",
        padding: "1rem",
      }}
    >
      <h3>Ejemplo de Renderizado condicional</h3>
      {loggedIn ? (
        <p style={{ color: "green" }}>Bienvenido!</p>
      ) : (
        <p style={{ color: "red" }}>Por favor inicia Sesion</p>
      )}

      <button
        style={{
          padding: "5px 10px",
          cursor: "pointer",
          marginTop: "10px",
          backgroundColor: "tomato",
          border: "none",
          color: "white",
        }}
        onClick={() => setLoggedIn(!loggedIn)}
      >
        {loggedIn ? "Cerra Sesion" : "Iniciar sesion"}
      </button>
    </div>
  );
};
