import express, { json } from "express";
//import taskViewRoutes from "../src/routes/task.view.route.js";
import taskRoutes from "../src/routes/task.route.js";
import path from "path";

const app = express(); // Crea la aplicación de Express.
const PORT = 3000; // Define el puerto donde escuchará el servidor.

app.set("view engine", "ejs");
app.set("views", path.join(path.resolve(), "src", "views"));

app.use(json());
// app.use("/", taskViewRoutes);
app.use("/api", taskRoutes);

app.listen(PORT, () => {
  // Inicia el servidor y ejecuta esta función cuando queda escuchando.
  console.log(`Server Escuchando en http://localhost:${PORT}`);
  // Muestra en consola la dirección del servidor.
});
