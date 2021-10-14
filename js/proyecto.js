class Socios {
    constructor(nombre, apellido) {
        // this.numeroSocio = parseInt(numeroSocio);
        this.nombre = nombre.toLowerCase();
        this.apellido = apellido.toLowerCase();
    }
    confirmarSocio() {
        document.getElementById('labelMostrarSocio').innerHTML = this.nombre;
    }
}

const socios = [];

function cargarSocio() {
    let nombreForm = document.getElementById('nombre').value;
    let apellidoForm = document.getElementById('apellido').value;
    socios.push(new Socios(nombreForm, apellidoForm))
    socios.forEach(element => console.log(element))
}




/* const socios=[{id:1, nombre: "Enzo", apellido: "Ferrari", numerosocio: "1001"},
{id:2, nombre: "Ferruccio", apellido: "Lamborghini", numerosocio: "1002"},
{id:3, nombre: "August", apellido: "Horch", numerosocio: "1003"},
{id:4, nombre: "Henry", apellido: "Ford", numerosocio: "1004"}
];

for ( const socio of socios){
    console.log (socio.nombre + " "+ socio.apellido);
  
} */