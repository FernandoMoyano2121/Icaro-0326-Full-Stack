import express from "express";
import jwt from "jsonwebtoken";

const app = express();
app.use(express.json());

const ACCESS_SECRET =
  "bc9558e3567a8d71cffe90f4fbc8c50abc7f5db3ce3f91cb3b9aae5e855db6f3";
const REFRESH_SECRET =
  "74e1fdbc8e0a028d315dfb615f8ba5143e96100c2c068d2aa736048346769e4";

// ---------------------------------------------------------------
// USUARIOS SIMULADOS
// ---------------------------------------------------------------
const usuarios = [
  { id: 1, usuario: "fernando", password: "1234" },
  { id: 2, usuario: "ana", password: "abcd" },
];

const refreshTokensValidos = new Set();

const verificarAccessToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];

  if (!authHeader) {
    return res.status(401).json({ mensaje: "Token no proporcionado" });
  }

  const token = authHeader.split(" ")[1];

  try {
    // Verificamos con la clave del ACCESS TOKEN
    const decoded = jwt.verify(token, ACCESS_SECRET);
    req.usuarioLogueado = decoded;
    next();
  } catch (error) {
    return res.status(403).json({ mensaje: "Token inválido o expirado" });
  }
};

app.post("/login", (req, res) => {
  const { usuario, password } = req.body;

  const usuarioEncontrado = usuarios.find(
    (u) => u.usuario === usuario && u.password === password,
  );

  if (!usuarioEncontrado) {
    return res.status(401).json({ mensaje: "Credenciales inválidas" });
  }

  const payload = {
    id: usuarioEncontrado.id,
    usuario: usuarioEncontrado.usuario,
  };

  // Access Token: dura poco (30 segundos para la demo, en prod: '15m')
  const accessToken = jwt.sign(payload, ACCESS_SECRET, { expiresIn: "50s" });

  // Refresh Token: dura mucho (7 días en prod)
  const refreshToken = jwt.sign(payload, REFRESH_SECRET, { expiresIn: "7d" });

  // Guardamos el refresh token para poder validarlo luego
  refreshTokensValidos.add(refreshToken);

  res.json({
    accessToken,
    refreshToken,
    mensaje: "Login exitoso. El accessToken dura 30 segundos (demo).",
  });
});

app.get("/perfil", verificarAccessToken, (req, res) => {
  res.json({
    mensaje: "¡Perfil accedido correctamente! 🔓",
    usuario: req.usuarioLogueado,
  });
});

app.post("/refresh", (req, res) => {
  const { refreshToken } = req.body;

  // 1. Verificamos que nos mandaron un refresh token
  if (!refreshToken) {
    return res.status(401).json({ mensaje: "Refresh token no proporcionado" });
  }

  // 2. Verificamos que el refresh token esté en nuestra lista de válidos
  //    (si el usuario hizo logout, ya no estará en la lista)
  if (!refreshTokensValidos.has(refreshToken)) {
    return res
      .status(403)
      .json({ mensaje: "Refresh token inválido o ya fue invalidado" });
  }

  // 3. Verificamos la firma del refresh token
  try {
    const decoded = jwt.verify(refreshToken, REFRESH_SECRET);

    // 4. Generamos un nuevo Access Token con los mismos datos
    const nuevoPayload = {
      id: decoded.id,
      usuario: decoded.usuario,
    };

    const nuevoAccessToken = jwt.sign(nuevoPayload, ACCESS_SECRET, {
      expiresIn: "50s",
    });

    res.json({
      accessToken: nuevoAccessToken,
      mensaje: "Nuevo access token generado exitosamente ✅",
    });
  } catch (error) {
    // El refresh token también puede haber expirado
    return res
      .status(403)
      .json({ mensaje: "Refresh token expirado o inválido" });
  }
});

app.post("/logout", (req, res) => {
  const { refreshToken } = req.body;

  // Eliminamos el token de la lista → ya no podrá usarse para renovar
  refreshTokensValidos.delete(refreshToken);

  res.json({
    mensaje: "Sesión cerrada correctamente. Refresh token invalidado. 🔒",
  });
});

app.listen(3000, () => {
  console.log("Servidor corriendo en http://localhost:3000");
  console.log("");
  console.log("Rutas disponibles:");
  console.log("  POST /login    → pública: genera accessToken + refreshToken");
  console.log("  GET  /perfil   → protegida: requiere accessToken");
  console.log(
    "  POST /refresh  → renueva el accessToken usando el refreshToken",
  );
  console.log("  POST /logout   → invalida el refreshToken");
});
