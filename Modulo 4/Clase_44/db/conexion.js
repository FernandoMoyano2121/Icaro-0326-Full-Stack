import "dotenv/config";
import mysql from "mysql2";

const pool = mysql.createPool({
  host: process.env.DB_HOST || "localhost",
  port: process.env.DB_PORT || 3306,
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_NAME || "tienda",
  connectionLimit: process.env.DB_CONNECTION_LIMIT || 10,
});

export default pool.promise();
