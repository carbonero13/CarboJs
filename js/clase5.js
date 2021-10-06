//Mi Proyecto va a ser un simulador de un club, 
//donde hay socios que pagan una cuota social 
//y tienen la opcion de utilizar servicios dados por el club

let socios = [];
let cuotaspagas = [];
let reservassalon=[];

function altasocios (dni, nombre, apellido) {
    this.dni = dni;
    this.nombre = nombre;
    this.apellido = apellido;
}

function pagocuotas(dni, mes, importe) {

    this.dni = dni;
    this.mes = mes;
    this.importe = importe;
  
  }

  function reservasalon(dni, dia, mes,anio) {

    this.dni = dni;
    this.dia = dia;
    this.mes = mes;
    this.anio = anio;
  
  }

  //En proceso todavia no corregir