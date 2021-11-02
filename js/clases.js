//Clases
class Socios {
    constructor(nombre, apellido, numero) {
        this.numero = parseInt(numero);
        this.nombre = nombre.toLowerCase();
        this.apellido = apellido.toLowerCase();
    }
}

class Reservas {
    constructor(reservasocio, fecha, sala, estado) {
        this.reservasocio = parseInt(reservasocio);
        this.fecha = fecha;
        this.sala = sala;
        this.estado = estado;
    }
}