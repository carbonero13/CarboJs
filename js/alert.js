//** Configuro formato de alerta logueo, salir y registrar
const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 1000,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
})

//** Alerta cuando algo sale mal con mensaje personalizado */
function algoSalioMal(texto) {
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: texto,
        
      })
}
//**Alerta cuando algo sale bien con mensaje personalizado */
function exito(titulo){

    Swal.fire({
        icon: 'success',
        title: titulo,
      })
}

