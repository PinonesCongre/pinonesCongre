//responsive
const mobileScreen = window.matchMedia("(max-width: 990px )");
$(document).ready(function () {
    $(".dashboard-nav-dropdown-toggle").click(function () {
        $(this).closest(".dashboard-nav-dropdown")
            .toggleClass("show")
            .find(".dashboard-nav-dropdown")
            .removeClass("show");
        $(this).parent()
            .siblings()
            .removeClass("show");
    });
    $(".menu-toggle").click(function () {
        if (mobileScreen.matches) {
            $(".dashboard-nav").toggleClass("mobile-show");
        } else {
            $(".dashboard").toggleClass("dashboard-compact");
        }
    });
});

//inicalizar firebase
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyANSEcsrnbzVJ8i6-eOqv-pewPaeImdORg",
    authDomain: "pinones-congre.firebaseapp.com",
    databaseURL: "https://pinones-congre-default-rtdb.firebaseio.com",
    projectId: "pinones-congre",
    storageBucket: "pinones-congre.appspot.com",
    messagingSenderId: "1031984043314",
    appId: "1:1031984043314:web:49b38b2c60d69601d3732b",
    measurementId: "G-SR373KE6RX"
  };

  firebase.initializeApp(firebaseConfig);

  
// Función para enviar correo electrónico de restablecimiento de contraseña
function enviar() {
    var emailAddress = document.getElementById("email").value;
    firebase.auth().sendPasswordResetEmail(emailAddress)
    .then(function() {
      // Email enviado con éxito
      alert("Correo electrónico de restablecimiento de contraseña enviado.");
    })
    .catch(function(error) {
      // Ocurrió un error al enviar el correo electrónico
      alert("Error al enviar correo electrónico de restablecimiento de contraseña: " + error.message);
    });
  }

  //cerrar sesion 
  
  function cerrarSesion() {
    firebase.auth().signOut().then(function() {
      // Sign-out successful.
      window.location.href = "login.html"; // Redirigir a la página de inicio de sesión
    }).catch(function(error) {
      // An error happened.
      console.log(error);
    });
  }

