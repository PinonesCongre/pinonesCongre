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
firebase.initializeApp(config); //inicializamos firebase

var filaEliminada; //para capturara la fila eliminada
var filaEditada; //para capturara la fila editada o actualizada


//creamos constantes para los iconos editar y borrar    
const iconoEditar = '<svg class="bi bi-pencil-square" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/><path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/></svg>';
const iconoBorrar = '<svg class="bi bi-trash" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/><path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/></svg>';

var db = firebase.database();
var coleccionInformes = db.ref().child("users");
     
var dataSet = [];//array para guardar los valores de los campos inputs del form
var table = $('#tablaInformes').DataTable({
            pageLength : 6,
            lengthMenu: [[6, 12, 24, -1], [6, 12, 24, 'Todos']],
            data: dataSet,
            columnDefs: [
                {
                    targets: [0], 
                    visible: false, //ocultamos la columna de ID que es la [0]                        
                },
                {
                    targets: 1, // El índice de la columna de nombre, en este caso la segunda columna
                    width: "200px" // Ancho deseado para la columna
                },
                {
                    targets: -1,        
                    defaultContent: "<div class='wrapper text-center'><div class='btn-group'><button class='btnEditar btn btn-primary' data-toggle='tooltip' title='Editar'>"+iconoEditar+"</button><button class='btnBorrar btn btn-danger' data-toggle='tooltip' title='Borrar'>"+iconoBorrar+"</button></div></div>"
                }
            ]	   
        });
    //Muestra datos de DataTables
coleccionInformes.on("child_added", datos => {        
    dataSet = [datos.key, datos.child("nombre").val(),datos.child("rol").val(), datos.child("publicaciones").val(), datos.child("horas").val(), datos.child("revisitas").val(),datos.child("cursosBiblicos").val(),datos.child("videos").val(),datos.child("superintendente").val(),datos.child("notas").val()];
    table.rows.add([dataSet]).draw();
});
//Cambios del hijo 
coleccionInformes.on('child_changed', datos => {           
    dataSet = [datos.key, datos.child("nombre").val(), datos.child("rol").val(), datos.child("publicaciones").val(), datos.child("horas").val(), datos.child("revisitas").val(),datos.child("cursosBiblicos").val(),datos.child("videos").val(),datos.child("superintendente").val(),datos.child("notas").val() ];
    table.row(filaEditada).data(dataSet).draw();
});
//Elimina la fila de datos
coleccionInformes.on("child_removed", function() {
    table.row(filaEliminada.parents('tr')).remove().draw();                     
});

       
$('form').submit(function(e){                         
    e.preventDefault();
    let id = $.trim($('#id').val());        
    let nombre = $.trim($('#nombre').val());
    let rol = $.trim($('#rol').val());         
    let publicaciones = $.trim($('#publicaciones').val());
    let horas = $.trim($('#horas').val());
    let revisitas = $.trim($('#revisitas').val());
    let cursosBiblicos = $.trim($('#cursosBiblicos').val());
    let videos = $.trim($('#videos').val());
    let superintendente = $.trim($('#superintendente').val());
    let notas = $.trim($('#notas').val());                         
    let idFirebase = id;        
    if (idFirebase == ''){                      
        idFirebase = coleccionusers.push().key;
    };                
    data = {nombre:nombre, rol:rol, publicaciones:publicaciones, horas:horas, revisitas:revisitas, cursosBiblicos:cursosBiblicos, videos:videos, superintendente:superintendente, notas:notas};             
    actualizacionData = {};
    actualizacionData[`/${idFirebase}`] = data;
    coleccionInformes.update(actualizacionData);
    id = '';        
    $("form").trigger("reset");
    $('#modalAltaEdicion').modal('hide');
});

//Botones
/*
$('#btnNuevo').click(function() {
    $('#id').val('');        
    $('#nombre').val('');
    $('#rol').val('');         
    $('#publicaciones').val('');
    $('#horas').val('');
    $('#revisitas').val('');
    $('#cursosBiblicos').val('');
    $('#videos').val('');
    $('#supervisor').val('');
    $('#notas').val('');                              
    $("form").trigger("reset");
    $('#modalAltaEdicion').modal('show');
});        
*/
$("#tablaInformes").on("click", ".btnEditar", function() {    
    filaEditada = table.row($(this).parents('tr'));           
    let fila = $('#tablaInformes').dataTable().fnGetData($(this).closest('tr'));               
    let id = fila[0];
    console.log(id);
    let nombre = $(this).closest('tr').find('td:eq(0)').text(); 
    let rol = $(this).closest('tr').find('td:eq(1)').text();        
    let publicaciones = parseInt($(this).closest('tr').find('td:eq(2)').text());
    let horas = parseInt($(this).closest('tr').find('td:eq(3)').text());
    let revisitas = parseInt($(this).closest('tr').find('td:eq(4)').text());    
    let cursosBiblicos = parseInt($(this).closest('tr').find('td:eq(5)').text());
    let videos = parseInt($(this).closest('tr').find('td:eq(6)').text());   
    let superintendente = $(this).closest('tr').find('td:eq(7)').text();   
    let notas = $(this).closest('tr').find('td:eq(8)').text();     
    $('#id').val(id);        
    $('#nombre').val(nombre);
    $('#rol').val(rol);                
    $('#publicaciones').val(publicaciones);
    $('#horas').val(horas);      
    $('#revisitas').val(revisitas);
    $('#cursosBiblicos').val(cursosBiblicos);
    $('#videos').val(videos);
    $('#superintendente').val(superintendente);
    $('#notas').val(notas);                              
    $('#modalAltaEdicion').modal('show');
});  

$("#tablaInformes").on("click", ".btnBorrar", function() {   
    filaEliminada = $(this);
    Swal.fire({
    title: '¿Está seguro de eliminar el informe?',
    text: "¡Está operación no se puede revertir!",
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
    })        
});  

});