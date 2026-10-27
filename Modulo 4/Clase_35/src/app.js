import express from "express";

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hola alumnos");
});

app.listen(3000, () => {
  console.log(`El servidor está corriendo en : http://localhost:${PORT}`);
});
