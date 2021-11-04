

let fecha= [new Date('December 1, 2021'), new Date('December 2, 2021')];
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
  disableDates: [new Date('December 1, 2021')], // ex: [new Date(2019,11, 25), new Date(2019, 11, 26)]
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
//let fecha= new Date('December 1, 2021');

console.log(fecha)



const listinsocios = [];
for (let i = 0; i < socios.length; i++) {
  listinsocios[i] = primeraMayuscula(socios[i].nombre) + " " + primeraMayuscula(socios[i].apellido) + " | " + socios[i].numero;
};

$(function () {
  $("#tags").autocomplete({
    source: listinsocios
  });
});
//Como hago para guardar sin usar estas funciones
$("#tags").change(function () {
  let socioselecionado = document.getElementById('tags').value;
  sessionStorage.setItem("socioreserva", socioselecionado)
  
});

myDatePicker.onSelect((date, formatedDate) => {sessionStorage.setItem("fechareserva", date); });


