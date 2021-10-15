class Socios {
    constructor(nombre, apellido) {
        // this.numeroSocio = parseInt(numeroSocio);
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
    socios.push(new Socios(nombreForm, apellidoForm))
    // socios.forEach(element => console.log(element))
    limpiarFormulario();
    document.getElementById("labelmostrarsocio").textContent = "Usuario agregado";
    document.getElementById("labelmostrarsocio").style.color = "green";
    // console.table(socios);
    mostrarTabla();
}

function limpiarFormulario() {
    document.getElementById('nombre').value = "";
    document.getElementById('apellido').value = "";
}

function limpiaralerta() {

    document.getElementById("labelmostrarsocio").textContent = "";


}

function mostrarTabla() {
    let html = "<table border='1|1'>";

    html += "<tr>";
    html += "<th>Nombre</th>";
    html += "<th>Apellido</th>";
    html += "</tr>";
    for (let i = 0; i < socios.length; i++) {
        html += "<tr>";
        /*     html+="<td>"+socios[i].numeroSocio+"</td>"; */
        html += "<td>" + socios[i].nombre + "</td>";
        html += "<td>" + socios[i].apellido + "</td>";
        html += "</tr>";
    }
    html += "</table>";
    document.getElementById("tableData").innerHTML = html;
}

function filtrarsocios() {
    let valorbusqueda = document.getElementById("labelbuscar").value;
    let valorbusqueda2 = "ver"
    console.log(valorbusqueda);
    console.log(valorbusqueda2);
    //const sociosfiltrados = [];
    //  for (let i = 0; i < socios.length; i++) {
    const sociosfiltrados = socios.filter(element => element.nombre == valorbusqueda);
    /*   for (let b = 0; socios.filter(socios => socios.nombre == valorbusqueda) != null; b++) {
          

      } */
    //  } 
    console.log(sociosfiltrados);
    console.log(socios);
    let html2 = "<table border='1|1'>";
    html2 += "<tr>";
    html2 += "<th>Nombre</th>";
    html2 += "<th>Apellido</th>";
    html2 += "</tr>";
    for (let i = 0; i < sociosfiltrados.length; i++) {
        html2 += "<tr>";

        html2 += "<td>" + sociosfiltrados[i].nombre + "</td>";
        html2 += "<td>" + sociosfiltrados[i].apellido + "</td>";
        html2 += "</tr>";
    }
    html2 += "</table>";
    document.getElementById("tableDataBusqueda").innerHTML = html2;
}