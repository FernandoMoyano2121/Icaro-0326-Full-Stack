import { useState } from "react";

export const useAuth = () => {
  const [usuario, setUsuario] = useState(null);

  const login = (nombre) => {
    setUsuario(nombre);
  };

  const logout = () => {
    setUsuario(null);
  };

  return { usuario, login, logout };
};
