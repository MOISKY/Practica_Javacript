let numero = parseInt(prompt("Ingrese el valor de n:"));
if (isNaN(numero) || numero <= 0) {
  console.log("Por favor, ingrese un número natural válido.");
} else {
  let sumaReciprocos = 0;
  for (let i = 1; i <= n; i++) {
    sumaReciprocos += 1 / i;
  }
  console.log(`La suma de los recíprocos de los primeros ${numero} números naturales es: ${sumaReciprocos}`);
}