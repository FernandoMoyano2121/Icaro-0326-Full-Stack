import { Router } from "express";

const router = Router();

/*  
{
   nombre: "Notebook",
   precio: 1500,
   stock:10
}  
*/
let productos = [];

router.get("/", (req, res) => {
  res.json(productos);
});

router.post("/", (req, res) => {
  const nuevoProducto = req.body;
  nuevoProducto.id = productos.length + 1;
  productos.push(nuevoProducto);

  res.status(201).json({
    nuevoProducto,
  });
});

router.put("/:id", (req, res) => {
  const id = Number(req.params.id);
  const datosActualizados = req.body;

  let producto = productos.find((p) => p.id === id);

  if (!producto) {
    return res.status(404).json({
      error: "Producto no encontrado",
    });
  }

  // Implementación original: permite actualizaciones parciales conservando
  // los campos del producto que no fueron enviados en req.body.
  producto = { ...producto, ...datosActualizados };

  const index = productos.findIndex((p) => p.id === id);
  productos[index] = producto;

  res.json(producto);
});

router.put("/:id", (req, res) => {
  const id = Number(req.params.id);
  const datosActualizados = req.body;

  const producto = productos.find((p) => p.id === id);

  if (!producto) {
    return res.status(404).json({
      error: "Producto no encontrado",
    });
  }

  // PUT estricto: exige que req.body contenga todos los campos que forman
  // la representación completa del producto.
  const tieneEstructuraCompleta =
    datosActualizados.nombre !== undefined &&
    datosActualizados.precio !== undefined &&
    datosActualizados.stock !== undefined;

  // No se reemplaza el producto si falta algún campo obligatorio.
  if (!tieneEstructuraCompleta) {
    return res.status(400).json({
      error: "PUT requiere los campos nombre, precio y stock",
    });
  }

  // Se crea un objeto nuevo y completo. No se mezcla con el producto existente:
  // así, este PUT reemplaza todos los datos del recurso.
  // El identificador no se toma de req.body, sino de la URL.
  const productoActualizado = {
    id,
    nombre: datosActualizados.nombre,
    precio: datosActualizados.precio,
    stock: datosActualizados.stock,
  };

  const index = productos.findIndex((p) => p.id === id);
  productos[index] = productoActualizado;

  res.json(productoActualizado);
});

router.delete("/:id", (req, res) => {
  const id = Number(req.params.id);

  const index = productos.findIndex((p) => p.id === id);

  if (index === -1) {
    res.status(404).json({ error: "Producto no encontrado" });
  }

  productos.splice(index, 1);
  productos.forEach((p, i) => (p.id = i + 1));

  res.json({ message: "Producto Eliminado" });
});

export default router;
