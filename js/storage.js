//Guardo socios en el local storage para luego recuperarlo y voy almacenando en secion la cantidad de usuario que agregue en la secion
const guardarsociolocal = (clave, valor)=> {localStorage.setItem(clave, valor)};
guardarsociolocal("listasocios", JSON.stringify(socios))

let cantidadagregada = 0;
sessionStorage.setItem("useragregados", cantidadagregada);

function resetjson(lista, objetoactual) {
    localStorage.removeItem(lista);
    guardarsociolocal(lista, JSON.stringify(objetoactual))
}

