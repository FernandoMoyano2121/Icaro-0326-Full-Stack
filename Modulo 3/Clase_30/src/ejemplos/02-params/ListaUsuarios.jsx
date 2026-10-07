import React from "react";
import { usuarios } from "./usuarios";
import { Link } from "react-router-dom";

export const ListaUsuarios = () => {
  return (
    <div>
      <h1>Listado de usuarios</h1>
      <p>Hacé click en un usuario para ver su perfil</p>

      <div style={estilos.lista}>
        {usuarios.map((usuario) => (
          <Link
            key={usuario.id}
            to={`/params/perfil/${usuario.id}`}
            style={estilos.usuarioLink}
          >
            <div style={estilos.usuarioCard}>
              <strong>Nombre: {usuario.nombre}</strong>
              <small>ID: {usuario.id}</small>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

const estilos = {
  lista: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    margin: "20px 0",
  },
  usuarioLink: {
    textDecoration: "none",
  },
  usuarioCard: {
    background: "#fff",
    padding: "15px 20px",
    borderRadius: "8px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    border: "2px solid #fd7e14",
    color: "#333",
  },
};
