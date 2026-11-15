import express from "express";
import { logger } from "../middlewares/logger.js";
import { mockAuth } from "../middlewares/mockAuth.js";
import { authRoute } from "../middlewares/authRoute.js";
import { errorHandler } from "../middlewares/errorHandler.js";
import { checkApiKey } from "../middlewares/checkApiKey.js";

const app = express();
app.use(express.json());
app.use(logger);

/* Ejemplo 1______________________________________________ */
app.get("/", (req, res) => res.status(200).send("Hola mundo!"));

app.post("/", (req, res) => {
  const { nombre, edad, ciudad } = req.body;

  res.status(200).json({
    nombre: nombre,
    edad: edad,
    ciudad: ciudad,
  });
});
1;

// Thunder Client:
// GET http://localhost:3000/ (sin parámetros ni body)
// POST http://localhost:3000/ (Body > JSON: {"nombre":"Ana","edad":25,"ciudad":"Lima"})

/* Ejemplo 2______________________________________________ */
app.use(mockAuth);

app.get("/admin/dashboard", authRoute, (req, res) => {
  res.send("Bienvenido al Panel de administrador!");
});

// Thunder Client: GET http://localhost:3000/admin/dashboard (sin parámetros ni body)
// Con mockAuth tal como está, responde 403 porque el usuario simulado tiene rol "user".
// Para obtener 200, cambiar el rol en mockAuth a "admin".

/* Ejemplo 3______________________________________________ */

app.get("/productos/:id", (req, res, next) => {
  const id = req.params.id;

  if (isNaN(id)) {
    const error = new Error("ID no valido");
    error.statusCode = 400;
    return next(error);
  }

  const producto = null;

  if (!producto) {
    const error = new Error("producto no encontrado");
    error.statusCode = 404;
    return next(error);
  }
});

// Thunder Client: GET http://localhost:3000/productos/123 (id es un parámetro de ruta numérico).
// Prueba GET http://localhost:3000/productos/abc para recibir 400; con cualquier id numérico,
// el ejemplo responde 404 porque producto está definido como null.

/* Ejemplo 4______________________________________________ */
app.get("/secret", checkApiKey, (req, res) => {
  res.send("Esto es un secreto!");
});

// Thunder Client: GET http://localhost:3000/secret
// Agregar el header x-api-key con cualquier valor no vacío para recibir 200.
// Sin ese header, responde 401.

/* --------------Manejo global de errores--------------------- */

app.use(errorHandler);

/* --------------Escucha del servidor--------------------- */
app.listen(3000, () =>
  console.log("Servidor corriendo en http://localhost:3000"),
);

// GET http://localhost:3000/
