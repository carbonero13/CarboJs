//Me falta pasar las funciones al modelo 1 de eventos, para que no apararesca codigo js en el html
// la clase la deje porque despues voy a crear otra clase que es reservas
class Socios {
    constructor(nombre, apellido, numero) {
        this.numero = parseInt(numero);
        this.nombre = nombre.toLowerCase();
        this.apellido = apellido.toLowerCase();
    }
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

//let nombreForm = document.getElementById('nombre').value;
//let apellidoForm = document.getElementById('apellido').value;

let btnAgregarSocio = document.getElementById('btnagregarsocio')
btnAgregarSocio.addEventListener("click", cargarSocio);

let btnMostrarSocios = document.getElementById('btnmostrarsocios')
btnMostrarSocios.addEventListener("click", mostrarSocios);

let labelFormularioNombre = document.getElementById('nombre');
labelFormularioNombre.addEventListener("focus", limpiarAlerta);

let labelFormularioApellido = document.getElementById('apellido');
labelFormularioApellido.addEventListener("focus", limpiarAlerta);

let btnBuscarSocio = document.getElementById('btnbuscarsocios');
btnBuscarSocio.addEventListener("click", filtrarSocios);







function cargarSocio(nombreForm, apellidoForm) {
    nombreForm = document.getElementById('nombre').value;
    apellidoForm = document.getElementById('apellido').value;

    if (nombreForm == "" || !/^[a-zA-Z]*$/g.test(nombreForm) || apellidoForm == "" || !/^[a-zA-Z]*$/g.test(apellidoForm)) {
        document.getElementById("labelmostrarsocio").textContent = "Datos de Nombre y/o Apellido Invalidos";
        //Consulto como hago para hacerlo del css si lo que busco que cambie de color si el mensaje es invalido o valido
        document.getElementById("labelmostrarsocio").style.color = "red";
    } else {
        let numero = socios.length;
        let numerosocioForm = 1000 + numero;
        socios.push(new Socios(nombreForm, apellidoForm, numerosocioForm))
        limpiarFormulario();
        document.getElementById("labelmostrarsocio").textContent = "Usuario N°: " + numerosocioForm + " agregado";
        document.getElementById("labelmostrarsocio").style.color = "green";
        crearTablaDOM(socios, "tablaSocios");
    }
}

function limpiarFormulario() {
    document.getElementById('nombre').value = "";
    document.getElementById('apellido').value = "";
}

function limpiarAlerta() {

    document.getElementById("labelmostrarsocio").textContent = "";
}

function filtrarSocios() {
    let valorbusqueda = document.getElementById("labelbuscar").value;

    // const sociosfiltrados = socios.filter(element => element.nombre == valorbusqueda.toLowerCase() || element.numero==valorbusqueda || element.apellido==valorbusqueda.toLowerCase());
    const sociosfiltrados = socios.filter(element => element.nombre.includes(valorbusqueda.toLowerCase()) || element.numero.includes(valorbusqueda) || element.apellido.includes(valorbusqueda.toLowerCase()));
    crearTabla(sociosfiltrados, "tablaSociosBusqueda");
}

function crearTabla(objetosocios, idtabla) {

    let nombretabla = idtabla;
    let tablasocios = objetosocios;
    let html = ""
    if (tablasocios.length == 0) {
        document.getElementById(nombretabla).innerHTML
        html = "<p>No hay coincidencias</p>";
    } else {
        //sigo poniendo la parte fija de la tabla aca porque no quiero que aparezca hasta que se tenga que mostrar, no se si hay otro metodo
        html = "<table border='1|1'>";
        html += "<tr>";
        html += "<th>Socio N°</th>";
        html += "<th>Nombre</th>";
        html += "<th>Apellido</th>";
        html += "</tr>";
        for (let i = 0; i < tablasocios.length; i++) {
            html += "<tr>";
            html += "<td>" + tablasocios[i].numero + "</td>";
            html += "<td>" + primeraMayuscula(tablasocios[i].nombre) + "</td>";
            html += "<td>" + primeraMayuscula(tablasocios[i].apellido) + "</td>";
            html += "</tr>";
        }
        html += "</table>";
        document.getElementById(nombretabla).innerHTML = html;
    }
}

function crearTablaDOM(objetosocios, idtabla) {

    let nombretabla = idtabla;
    let tablasocios = objetosocios;
    const tabla = document.getElementById(nombretabla);
    tabla.innerHTML = "";
    let tbodyT = document.createElement("tbody")
    tabla.appendChild(tbodyT);
    let tr = document.createElement("tr");
    tr.appendChild(crearCelda("Socio N°", "th"));
    tr.appendChild(crearCelda("Nombre", "th"));
    tr.appendChild(crearCelda("Apellido", "th"));
    tbodyT.appendChild(tr);

    for (let i = 0; i < tablasocios.length; i++) {
        tr = document.createElement("tr");
        tr.appendChild(crearCelda(tablasocios[i].numero, "td"));
        tr.appendChild(crearCelda(tablasocios[i].nombre, "td"));
        tr.appendChild(crearCelda(tablasocios[i].apellido, "td"));
        tbodyT.appendChild(tr);
    }
}


function mostrarSocios() {
    crearTablaDOM(socios, "tablaSocios");
}

function primeraMayuscula(palabra) {
    return palabra[0].toUpperCase() + palabra.slice(1);
}
//Solo para el desafio por ahora no va en el proyecto
/* function ordenarNombre(params) {
    const sociosordenado = socios.sort(((a, b) => b.numero - a.numero));
    console.table(sociosordenado)
    crearTabla(sociosordenado, "tablaSocios");
} */

function crearCelda(dato, tipo) {
    let tipocelda = tipo;
    let datocelda = dato;
    celda = document.createElement(tipocelda);
    celdaTexto = document.createTextNode(primeraMayuscula(datocelda))
    celda.appendChild(celdaTexto);
    return celda;
}