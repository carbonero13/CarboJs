//** Clases
class Usuarios {
    constructor(nombre, apellido, correo, provincia, departamento, ciudad) {
        this.nombre = nombre.toLowerCase();
        this.apellido = apellido.toLowerCase();
        this.correo = correo.toLowerCase();
        this.provincia = provincia.toLowerCase();
        this.departamento = departamento.toLowerCase();
        this.ciudad = ciudad.toLowerCase();
    }
}

class Reservasfill {
    constructor(timestamp, fecha, quincho) {
        this.timestamp = timestamp;
        this.fecha = fecha;
        this.quincho = quincho;

    }
}

