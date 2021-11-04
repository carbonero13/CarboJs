const myDatePicker = MCDatepicker.create({
  el: '#calendario',
  dateFormat: 'dddd, dd mmmm yyyy',
  bodyType: 'modal',
  customWeekDays: ['D', 'L', 'M', 'M', 'J', 'V', 'S'],
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
  customCancelBTN: 'Cancelar'
})

