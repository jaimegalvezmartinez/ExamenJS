//  Variables de estado 
// Mantenemos el conteo global de victorias fuera de las funciones
let puntosJugador = 0;
let puntosMaquina = 0;

// Función que ejecuta la lógica de cada turno
// eleccionJugador - Opción elegida por el usuario
function jugar(eleccionJugador) {
    const opciones = ["Piedra", "Papel", "Tijera"];

    // Generamos un índice aleatorio con Match.random (0, 1 o 2) para seleccionar la opción de la máquina
   // El resultado de esa selección (por ejemplo, "piedra") se guarda en la variable eleccionMaquina
  // Aqui ponemos math.floor para que nos devuelva un nuumero exaxto, no un decimal
    let eleccionMaquina = opciones[Math.floor(Math.random() * 3)]; 
    let resultado = "";

    // Lógica de comparación
    if (eleccionJugador == eleccionMaquina) {
        resultado = "¡Es un empate!";
    }
    else if (
        // Condiciones donde el jugador gana
        (eleccionJugador == "Piedra" && eleccionMaquina == "Tijera") ||
        (eleccionJugador == "Papel" && eleccionMaquina == "Piedra") ||
        (eleccionJugador == "Tijera" && eleccionMaquina == "Papel")
    )
    {
        resultado = "¡Ganaste esta ronda!";
        puntosJugador++; // Incrementamos el contador del jugador
    }
    else {
        // En cualquier otro caso, gana la máquina
        resultado = "Gana la máquina.";
        puntosMaquina++; // Incrementamos el contador de la máquina
    }

    //  Actualización de la interfaz (DOM)
    document.getElementById("resultado").innerText =
        `Elegiste ${eleccionJugador}, la máquina eligió ${eleccionMaquina}. ${resultado}`;

    document.getElementById("ptsJugador").innerText = puntosJugador;
    document.getElementById("ptsMaquina").innerText = puntosMaquina;

    // Condición de fin de juego (al llegar a 5 puntos)
    // Aqui hay una ñapa, porque cuando llega a 5, no para de jugar, pero funciona
    if (puntosJugador == 5 || puntosMaquina == 5) {
        document.getElementById("btnReiniciar").style.display = "block"; // Mostramos el botón oculto
        deshabilitarBotones(true); // Desactivamos los botones para no seguir jugando
    }
}


// Resetea los marcadores y vuelve a habilitar los botones
function reiniciarJuego() {
    puntosJugador = 0;
    puntosMaquina = 0;

    // Reseteamos el texto del DOM
    document.getElementById("ptsJugador").innerText = "0";
    document.getElementById("ptsMaquina").innerText = "0";
    document.getElementById("resultado").innerText = "";

    // Ocultamos el botón de reinicio y activamos los botones de juego
    document.getElementById("btnReiniciar").style.display = "none";
    deshabilitarBotones(false);
}