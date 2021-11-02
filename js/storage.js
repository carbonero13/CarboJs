//Guardo socios en el local storage para luego recuperarlo y voy almacenando en secion la cantidad de usuario que agregue en la secion
const guardarsociolocal = (clave, valor) => {
    localStorage.setItem(clave, valor)
};
if (localStorage.getItem("listasocios") === null) {
    guardarsociolocal("listasocios", JSON.stringify(socios))
}

if (localStorage.getItem("listareservas") === null) {
    guardarsociolocal("listareservas", JSON.stringify(reservas))
}
let cantidadagregada = 0;
sessionStorage.setItem("useragregados", cantidadagregada);

function resetjson(lista, objetoactual) {
    localStorage.removeItem(lista);
    guardarsociolocal(lista, JSON.stringify(objetoactual))
}