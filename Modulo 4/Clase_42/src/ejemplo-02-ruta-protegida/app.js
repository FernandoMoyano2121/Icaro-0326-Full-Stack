import express from "express";
import jwt from "jsonwebtoken";

const app = express();
app.use(express.json());

const CLAVE_SECRETA =
  "7b257d66e33f277993da9587725d4bfbd32cc8349140e551c108489d88fb1838";

const usuarios = [
  { id: 1, usuario: "fernando", password: "1234" },
  { id: 2, usuario: "ana", password: "abcd" },
];

const verificarToken = (req, res, next) => {
  // 1. Leer el header Authorization
  const authHeader = req.headers["authorization"];

  // 2. Si no hay header, respondemos 401 (no autenticado)
  if (!authHeader) {
    return res.status(401).json({ mensaje: "Token no proporcionado" });
  }

  // 3. El header viene así: "Bearer eyJhbGci..."
  //    Separamos por espacio y tomamos la segunda parte (índice 1)
  const token = authHeader.split(" ")[1];

  if (!token) {
    return res
      .status(401)
      .json({ mensaje: "Formato de token inválido. Usar: Bearer <token>" });
  }

  try {
    // 4. Verificamos el token con jwt.verify()
    //    - Si es válido: decoded contiene el payload original
    //    - Si es inválido o expiró: lanza un error
    const decoded = jwt.verify(token, CLAVE_SECRETA);

    // 5. Guardamos los datos decodificados en req para usarlos en la ruta
    req.usuarioLogueado = decoded;

    // 6. Llamamos a next() para pasar al handler de la ruta
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

  const token = jwt.sign(payload, CLAVE_SECRETA, { expiresIn: "1h" });

  res.json({ token });
});

app.get("/datos-privados", verificarToken, (req, res) => {
  res.json({
    mensaje: "¡Acceso concedido! 🔓",
    datosPrivados: {
      secreto: "Este es un dato que solo los usuarios autenticados pueden ver",
      saldo: 99999,
    },
    // Mostramos quién está accediendo (viene del token decodificado)
    usuarioQueAccede: req.usuarioLogueado,
  });
});

app.listen(3000, () => {
  console.log("Servidor corriendo en http://localhost:3000");
  console.log("");
  console.log("Rutas disponibles:");
  console.log("  POST /login         → pública (genera el token)");
  console.log("  GET  /datos-privados → protegida (requiere token)");
});
