let contadorPar = 0;
let contadorImpar = 0;
let valor;

while (valor !== "stop") {
    valor = prompt("Ingresa un número o 'stop' para finalizar:");

    if (valor === "stop") {
        break;
    }

    let numero = parseInt(valor);

    if (!isNaN(numero)) {
        if (numero % 2 === 0) {
            console.log("Par");
            contadorPar++;
        } else {
            console.log("Impar");
            contadorImpar++;
        }
    } else {
        console.log("Por favor, ingresa un número válido o 'stop' para salir.");
    }
}

console.log(`Números pares ingresados: ${contadorPar}`);
console.log(`Números impares ingresados: ${contadorImpar}`);
