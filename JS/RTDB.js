// Obtener el icono de información y el contenedor de información
var infoIcon = document.querySelector('#info-icon-container i');
var infoContainer = document.querySelector('#info-container');

// Mostrar u ocultar el contenedor de información al hacer clic en el icono de información
infoIcon.addEventListener('click', function() {
    if (infoContainer.style.display === 'none') {
        infoContainer.style.display = 'block';
    } else {
        infoContainer.style.display = 'none';
    }
});

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
    publicaciones: {
      required: true,
      digits: true
    },
    horas: {
      required: true,
      digits: true
    },
    revisitas: {
      required: true,
      digits: true
    },
    cursosBiblicos: {
      required: true,
      digits: true
    },
    videos: {
      required: true,
      digits: true
    },
    supervisor: "required",
  },
  messages: {
    name: "Por favor, ingrese su nombre",
    rol: {
      required: "Por favor, ingrese su rol"
    },
    publicaciones: {
      required: "Por favor, ingrese el número de publicaciones",
      digits: "Por favor, ingrese solo números enteros"
    },
    horas: {
      required: "Por favor, ingrese el número de horas",
      digits: "Por favor, ingrese solo números enteros"
    },
    revisitas: {
      required: "Por favor, ingrese el número de revisitas",
      digits: "Por favor, ingrese solo números enteros"
    },
    cursosBiblicos: {
      required: "Por favor, ingrese el número de cursos bíblicos",
      digits: "Por favor, ingrese solo números enteros"
    },
    videos: {
      required: "Por favor, ingrese el número de videos mostrados",
      digits: "Por favor, ingrese solo números enteros"
    },
    supervisor: "Por favor, ingrese el nombre de su superintendente"
  },
  submitHandler: function(form) {
    // Captura los valores de cada campo del formulario y los almacena en un objeto JavaScript
    var reporte = {
      nombre: $("#name").val(),
      rol: $("#rol").val(),
      publicaciones: parseInt($("#publications").val()),
      horas: parseInt($("#hours").val()),
      revisitas: parseInt($("#visits").val()),
      cursosBiblicos: parseInt($("#bibleCourse").val()),
      videos: parseInt($("#videos").val()),
      supervisor: $("#supervisor").val(),
      notas: $("#notes").val()
    };

 // Envía el objeto JavaScript a Realtime Database
//db.push(reporte)
//.then(function() {
  //console.log("Datos del formulario guardados en Realtime Database");
  Swal.fire(
    {
      title: '¿Está seguro de que desea enviar el informe?',
      showCancelButton: true,
      confirmButtonText: 'Enviar',
      cancelButtonText: 'Cancelar'
    }).then((result)=>{
      if (result.isConfirmed){
        db.push(reporte)
        .then(function(){
          console.log("Datos del formulario guardatos en Realtime Database");
          Swal.fire(
            '¡Buen trabajo!',
            'Informe guardado correctamente',
            'success'
          )
          form.reset();
        })
        .cath(function(error){
          console.error("Error al escribir los datos en Realtime Database: ", error);
          Swal.fire(
            '¡oops!',
            'Los datos no fueron guardados',
            'error'
          )
        })
      }
    })
  }
});
//}
//});
