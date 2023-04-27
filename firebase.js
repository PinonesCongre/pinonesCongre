

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
            'Buen Trabajo',
            'Datos guardados correctamente',
            'success'
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
        let nombre = $("#name").val();
        let horas = $("#hours").val();
        let publicaciones = $("#publications").val();
        let revisitas = $("#visits").val();
        let cursosbiblicos= $("#biblecourses").val();
        let superintendente = $("#supervisor").val();
        let videos = $("#videos").val();
        let notas = $('#notes').val();

        const user = {
            nombre,
            horas,
            publicaciones,
            revisitas,
            cursosbiblicos,
            superintendente,
            videos,
            notas

        }
        
        SaveUser(user);

    })


      

    