//Inicio de Configuracion
const firebaseConfig = {
  apiKey: "AIzaSyD9HTmOwCx8y-oJ0VV-zaoYBgQYLAfkmWU",
  authDomain: "pinones-congre.firebaseapp.com",
  databaseURL: "https://pinones-congre-default-rtdb.firebaseio.com/",
  projectId: "pinones-congre",
  storageBucket: "pinones-congre.appspot.com",
  messagingSenderId: "1031984043314",
  appId: "1:1031984043314:web:49b38b2c60d69601d3732b",
  measurementId: "G-SR373KE6RX"
};
// Inicializa Firebase
firebase.initializeApp(firebaseConfig);

// Obtiene una referencia a la base de datos de Realtime
var db = firebase.database().ref("users");


// Agrega un controlador de eventos para el evento "submit" del formulario
$("#report-form").validate({
  rules: {
    name: "required",
    rol: {
      required: true
    },
    horas: {
      required: true,
      digits: true
    },
    cursosBiblicos: {
      required: true,
      digits: true
    },
    superintendente: "required",
  },
  messages: {
    name: "Por favor, ingrese su nombre",
    rol: {
      required: "Por favor, ingrese su rol"
    },
    horas: {
      required: "Por favor, ingrese el número de horas",
      digits: "Por favor, ingrese solo números enteros"
    },
    cursosBiblicos: {
      required: "Por favor, ingrese el número de cursos bíblicos",
      digits: "Por favor, ingrese solo números enteros"
    },
    superintendente: "Por favor, ingrese el nombre de su superintendente"
  },
  highlight: function(element) {
    $(element).addClass("input-error");
  },
  unhighlight: function(element) {
    $(element).removeClass("input-error");
  },
  submitHandler: function(form) {
    // Captura los valores de cada campo del formulario y los almacena en un objeto JavaScript
    var reporte = {
      nombre: $("#name").val(),
      rol: $("#rol").val(),
      horas: parseInt($("#hours").val()),
      cursosBiblicos: parseInt($("#bibleCourse").val()),
      participo: $("#ministery").prop("checked") ? "Sí" : "No",
      superintendente: $("#superintendente").val(),
      notas: $("#notes").val(),
      fechaEnvio: obtenerFechaActual() // Agrega la fecha y hora actual al objeto "reporte"
    };
  
    // Función para obtener la fecha y hora actual en formato legible
    function obtenerFechaActual() {
      var fecha = new Date();
      var dia = fecha.getDate();
      var mes = fecha.getMonth() + 1; // Los meses comienzan desde 0, así que se agrega 1 al mes actual.
      var anio = fecha.getFullYear();
      var hora = fecha.getHours();
      var minutos = fecha.getMinutes();
      var segundos = fecha.getSeconds();
  
      // Formatea la fecha y la hora como desees, por ejemplo: DD/MM/AAAA HH:MM:SS
      var fechaFormateada = dia + '/' + mes + '/' + anio + ' ' + hora + ':' + minutos + ':' + segundos;
      return fechaFormateada;
    }
 // Envía el objeto JavaScript a Realtime Database
//db.push(reporte)
//.then(function() {
  //console.log("Datos del formulario guardados en Realtime Database");
  Swal.fire({
    title: '¿Está seguro de que desea enviar el informe?',
    showCancelButton: true,
    confirmButtonText: 'Enviar',
    cancelButtonText: 'Cancelar'
  }).then((result) => {
    if (result.isConfirmed) {
      db.push(reporte)
        .then(function() {
          console.log("Datos del formulario guardados en Realtime Database");
          Swal.fire({
            title: '¡Buen trabajo!',
            text: 'Informe guardado correctamente',
            icon: 'success'
          }).then(() => {
            // Añade la última alerta para refrescar la página
            Swal.fire({
              title: 'Para enviar otro informe, por favor, refresque la página.',
              icon: 'info',
              confirmButtonText: 'Aceptar'
            });
            form.reset();
          });
        })
        .catch(function(error) {
          console.error("Error al escribir los datos en Realtime Database: ", error);
          Swal.fire({
            title: '¡Oops!',
            text: 'Los datos no fueron guardados',
            icon: 'error'
          });
        });
    }
  });
}
});
//}
//});
