import { Route, Routes } from "react-router-dom";
import { ListaUsuarios } from "./ListaUsuarios";
import { Perfil } from "./Perfil";

export const Params = () => {
  return (
    <Routes>
      <Route index element={<ListaUsuarios />}></Route>
      <Route path="perfil/:usuarioId" element={<Perfil />}></Route>
    </Routes>
  );
};
