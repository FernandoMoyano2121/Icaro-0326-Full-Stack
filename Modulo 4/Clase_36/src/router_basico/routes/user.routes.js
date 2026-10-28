import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  const usuarios = [
    { id: 1, nombre: "Ana", email: "ana@email.com" },
    { id: 2, nombre: "Juan", email: "juan@email.com" },
    { id: 3, nombre: "María", email: "maria@email.com" },
  ];

  res.json({
    mensaje: "Listado de usuarios",
    total: usuarios.length,
    usuarios: usuarios,
  });
});

export default router;
