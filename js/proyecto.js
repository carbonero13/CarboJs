class Socios {
    constructor(nombre, apellido, numero) {
        this.numero = parseInt(numero);
        this.nombre = nombre.toLowerCase();
        this.apellido = apellido.toLowerCase();
    }
}

function mostrartexto(idetiqueta) {
    document.getElementById(idetiqueta).style.display = 'block';
}

const socios = [];

function cargarSocio() {
    let nombreForm = document.getElementById('nombre').value;
    let apellidoForm = document.getElementById('apellido').value;

    if (nombreForm == "" || !/^[a-zA-Z]*$/g.test(nombreForm) || apellidoForm == "" || !/^[a-zA-Z]*$/g.test(apellidoForm)) {
        document.getElementById("labelmostrarsocio").textContent = "Datos de Nombre y/o Apellido Invalidos";
        document.getElementById("labelmostrarsocio").style.color = "red";
     } else {
        let numero = socios.length;
        let numerosocioForm = 1000 + numero;
        console.log(numerosocioForm);
        console.log(numero);
        socios.push(new Socios(nombreForm, apellidoForm, numerosocioForm))
        limpiarFormulario();
        document.getElementById("labelmostrarsocio").textContent = "Usuario N°: " + numerosocioForm + " agregado";
        document.getElementById("labelmostrarsocio").style.color = "green";
        crearTabla(socios, "tablaSocios");
    }
}

function limpiarFormulario() {
    document.getElementById('nombre').value = "";
    document.getElementById('apellido').value = "";
}

function limpiaralerta() {
    document.getElementById("labelmostrarsocio").textContent = "";
}

function filtrarsocios() {
    let valorbusqueda = document.getElementById("labelbuscar").value;
    const sociosfiltrados = socios.filter(element => element.nombre == valorbusqueda);
    crearTabla(sociosfiltrados, "tablaSociosBusqueda");
}

function crearTabla(objetosocios, idtabla) {
    let nombretabla = idtabla;
    let tablasocios = objetosocios;
    let html = "<table border='1|1'>";
    html += "<tr>";
    html += "<th>Socio N°</th>";
    html += "<th>Nombre</th>";
    html += "<th>Apellido</th>";
    html += "</tr>";
    for (let i = 0; i < tablasocios.length; i++) {
        html += "<tr>";
        html += "<td>" + tablasocios[i].numero + "</td>";
        html += "<td>" + tablasocios[i].nombre + "</td>";
        html += "<td>" + tablasocios[i].apellido + "</td>";
        html += "</tr>";
    }
    html += "</table>";
    document.getElementById(nombretabla).innerHTML = html;
}