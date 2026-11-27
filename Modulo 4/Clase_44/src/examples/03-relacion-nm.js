import pool from "../../db/conexion.js";

// ── Estructura genérica (INNER JOIN con tabla intermedia) ──
//   SELECT <columnas>
//   FROM <tabla_A>
//   INNER JOIN <tabla_intermedia> ON <tabla_intermedia.fk_A> = <tabla_A.pk>
//   INNER JOIN <tabla_B>          ON <tabla_B.pk>            = <tabla_intermedia.fk_B>;

const [rows] = await pool.execute(`
    SELECT p.nombre AS producto, c.nombre AS categoria
    FROM productos p
    INNER JOIN producto_categoria pc ON pc.producto_id = p.id
    INNER JOIN categorias c ON c.id = pc.categoria_id
    ORDER BY p.nombre, c.nombre
  `);

console.log(rows);
await pool.end();
