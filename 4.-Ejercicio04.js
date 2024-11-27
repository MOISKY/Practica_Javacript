const numeroRandom = Math.floor(Math.random() * 10) + 1;
let guess = parseInt(prompt("Adivina un número entre 1 y 10:"));
while (guess !== numeroRandom) {
    if (requerido >= 1 && requerido <= 10) {
        alert("Incorrecto. Intenta de nuevo.");
    } else {
        alert("Por favor, ingresa un número entre 1 y 10.");
    }

    requerido = parseInt(prompt("Adivina nuevamente un número entre 1 y 10:"));
}


console.log("¡Correcto! El número era " + numeroRandom);