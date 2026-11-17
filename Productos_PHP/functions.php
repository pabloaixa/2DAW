<?php
    function getCategories() {
        $rutaArchivo = __DIR__ . '/categorias.txt';

        return file($rutaArchivo);
    }

    function getProducts($rutaArchivo) {
        $rutaArchivo2 = __DIR__ . '/productos/' . $rutaArchivo;

        return file($rutaArchivo2);
    }
?>
