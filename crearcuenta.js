$(document).ready(function() {
  $('#registro-form').validate({
    rules: {
      email: {
        required: true,
        email: true
      },
      password: {
        required: true,
        minlength: 6
      }
    },
    messages: {
      email: {
        required: 'El correo electrónico es obligatorio',
        email: 'Por favor, ingrese un correo electrónico válido'
      },
      password: {
        required: 'La contraseña es obligatoria',
        minlength: 'La contraseña debe tener al menos 6 caracteres'
      }
    },
    submitHandler: function(form) {
      enviar();
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

  function enviar(){
    var email=document.getElementById('email').value;
    var password=document.getElementById('password').value;

    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
  
      // Send password reset email
      user.sendPasswordResetEmail().then(function() {
        // Email sent.
        console.log('Password reset email sent');
      }).catch(function(error) {
        // An error happened.
        console.error('Error sending password reset email', error);
      });
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      alert(errorMessage);
    });
  

  }

  
   // Verifica si el usuario ha iniciado sesión
   firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // Si el usuario ha iniciado sesión, muestra su correo electrónico
      document.getElementById("usuario").innerHTML = user.email;
    }
  });
    
    function cerrarSesion() {
      firebase.auth().signOut().then(function() {
        // Sign-out successful.
        window.location.href = "login.html"; // Redirigir a la página de inicio de sesión
      }).catch(function(error) {
        // An error happened.
        console.log(error);
      });
    }