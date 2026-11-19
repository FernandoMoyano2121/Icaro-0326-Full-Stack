import express, { json } from "express";

import cookieParser from "cookie-parser";
import cors from "cors";
import session from "express-session";

import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(express.static(path.join(__dirname, "..")));

app.use(cookieParser());
app.use(json());

app.use(
  cors({
    origin: ["http://localhost:5500", "http://127.0.0.1:5500"],
    credentials: true,
  }),
);

/* =============================================================================
   EJEMPLO 1: LOGIN CON COOKIES MANUALES
   =============================================================================*/

// LOGIN: Crea una cookie con el nombre del usuario
app.post("/cookie/login", (req, res) => {
  const { usuario } = req.body;

  if (!usuario) {
    return res.status(400).json({ error: "El usuario es requerido" });
  }

  res.cookie("usuario", usuario, {
    maxAge: 60000, //Tiempo de vida
    httpOnly: true, // No accesible desde JS del cliente
    secure: false, // Desarrollo local por HTTP
    sameSite: "lax",
  });

  res.json({ message: `Cookie creada para ${usuario}` });
});

// DASHBOARD: Lee la cookie para verificar si hay "sesión"
app.get("/cookie/dashboard", (req, res) => {
  const usuario = req.cookies.usuario;

  if (!usuario) {
    return res
      .status(401)
      .json({ error: "No autorizado - Cookie no encontrada" });
  }

  res.json({ mensaje: `Bienvenido ${usuario} (cookie manual)` });
});

// LOGOUT: Elimina la cookie
app.post("/cookie/logout", (req, res) => {
  res.clearCookie("usuario");
  res.json({ message: "Cookie eliminada" });
});

// VER: Muestra todas las cookies recibidas
app.get("/cookie/ver", (req, res) => {
  console.log("Cookies recibidas:", req.cookies);
  res.json({ cookies: req.cookies });
});

/* =============================================================================
   EJEMPLO 2: LOGIN CON EXPRESS-SESSION
   =============================================================================*/

app.use(
  session({
    secret: "miClaveSecreta",
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
      maxAge: 60000,
    },
  }),
);

// LOGIN: Guarda datos en la sesión del servidor
app.post("/session/login", (req, res) => {
  const { usuario } = req.body;

  if (!usuario) {
    return res.status(400).json({ error: "El usuario es requerido" });
  }

  // Guarda en el SERVIDOR, no en la cookie
  req.session.usuario = usuario;

  res.json({ message: `Sesión iniciada para: ${usuario}` });
});

// DASHBOARD: Verifica si hay sesión activa
app.get("/session/dashboard", (req, res) => {
  if (!req.session.usuario) {
    return res
      .status(401)
      .json({ error: "No autorizado - Sesión no encontrada" });
  }

  res.json({
    mensaje: `¡Bienvenido ${req.session.usuario}! (express-session)`,
  });
});

// LOGOUT: Destruye la sesión
app.post("/session/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).json({ error: "Error al cerrar sesión" });
    }
    res.clearCookie("connect.sid");
    res.json({ message: "Sesión destruida" });
  });
});

/* ------------------------------------------------------------------- */
app.listen(3000, () => {
  console.log("=".repeat(65));
  console.log("CLASE 41: COOKIES Y SESIONES");
  console.log("=".repeat(65));
  console.log("Servidor: http://localhost:3000");
  console.log("");

  console.log(
    "EJEMPLO 1 - COOKIES MANUALES (Live Server: http://localhost:5500):",
  );
  console.log("  POST /cookie/login      → Crear cookie");
  console.log("  GET  /cookie/dashboard  → Leer cookie");
  console.log("  POST /cookie/logout     → Eliminar cookie");
  console.log("");

  console.log("EJEMPLO 2 - EXPRESS-SESSION (probar desde localhost:3000):");
  console.log("  POST /session/login     → Iniciar sesión");
  console.log("  GET  /session/dashboard → Verificar sesión");
  console.log("  POST /session/logout    → Cerrar sesión");
  console.log("");
  console.log("⚠️  El Ejemplo 2 requiere acceder desde:");
  console.log("    http://localhost:3000/index.html");
  console.log("=".repeat(65));
});
