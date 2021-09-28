let SEPARADOR = "\n";
let anioActual = 2021;
let nombre = prompt("Ingrese su Nombre");
let apellido = prompt("Ingrese su Apellido");
let anioNacimiento = parseInt(prompt("Ingrese Año Nacimiento"));
let generacion="sin definir"
if (nombre != "" && apellido != "" && anioNacimiento != "" && anioNacimiento >= 0 && anioNacimiento < 2022) {

    let nombreCompleto = nombre + " " + apellido;
    let edadAproximada = (anioActual) - (anioNacimiento);
  
    if (anioNacimiento < 1882){
        generacion = "Tu generación ya no existe";
    } else if (anioNacimiento < 1901){
        generacion = "Generacion Perdida";
    } else if (anioNacimiento < 1928){
        generacion = "Generacion Grandiosa";
    } else if (anioNacimiento < 1946){
        generacion = "Generacion Tradicionalistas o Silenciosa";
    } else if (anioNacimiento < 1966){
        generacion = "Generación Baby Boomer";
    } else if (anioNacimiento < 1980){
        generacion = "Generación X";
    } else if (anioNacimiento < 1994){
        generacion = "Generación Y o millennials";
    } else if (anioNacimiento < 2010){
        generacion = "Generación Z o centennials";
    } else{
        generacion = "Alfa";
    } 
        console.log("¡Hola, " + nombreCompleto + "!" + SEPARADOR + "Tienes una edad aproximada de: " + edadAproximada + SEPARADOR + generacion);
    
} else {
    alert("Usted ha ingresa un dato invalido");
}

//alert("");
//Generacion Perdida (nacidos entre 1883 y 1900)
//Generacion Grandiosa (nacidos entre 1901 y 1927)
//Generacion Tradicionalistas o Silenciosa (nacidos entre 1928 y 1945)
//Generación Baby Boomer (nacidos entre 1946 y 1965)
//Generación X (nacidos entre 1966 y 1979)
//Generación Y o millennials (nacidos entre 1980 y 1993)
//Generación Z o centennials (nacidos entre 1994 y 2010)
//Generación Alfa (nacidos entre 2010 y 2025)



