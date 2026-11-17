/// VARIABLES ///

const filas = 10;
const columnas = 10;

let matriz;
let serpiente;
let fruta;

let intervaloJuego = null;
let velocidad = 200;
let juegoTerminado = false;
let puntos = 0;

let direccion = "r";

document.addEventListener("keydown", function (evento) {
    if (evento.key === "ArrowUp") {
        direccion = "u";
        document.getElementById("teclaArriba").classList.add("activa");
    } else if (evento.key === "ArrowDown") {
        direccion = "d";
        document.getElementById("teclaAbajo").classList.add("activa");
    } else if (evento.key === "ArrowLeft") {
        direccion = "l";
        document.getElementById("teclaIzquierda").classList.add("activa");
    } else if (evento.key === "ArrowRight") {
        direccion = "r";
        document.getElementById("teclaDerecha").classList.add("activa");
    }
});

document.addEventListener("keyup", function (evento) {
    if (evento.key === "ArrowUp") {
        document.getElementById("teclaArriba").classList.remove("activa");
    } else if (evento.key === "ArrowDown") {
        document.getElementById("teclaAbajo").classList.remove("activa");
    } else if (evento.key === "ArrowLeft") {
        document.getElementById("teclaIzquierda").classList.remove("activa");
    } else if (evento.key === "ArrowRight") {
        document.getElementById("teclaDerecha").classList.remove("activa");
    }
});

function moverArriba() {
    direccion = "u";
}

function moverAbajo() {
    direccion = "d";
}

function moverIzquierda() {
    direccion = "l";
}

function moverDerecha() {
    direccion = "r";
}

document.getElementById("teclaArriba").addEventListener("click", moverArriba);
document.getElementById("teclaAbajo").addEventListener("click", moverAbajo);
document.getElementById("teclaIzquierda").addEventListener("click", moverIzquierda);
document.getElementById("teclaDerecha").addEventListener("click", moverDerecha);


/// FUNCIONES ///

// Crea una matriz
function crearMatriz(filas, columnas) {
    let matriz = [];
    for (let i = 0; i < filas; i++) {
        matriz[i] = [];
        for (let j = 0; j < columnas; j++) {
            matriz[i][j] = 0;
        }
    }
    return matriz;
}

// Dibuja la matriz en la tabla
function mostrarMatriz(matriz) {
    let tabla = document.getElementById("tabla");
    tabla.innerHTML = "";

    for (let f = 0; f < matriz.length; f++) {
        let fila = document.createElement("tr");

        for (let c = 0; c < matriz[f].length; c++) {
            let celda = document.createElement("td");
            celda.textContent = matriz[f][c];

            if (matriz[f][c] === 1) {
                celda.className = "serpiente";
            } else if (matriz[f][c] === 2) {
                celda.className = "fruta";
            } else {
                celda.className = "vacia";
            }

            fila.appendChild(celda);
        }

        tabla.appendChild(fila);
    }
}

// Dibuja la serpiente en la matriz
function dibujarSerpiente(matriz, serpiente) {
    for (let i = 0; i < serpiente.length; i++) {
        let [f, c] = serpiente[i];
        matriz[f][c] = 1;
    }
}

// Dibuja la fruta en la matriz
function dibujarFruta(matriz, fruta) {
    let [f, c] = fruta;
    matriz[f][c] = 2;
}

// Mueve la serpiente
function moverSerpiente() {
    let cabeza = serpiente[serpiente.length - 1];
    let nuevaCabeza = [cabeza[0], cabeza[1]];

    if (direccion === "u") {
        nuevaCabeza[0]--;
    } else if (direccion === "d") {
        nuevaCabeza[0]++;
    } else if (direccion === "l") {
        nuevaCabeza[1]--;
    } else if (direccion === "r") {
        nuevaCabeza[1]++;
    }

    let fila = nuevaCabeza[0];
    let columna = nuevaCabeza[1];

    if (fila < 0 || fila >= filas || columna < 0 || columna >= columnas) {
        alert("Juego terminado");
        juegoTerminado = true;
        clearInterval(intervaloJuego);
        return;
    }

    for (let i = 0; i < serpiente.length; i++) {
        if (serpiente[i][0] === fila && serpiente[i][1] === columna) {
            alert("Juego terminado");
            juegoTerminado = true;
            clearInterval(intervaloJuego);
            intervaloJuego = null;
            return;
        }
    }

    serpiente.push(nuevaCabeza);

    if (fila !== fruta[0] || columna !== fruta[1]) {
        serpiente.shift();
    } else {
        puntos++;
        actualizarPuntos();

        if (puntos % 5 === 0) {
            velocidad = velocidad - 20;
            clearInterval(intervaloJuego);
            intervaloJuego = setInterval(actualizarJuego, velocidad);
        }

        fruta = [
            Math.floor(Math.random() * filas),
            Math.floor(Math.random() * columnas)
        ];
    }
}

function actualizarJuego() {
    if (juegoTerminado) {
        return;
    }

    matriz = crearMatriz(filas, columnas);
    moverSerpiente();

    if (!juegoTerminado) {
        dibujarSerpiente(matriz, serpiente);
        dibujarFruta(matriz, fruta);
        mostrarMatriz(matriz);
    }
}

function pausarJuego() {
    clearInterval(intervaloJuego);
    intervaloJuego = null;
}

function continuarJuego() {
    if (intervaloJuego === null && !juegoTerminado) {
        intervaloJuego = setInterval(actualizarJuego, velocidad);
    }
}

function actualizarPuntos() {
    let marcador = document.getElementById("puntos");
    marcador.textContent = String(puntos).padStart(3, "0");;
}

function cambiarTema() {
    let body = document.body;

    if (body.dataset.theme === "dark") {
        body.dataset.theme = "light";
    } else {
        body.dataset.theme = "dark";
    }

    document.cookie = "tema=" + body.dataset.theme + "; max-age=31536000; path=/";
}

function cargarTema() {
    let cookies = document.cookie.split("; ");

    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i].split("=");

        if (cookie[0] === "tema") {
            document.body.dataset.theme = cookie[1];
        }
    }
}

function cargarJuego() {
    clearInterval(intervaloJuego);
    juegoTerminado = false;
    direccion = "r";
    puntos = 0;
    velocidad = 200;

    matriz = crearMatriz(filas, columnas);
    serpiente = [[0, 0], [0, 1], [0, 2]];
    fruta = [5, 5];

    intervaloJuego = setInterval(actualizarJuego, velocidad);

    dibujarSerpiente(matriz, serpiente);
    dibujarFruta(matriz, fruta);
    mostrarMatriz(matriz);
    actualizarPuntos();
}

document.getElementById("pausar").addEventListener("click", pausarJuego);
document.getElementById("continuar").addEventListener("click", continuarJuego);
document.getElementById("reiniciar").addEventListener("click", cargarJuego);
document.getElementById("tema").addEventListener("click", cambiarTema);

cargarTema();
cargarJuego();