let year = "";
year = prompt("Ingresar año");
if(year % 4 != 0){
    console.log("No es bisiesto");
}
else
if(year % 100 != 0){
    console.log("Es bisiesto");
}
else if(year % 400 != 0){
    console.log("No es bisiesto");
}
else{
    console.log("Bisiesto");
}