let producto = 1;
let numero = parseFloat(prompt("Ingresa un número positivo o 0 para terminar:"));
while (numero !== 0) {
    if (numero > 0) {
        producto *= numero;
    } else {
        alert("Por favor, ingresa solo números positivos.");
    }
    number = parseFloat(prompt("Ingresa otro número positivo (o 0 para terminar):"));
}
console.log("El producto total de los números ingresados es: " + producto);