
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


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

    let db = firebase.firestore();

    const SaveUser = (user)=>{
        db.collection("usuarios").add({
           user
        })
        .then((docRef) => {
           MJSQK();
        })
        .catch((error) => {
            MJSERROR();
        });
    }


    const MJSQK = ()=>{
        Swal.fire(
        title: 'Buen Trabajo',
        text: 'Datos guardados correctamente',
        icon: 'success',
        background: '#ffffff' // Cambiar el color de fondo a blanco
        )
    }

    const MJSERROR = ()=>{
        Swal.fire(
            'opps!',
            'Datos no guardados',
            'error'
        )
    }

    $("#submit-btn").on('click',()=>{
        let name = $("#name").val();
        let hours = $("#hours").val();
        let publications = $("#publications").val();
        let visits = $("#visits").val();
        let biblecourses = $("#biblecourses").val();
        let supervisor = $("#supervisor").val();
        let videos = $("#videos").val();

        const user = {
            name,
            hours,
            publications,
            visits,
            biblecourses,
            supervisor,
            videos

        }

        SaveUser(user);

    })

    


