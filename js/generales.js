//** Despues la en un archivo separado para no repetir funciones
function primeraMayuscula(palabra) {
  return palabra[0].toUpperCase() + palabra.slice(1);
}

//** Paso A Mayuscula la primera letra de cada palabra
function primeraPalabraMayuscula(palabra){
  return palabra.toLowerCase().replace(/^\w|\s\w/g, function (letra) {
      return letra.toUpperCase();
  })
}

//** Escuchamos el evento click del botón registrar en el navBar
$("#navbtnRegistrar").click(() => {
  const URLGETPROV = "https://apis.datos.gob.ar/georef/api/provincias?campos=id,nombre&orden=id"
  $.getJSON(URLGETPROV, function (data) {
      rellenarSelect(data.provincias, "selectProvincia");
  });
  $('#selectProvincia').on('change', function () {
      $('#selectDepartamento').html('<option value="">Departamento...</option>');
      $('#selectCiudad').html('<option value="">Ciudad...</option>');
      let provinciaSeleccionada = $('#selectProvincia').val();
      const URLGETDEP = "https://apis.datos.gob.ar/georef/api/departamentos?provincia=" + provinciaSeleccionada + "&campos=id,nombre&orden=id&max=100";
      $.getJSON(URLGETDEP, function (data) {
          rellenarSelect(data.departamentos, "selectDepartamento");
      });
  });
  $('#selectDepartamento').on('change', function () {
      $('#selectCiudad').html('<option value="">Ciudad...</option>');
      let departamentoSeleccionada = $('#selectDepartamento').val();
      const URLGETLOC = "https://apis.datos.gob.ar/georef/api/localidades?departamento=" + departamentoSeleccionada + "&campos=id,nombre&max=1000";
      $.getJSON(URLGETLOC, function (data) {
          rellenarSelect(data.localidades, "selectCiudad");
      });
  });
});

//** Lleno los select de provincia, departamento y localidad(ciudad) */
function rellenarSelect(datos, elemento) {
  var datosSelect = datos;
  var nombreSelect = document.getElementById(elemento);
  for (var i in datosSelect) {
      var optionSelect = document.createElement("option");
      optionSelect.value = datosSelect[i].id;
      if(elemento==="selectCiudad")
      optionSelect.textContent = primeraPalabraMayuscula(datosSelect[i].nombre);
      else
      optionSelect.textContent = datosSelect[i].nombre;
      nombreSelect.options.add(optionSelect);
  }
}

//** ObtenerValor Select
function textoSelect(combo) {
  const comboSelect = document.querySelector(combo);
  const textSelect = comboSelect.options[comboSelect.selectedIndex].text;
  return textSelect;

}

//** Cerrar Modal
function cerrarModal(idmodal) {
  $(idmodal).modal("hide");
}

//** Evento de cierre modal, oculto spinner y reseteo formulario y boton
$("#registrarModal").on('hidden.bs.modal', function () {
  reseteoFormulario("#registroForm");
  resetbtnReservar() ;
});

//** Reseteo Formulario de ingreso
$("#ingresarModal").on('hidden.bs.modal', function () {
  reseteoFormulario("#ingresarForm")
});

//** Agrego Spinner y cambio no mombre de boton registrar
function animarbtnRegistrar() {
  document.getElementById("spinnerbtnRegistrar").classList.replace("invisible", "visible");
  document.getElementById("txtbtnRegistrar").textContent = "Registrando..."
}


//** Paso un mes a numero de mes
function mesNumero(mes) {
  let numeromes = 0
  for (let i = 0; i < 12; i++) {
      if (mes === mesesAnio[i]) {
          numeromes = i
      }
  }
  return numeromes
}

//** Paso un numero de mes (0 a 11) a mes */
function numeroMes(numMes) {
  return mesesAnioAbrev[numMes]
}

//** Reseteo formulario */
function reseteoFormulario(formulario) {
  $(formulario).trigger("reset");
}
//** Reseteo btnReservar */
function resetbtnReservar() {
  $("#spinnerbtnRegistrar").removeClass("visible")
.addClass("invisible");
$("#txtbtnRegistrar").text("Registrar");
}

