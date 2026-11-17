<header>
    <div class="contenido_menu">
        <div class="logo">
            <img src="imagenes/logo.webp" alt="Logo">
            <h1>TECNOMARK</h1>
        </div>

        <nav>
            <ul>
                <li><a href="index.php">Inicio</a></li>
                <li><a href="contacta.php">Contacto</a></li>
            </ul>
        </nav>
    </div>
    <div class="contenido_productos">
        <ul>
            <?php
                require_once __DIR__ . '/../functions.php';
                $categorias = getCategories();
                
                foreach ($categorias as $categoria) {

                    echo "<li><a href='productos.php?cat=$categoria'>$categoria</a></li>";
                }
            ?>
        </ul>
    </div>
</header>
