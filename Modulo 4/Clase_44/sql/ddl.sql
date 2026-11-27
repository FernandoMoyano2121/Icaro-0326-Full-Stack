CREATE DATABASE IF NOT EXISTS tienda;

USE tienda;

CREATE TABLE categorias(
  id INT AUTO_INCREMENT NOT NULL ,
  nombre VARCHAR(80) NOT NULL,
  descripcion TEXT,

  PRIMARY KEY(id)
);

CREATE TABLE productos(
  id INT AUTO_INCREMENT NOT NULL,
  nombre VARCHAR(150) NOT NULL,
  descripcion TEXT,
  precio DECIMAL(10,2) NOT NULL,
  stock INT NOT NULL DEFAULT 0,
  activo BOOLEAN NOT NULL DEFAULT TRUE,
  creado_en TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  actualizado_en TIMESTAMP DEFAULT CURRENT_TIMESTAMP
                           ON UPDATE CURRENT_TIMESTAMP, -- Actualiza la fecha y hora automaticamente cuando se modifica el registro.

  PRIMARY KEY(id)
);


CREATE TABLE producto_categoria(
  producto_id INT NOT NULL, -- Identificador del producto asociado.
  categoria_id INT NOT NULL, -- Identificador de la categoria asociada.
  
  PRIMARY KEY(producto_id, categoria_id), -- Evita asociaciones duplicadas entre producto y categoria.
  
  CONSTRAINT fk_pc_producto -- Relacion con la tabla productos.
    FOREIGN KEY(producto_id) -- Columna que contiene el identificador del producto.
    REFERENCES productos(id) -- Producto al que pertenece la relacion.
    ON DELETE CASCADE, -- Elimina la relacion si se elimina el producto.
    
  CONSTRAINT fk_pc_categoria -- Relacion con la tabla categorias.
    FOREIGN KEY(categoria_id) -- Columna que contiene el identificador de la categoria.
    REFERENCES categorias(id) -- Categoria a la que pertenece la relacion.
    ON DELETE CASCADE -- Elimina la relacion si se elimina la categoria.
  );
