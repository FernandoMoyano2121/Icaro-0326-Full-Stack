// -----------------------------------------------------------------------------
// PASO 1: Importar Express usando require/import()
// -----------------------------------------------------------------------------

//const express = require("express");
import express from "express";

// -----------------------------------------------------------------------------
// PASO 2: Crear la instancia de la aplicación
// -----------------------------------------------------------------------------
const app = express();

// -----------------------------------------------------------------------------
// PASO 3: Iniciar el servidor con listen()
// -----------------------------------------------------------------------------

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en : http://localhost:${PORT}`);
});
