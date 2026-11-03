import express from "express";
import path from "path";
import { fileURLToPath } from "url";

//Obtengo la ruta completa del archivo actual
const __filename = fileURLToPath(import.meta.url);
console.log(__filename);

// Obtengo la carpeta que contiene este archivo.
const __dirname = path.dirname(__filename);
console.log(__dirname);

const app = express();

//Configuracion del motor de vistas
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

//configuracion de los archivos estáticos
app.use(express.static(path.join(__dirname, "public")));

/* -------------------------RUTAS---------------------------------- */

/*
 app.get("/", (req, res) => {
  res.render("index", { nombre: "Juan", apellido: "Garcia" });
}); 
*/

/* 
app.get("/listado", (req, res) => {
  const usuarios = ["Ana", "Romina", "Enrique"];
  res.render("partials/listado", { usuarios });
});
*/

app.get("/usuarios", (req, res) => {
  const usuarios = ["Ana", "Romina", "Enrique"];
  res.render("usuarios/main", { usuarios });
});

/* --------------------ESCUCHA DEL SERVIDOR----------------------- */

app.listen(3000, () => {
  console.log("Servidor corriendo en http://localhost:3000");
});
