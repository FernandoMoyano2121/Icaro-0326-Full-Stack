import pool from "../../db/conexion.js";

async function testConexion() {
  try {
    // execute devuelve [resultado, metadatos de columnas].
    // En este SELECT, rows es un array de objetos y fields un array con metadatos.
    const [rows, fields] = await pool.execute(
      "SELECT DATABASE() AS base_actual",
    );
    console.log("Conexion exitosa a MySQL");
    console.log("Estructura de rows: ", rows);
  } catch (error) {
    console.error("Error al conectar con  MySQL");
    console.error(error.code ? `${error.code}: ${error.message}` : error);
    process.exit(1);
  }
}

testConexion();
