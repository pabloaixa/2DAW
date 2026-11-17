<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TECNOMARK - Contacto</title>
    <link rel="stylesheet" href="styles/header.css">
    <link rel="stylesheet" href="styles/footer.css">
    <link rel="stylesheet" href="styles/style.css">
    <link rel="stylesheet" href="styles/contacta.css">
</head>
<body>
    <?php
        include 'includes/header.php';
    ?>

    <main>
        <section class="contacto">
            <div class="contacto_intro">
                <p class="contacto_etiqueta">ESTAMOS PARA AYUDARTE</p>
                <h1>Contacta con nosotros</h1>
                <p>
                    ¿Tienes alguna duda sobre nuestros productos? Escríbenos y te
                    responderemos lo antes posible.
                </p>
            </div>

            <form class="formulario_contacto">
                <div class="campo_formulario">
                    <label for="nombre">Nombre</label>
                    <input type="text" id="nombre" name="nombre" placeholder="Tu nombre">
                </div>

                <div class="campo_formulario">
                    <label for="email">Email</label>
                    <input type="email" id="email" name="email" placeholder="tu@email.com">
                </div>

                <div class="campo_formulario">
                    <label for="asunto">Asunto</label>
                    <input type="text" id="asunto" name="asunto" placeholder="¿En qué podemos ayudarte?">
                </div>

                <div class="campo_formulario">
                    <label for="mensaje">Mensaje</label>
                    <textarea id="mensaje" name="mensaje" rows="6" placeholder="Escribe tu mensaje"></textarea>
                </div>

                <button type="submit">Enviar mensaje</button>
            </form>
        </section>
    </main>

    <?php
        include 'includes/footer.php';
    ?>
</body>
</html>