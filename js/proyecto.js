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

const socios = [{
        "numero": "1000",
        "nombre": "abel",
        "apellido": "tresgallo"
    },
    {
        "numero": "1001",
        "nombre": "marcelo",
        "apellido": "cotorro"
    },
    {
        "numero": "1002",
        "nombre": "marcela",
        "apellido": "fonseca"
    },
    {
        "numero": "1003",
        "nombre": "silvina",
        "apellido": "arganza"
    },
    {
        "numero": "1004",
        "nombre": "ariana",
        "apellido": "cayado"
    },
    {
        "numero": "1005",
        "nombre": "corina",
        "apellido": "paternina"
    },
    {
        "numero": "1006",
        "nombre": "silvina",
        "apellido": "doblas"
    },
    {
        "numero": "1007",
        "nombre": "angel",
        "apellido": "bardon"
    },
    {
        "numero": "1008",
        "nombre": "marcelo",
        "apellido": "logroño"
    },
    {
        "numero": "1009",
        "nombre": "ariana",
        "apellido": "buisan"
    },
    {
        "numero": "1010",
        "nombre": "abel",
        "apellido": "cano"
    },
    {
        "numero": "1011",
        "nombre": "carlos",
        "apellido": "caamaño"
    },
    {
        "numero": "1012",
        "nombre": "maria",
        "apellido": "ocampo"
    },
    {
        "numero": "1013",
        "nombre": "carlos",
        "apellido": "soria"
    },
    {
        "numero": "1014",
        "nombre": "maria",
        "apellido": "cobos"
    },
    {
        "numero": "1015",
        "nombre": "silvina",
        "apellido": "carreira"
    },
    {
        "numero": "1016",
        "nombre": "marcelo",
        "apellido": "llamosas"
    },
    {
        "numero": "1017",
        "nombre": "valeria",
        "apellido": "ason"
    },
    {
        "numero": "1018",
        "nombre": "silvina",
        "apellido": "olalde"
    },
    {
        "numero": "1019",
        "nombre": "valeria",
        "apellido": "carranza"
    },

];

function cargarSocio() {
    let nombreForm = document.getElementById('nombre').value;
    let apellidoForm = document.getElementById('apellido').value;

    if (nombreForm == "" || !/^[a-zA-Z]*$/g.test(nombreForm) || apellidoForm == "" || !/^[a-zA-Z]*$/g.test(apellidoForm)) {
        document.getElementById("labelmostrarsocio").textContent = "Datos de Nombre y/o Apellido Invalidos";
        document.getElementById("labelmostrarsocio").style.color = "red";
    } else {
        let numero = socios.length;
        let numerosocioForm = 1000 + numero;
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

function ordenarNombre(params) {
    const sociosordenado = socios.sort(((a, b) => b.numero - a.numero));
    console.table(sociosordenado)
    crearTabla(sociosordenado, "tablaSocios");
}

function mostrarsocios(){
    crearTabla(socios,"tablaSocios");
}