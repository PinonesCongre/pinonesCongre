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
  
  // Función para iniciar sesión
  // ...

// Función para iniciar sesión
function iniciarSesion(event) {
    event.preventDefault(); // Detener la recarga automática del formulario
  
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
  
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Inicio de sesión exitoso
        const user = userCredential.user;
        console.log('Inicio de sesión exitoso:', user);
  
        // Redirigir a otra página después del inicio de sesión
        window.location.href = '/cards.html';
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error('Error al iniciar sesión:', errorMessage);
        // Puedes mostrar un mensaje de error al usuario si lo deseas
      });
  }
  
  // Asociar la función con el evento de clic del botón
  document.getElementById('submit-btn').addEventListener('click', iniciarSesion);
  