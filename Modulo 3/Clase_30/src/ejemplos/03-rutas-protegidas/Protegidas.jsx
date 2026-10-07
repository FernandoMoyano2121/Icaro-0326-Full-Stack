import React, { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { ProtectedRoute } from "./ProtectedRoute";
import { Login } from "./Login";
import { Dashboard } from "./Dashboard";
import { styles } from "../../shared/styles";

export const Protegidas = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <div>
      <nav style={styles.nav}>
        <Link to="/protegidas" style={styles.link}>
          Login
        </Link>
        <Link to="/protegidas/dashboard" style={styles.link}>
          Dashboard(privado)
        </Link>
      </nav>
      <p>Estado:{isAuthenticated ? "🔓 sesión iniciada" : "🔒 sin sesión"}</p>

      <Routes>
        <Route
          index
          element={<Login setIsAuthenticated={setIsAuthenticated} />}
        ></Route>
        <Route
          path="login"
          element={<Login setIsAuthenticated={setIsAuthenticated} />}
        ></Route>
        <Route
          path="dashboard"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Dashboard setIsAuthenticated={setIsAuthenticated} />
            </ProtectedRoute>
          }
        ></Route>
      </Routes>
    </div>
  );
};
