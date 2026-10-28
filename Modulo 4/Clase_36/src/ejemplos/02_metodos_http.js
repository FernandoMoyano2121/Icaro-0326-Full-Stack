import express from "express";

const app = express();

//Obtencion de un usuario
app.get("/usuarios", (req, res) => {
  res.send("<h2>Acá se mostraria un listado de usuario</h2>");
});

//Creacion de un usuario
app.post("/usuarios", (req, res) => {
  //dentro de req.body viajarian los datos de creacion de usuario
  res.send("<h2>Crear Usuario</h2>");
});

//Actualizacion completa
app.put("/usuarios/:id", (req, res) => {
  //dentro de req.body viajarian los datos de actualizacion del usuario
  res.send(
    `El Usuario con el id: ${req.params.id} fue actualizado correctamente`,
  );
});

//Actualizacion parcial
app.patch("/usuarios/:id", (req, res) => {
  //dentro de req.body viajarian los datos de actualizacion parcial del usuario
  res.send(
    `El Usuario con el id: ${req.params.id} fue actualizado parcialmente de manera correcta`,
  );
});

//Eliminacion de un recurso
app.delete("/usuarios/:id", (req, res) => {
  res.send(
    `El Usuario con el id: Usuario ${req.params.id} fue eliminado de manera correcta`,
  );
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en: http://localhost:${PORT}`);
});
