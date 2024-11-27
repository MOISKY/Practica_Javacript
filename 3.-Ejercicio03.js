let numero = parseInt(prompt("Ingresa un número entero positivo (o 0 para terminar):"));
while (numero !== 0) {
    if (numero > 0) {
        let root = Math.sqrt(numero);
        console.log("La raíz cuadrada de ${number} es ${root.toFixed(2)}");

    } else {
        alert("Por favor, ingresa un número entero positivo."); 
    }

    numero = parseInt(prompt("Ingresa otro número entero positivo (o 0 para terminar):"));
}
alert("Programa terminado.");