<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TECNOMARK - Contacto</title>
    <link rel="stylesheet" href="styles/header.css">
    <link rel="stylesheet" href="styles/footer.css">
    <link rel="stylesheet" href="styles/style.css">
    <link rel="stylesheet" href="styles/productos.css">
</head>
<body>
    <?php
        include 'includes/header.php';
    ?>

    <mian>
        <div class="contenido_productos">
            <?php
                $categoria = $_GET['cat'];

                require_once __DIR__ . '/functions.php';
                $productos = getProducts($categoria . '.txt');
                
                foreach ($productos as $producto) {
                    echo "<img src='imagenes/$producto.webp' alt='$producto' width='200'";
                    echo "<p>$producto</p>";
                }
            ?>
        </div>

    <?php
        include 'includes/footer.php';
    ?>
</body>
</html>