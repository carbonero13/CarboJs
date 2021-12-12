//** Configuracion Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAqX5B2aWdapYlROgkyK5SWRmNhagzQWr8",
    authDomain: "quinchoreserva.firebaseapp.com",
    projectId: "quinchoreserva",
    storageBucket: "quinchoreserva.appspot.com",
    messagingSenderId: "704605192641",
    appId: "1:704605192641:web:9f286ec40d714c54ae6f40"
};

//** Iniciar Firebase
firebase.initializeApp(firebaseConfig);

//** Autentificacion
const auth = firebase.auth();

//** Base firebase
const db = firebase.firestore();


//** Muestro u Oculto elementos Html segun si esta logueado o no
const verificarLogueo = user => {
    if (user) {
        document.getElementById("contenedorReservas").classList.replace("d-none", "d-block");
        document.getElementById("liUsuarioLogueado").classList.replace("d-none", "d-block");
        document.getElementById("liRegistrarUsuario").classList.replace("d-block", "d-none");
        document.getElementById("ingreseRegistreLabel").classList.replace("d-block", "d-none");
        document.getElementById("liIngresarUsuario").classList.replace("d-block", "d-none");
    } else {
        document.getElementById("liRegistrarUsuario").classList.replace("d-none", "d-block");
        document.getElementById("ingreseRegistreLabel").classList.replace("d-none", "d-block");
        document.getElementById("liIngresarUsuario").classList.replace("d-none", "d-block");
        document.getElementById("liUsuarioLogueado").classList.replace("d-block", "d-none");
        document.getElementById("contenedorReservas").classList.replace("d-block", "d-none");
    }
}

//** Guardo Perfil en base de datos/
function guardarUsuario(dato) {
    db.collection("usuarios").doc().set({
        nombre: dato.nombre,
        apellido: dato.apellido,
        correo: dato.correo,
        provincia: dato.provincia,
        departamento: dato.departamento,
        ciudad: dato.ciudad
    })
};

//** Registrar Usuario
const registroForm = document.querySelector("#registroForm");
registroForm.addEventListener("submit", (e) => {
    e.preventDefault();
    animarbtnRegistrar();
    const registroCorreo = registroForm["registroCorreo"].value;
    const registroPassword = registroForm["registroPassword"].value;
    const registroNombre = registroForm["registroNombre"].value;
    const registroApellido = registroForm["registroApellido"].value;
    const registroProvincia = textoSelect("#selectProvincia");
    const registroDepartamento = textoSelect("#selectDepartamento");
    const registroCiudad = textoSelect("#selectCiudad");
    const usuarioGuardar = new Usuarios(registroNombre, registroApellido, registroCorreo, registroProvincia, registroDepartamento, registroCiudad);
        auth.createUserWithEmailAndPassword(registroCorreo, registroPassword)
            .then((userCredential) => {
                let user = userCredential.user;
                guardarUsuario(usuarioGuardar);
                document.getElementById("usuarioLogueado").innerHTML = user.email;
                cerrarModal("#registrarModal");
                let ss = localStorage.setItem("key", user.uid);
                Toast.fire({
                    icon: 'success',
                    title: 'Te registraste con exito'
                });
            })
            .catch((error) => {
                let errorCode = error.code;
                let errorMessage = error.message;
                resetbtnReservar();
                algoSalioMal("No se pudo crear el usuario, intente nuevamente");
            });
});


//** Ingresar con Usuario

const ingresarForm = document.querySelector("#ingresarForm");
ingresarForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const ingresarCorreo = document.querySelector("#ingresarCorreo").value;
    const ingresarPassword = document.querySelector("#ingresarPassword").value;
    auth.signInWithEmailAndPassword(ingresarCorreo, ingresarPassword)
        .then((userCredential) => {
            let user = userCredential.user;
            cerrarModal("#ingresarModal")
            let ss = localStorage.setItem("key", user.uid);
            Toast.fire({
                icon: 'success',
                title: 'Te logueaste con exito'
            });
        })
        .catch((error) => {
            let errorCode = error.code;
            let errorMessage = error.message;
            algoSalioMal("No pudo loguearse correctamente, intente de nuevo");
        });
});

//** Salir

const salirUsuario = document.querySelector("#salirUsuario");
salirUsuario.addEventListener("click", (e) => {
    e.preventDefault();
    auth.signOut().then(() => {
        let ss = localStorage.setItem("key", "");
        const reservaContenedor = document.getElementById("reservasContenedor");
        reservaContenedor.innerHTML = "";
        Toast.fire({
            icon: 'success',
            title: 'Saliste con exito'
        });
    }).catch((error) => {
        algoSalioMal("No pudo salir, intente de nuevo");
    });
});



//** Eventos de cambio de estado
auth.onAuthStateChanged((user) => {
    if (user) {
        verificarLogueo(user);
        obtenerPerfilSession(user.email);
        document.getElementById("usuarioLogueado").innerHTML = user.email;
    } else {
        verificarLogueo(user);
        document.getElementById("usuarioLogueado").innerHTML = "";
    }
});

//** Obtengo los datos del usuario que ingreso
function obtenerPerfilSession(perfil) {
    let usuarioCorreo = db.collection("usuarios").where("correo", "==", perfil).get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            completarPerfil(doc.data());
        });
    });
}




//**Lleno el Modal Pefil con los datos del usuario logueado
function completarPerfil(dato) {
    const datoPerfil = dato;
    const perfilFormulario = document.querySelector("#perfilForm");
    perfilFormulario["perfilNombre"].value = primeraPalabraMayuscula(datoPerfil.nombre);
    perfilFormulario["perfilApellido"].value = primeraPalabraMayuscula(datoPerfil.apellido);
    perfilFormulario["perfilCorreo"].value = datoPerfil.correo;
    perfilFormulario["perfilProvincia"].value = primeraPalabraMayuscula(datoPerfil.provincia);
    perfilFormulario["perfilDepartamento"].value = primeraPalabraMayuscula(datoPerfil.departamento);
    perfilFormulario["perfilCiudad"].value = primeraPalabraMayuscula(datoPerfil.ciudad);
}