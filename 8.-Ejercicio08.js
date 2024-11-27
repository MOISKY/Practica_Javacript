let numero1 = Math.floor(Math.random() * 10) + 1;
let numero2 = Math.floor(Math.random() * 10) + 1;
let sumaCorrecta = numero1 + numero2;
let respuestaUsuario = null;

do {
    respuestaUsuario = parseInt(prompt(`¿Cuál es la suma de ${numero1} + ${numero2}?`), 10);
    if (respuestaUsuario !== sumaCorrecta) {
        alert("¡Respuesta incorrecta! Intenta de nuevo.");
    }
} while (respuestaUsuario !== sumaCorrecta);

alert("¡Respuesta correcta! ¡Bien hecho!");
