import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Hola Mundo!</h1>");
});

app.get("/", (req, res) => {
  res.json({ mensaje: "Respuesta en formato json" });
});

app.get("/", (req, res) => {
  res.status(404).send("Recurso no encontrado");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en: http://localhost:${PORT}`);
});
