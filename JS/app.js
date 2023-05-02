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

  // Obtener el formulario de inicio de sesión
const loginForm = document.querySelector('#login-form');

// Agregar un manejador de eventos para el envío del formulario
loginForm.addEventListener('submit', (e) => {
  // Evitar que se envíe el formulario
  e.preventDefault();

  // Obtener los valores de los campos de correo electrónico y contraseña
  const email = loginForm['email'].value;
  const password = loginForm['password'].value;

  // Iniciar sesión con Firebase
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Acceso exitoso, redirigir al usuario a una página de bienvenida o algo similar
      // Aquí puede agregar código para redirigir al usuario a una nueva página, por ejemplo:
      window.location.href = 'https://docs.google.com/spreadsheets/d/1_-rDeziNHub8ae-tYOiMII6E6jEjCIkKbkWNtzGC_r8/edit#gid=0';
    })
    .catch((error) => {
      // Error de inicio de sesión, mostrar un mensaje de error
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(`Error: ${errorCode} - ${errorMessage}`);
      alert('Correo electrónico o contraseña incorrectos.');
    });
});
