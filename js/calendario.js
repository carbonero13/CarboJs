//** Declaro y Cargo las fechas ya reservadas
let fechaReservadas = []
db.collection("reservas").get().then((querySnapshot) => {
  querySnapshot.forEach((doc) => {
    const cont = fechaReservadas.push(doc.data().fecha.toDate());
  });
});

//** Obtengo la fecha de hoy para que no se pueda reservar antes de este dia

const fechahoy = new Date();

//** Configuro calendario
const myDatePicker = MCDatepicker.create({
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
