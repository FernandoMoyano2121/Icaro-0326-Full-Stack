INSERT INTO categorias (nombre, descripcion)
VALUES
    ('Electrónica',     'Dispositivos electrónicos, gadgets y tecnología'),
    ('Hogar',           'Electrodomésticos y artículos para el hogar'),
    ('Ropa',            'Indumentaria y accesorios de moda'),
    ('Calzado',         'Zapatillas, zapatos y todo tipo de calzado'),
    ('Libros',          'Libros técnicos, literatura, educativos y más'),
    ('Accesorios',      'Cables, fundas, adaptadores y accesorios varios'),
    ('Gaming',          'Consolas, periféricos y videojuegos'),
    ('Deportes',        'Ropa deportiva, calzado y equipamiento');


INSERT INTO productos (nombre, descripcion, precio, stock)
VALUES
    ('Smartphone Samsung Galaxy A54',      'Pantalla AMOLED 6.4", 128GB, cámara triple 50MP, batería 5000mAh.',           349999.00, 50),
    ('Notebook Lenovo IdeaPad 3',           'Intel Core i5, 8GB RAM, 512GB SSD, pantalla 15.6" Full HD.',                  749999.00, 20),
    ('Auriculares Sony WH-1000XM5',        'Cancelación activa de ruido, 30hs batería, conexión multipunto.',             129999.00, 35),
    ('Smart TV LG 55" 4K UHD',             'Panel NanoCell, webOS, compatible con Alexa y Google Assistant.',            549999.00, 15),
    ('Cafetera Philips Senseo',            'Monodosis, 15 bares de presión, depósito de 1 litro.',                        45999.00, 40),
    ('Aspiradora Robot iRobot Roomba i3',  'Navegación inteligente, compatible con Alexa, vaciado automático.',           189999.00, 10),
    ('Zapatillas Nike Air Max 270',        'Unidad de aire Max en el talón, suela de goma. Talle 42.',                    89999.00,  25),
    ('Remera Adidas Essentials',           'Algodón 100%, corte regular, colores surtidos. Talle M.',                     12999.00, 100),
    ('Clean Code - Robert C. Martin',      NULL,                                                                           8999.00,  30),
    ('Cable USB-C 2 metros',               'Carga rápida hasta 60W, compatible con la mayoría de dispositivos.',           2999.00, 200),
    ('Mouse Gamer Logitech G502 Hero',     'Sensor HERO 25K DPI, 11 botones programables, peso ajustable.',              59999.00,  45),
    ('Zapatillas Adidas Ultraboost Running','Tecnología Boost para máxima amortiguación. Talle 41.',                      119999.00,  30);

INSERT INTO producto_categoria (producto_id, categoria_id)
VALUES
    (1, 1),
    (2, 1),
    (3, 1),
    (4, 1),
    (5, 2),
    (6, 2),
    (7, 4),
    (7, 8),
    (8, 3),
    (8, 8),
    (9, 5),
    (10, 6),
    (11, 1),
    (11, 7),
    (12, 4),
    (12, 8);


    /* 
    
    USE tienda;

    SET FOREIGN_KEY_CHECKS = 0;

    TRUNCATE TABLE producto_categoria;
    TRUNCATE TABLE productos;
    TRUNCATE TABLE categorias;

    SET FOREIGN_KEY_CHECKS = 1;
     */