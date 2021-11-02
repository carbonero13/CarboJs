//la idea es borrar el proyecto.js si es correcto el uso del json en proyectojason.js
//las escuchas de eventos
let btnAgregarSocio = document.getElementById('btnagregarsocio')
btnAgregarSocio.addEventListener("click", cargarSocio);

let labelFormularioNombre = document.getElementById('nombre');
labelFormularioNombre.addEventListener("focus", limpiarAlerta);

let labelFormularioApellido = document.getElementById('apellido');
labelFormularioApellido.addEventListener("focus", limpiarAlerta);


let btnBuscarSocioJSON = document.getElementById('btnbuscarsociosJSON');
btnBuscarSocioJSON.addEventListener("click", filtrarSociosJSON);

//Cargo los datos JSON en un objeto, modifico el objeto
//luego borro el json para volverlo a cargar asi queda actualizo el local store
//despues lo muestro desde el objeto y desde el json para ver que sean igual
// al recargar la pagina se puede observar que el localstore mantiene los datos mientras el metodo tradicional no
function cargarSocio(nombreForm, apellidoForm) {
    nombreForm = document.getElementById('nombre').value;
    apellidoForm = document.getElementById('apellido').value;

    if (nombreForm == "" || !/^[a-zA-Z]*$/g.test(nombreForm) || apellidoForm == "" || !/^[a-zA-Z]*$/g.test(apellidoForm)) {
        document.getElementById("labelmostrarsocio").textContent = "Datos de Nombre y/o Apellido Invalidos";
        document.getElementById("labelmostrarsocio").classList.replace("textoverde", "textorojo");
    } else {
        let sociosjson =JSON.parse(localStorage.getItem("listasocios"));
        let numero = sociosjson.length;
        let numerosocioForm = 1000 + numero;
        sociosjson.push(new Socios(nombreForm, apellidoForm, numerosocioForm))
        limpiarFormulario();
        resetjson("listasocios", sociosjson)
        filtrarSociosJSON()
        let cantidadactual = sessionStorage.getItem("useragregados")
        cantidadactual++;
        sessionStorage.setItem("useragregados", cantidadactual);
        document.getElementById("labelmostrarsocio").textContent = "Usuario N°: " + numerosocioForm + " agregado" + " --- Total agrados hasta ahora: " + sessionStorage.getItem("useragregados");
        document.getElementById("labelmostrarsocio").classList.replace("textorojo", "textoverde");

    }
}
//Limpiar formularios y alertas
function limpiarFormulario() {
    document.getElementById('nombre').value = "";
    document.getElementById('apellido').value = "";
    document.getElementById("labelbuscar").value = "";
}

function limpiarAlerta() {

    document.getElementById("labelmostrarsocio").textContent = "";
}
//filtra con json
function filtrarSociosJSON() {

    let valorbusqueda = document.getElementById("labelbuscar").value;
    let cabeceratabla = ["Socio #", "Nombre", "Apellido"]
    const sociosjson=JSON.parse(localStorage.getItem("listasocios"));
    if (valorbusqueda >= 1000) {
        const sociosfiltrados = sociosjson.filter(element => element.numero == parseInt(valorbusqueda));
        crearTablaInner(sociosfiltrados, "tablaSociosInnerJSON", cabeceratabla, 0);
    } else {
        const sociosfiltrados = sociosjson.filter(element => element.nombre.includes(valorbusqueda.toLowerCase()) || element.apellido.includes(valorbusqueda.toLowerCase()));
        crearTablaInner(sociosfiltrados, "tablaSociosInnerJSON", cabeceratabla, 0);
    }
}


//Funcion que crea cualquier tabla sin importar el tamaño, espero que este bien porque me costo mucho!!!!!!!! 
//la opcion de omitir, es porque cuando muestro la reserva de un socio en particular no quiero que me muestre 
// de nuevo el numero de socio de la tabla reserva, ya muestra el mismo dato la tabla socios

function crearTablaInner(objetosociostd, idtablatd, cabeceratd, omiteprimertd) {
    let cabecera = cabeceratd;
    let idtabla = idtablatd;
    let tablasocios = objetosociostd;
    let omiteprimer = omiteprimertd;
    let html = "";
    html += "<tr>";
    for (let j = 0; j < cabecera.length; j++) {
        html += "<th>" + cabecera[j] + "</th>";
    }
    html += "</tr>";
    for (let i = 0; i < tablasocios.length; i++) {
        let linea = Object.values(tablasocios[i]);
        html += "<tr>";
        for (let j = omiteprimer; j < Object.keys(tablasocios[i]).length; j++) {
            if (isNaN(linea[j])) {
                linea[j] = primeraMayuscula(linea[j])
            }
            html += "<td>" + linea[j] + "</td>";
        }
        html += "</tr>";
    }
    var element = document.getElementById(idtabla);
    element.innerHTML = html;
}
// convierte en mayuscula la primera letra
function primeraMayuscula(palabra) {
    return palabra[0].toUpperCase() + palabra.slice(1);
}
// Puse el if else, porque cuando hacia clic sobre la primera fila en donde estaba los titulos me mostraba
// las tablas vacias y quedaba mal, de esta manera si hago click desaparece la tabla, hasta que selecciones una correcta
$("body").on("click", "#tablaSociosInnerJSON tr",
    function () {
        let textsocio = $(this).find("td:first-child").text();
        const sociosjson=JSON.parse(localStorage.getItem("listasocios"));
        const reservasjson=JSON.parse(localStorage.getItem("listareservas"));
        if (textsocio >= 1000) {
            const sociosfiltrados = sociosjson.filter(element => element.numero == textsocio);
            let cabeceratabla = ["Socio #", "Nombre", "Apellido"]
            crearTablaInner(sociosfiltrados, "tablaSocioMarcado", cabeceratabla, 0);
            const sociosreservas = reservasjson.filter(element => element.reservasocio == textsocio);
            cabeceratabla = ["Fechas", "Sala", "Estado"]
            crearTablaInner(sociosreservas, "tablaReservaMarcado", cabeceratabla, 1);
        } else {
            let tabla = document.getElementById("tablaSocioMarcado");
            tabla.innerHTML = "";
            tabla = document.getElementById("tablaReservaMarcado");
            tabla.innerHTML = "";
        }
    }
);