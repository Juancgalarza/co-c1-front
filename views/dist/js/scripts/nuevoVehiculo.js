$(function(){
    _init();

    function _init(){
        cargarMarcas();
        guardarNuevoVehiculo();
        iniciar_tabla();
        actualizar_vehiculo();
    }

    function cargarMarcas(){
        $.ajax({
            // la URL para la petición
            url : urlServidor + 'marca/listar',
            // especifica si será una petición POST o GET
            type : 'GET',
            // el tipo de información que se espera de respuesta
            dataType : 'json',
            success : function(response) {
                if(response.status){
                    let tr = '';
                    let i = 1;
                    response.marca.forEach(element => {
                        tr += `<tr id="fila-marca-${element.id}">
                            <td>${i}</td>
                            <td style="display: none">${element.id}</td>
                            <td>${element.nombre}</td>
                            <td>
                                <div class="div">
                                    <button data-dismiss="modal" class="btn btn-primary btn-sm" onclick="seleccionar_marca(${element.id})">
                                        <i class="fa fa-check"></i>
                                    </button>
                                </div>
                            </td>
                        </tr>`;
                      i++;
                    });
                    $('#marca-body').html(tr);
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

    function guardarNuevoVehiculo(){
        $('#form-nuevo-vehiculo').submit(function(e){
            e.preventDefault();

            let placa = $('#vehiculo-placa').val();
            let marca_id = $('#form-marca-id').val();
            let modelo = $('#vehiculo-modelo').val();
            let kilometraje = $('#vehiculo-km').val();

            if(placa.length == 0){
                Swal.fire(
                    'Vehículo',
                    'Complete el campo placa',
                    'warning'
                  )
                // alert("campo rol vacio");
            }else
            if(marca_id.length == 0){
                Swal.fire(
                    'Vehículo',
                    'Seleccione una marca',
                    'warning'
                  )
                // alert("campo rol vacio");
            }else
            if(modelo.length == 0){
                Swal.fire(
                    'Vehículo',
                    'Complete el campo modelo',
                    'warning'
                  )
                // alert("campo rol vacio");
            }else
            if(kilometraje.length == 0){
                Swal.fire(
                    'Vehículo',
                    'Complete el campo kilometraje',
                    'warning'
                  )
                // alert("campo rol vacio");
            }else{
                let json = {
                    vehiculo: {
                        marca_id: marca_id,
                        placa: placa,
                        modelo: modelo,
                        kilometraje: kilometraje
                    }
                };

                guardandoVehiculo(json);
            }

        });
    }

    function guardandoVehiculo(json){
        $.ajax({
             // la URL para la petición
             url : urlServidor + 'vehiculo/guardar',
             // especifica si será una petición POST o GET
             type : 'POST',
             data: 'data=' + JSON.stringify(json),
             // el tipo de información que se espera de respuesta
             dataType : 'json',
             success : function(response) {
                if(response.status){
                    Swal.fire({
                        title: 'Vehículo',
                        text: response.mensaje,
                        icon: 'success',
                        confirmButtonText: 'Ok',
                        confirmButtonColor: '#004a43'
                    });
                    $('#form-nuevo-vehiculo')[0].reset();
                    iniciar_tabla();
                }else{
                    Swal.fire({
                        title: 'Vehículo',
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
        tabla = $('#tabla-vehiculo').DataTable({
            "lengthMenu": [ 5, 10, 25, 75, 100],//mostramos el menú de registros a revisar
            "responsive": true, "lengthChange": false, "autoWidth": false,
            "aProcessing": true,//Activamos el procesamiento del datatables
            "aServerSide": true,//Paginación y filtrado realizados por el servidor
            "ajax":
                {
                    url:  urlServidor + 'vehiculo/datatable',
                    type : "get",
                    dataType : "json",						
                    error: function(e){
                        console.log(e.responseText);	
                    }
                },
            destroy: true,
            "iDisplayLength": 5,//Paginación
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

    function actualizar_vehiculo(){
        $('#btn-update').click(function(){
            let id = $('#vehiculo-id').val();
            let placa = $('#upd-placa').val();
            let marca_id = $('#marca-id').val();
            let modelo = $('#upd-modelo').val();
            let kilometraje = $('#upd-km').val();
                
            if(placa.length == 0){
                Swal.fire(
                    'Vehículo',
                    'Complete el campo placa',
                    'warning'
                  )
                // alert("campo rol vacio");
            }else
            if(marca_id.length == 0){
                Swal.fire(
                    'Vehículo',
                    'Seleccione una marca',
                    'warning'
                  )
                // alert("campo rol vacio");
            }else
            if(modelo.length == 0){
                Swal.fire(
                    'Vehículo',
                    'Complete el campo modelo',
                    'warning'
                  )
                // alert("campo rol vacio");
            }else
            if(kilometraje.length == 0){
                Swal.fire(
                    'Vehículo',
                    'Complete el campo kilometraje',
                    'warning'
                  )
                // alert("campo rol vacio");
            }else{
                let json = {
                    vehiculo: {
                        id: id,
                        marca_id: marca_id,
                        placa: placa,
                        modelo: modelo,
                        kilometraje: kilometraje
                    }
                };

                $.ajax({
                    // la URL para la petición
                    url : urlServidor + 'vehiculo/editar',
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

                            $('#actualizar_vehiculo').modal('hide');
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

function seleccionar_marca(id){
    let fila = '#fila-marca-'+id;
    let f = $(fila)[0].children;
    console.log(f);
    
    let nombre = f[2].innerText;

    $('#form-marca-id').val(id);
    $('#vehiculo-marca').val(nombre);
}

function editar_vehiculo(id){
    $('#actualizar_vehiculo').modal('show');
    cargar_vehiculo(id);
}

function eliminar_vehiculo(id){    
    Swal.fire({
        title: '¿Estás seguro de eliminar el vehículo?',
        text: "No se podra recuperar el registro",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#004a43',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí',
        cancelButtonText: 'Cancelar'
      }).then((result) => {
        if (result.isConfirmed) {
            let json = {vehiculo: { id }};

            $.ajax({
                // la URL para la petición
                url : urlServidor + 'vehiculo/eliminar/'+id,
                // especifica si será una petición POST o GET
                type : 'POST',
                // el tipo de información que se espera de respuesta
                data: {data: JSON.stringify(json)},
                dataType : 'json',
                success : function(response) {
                    if(response.status){
                        Swal.fire({
                            title:'Vehículo!',
                            text:'Se ha borrado el vehículo correctamente',
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

function cargar_vehiculo(id){
    $.ajax({
        // la URL para la petición
        url : urlServidor + 'vehiculo/listar/' + id,
        // especifica si será una petición POST o GET
        type : 'GET',
        // el tipo de información que se espera de respuesta
        dataType : 'json',
        success : function(response) {
       
            if(response.status){
                console.log(response);
                $('#vehiculo-id').val(response.vehiculo.id);
                $('#marca-id').val(response.vehiculo.marca.id);
                $('#upd-placa').val(response.vehiculo.placa);
                $('#upd-marca').val(response.vehiculo.marca.nombre);
                $('#upd-modelo').val(response.vehiculo.modelo);
                $('#upd-km').val(response.vehiculo.kilometraje);
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
    tabla = $('#tabla-vehiculo').DataTable({
        "lengthMenu": [ 5, 10, 25, 75, 100],//mostramos el menú de registros a revisar
        "responsive": true, "lengthChange": false, "autoWidth": false,
        "aProcessing": true,//Activamos el procesamiento del datatables
        "aServerSide": true,//Paginación y filtrado realizados por el servidor
        "ajax":
            {
                url:  urlServidor + 'vehiculo/datatable',
                type : "get",
                dataType : "json",						
                error: function(e){
                    console.log(e.responseText);	
                }
            },
        destroy: true,
        "iDisplayLength": 5,//Paginación
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
