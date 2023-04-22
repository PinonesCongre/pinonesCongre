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
// Obtener el formulario de creación de cuenta
const createAccount = document.querySelector('#create-account-form');

// Agregar un manejador de eventos para el envío del formulario
createAccount.addEventListener('submit', (e) => {
  // Evitar que se envíe el formulario
  e.preventDefault();

  // Obtener los valores de los campos de correo electrónico y contraseña
  const email = createAccount['email'].value;
  const password = createAccount['password'].value;

  // Crear una cuenta con Firebase
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Creación de cuenta exitosa, redirigir al usuario a una página de bienvenida o algo similar
      // Aquí puede agregar código para redirigir al usuario a una nueva página, por ejemplo:
      window.location.href = 'index.html';
    })
    .catch((error) => {
      // Error de creación de cuenta, mostrar un mensaje de error
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(`Error: ${errorCode} - ${errorMessage}`);
      alert('No se pudo crear la cuenta. Inténtalo de nuevo más tarde.');
    });
});

