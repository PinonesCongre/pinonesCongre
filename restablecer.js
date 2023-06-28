
// Inicializar Firebase
eval(function(p,a,c,k,e,d){e=function(c){return c.toString(36)};if(!''.replace(/^/,String)){while(c--){d[c.toString(a)]=k[c]||c.toString(a)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('r 7={8:"9-a-b",c:"0-2.d.3",e:"f://0-2-6-h.i.3",g:"0-2",k:"0-2.l.3",m:"4",n:"1:4:o:p",q:"j-5"};',28,28,'pinones||congre|com|1031984043314|SR373KE6RX|default|firebaseConfig|apiKey|AIzaSyANSEcsrnbzVJ8i6|eOqv|pewPaeImdORg|authDomain|firebaseapp|databaseURL|https|projectId|rtdb|firebaseio|G|storageBucket|appspot|messagingSenderId|appId|web|49b38b2c60d69601d3732b|measurementId|var'.split('|'),0,{}))

  firebase.initializeApp(firebaseConfig);
  
  // Agregar un listener al formulario de reseteo de contraseña
  document.getElementById("reset-form").addEventListener("submit", function(event) {
  event.preventDefault(); // Detener el envío del formulario
  
  // Obtener el correo electrónico ingresado por el usuario
  var emailAddress = document.getElementById("email").value;
  
  // Enviar el correo electrónico de restablecimiento de contraseña
  firebase.auth().sendPasswordResetEmail(emailAddress)
  .then(function() {
  // Mostrar una alerta de éxito con swal alert
  Swal.fire({
  title: "¡Correo enviado!",
  text: "Se ha enviado un correo electrónico de restablecimiento de contraseña a " + emailAddress,
  icon: "success"
  });
  })
  .catch(function(error) {
  // Mostrar una alerta de error con swal alert
  Swal.fire({
  title: "¡Error!",
  text: "Ha ocurrido un error: " + error.message,
  icon: "error"
  });
  });
  });