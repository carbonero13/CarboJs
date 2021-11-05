
//Prueba para pasar fechas ya ocupadas ala liberia
let fecha= [new Date('December 1, 2021'), new Date('December 2, 2021')];
//calendario
const myDatePicker = MCDatepicker.create({
  el: '#calendario',
  dateFormat: 'dddd, dd mmmm yyyy', 
  bodyType: 'modal',
  customWeekDays: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
  customMonths: [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre'
  ],
  customOkBTN: 'Seleccionar',
  customClearBTN: 'Borrar',
  customCancelBTN: 'Cancelar',
  disableDates: fecha, // ex: [new Date(2019,11, 25), new Date(2019, 11, 26)]
  markDates:fecha,
  theme: {
    date: {
        active: {
            default: {
                foreground: 'rgb(0, 0, 0)'
            },
            picked: {
                foreground: '#ffffff',
                background: '#38ada9'
            },
            today: {
                foreground: 'rgb(0, 0, 0)',
                background: 'rgba(0, 0, 0, 0.2)'
            }
        },
        inactive: {
            default: {
                foreground: 'rgba(0, 0, 0, 0.2)'
            },
            picked: {
                foreground: '#38ada9',
                background: '#38ada9'
            },
            today: {
                foreground: 'rgba(0, 0, 0, 0.2)',
                background: 'rgba(0, 0, 0, 0.2)'
            }
        },
        marcked: {
            foreground: '#FF0000',
        }
    }
}
});

// concateno nombre apellido y socio para que quede mejor a la vista
const listinsocios = [];
for (let i = 0; i < socios.length; i++) {
  listinsocios[i] = primeraMayuscula(socios[i].nombre) + " " + primeraMayuscula(socios[i].apellido) + " | " + socios[i].numero;
};
//cargo el filtro del imput
$(function() {
  $( "#tags" ).autocomplete({
      source: listinsocios,
      minLength: 0
  }).focus(function(){
      if (this.value == ""){
          $(this).autocomplete("search");
      }
  });
});


//Como hago para guardar sin usar estas funciones
$("#tags").change(function () {
  let socioselecionado = document.getElementById('tags').value;
  sessionStorage.setItem("socioreserva", socioselecionado)
  
});

$("body").on("click", "#buttonborrarsocio",
    function () {
      limpiarFormulario("tags" );
    }
);

$("body").on("click", "#buttonborrarcalendario",
    function () {
      limpiarFormulario("calendario" );
    }
);


$("body").on("click", "#btnlimpiar",
    function () {
      limpiarFormulario("tags" );
      limpiarFormulario("calendario" );
    }
);

myDatePicker.onSelect((date, formatedDate) => {sessionStorage.setItem("fechareserva", date); });


