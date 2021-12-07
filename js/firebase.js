const firebaseConfig = {
  apiKey: "AIzaSyAqX5B2aWdapYlROgkyK5SWRmNhagzQWr8",
  authDomain: "quinchoreserva.firebaseapp.com",
  projectId: "quinchoreserva",
  storageBucket: "quinchoreserva.appspot.com",
  messagingSenderId: "704605192641",
  appId: "1:704605192641:web:9f286ec40d714c54ae6f40"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

class Reservas {
  constructor(estado, fecha, sala, comentarioreserva) {
    this.estado = estado;
    this.fecha = fecha;
    this.sala = sala;
    this.comentarioreserva = comentarioreserva;
  }
  toString() {
    return this.estado + ',' + this.fecha + ',' + this.sala + ',' + this.comentariosreserva;
  }
}

let reservarConvertor = {
  toFirestore: function (reservas) {
    return {
      estado: reservas.estado,
      fecha: reservas.fecha,
      sala: reservas.sala,
      comentarioreserva: reservas.comentarioreserva
    };

  },
  fromFirestore: function (snapshot, options) {
    const data = snapshot.data(options);
    return new Reservas(estado, fecha, sala, comentarioreserva);
  }
};

//agrego usuario
function agregarusuario(params) {
  db.collection("socios").doc("0").set({
      socio: 1000,
      nombre: "marco",
      apellido: "polo"
    })
    .then(() => {
      console.log("Document successfully written!");
    })
    .catch((error) => {
      console.error("Error writing document: ", error);
    });
}

function agregarreserva(params) {
  let usuarioref = db.collection("socios").doc("0").update({
      reservas: [{
        fecha: "11122022",
        sala: "quincho",
        estado: "impago",
        comentarioreserva: ""
      }]
    })
    .then(() => {
      console.log("Document successfully written!");
    })
    .catch((error) => {
      console.error("Error writing document: ", error);
    });
}

function leerdato(params) {
  let docRef = db.collection("usuarios").doc("1");
  docRef.get().then((doc) => {
    if (doc.exists) {
      console.log("Document data:", doc.data());
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  }).catch((error) => {
    console.log("Error getting document:", error);
  });
}
//socio 0
/* 
db.collection("socios").doc("0").set({
  socio: 1000,
  nombre: "marco",
  apellido: "polo"
})
.then(() => {
  console.log("Document successfully written!");
})
.catch((error) => {
  console.error("Error writing document: ", error);
});

let usuarioref = db.collection("socios").doc("0").update({
  reservas: [{
    fecha: "11122022",
    sala: "quincho",
    estado: "impago",
    comentarioreserva: ""
  },{
    fecha: "05122022",
    sala: "quincho",
    estado: "impago",
    comentarioreserva: ""
  }]
})
.then(() => {
  console.log("Document successfully written!");
})
.catch((error) => {
  console.error("Error writing document: ", error);
}); */

//socio 1
/* db.collection("socios").doc("1").set({
  socio: 1001,
  nombre: "Jose",
  apellido: "Perez"
})
.then(() => {
  console.log("Document successfully written!");
})
.catch((error) => {
  console.error("Error writing document: ", error);
});

let usuarioref2 = db.collection("socios").doc("1").set({
  reservas: new Object [{
    fecha: "16122022",
    sala: "quincho",
    estado: "pago",
    comentarioreserva: ""
  }]
})
.then(() => {
  console.log("Document successfully written!");
})
.catch((error) => {
  console.error("Error writing document: ", error);
}); */



/* let usuarioref3 = db.collection("socios").child("0").child("reservas").child("1").set({
 
    fecha: "16122022",
    sala: "quincho",
    estado: "impago",
    comentarioreserva: ""
}) */



//leo toda la estructura

let table = document.getElementById("tablaSocios");
table.innerHTML = "";
let a = 0
let html = "";
html += "<tr>"
html += "<th>Socio #1</th>";
html += "<th>Nombre</th>";
html += "<th>Apellido</th>";
html += "</tr>";
table.innerHTML = html
let sociosRef = db.collection("socios").get().then((querySnapshot) => {
  querySnapshot.forEach((doc) => {
    console.log(doc.id, "=>", doc.data().nombre, doc.data().apellido, doc.data().socio);
    a++
    let row = table.insertRow(a);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    cell1.innerHTML = doc.data().socio;
    cell2.innerHTML = doc.data().nombre;
    cell3.innerHTML = doc.data().apellido;


  });
});

//socio filtrado
let table2 = document.getElementById("tablaSociosFiltrado");
table2.innerHTML = "";
let b = 0
let html2 = "";
html2 += "<tr>"
html2 += "<th>Socio #1</th>";
html2 += "<th>Nombre</th>";
html2 += "<th>Apellido</th>";
html2 += "<th>Reservas</th>";
html2 += "</tr>";
table2.innerHTML = html2
let sociosRef2 = db.collection("socios").where("socio", "==", 1001).get().then((querySnapshot) => {
  querySnapshot.forEach((doc) => {
    
    b++
    let row2 = table2.insertRow(b);
    let cell21 = row2.insertCell(0);
    let cell22 = row2.insertCell(1);
    let cell23 = row2.insertCell(2);
    let cell24 = row2.insertCell(3);
    cell21.innerHTML = doc.data().socio;
    cell22.innerHTML = doc.data().nombre;
    cell23.innerHTML = doc.data().apellido;
    cell24.innerHTML = doc.data().reservas;
let reservasref = doc.data().reservas;
console.log(doc.id, "F=>", doc.data().nombre, doc.data().apellido, doc.data().socio, doc.data().reservas[0].estado);
console.log("Reservas=", reservasref[0].estado);
  });
});
/* 
let subconsulta = db.db.collection("socios").doc("0").collection("reservas").get().then((querySnapshot) => {
  querySnapshot.forEach((doc) => {
    console.log(doc.id, "R=>", doc.data());
 


  });
});
console.log(subconsulta);

let messageRef = db.collection('socios').doc('roomA')
                .collection('messages').doc('message1'); */

                let usuarioref = db.collection("socios").doc("0").update({
                  reservas: [{
                    fecha: "11122022",
                    sala: "quincho",
                    estado: "impago",
                    comentarioreserva: ""
                  },{
                    fecha: "05122022",
                    sala: "quincho",
                    estado: "impago",
                    comentarioreserva: ""
                  },
                  {
                    fecha: "08122022",
                    sala: "quincho",
                    estado: "impago",
                    comentarioreserva: ""
                  }]
                })
                .then(() => {
                  console.log("Document successfully written!");
                })
                .catch((error) => {
                  console.error("Error writing document: ", error);
                }); 