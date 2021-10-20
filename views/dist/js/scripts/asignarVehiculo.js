/* $(function(){ */
    _init();

    function _init(){
        cargarClientes();
        cargarVehiculosDisponibles('S');
        agregarClienteVehiculo();
        buscarCliente();
        buscarVehiculo();
        cargarClientesVehiculos();
    }

    function cargarClientes(){
        $.ajax({
            // la URL para la petición
            url : urlServidor + 'cliente/listar',
            // especifica si será una petición POST o GET
            type : 'GET',
            // el tipo de información que se espera de respuesta
            dataType : 'json',
            success : function(response) {
                if(response){
                    let tr = '';
                    let i = 1;
                    response.forEach(element => {
                        tr += `<tr id="fila-cliente-${element.cliente.id}" class="table-warning">
                            <td>${i}</td>
                            <td style="display: none">${element.cliente.id}</td>
                            <td>${element.cliente.persona.cedula}</td>
                            <td>${element.cliente.persona.nombres}</td>
                            <td>${element.cliente.persona.apellidos}</td>
                            <td>
                                <div class="div text-center">
                                    <button data-dismiss="modal" class="btn btn-primary btn-sm" onclick="seleccionar_cliente(${element.cliente.id})">
                                        <i class="fa fa-check"></i>
                                    </button>
                                </div>
                            </td>
                        </tr>`;
                      i++;
                    });
                    $('#cliente-body').html(tr);
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

    function cargarVehiculosDisponibles(disponible){
        $.ajax({
            // la URL para la petición
            url : urlServidor + 'vehiculo/disponible/' + disponible,
            // especifica si será una petición POST o GET
            type : 'GET',
            // el tipo de información que se espera de respuesta
            dataType : 'json',
            success : function(response) {
                if(response.status){
                    let tr = '';
                    let i = 1;
                    response.vehiculos.forEach(element => {
                        tr += `<tr id="fila-vehiculo-${element.id}" class="table-success">
                            <td>${i}</td>
                            <td style="display: none">${element.id}</td>
                            <td>${element.placa}</td>
                            <td>${element.marca.nombre}</td>
                            <td>${element.modelo}</td>
                            <td>${element.kilometraje}</td>
                            <td>
                                <div class="div text-center">
                                    <button data-dismiss="modal" class="btn btn-primary btn-sm" onclick="seleccionar_vehiculo(${element.id})">
                                        <i class="fa fa-check"></i>
                                    </button>
                                </div>
                            </td>
                        </tr>`;
                      i++;
                    });
                    $('#vehiculo-body').html(tr);
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

    function agregarClienteVehiculo(){
        $('#btn-asignar').click(function(){
            let cliente_id = $('#cliente-id').val();
            let vehiculo_id = $('#vehiculo-id').val();
    
            if(cliente_id == '0' || cliente_id == 0){                           
                    Swal.fire(
                        'Vehículo',
                        'Debe seleccionar un cliente',
                        'warning'
                    ) 
            }else
            if(vehiculo_id == '0' || vehiculo_id == 0){                           
                Swal.fire(
                    'Vehículo',
                    'Debe seleccionar un vehículo',
                    'warning'
                ) 
            }else
            {
                let json = {
                    datos: {
                        cliente_id,
                        vehiculo_id
                    }
                };
                $.ajax({
                    // la URL para la petición
                    url : urlServidor + 'vehiculo/guardarClienteVehiculo',
                    data : "data=" + JSON.stringify(json),
                    // especifica si será una petición POST o GET
                    type : 'POST',
                    // el tipo de información que se espera de respuesta
                    dataType : 'json',
                    success : function(response) {
        
                        if(response.status){
                            Swal.fire(
                                'Vehículo!',
                                response.mensaje,
                                'success'
                            );
                            cargarVehiculosDisponibles('S');
                            cargarClientesVehiculos();
                            $('#cliente-cargar').text('------------------');
                            $('#vehiculo-cargar').text('------------------');
                        }else{
                            Swal.fire({
                                title: 'Error!',
                                text: response.mensaje,
                                icon: 'error',
                                confirmButtonText: 'Ok'
                              })
                        }
                        console.log(response);
                    },
                    error : function(jqXHR, status, error) {
                        console.log('Disculpe, existió un problema');
                    },
                    complete : function(jqXHR, status) {
                        // console.log('Petición realizada');
                    }
                });
            }
        });
    }

    function buscarCliente(){
        $('#buscar-cli').keyup(function(){
            let texto = $('#buscar-cli').val();
            $.ajax({
                // la URL para la petición
                url : urlServidor + 'cliente/buscar/'+ texto,
                // especifica si será una petición POST o GET
                type : 'GET',
                // el tipo de información que se espera de respuesta
                dataType : 'json',
                success : function(response) {
                   console.log(response);
                   if(response.status){
                        let tr = '';
                        let i = 1;
                        response.clientes.forEach(element => {
                            tr += `<tr id="fila-cliente-${element.id}" class="table-warning">
                                <td>${i}</td>
                                <td style="display: none">${element.id}</td>
                                <td>${element.cedula}</td>
                                <td>${element.nombres}</td>
                                <td>${element.apellidos}</td>
                                <td>
                                    <div class="div">
                                        <button data-dismiss="modal" class="btn btn-primary btn-sm" onclick="seleccionar_cliente(${element.id})">
                                            <i class="fa fa-check"></i>
                                        </button>
                                    </div>
                                </td>
                            </tr>`;
                          i++;
                        });
                        $('#cliente-body').html(tr);
                   }else{
                    $('#cliente-body').html('No hay información disponible');
                   }
                },
                error : function(jqXHR, status, error) {
                    console.log('Disculpe, existió un problema');
                },
                complete : function(jqXHR, status) {
                    // console.log('Petición realizada');
                }
            });
        });
    }

    function buscarVehiculo(){
        $('#buscar-vehiculo').keyup(function(){
            let texto = $('#buscar-vehiculo').val();
            $.ajax({
                // la URL para la petición
                url : urlServidor + 'vehiculo/buscar/'+ texto,
                // especifica si será una petición POST o GET
                type : 'GET',
                // el tipo de información que se espera de respuesta
                dataType : 'json',
                success : function(response) {
                   console.log(response);
                   if(response.status){
                        let tr = '';
                        let i = 1;
                        response.vehiculos.forEach(element => {
                            tr += `<tr id="fila-vehiculo-${element.id}" class="table-success">
                                <td>${i}</td>
                                <td style="display: none">${element.id}</td>
                                <td>${element.placa}</td>
                                <td>${element.nombre}</td>
                                <td>${element.modelo}</td>
                                <td>${element.kilometraje}</td>
                                <td>
                                    <div class="div">
                                        <button data-dismiss="modal" class="btn btn-primary btn-sm" onclick="seleccionar_vehiculo(${element.id})">
                                            <i class="fa fa-check"></i>
                                        </button>
                                    </div>
                                </td>
                            </tr>`;
                          i++;
                        });
                        $('#vehiculo-body').html(tr);
                   }else{
                    $('#vehiculo-body').html('No hay información disponible');
                   }
                },
                error : function(jqXHR, status, error) {
                    console.log('Disculpe, existió un problema');
                },
                complete : function(jqXHR, status) {
                    // console.log('Petición realizada');
                }
            });
        });
    }

    function cargarClientesVehiculos(){
        $.ajax({
            // la URL para la petición
            url : urlServidor + 'vehiculo/cliente',
            // especifica si será una petición POST o GET
            type : 'GET',
            // el tipo de información que se espera de respuesta
            dataType : 'json',
            success : function(response) {
                console.log(response);
                if(response){
                    let tr = '';
                    let i = 1;
                    response.datos.forEach(element => {
                        tr += `<tr class="table-info">
                            <td>${i}</td>
                            <td style="display: none">${element.id}</td>
                            <td>${element.cliente.persona.cedula}</td>
                            <td>${element.cliente.persona.nombres} ${element.cliente.persona.apellidos}</td>
                            <td>${element.vehiculo.placa}</td>
                            <td>${element.vehiculo.marca.nombre}</td>
                            <td>${element.vehiculo.modelo}</td>
                            <td>${element.vehiculo.kilometraje}</td>
                            <td>
                                <div class="div text-center">
                                    <button data-dismiss="modal" class="btn btn-danger btn-sm" onclick="eliminar(${element.id})">
                                        <i class="fa fa-trash"></i>
                                    </button>
                                </div>
                            </td>
                        </tr>`;
                      i++;
                    });
                    $('#cliente-vehiculo-body').html(tr);
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
/* }); */

function seleccionar_cliente(id){
    let fila = '#fila-cliente-'+id;
    let f = $(fila)[0].children;
    
    let cedula = f[2].innerText;
    let nombres = f[3].innerText;
    let apellidos = f[4].innerText;

    $('#cliente-id').val(id);
    $('#cliente-cargar').text(cedula + ' - ' + nombres + ' ' + apellidos);
}

function seleccionar_vehiculo(id){
    let fila = '#fila-vehiculo-'+id;
    let f = $(fila)[0].children;
    console.log(f);

    let placa = f[2].innerText;
    let marca = f[3].innerText;
    let modelo = f[4].innerText;

    $('#vehiculo-id').val(id);
    $('#vehiculo-cargar').text(placa + ' - ' + marca + ' - ' + modelo);
}

function eliminar(id){    
    let cliente_id = $('#cliente-id').val();
    let vehiculo_id = $('#vehiculo-id').val();
    Swal.fire({
        title: '¿Estás seguro de eliminar el cliente con su vehículo',
        text: "No se podra recuperar el registro",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#004a43',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí',
        cancelButtonText: 'Cancelar'
      }).then((result) => {
        if (result.isConfirmed) {
            let json = {datos: { id, cliente_id, vehiculo_id }};

            $.ajax({
                // la URL para la petición
                url : urlServidor + 'vehiculo/eliminarClienteVehiculo',
                // especifica si será una petición POST o GET
                type : 'POST',
                // el tipo de información que se espera de respuesta
                data: {data: JSON.stringify(json)},
                dataType : 'json',
                success : function(response) {
                    if(response.status){
                        Swal.fire({
                            title:'Cliente!',
                            text:'Se ha borrado el cliente con su vehículo correctamente',
                            confirmButtonColor: '#004a43',
                        });
                        cargarClientesVehiculos();
                        cargarVehiculosDisponibles('S');
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
