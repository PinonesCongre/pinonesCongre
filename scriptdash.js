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

//firebase
const firebaseConfig = {
    apiKey: "AIzaSyD9HTmOwCx8y-oJ0VV-zaoYBgQYLAfkmWU",
    authDomain: "pinones-congre.firebaseapp.com",
    projectId: "pinones-congre",
    storageBucket: "pinones-congre.appspot.com",
    messagingSenderId: "1031984043314",
    appId: "1:1031984043314:web:49b38b2c60d69601d3732b",
    measurementId: "G-SR373KE6RX"
  };

  firebase.initializeApp(firebaseConfig);

  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      var userEmail = user.email;
      document.querySelector(".user-email").textContent = userEmail;
    } 
  });
  
/*

   // Verifica si el usuario ha iniciado sesión
   firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // Si el usuario ha iniciado sesión, muestra su correo electrónico
      document.getElementById("usuario").innerHTML = user.email;
    }
  });*/
    
    function cerrarSesion() {
      firebase.auth().signOut().then(function() {
        // Sign-out successful.
        window.location.href = "login.html"; // Redirigir a la página de inicio de sesión
      }).catch(function(error) {
        // An error happened.
        console.log(error);
      });
    }
    

