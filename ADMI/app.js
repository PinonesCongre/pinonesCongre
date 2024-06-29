$(document).ready(function() {
    const config = {
        apiKey: "AIzaSyANSEcsrnbzVJ8i6-eOqv-pewPaeImdORg",
        authDomain: "pinones-congre.firebaseapp.com",
        databaseURL: "https://pinones-congre-default-rtdb.firebaseio.com",
        projectId: "pinones-congre",
        storageBucket: "pinones-congre.appspot.com",
        messagingSenderId: "1031984043314",
        appId: "1:1031984043314:web:49b38b2c60d69601d3732b",
        measurementId: "G-SR373KE6RX"
    };    
    firebase.initializeApp(config); // Inicializamos firebase

    var filaEliminada; // Para capturar la fila eliminada
    var filaEditada; // Para capturar la fila editada o actualizada

    // Creamos constantes para los iconos editar y borrar    
    const iconoEditar = '<svg class="bi bi-pencil-square" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/><path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/></svg>';
    const iconoBorrar = '<svg class="bi bi-trash" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/><path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/></svg>';

    var db = firebase.database();
    var coleccionInformes = db.ref().child("users");
         
    var dataSet = [];// Array para guardar los valores de los campos inputs del form
    var table = $('#tablaInformes').DataTable({
        pageLength: 6,
        lengthMenu: [[6, 12, 24, -1], [6, 12, 24, 'Todos']],
        data: dataSet,
        columnDefs: [
            {
                targets: [0], 
                visible: false, // Ocultamos la columna de ID que es la [0]                        
            },
            {
                targets: 1, // El índice de la columna de nombre, en este caso la segunda columna
                width: "200px" // Ancho deseado para la columna
            },
            {
                targets: -1,        
                defaultContent: "<div class='wrapper text-center'><div class='btn-group'><button class='btnEditar btn btn-primary' title='Editar'>"+iconoEditar+"</button><button class='btnBorrar btn btn-danger' title='Borrar'>"+iconoBorrar+"</button></div></div>"
            }
        ]	   
    });

    // Muestra datos de DataTables
    coleccionInformes.on("child_added", datos => {        
        dataSet = [datos.key, datos.child("nombre").val(), datos.child("rol").val(), datos.child("participo").val(), datos.child("cursosBiblicos").val(), datos.child("horas").val(), datos.child("superintendente").val(), datos.child("notas").val(), datos.child("fechaEnvio").val()];
        table.rows.add([dataSet]).draw();
    });

    // Cambios del hijo 
    coleccionInformes.on('child_changed', datos => {           
        dataSet = [datos.key, datos.child("nombre").val(), datos.child("rol").val(), datos.child("participo").val(), datos.child("cursosBiblicos").val(), datos.child("horas").val(), datos.child("superintendente").val(), datos.child("notas").val()];
        table.row(filaEditada).data(dataSet).draw();
    });

       // Elimina la fila de datos
    coleccionInformes.on("child_removed", function() {
        table.row(filaEliminada.parents('tr')).remove().draw();                     
    });

    $('form').submit(function(e) {                         
        e.preventDefault();
        let id = $.trim($('#id').val());        
        let nombre = $.trim($('#nombre').val());
        let rol = $.trim($('#rol').val());
        let participo = $.trim($('#participo').val());
        let cursosBiblicos = $.trim($('#cursosBiblicos').val());
        let horas = $.trim($('#horas').val());
        let superintendente = $.trim($('#superintendente').val());
        let notas = $.trim($('#notas').val());                      
        let idFirebase = id;        
        if (idFirebase == '') {                      
            idFirebase = coleccionusers.push().key;
        };                
        data = {
            nombre: nombre,
            rol: rol,
            participo: participo,
            cursosBiblicos: cursosBiblicos,
            horas: horas,
            superintendente: superintendente,
            notas: notas
        };             
        actualizacionData = {};
        actualizacionData[`/${idFirebase}`] = data;
        coleccionInformes.update(actualizacionData);
        id = '';        
        $("form").trigger("reset");
        $('#modalAltaEdicion').modal('hide');
    });

    //INFORMES MODAL MODIFICADO
    $("#tablaInformes").on("click", ".btnEditar", function() {
        filaEditada = table.row($(this).parents('tr'));
        let fila = $('#tablaInformes').dataTable().fnGetData($(this).closest('tr'));
        let id = fila[0];
        let nombre = $(this).closest('tr').find('td:eq(1)').text();
        let rol = $(this).closest('tr').find('td:eq(2)').text();
        let participo = parseInt($(this).closest('tr').find('td:eq(3)').text());
        let cursosBiblicos = parseInt($(this).closest('tr').find('td:eq(4)').text());
        let horas = parseInt($(this).closest('tr').find('td:eq(5)').text());
        let superintendente = $(this).closest('tr').find('td:eq(6)').text();
        let notas = $(this).closest('tr').find('td:eq(7)').text();
    
        // Opciones para el campo "superintendente"
        let superintendenteOptions = [
            'Alfonso.P Grupo 1',
            'Rafael.G Grupo 2',
            'Alberto.G Grupo 3',
            'Josue.T Grupo 4',
            'Mario.B & Marco.H Grupo 5'
        ];
    
        // Crear las opciones del campo "superintendente" para el cuadro de diálogo
        let superintendenteOptionsHTML = superintendenteOptions.map(option => {
            return '<option value="' + option + '" ' + (superintendente === option ? 'selected' : '') + '>' + option + '</option>';
        }).join('');
    
        // Mostrar cuadro de diálogo de SweetAlert2
        Swal.fire({
            title: 'Editar informe',
            html:
                '<div style="text-align: left;">' +
                '<label for="swal-nombre">Nombre:</label>' +
                '<input id="swal-nombre" class="swal2-input" value="' + nombre + '">' +
                '<label for="swal-rol">Rol:</label>' +
                '<select id="swal-rol" class="swal2-input">' +
                '<option value="Publicador" ' + (rol === 'Publicador' ? 'selected' : '') + '>Publicador</option>' +
                '<option value="Precursor Auxiliar" ' + (rol === 'Precursor Auxiliar' ? 'selected' : '') + '>Precursor Auxiliar</option>' +
                '<option value="Precursor Regular" ' + (rol === 'Precursor Regular' ? 'selected' : '') + '>Precursor Regular</option>' +
                '</select>' +
                '<label for="swal-horas">Horas:</label>' +
                '<input id="swal-horas" class="swal2-input" value="' + horas + '">' +
                '<label for="swal-cursosBiblicos">Cursos Bíblicos:</label>' +
                '<input id="swal-cursosBiblicos" class="swal2-input" value="' + cursosBiblicos + '">' +
                '<label for="swal-participo">Participo:</label>' +
                '<input id="swal-participo" class="swal2-input" value="' + participo + '">' +
                '<label for="swal-superintendente">Superintendente:</label>' +
                '<select id="swal-superintendente" class="swal2-input">' +
                superintendenteOptionsHTML +
                '</select>' +
                '<label for="swal-notas">Notas:</label>' +
                '<input id="swal-notas" class="swal2-input" value="' + notas + '">' +
                '</div>',
            focusConfirm: false,
            showCancelButton: true,
            confirmButtonText: 'Guardar',
            cancelButtonText: 'Cancelar',
            preConfirm: () => {
                // Obtener los valores de los campos de entrada del cuadro de diálogo
                let editedNombre = $('#swal-nombre').val();
                let editedRol = $('#swal-rol').val();
                let editedHoras = parseInt($('#swal-horas').val());
                let editedCursosBiblicos = parseInt($('#swal-cursosBiblicos').val());
                let editedParticipo = parseInt($('#swal-participo').val());
                let editedSuperintendente = $('#swal-superintendente').val();
                let editedNotas = $('#swal-notas').val();
    
                // Actualizar los datos en la tabla
                let newData = [id, editedNombre, editedRol, editedHoras, editedCursosBiblicos, editedParticipo, editedSuperintendente, editedNotas];
                table.row(filaEditada).data(newData).draw();
    
                // Actualizar los datos en la base de datos (Firebase)
                let informeRef = db.ref('users/' + id);
                informeRef.update({
                    nombre: editedNombre,
                    rol: editedRol,
                    participo: editedParticipo,
                    cursosBiblicos: editedCursosBiblicos,
                    horas: editedHoras,       
                    superintendente: editedSuperintendente,
                    notas: editedNotas
                });
    
                // Mostrar alerta de informe actualizado
                Swal.fire('Informe actualizado', 'Se ha actualizado el informe de ' + editedNombre, 'success');
            },
            onOpen: () => {
                // Establecer estilos personalizados para el cuadro de diálogo
                Swal.getPopup().style.textAlign = 'left';
            }
        });
    });
    
    
    $("#tablaInformes").on("click", ".btnBorrar", function() {   
        filaEliminada = $(this);
        Swal.fire({
            title: '¿Está seguro de eliminar el informe?',
            text: "¡Esta operación no se puede revertir!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Borrar'
        }).then((result) => {
            if (result.value) {
                let fila = $('#tablaInformes').dataTable().fnGetData($(this).closest('tr'));            
                let id = fila[0];            
                db.ref(`users/${id}`).remove()
                Swal.fire('¡Eliminado!', 'El informe ha sido eliminado.','success')
            }
        });
    }); 

});