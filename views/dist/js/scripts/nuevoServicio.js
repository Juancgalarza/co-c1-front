$(function(){
    _init();

    function _init(){
        guardarNuevoServicio();
        iniciar_tabla();
        actualizar_servicio();
    }

    function guardarNuevoServicio(){
        $('#form-nuevo-servicio').submit(function(e){
            e.preventDefault();

            let detalle = $('#servicio-nombre').val();
            let precio = $('#servico-precio').val();

            if(detalle.length == 0){
                Swal.fire(
                    'Servico',
                    'Complete el campo servicio',
                    'warning'
                  )
                // alert("campo rol vacio");
            }else
            if(precio.length == 0){
                Swal.fire(
                    'Servico',
                    'Complete el campo precio',
                    'warning'
                  )
                // alert("campo rol vacio");
            }else{
                let json = {
                    servicio: {
                        detalle: detalle,
                        precio: precio
                    }
                };

                guardandoServicio(json);
            }

        });
    }

    function guardandoServicio(json){
        $.ajax({
             // la URL para la petición
             url : urlServidor + 'servicio/guardar',
             // especifica si será una petición POST o GET
             type : 'POST',
             data: 'data=' + JSON.stringify(json),
             // el tipo de información que se espera de respuesta
             dataType : 'json',
             success : function(response) {
                if(response.status){
                    Swal.fire({
                        title: 'Servicio',
                        text: response.mensaje,
                        icon: 'success',
                        confirmButtonText: 'Ok',
                        confirmButtonColor: '#004a43'
                    });
                    $('#form-nuevo-servicio')[0].reset();
                    iniciar_tabla();
                }else{
                    Swal.fire({
                        title: 'Servicio',
                        text: response.mensaje,
                        icon: 'error',
                        confirmButtonText: 'Ok',
                        confirmButtonColor: '#004a43'
                    });
                }
             },
             error : function(jqXHR, status, error) {
                console.log('Existió un problema, reviselo..!');
            },
            complete : function(jqXHR, status) {
                // console.log('Petición realizada');
            }
        });
    }

    function iniciar_tabla(){
        tabla = $('#tabla-servicio').DataTable({
            "lengthMenu": [ 5, 10, 25, 75, 100],//mostramos el menú de registros a revisar
            "responsive": true, "lengthChange": false, "autoWidth": false,
            "aProcessing": true,//Activamos el procesamiento del datatables
            "aServerSide": true,//Paginación y filtrado realizados por el servidor
            "ajax":
                {
                    url:  urlServidor + 'servicio/datatable',
                    type : "get",
                    dataType : "json",						
                    error: function(e){
                        console.log(e.responseText);	
                    }
                },
            destroy: true,
            "iDisplayLength": 3,//Paginación
            "language": {
 
			    "sProcessing":     "Procesando...",
			 
			    "sLengthMenu":     "Mostrar _MENU_ registros",
			 
			    "sZeroRecords":    "No se encontraron resultados",
			 
			    "sEmptyTable":     "Ningún dato disponible en esta tabla",
			 
			    "sInfo":           "Mostrando un total de _TOTAL_ registros",
			 
			    "sInfoEmpty":      "Mostrando un total de 0 registros",
			 
			    "sInfoFiltered":   "(filtrado de un total de _MAX_ registros)",
			 
			    "sInfoPostFix":    "",
			 
			    "sSearch":         "Buscar:",
			 
			    "sUrl":            "",
			 
			    "sInfoThousands":  ",",
			 
			    "sLoadingRecords": "Cargando...",
			 
			    "oPaginate": {
			 
			        "sFirst":    "Primero",
			 
			        "sLast":     "Último",
			 
			        "sNext":     "Siguiente",
			 
			        "sPrevious": "Anterior"
			 
			    },
			 
			    "oAria": {
			 
			        "sSortAscending":  ": Activar para ordenar la columna de manera ascendente",
			 
			        "sSortDescending": ": Activar para ordenar la columna de manera descendente"
			 
			    }

			   }//cerrando language
        });
    }

    function actualizar_servicio(){
        $('#btn-update').click(function(){
            let id = $('#upd-servicio-id').val();
            let detalle = $('#upd-servicio').val();
            let precio = $('#upd-precio').val();
                
            if(detalle.length == 0){
                Swal.fire(
                    'Servico',
                    'Complete el campo servicio',
                    'warning'
                  )
                // alert("campo rol vacio");
            }else
            if(precio.length == 0){
                Swal.fire(
                    'Servico',
                    'Complete el campo precio',
                    'warning'
                  )
                // alert("campo rol vacio");
            }else{
                let json = {
                    servicio: {
                        id: id,
                        detalle: detalle,
                        precio: precio
                    }
                };

                $.ajax({
                    // la URL para la petición
                    url : urlServidor + 'servicio/editar',
                    type : 'POST',
                    data: {data: JSON.stringify(json)},
                    dataType : 'json',
                    success : function(response){
                        console.log(response);
                        if(response.status){
                            Swal.fire({
                                 title: 'Listo !',
                                 text: response.mensaje,
                                 icon: 'success',
                                 confirmButtonText: 'Ok',
                                 confirmButtonColor: '#004a43' 
                            })

                            $('#actualizar_servicio').modal('hide');
                            iniciar_tabla();
                        }else{
                            Swal.fire({
                                title: 'Error!',
                                text: response.mensaje,
                                icon: 'error',
                                confirmButtonText: 'Ok',
                                confirmButtonColor: '#004a43' 
                           })
                        }
                    },
                    error : function(jqXHR, status, error) {
                     console.log('Disculpe, existió un problema');
                 },
                 complete : function(jqXHR, status) {
                     // console.log('Petición realizada');
                 } 
                 });
            }
        })
    }
});

function editar_servicio(id){
    $('#actualizar_servicio').modal('show');
    cargar_servicio(id);
}

function eliminar_servicio(id){    
    Swal.fire({
        title: '¿Estás seguro de eliminar el servicio?',
        text: "No se podra recuperar el registro",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#004a43',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí',
        cancelButtonText: 'Cancelar'
      }).then((result) => {
        if (result.isConfirmed) {
            let json = {servicio: { id }};

            $.ajax({
                // la URL para la petición
                url : urlServidor + 'servicio/eliminar/'+id,
                // especifica si será una petición POST o GET
                type : 'POST',
                // el tipo de información que se espera de respuesta
                data: {data: JSON.stringify(json)},
                dataType : 'json',
                success : function(response) {
                    if(response.status){
                        Swal.fire({
                            title:'Servicio!',
                            text:'Se ha borrado el servicio correctamente',
                            confirmButtonColor: '#004a43',
                        });
                          iniciar_tabla2(); 
                    }
                },
                error : function(jqXHR, status, error) {
                    console.log('Disculpe, existió un problema');
                },
                complete : function(jqXHR, status) {
                    // console.log('Petición realizada');
                }
            });
        }
    })
}

function cargar_servicio(id){
    $.ajax({
        // la URL para la petición
        url : urlServidor + 'servicio/listar/' + id,
        // especifica si será una petición POST o GET
        type : 'GET',
        // el tipo de información que se espera de respuesta
        dataType : 'json',
        success : function(response) {
       
            if(response.status){
                $('#upd-servicio-id').val(response.servicio.id);
                $('#upd-servicio').val(response.servicio.detalle);
                $('#upd-precio').val(response.servicio.precio);
            }
        },
        error : function(jqXHR, status, error) {
            console.log('Disculpe, existió un problema');
        },
        complete : function(jqXHR, status) {
            // console.log('Petición realizada');
        }
    });
}

function iniciar_tabla2(){
    tabla = $('#tabla-servicio').DataTable({
        "lengthMenu": [ 5, 10, 25, 75, 100],//mostramos el menú de registros a revisar
        "responsive": true, "lengthChange": false, "autoWidth": false,
        "aProcessing": true,//Activamos el procesamiento del datatables
        "aServerSide": true,//Paginación y filtrado realizados por el servidor
        "ajax":
            {
                url:  urlServidor + 'servicio/datatable',
                type : "get",
                dataType : "json",						
                error: function(e){
                    console.log(e.responseText);	
                }
            },
        destroy: true,
        "iDisplayLength": 3,//Paginación
        "language": {

            "sProcessing":     "Procesando...",
         
            "sLengthMenu":     "Mostrar _MENU_ registros",
         
            "sZeroRecords":    "No se encontraron resultados",
         
            "sEmptyTable":     "Ningún dato disponible en esta tabla",
         
            "sInfo":           "Mostrando un total de _TOTAL_ registros",
         
            "sInfoEmpty":      "Mostrando un total de 0 registros",
         
            "sInfoFiltered":   "(filtrado de un total de _MAX_ registros)",
         
            "sInfoPostFix":    "",
         
            "sSearch":         "Buscar:",
         
            "sUrl":            "",
         
            "sInfoThousands":  ",",
         
            "sLoadingRecords": "Cargando...",
         
            "oPaginate": {
         
                "sFirst":    "Primero",
         
                "sLast":     "Último",
         
                "sNext":     "Siguiente",
         
                "sPrevious": "Anterior"
         
            },
         
            "oAria": {
         
                "sSortAscending":  ": Activar para ordenar la columna de manera ascendente",
         
                "sSortDescending": ": Activar para ordenar la columna de manera descendente"
         
            }

           }//cerrando language
    });
}
