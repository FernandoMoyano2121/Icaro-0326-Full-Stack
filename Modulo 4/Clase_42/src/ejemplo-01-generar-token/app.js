import express from "express";
import jwt from "jsonwebtoken";

const app = express();
app.use(express.json());

const CLAVE_SECRETA =
  "3c7abd5d75e3b311c2cc5912d67f386ea14f5614baabebbf23f957a42380060a";

const usuarios = [
  { id: 1, usuario: "fernando", password: "1234" },
  { id: 2, usuario: "ana", password: "abcd" },
];

app.get("/", (req, res) => {
  res.json({ mensaje: "Servidor JWT corriendo" });
});

app.post("/login", (req, res) => {
  // 1. Extraemos los datos del body
  const { usuario, password } = req.body;

  // 2. Buscamos el usuario en nuestra "base de datos"
  const usuarioEncontrado = usuarios.find(
    (u) => u.usuario === usuario && u.password === password,
  );

  // 3. Si no existe, respondemos con error 401
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

app.listen(3000, () => {
  console.log("Servidor corriendo en http://localhost:3000");
});
