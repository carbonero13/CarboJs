//Mi Proyecto va a ser un simulador de un club, 
//donde hay socios que pagan una cuota social 
//y tienen la opcion de utilizar servicios dados por el club
let nombres = prompt("Ingrese su Nombre");
let apellidos = prompt("Ingrese su Apellido");
let numerosocios = parseInt (prompt("Ingrese su numero de socio"));



function formatearpalabra(palabra) {
  palabra=palabra.toLowerCase();
  return palabra.charAt(0).toUpperCase() + palabra.slice(1);
}
nombres= formatearpalabra(nombres);
apellidos= formatearpalabra(apellidos);


function Socio(nombreSocio, apellidoSocio, numeroSocio) {
  this.nombre= nombreSocio;
  this.apellido= apellidoSocio;
  this.socioNumero = numeroSocio;
  this.saludar = function(){ alert ("Bienvenido " + this.nombre + " " +this.apellido + " Socio N°: " +this.socioNumero)};

}

const socio1 =new Socio (nombres, apellidos, numerosocios);
socio1.saludar();