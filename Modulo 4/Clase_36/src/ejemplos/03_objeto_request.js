import express from "express";

const app = express();

app.get("/productos/:productoId", (req, res) => {
  console.log("parametro: ", req.params.productoId);
  console.log("Consulta", req.query);
  console.log("Metodo", req.method);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en: http://localhost:${PORT}`);
});
