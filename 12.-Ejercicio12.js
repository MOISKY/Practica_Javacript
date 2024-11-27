let mes = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
let días = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
let usuarioMes = prompt("Agregar mes: ");
let índice = mes.indexOf(usuarioMes.toLowerCase());
if (índice !== -1) {
    alert(`El mes de ${usuarioMes} tiene ${días[índice]} días.`);
} else {
    alert("Mes no válido.");
}