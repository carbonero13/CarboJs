//Mi Proyecto va a ser un simulador de un club, 
//donde hay socios que pagan una cuota social 
//y tienen la opcion de utilizar servicios dados por el club


const iva=1.21;
const valorcuota=300;

let dni = parseInt(prompt("Ingrese su DNI"));
let nombre = prompt("Ingrese su Nombre");
let apellido = prompt("Ingrese su Apellido");
let importe = parseInt(prompt("Ingrese su importe a pagar"));
let descuento=parseInt(prompt("Ingrese codigo de descuento (1 al 100)"))


const sumar =(a,b)=> a+b;
const resta =(a,b)=> a-b;
const multiplicar =(a,b)=> a*b;
const importedescuento =(a,b)=> a*b/100;

function calcularcuotafinal(importepago,descuentodado) {
    const importedescuentopesos=importedescuento(importepago,descuentodado);
    const importecondescuento =resta(importepago,importedescuentopesos);
    return importecondescuento;
}

function calcularsaldo(valorpagado, importecuotafinal) {

   const saldo= resta (valorpagado, importecuotafinal);
   return saldo
}

function concatenardatos(dni,nombre,apellido) {
    const datocompleto = (dni+" | "+nombre+" | "+apellido);
    return datocompleto
 }

console.log ("Datos Completos: " + concatenardatos(dni,nombre,apellido))
console.log ("Valor de la cuota final a pagar sin IVA: " + calcularcuotafinal(valorcuota,descuento));
console.log ("Valor de la cuota final a pagar con IVA: " +multiplicar(calcularcuotafinal(valorcuota,descuento),iva));
console.log ("El saldo de tu cuenta es: " + calcularsaldo(importe, multiplicar(calcularcuotafinal(valorcuota,descuento),iva)));