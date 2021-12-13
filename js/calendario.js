//inicializo y cargo calendario

let myDatePicker = "";
let imputCalendario = document.getElementById("calendario")
imputCalendario.addEventListener("click", (e) => {
  actualizoCalendario()
  let opcionesCalendario = {
    el: '#calendario',
    dateFormat: 'dddd, dd mmmm yyyy',
    bodyType: 'modal',
    minDate: fechahoy,
    customWeekDays: diasSemana,
    customMonths: mesesAnio,
    customOkBTN: 'Seleccionar',
    customClearBTN: 'Borrar',
    customCancelBTN: 'Cancelar',
    disableDates: fechaReservadas,
    markDates: fechaReservadas,
    selectedDate: new Date(),
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

  }
  myDatePicker = MCDatepicker.create(opcionesCalendario);
  myDatePicker.open("#calendario");
});