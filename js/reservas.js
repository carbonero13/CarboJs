//**Agregar Reserva
const reservas = document.getElementById("reservaForm")
reservas.addEventListener("submit", e => {
    e.preventDefault();
    const quinchoReserva = textoSelect("#quincho");
    if (quinchoReserva === "Seleccione Quincho...") {
        algoSalioMal("Selecciona un Quincho por favor");
    } else {
        const fechaReserva = reservas["calendario"].value;
        const arrayFecha = fechaReserva.split(" ")
        const diaReserva = parseInt(arrayFecha[1])
        const mesReserva = mesNumero(arrayFecha[2]);
        const anioReserva = parseInt(arrayFecha[3])
        const fechaToStamp = firebase.firestore.Timestamp.fromDate(new Date(anioReserva, mesReserva, diaReserva, 0, 0, 0))
        db.collection("reservas").doc().set({
                quincho: quinchoReserva,
                fecha: fechaToStamp,
                idUsuario: localStorage.getItem("key")
            })
            .then(() => {
                reseteoFormulario("#reservaForm");
                cargarMisReservas();
                exito("Reserva realizada")
                actualizoCalendario() 
            })
            .catch((error) => {
                algoSalioMal();
            });
    }
})




// Obtengo las reservas de un usuario especifico
const misReservas = document.getElementById("btnMisReservas")
misReservas.addEventListener("click", (e) => {
    e.preventDefault();
    cargarMisReservas();
});

//Borro la reserva seleccionada

function borrarReserva(id) {
    db.collection("reservas").doc(id).delete()
        .then(() => {        
            actualizoCalendario() 
            cargarMisReservas();
            exito("Reserva Borrada");
        })
        .catch((error) => {
            algoSalioMal();
        });
}



// Cargo Reservas en el HTML
function cargarMisReservas() {
    const reservaContenedor = document.getElementById("reservasContenedor");
    reservaContenedor.innerHTML = "";
    let reservaCorreo = db.collection("reservas").where("idUsuario", "==", localStorage.getItem("key")).get().then((querySnapshot) => {
        const reservasfill = []
        querySnapshot.forEach((doc) => {
            const stampToFechas = doc.data().fecha.toDate().toLocaleDateString("es-AR", optionsCalendarioLargo);
            const objreservasfill = new Reservasfill(doc.data().fecha, stampToFechas, doc.data().quincho, doc.id)
            const cont = reservasfill.push(objreservasfill);
        });
        const sociosordenado = reservasfill.sort(((a, b) => a.timestamp - b.timestamp));
     
        for (const sociosordenado2 of sociosordenado) {
            reservaContenedor.innerHTML +=
                `
                <div class="row row-striped m-0">
                    <div class="col-2 text-center  m-0">
                    <h3 class="m-0"><span class="badge badge-secondary pt-1 m-0">${sociosordenado2.timestamp.toDate().getDate()}</span></h3>
                    <h5 class="m-0">${numeroMes(sociosordenado2.timestamp.toDate().getMonth())}</h5>
                    </div>
                    <div class="col-8 m-0">
                    <h2 class="text-uppercase m-0"><strong>${sociosordenado2.quincho}</strong></h2>
                    <ul class="list-inline m-0">
                        <li class="list-inline-item m-0"><i class="far fa-calendar-check" aria-hidden="true"></i> ${sociosordenado2.fecha}</li>        
                        </ul>
                    </div>
                    <div class="col-2 m-0 text-end">
                      <button type="button" class="btn btn-outline-secondary w-90 btn-borrar"  data-id="${sociosordenado2.id}" id="${sociosordenado2.id}"><i class="far fa-trash-alt"></i></button>
                </div>
                </div>`;
         
            const btnsBorrar = document.querySelectorAll(".btn-borrar");
        
            btnsBorrar.forEach(btn => {
                btn.addEventListener("click", (e) => {
                    borrarReserva(btn.id);
                   
                });
            });

        }
    }).catch((error) => {
        reservaContenedor.innerHTML += `<h2>No hay Reservas</h2>`
    });

}