import express, { json } from "express";
import userRoutes from "./routes/user.routes.js";

const app = express();

app.use(json());

// "/users" es el prefijo o ruta base
// Ejemplo: http://localhost:3000/users
app.use("/users", userRoutes);

app.listen(3000, () => {
  console.log("Servidor corriendo en http://localhost:3000");
});
