import pool from "../../db/conexion.js";

async function obtenerCategorias() {
  console.log("[READ] TODAS LAS CATEGORIAS");

  const [categorias] = await pool.execute(
    "SELECT * FROM categorias ORDER BY nombre",
  );

  categorias.forEach((cat) => {
    console.log(
      `${cat.id} ${cat.nombre} - ${cat.descripcion || "(sin descripción)"} `,
    );
  });

  return categorias;
}

async function obtenerCategoriaPorId(id) {
  console.log(`[READ] Categoría con ID ${id}:`);
  console.log("─".repeat(50));

  // El ? es un placeholder: mysql2 reemplaza ? por el valor del array
  // de forma segura (escape automático → no inyección SQL).
  // El array de parámetros siempre corresponde en orden a los ? de la query.
  const [rows] = await pool.execute(
    "SELECT * FROM categorias WHERE id = ?",
    [id], // Parámetros en un array, aunque sea uno solo
  );

  if (rows.length === 0) {
    console.log("No se encontró ninguna categoría con ese ID.");
    return null;
  }

  console.log("  Encontrada:", rows[0]);
  return rows[0]; // rows[0] porque WHERE id = ? devuelve máximo 1 fila
}

async function crearCategoria(nombre, descripcion) {
  console.log(`[CREATE] Creando Categoria ${nombre}`);

  const [resultado] = await pool.execute(
    "INSERT INTO categorias (nombre, descripcion) VALUES (?,?)",
    [nombre, descripcion],
  );

  console.log("Categoria creada");
  console.log("Id generado ", resultado.insertId);

  return resultado.insertId;
}

async function actualizarCategoria(id, nombre, descripcion) {
  console.log(`[UPDATE] Actualizando categoría ID ${id}:`);
  console.log("─".repeat(50));

  // Cuando usamos múltiples ?, el ORDEN del array de parámetros
  // debe coincidir exactamente con el orden de los ? en la query.
  // Aquí: primer ? → nombre, segundo ? → descripcion, tercer ? → id (WHERE)
  //
  // pool.execute() con UPDATE devuelve un ResultSetHeader (ver encabezado del archivo).
  // Usamos affectedRows para saber si el WHERE encontró alguna fila.
  // Si vale 0 → el ID no existía y no se modificó nada.
  const [resultado] = await pool.execute(
    "UPDATE categorias SET nombre = ?, descripcion = ? WHERE id = ?",
    [nombre, descripcion, id],
  );

  if (resultado.affectedRows === 0) {
    console.log(
      "No se encontró ninguna categoría con ese ID. No se actualizó nada.",
    );
    return false;
  }

  console.log("  ✅ Categoría actualizada con éxito");
  console.log("Filas afectadas (affectedRows):", resultado.affectedRows);
  // changedRows puede ser menor que affectedRows si el valor nuevo era igual al anterior
  console.log("Filas con valor nuevo (changedRows):", resultado.changedRows);
  return true;
}

async function eliminarCategoria(id) {
  console.log(`[DELETE] Eliminando categoría ID ${id}:`);
  console.log("─".repeat(50));

  const [resultado] = await pool.execute(
    "DELETE FROM categorias WHERE id = ?",
    [id],
  );

  if (resultado.affectedRows === 0) {
    console.log(
      "No se encontró ninguna categoría con ese ID. No se eliminó nada.",
    );
    return false;
  }

  console.log("✅ Categoría eliminada con éxito");
  // NOTA: Si esta categoría tenía productos asignados en producto_categoria,
  //       gracias al ON DELETE CASCADE del SQL, esas filas también se eliminan
  //       automáticamente. La integridad referencial se mantiene sola.
  return true;
}

async function main() {
  try {
    const categorias = await obtenerCategorias();
    const categoria = await obtenerCategoriaPorId(2);
    const nuevoId = await crearCategoria("Mascotas", "Alimentos y juguetes");
  } catch (error) {
    console.error(error);
  } finally {
    await pool.end();
  }
}

main();
