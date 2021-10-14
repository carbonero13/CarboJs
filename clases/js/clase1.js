let SEPARADOR = "\n";
let anioActual = 2021;
let nombre = prompt("Ingrese su Nombre");
let apellido = prompt("Ingrese su Apellido");
let anioNacimiento = parseInt(prompt("Ingrese Año Nacimiento"));
let nombreCompleto = nombre + " " + apellido;
let edadAproximada = (anioActual) - (anioNacimiento);

console.log("¡Hola, " + nombreCompleto +"!" +SEPARADOR + "Tienes una edad aproximada de: " + edadAproximada);