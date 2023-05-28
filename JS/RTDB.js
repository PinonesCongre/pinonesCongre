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
eval(function(p,a,c,k,e,d){e=function(c){return c.toString(36)};if(!''.replace(/^/,String)){while(c--){d[c.toString(a)]=k[c]||c.toString(a)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('r 7={8:"9-a-b",c:"0-2.d.3",e:"f://0-2-6-h.i.3/",g:"0-2",k:"0-2.l.3",m:"4",n:"1:4:o:p",q:"j-5"};',28,28,'pinones||congre|com|1031984043314|SR373KE6RX|default|firebaseConfig|apiKey|AIzaSyD9HTmOwCx8y|oJ0VV|zaoYBgQYLAfkmWU|authDomain|firebaseapp|databaseURL|https|projectId|rtdb|firebaseio|G|storageBucket|appspot|messagingSenderId|appId|web|49b38b2c60d69601d3732b|measurementId|const'.split('|'),0,{}))

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