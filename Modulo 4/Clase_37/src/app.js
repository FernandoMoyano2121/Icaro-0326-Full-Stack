import express, { json } from "express";
import productosRoutes from "./routes/productos.routes.js";

const app = express();
const PORT = 3000;

app.use(json());

app.use("/productos", productosRoutes);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
