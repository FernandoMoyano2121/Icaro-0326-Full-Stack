import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { About } from "./About";
import { Contacto } from "./Contacto";
import { styles } from "../../shared/styles";

export const Navegacion = () => {
  return (
    <div>
      <nav style={styles.nav}>
        <Link to="/navegacion" style={styles.link}>
          Inicio
        </Link>
        <Link to="/navegacion/about" style={styles.link}>
          Acerca de
        </Link>
        <Link to="/navegacion/contacto" style={styles.link}>
          Contacto
        </Link>
      </nav>

      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contacto" element={<Contacto />} />
      </Routes>
    </div>
  );
};
