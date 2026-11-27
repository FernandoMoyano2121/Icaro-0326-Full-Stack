INSERT INTO productos (nombre, descripcion, precio, stock, categoria)
VALUES
    -- Categoría: Electrónica
    (
        'Smartphone Samsung Galaxy A54',
        'Pantalla AMOLED 6.4", 128GB almacenamiento, cámara triple 50MP, batería 5000mAh.',
        349999.00,
        50,
        'Electrónica'
    ),
    (
        'Notebook Lenovo IdeaPad 3',
        'Procesador Intel Core i5, 8GB RAM, 512GB SSD, pantalla 15.6" Full HD.',
        749999.00,
        20,
        'Electrónica'
    ),
    (
        'Auriculares Bluetooth Sony WH-1000XM5',
        'Cancelación activa de ruido, 30 horas de batería, conexión multipunto.',
        129999.00,
        35,
        'Electrónica'
    ),
    (
        'Smart TV LG 55" 4K UHD',
        'Panel NanoCell 4K, webOS, compatible con Alexa y Google Assistant.',
        549999.00,
        15,
        'Electrónica'
    ),

    -- Categoría: Hogar
    (
        'Cafetera Philips Senseo',
        'Cafetera con monodosis, 15 bares de presión, depósito de 1 litro.',
        45999.00,
        40,
        'Hogar'
    ),
    (
        'Aspiradora Robot iRobot Roomba i3',
        'Navegación inteligente, compatible con Alexa, vaciado automático.',
        189999.00,
        10,
        'Hogar'
    ),
    (
        'Licuadora Oster 600W',
        'Vaso de vidrio de 1.5L, 5 velocidades + pulso, cuchillas de acero inoxidable.',
        18999.00,
        60,
        'Hogar'
    ),

    -- Categoría: Ropa y Calzado
    (
        'Zapatillas Nike Air Max 270',
        'Unidad de aire Max en el talón, suela de goma para mayor tracción. Talle 42.',
        89999.00,
        25,
        'Calzado'
    ),
    (
        'Remera Adidas Essentials',
        'Algodón 100%, corte regular, disponible en colores surtidos. Talle M.',
        12999.00,
        100,
        'Ropa'
    ),

    -- Categoría: Libros (producto sin descripción para probar NULL)
    (
        'Clean Code - Robert C. Martin',
        NULL,  -- Sin descripción: la columna acepta NULL
        8999.00,
        30,
        'Libros'
    ),

    -- Producto con precio alto para el filtro de la práctica (precio > 100)
    (
        'Monitor Samsung 27" Curved',
        'Resolución QHD 2560x1440, panel VA, tiempo de respuesta 4ms, 144Hz.',
        299999.00,
        12,
        'Electrónica'
    ),

    -- Producto económico (precio < 100 para el contraste en el filtro)
    (
        'Cable USB-C 2 metros',
        'Cable de carga rápida hasta 60W, compatible con la mayoría de dispositivos.',
        2999.00,
        200,
        'Accesorios'
    );


-- stock mayor a 70
SELECT id,
       nombre,
       precio,
       stock
FROM productos 
WHERE stock > 70
ORDER BY precio ASC;

-- precio mayor a 100000
SELECT id,
       nombre,
       precio,
       stock
FROM productos 
WHERE precio > 100000
ORDER BY precio DESC;


-- Fitrado por categoría
SELECT id,
       nombre,
       precio,
       stock,
       categoria
FROM productos 
WHERE categoria = 'Electrónica'
ORDER BY precio ASC;
