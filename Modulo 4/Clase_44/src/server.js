import express from "express";
import pool from "../db/conexion.js";

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para parsear JSON en el body de los requests
app.use(express.json());

app.listen(PORT, () => {
  console.log(` 🚀 Servidor corriendo en http://localhost:${PORT}`);
});
