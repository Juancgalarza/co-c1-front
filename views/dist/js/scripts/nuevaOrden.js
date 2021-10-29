/* $(function(){ */
    _init();

    function _init(){
        cargarClientes();
        cargarVehiculo();
        buscarCliente();
        cargarMecanico();
        buscarMecanico();
        cargarServicio();
        buscarServicio();
        guardarOrden();
        //iniciar_tabla();
        //actualizar_marca();
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
                        tr += `<tr id="fila-cliente-${element.cliente.id}">
                            <td>${i}</td>
                            <td style="display: none">${element.cliente.id}</td>
                            <td>${element.cliente.persona.cedula}</td>
                            <td>${element.cliente.persona.nombres}</td>
                            <td>${element.cliente.persona.apellidos}</td>
                            <td>${element.cliente.persona.telefono}</td>
                            <td>${element.cliente.persona.correo}</td>
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

    function cargarVehiculo(){
        $('#select-placa').change(function(){
            let id =  $('#select-placa option:selected').val();
            let placa = $('#select-placa option:selected').text();
            $.ajax({
                // la URL para la petición
                url : urlServidor + 'vehiculo/buscarxplaca/'+id,
                // especifica si será una petición POST o GET
                type : 'GET',
                // el tipo de información que se espera de respuesta
                dataType : 'json',
                success : function(response) {
                    if(response.status){
                        let id = response.vehiculo.id;
                        let marca = response.vehiculo.marca.nombre;
                        let modelo = response.vehiculo.modelo;
                        let kilometraje = response.vehiculo.kilometraje;

                        $('#form-vehiculo-id').val(id);
                        $('#vehiculo-marca').val(marca);
                        $('#vehiculo-modelo').val(modelo);
                        $('#vehiculo-km').val(kilometraje);
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
                            tr += `<tr id="fila-cliente-${element.id}">
                                <td>${i}</td>
                                <td style="display: none">${element.id}</td>
                                <td>${element.cedula}</td>
                                <td>${element.nombres}</td>
                                <td>${element.apellidos}</td>
                                <td>${element.telefono}</td>
                                <td>${element.correo}</td>
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

    function cargarMecanico(){
        $.ajax({
            // la URL para la petición
            url : urlServidor + 'mecanico/listar',
            // especifica si será una petición POST o GET
            type : 'GET',
            // el tipo de información que se espera de respuesta
            dataType : 'json',
            success : function(response) {
                if(response.status){
                    let tr = '';
                    let i = 1;
                    
                    response.mecanico.forEach(element => {
                        let d = (element.status == 'D') ? 'Sí' : 'No';
                        let btn = (element.status == 'D') ? '' : 'disabled';
                        let bg = (element.status == 'D') ? '' : 'style="background-color: #ccc"';

                        tr += `<tr ${bg} id="fila-mecanico-${element.id}">
                            <td>${i}</td>
                            <td style="display: none">${element.id}</td>
                            <td>${element.persona.cedula}</td>mecanico
                            <td>${element.persona.nombres}</td>
                            <td>${element.persona.apellidos}</td>
                            <td style="display: none">${element.persona.telefono}</td>
                            <td style="display: none">${element.persona.correo}</td>
                            <td>${d}</td>
                            <td style="display: none">${element.persona.usuario[0].img}</td>
                            <td>
                                <div class="div">
                                    <button ${btn} data-dismiss="modal" class="btn btn-primary btn-sm" onclick="seleccionar_mecanico(${element.id})">
                                        <i class="fa fa-check"></i>
                                    </button>
                                </div>
                            </td>
                        </tr>`;
                      i++;
                    });
                    $('#mecanico-body').html(tr);
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

    function buscarMecanico(){
        $('#buscar-mecanico').keyup(function(){
            let texto = $('#buscar-mecanico').val();
            $.ajax({
                // la URL para la petición
                url : urlServidor + 'mecanico/buscarMecanico/'+ texto,
                // especifica si será una petición POST o GET
                type : 'GET',
                // el tipo de información que se espera de respuesta
                dataType : 'json',
                success : function(response) {
                   console.log(response);
                   if(response.status){
                        let tr = '';
                        let i = 1;
                        
                        response.mecanicos.forEach(element => {
                            let d = (element.status == 'D') ? 'Sí' : 'No';
                            let btn = (element.status == 'D') ? '' : 'disabled';
                            let bg = (element.status == 'D') ? '' : 'style="background-color: #ccc"';

                            tr += `<tr ${bg} id="fila-mecanico-${element.id}">
                                <td>${i}</td>
                                <td style="display: none">${element.id}</td>
                                <td>${element.cedula}</td>mecanico
                                <td>${element.nombres}</td>
                                <td>${element.apellidos}</td>
                                <td style="display: none">${element.telefono}</td>
                                <td style="display: none">${element.correo}</td>
                                <td>${d}</td>
                                <td style="display: none">${element.img}</td>
                                <td>
                                    <div class="div">
                                        <button ${btn} data-dismiss="modal" class="btn btn-primary btn-sm" onclick="seleccionar_mecanico(${element.id})">
                                            <i class="fa fa-check"></i>
                                        </button>
                                    </div>
                                </td>
                            </tr>`;
                        i++;
                        });
                        $('#mecanico-body').html(tr);
                    }else{
                        $('#mecanico-body').html('No hay información disponible');
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

    function cargarServicio(){
        $.ajax({
            // la URL para la petición
            url : urlServidor + 'servicio/listar',
            // especifica si será una petición POST o GET
            type : 'GET',
            // el tipo de información que se espera de respuesta
            dataType : 'json',
            success : function(response) {
                if(response.status){
                    let tr = '';
                    let i = 1;
                    response.servicio.forEach(element => {
                        tr += `<tr id="fila-servicio-${element.id}">
                            <td>${i}</td>
                            <td style="display: none">${element.id}</td>
                            <td>${element.detalle}</td>
                            <td><b style="color: red">$</b> ${element.precio}</td>
                            <td>
                                <div class="div text-center">
                                    <button data-dismiss="modal" class="btn btn-primary btn-sm" onclick="seleccionar_servicio(${element.id})">
                                        <i class="fa fa-check"></i>
                                    </button>
                                </div>
                            </td>
                        </tr>`;
                      i++;
                    });
                    $('#servicio-body').html(tr);
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

    function buscarServicio(){
        $('#buscar-serv').keyup(function(){
            let texto = $('#buscar-serv').val();
            $.ajax({
                // la URL para la petición
                url : urlServidor + 'servicio/buscarServicio/'+ texto,
                // especifica si será una petición POST o GET
                type : 'GET',
                // el tipo de información que se espera de respuesta
                dataType : 'json',
                success : function(response) {
                   console.log(response);
                   if(response.status){
                    let tr = '';
                    let i = 1;
                    response.servicios.forEach(element => {
                            tr += `<tr id="fila-servicio-${element.id}">
                                <td>${i}</td>
                                <td style="display: none">${element.id}</td>
                                <td>${element.detalle}</td>
                                <td><b style="color: red">$</b> ${element.precio}</td>
                                <td>
                                    <div class="div text-center">
                                        <button data-dismiss="modal" class="btn btn-primary btn-sm" onclick="seleccionar_servicio(${element.id})">
                                            <i class="fa fa-check"></i>
                                        </button>
                                    </div>
                                </td>
                            </tr>`;
                        i++;
                        });
                        $('#servicio-body').html(tr);
                    }else{
                        $('#servicio-body').html('No hay información disponible');
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

    function guardarOrden(){
        $('#guardar-orden').click(function(){
            let usuario_id = JSON.parse(localStorage.getItem('sesion')).id;
            let cliente_id = $('#cliente-id').val();
            let vehiculo_id = $('#form-vehiculo-id').val();
            let mecanico_id = $('#form-mecanico-id').val();
            let total = $('#orden-total').text();
            let tr_servicios = $('.tr-servicio');
            let servicio = [];

            let json = {
                orden: {
                    cliente_id,
                    vehiculo_id,
                    usuario_id,
                    mecanico_id,
                    total
                }
            };

            if(validar_orden(json)){
                //console.log(json);
                if(tr_servicios.length > 0){
                    for(let i=0; i<tr_servicios.length; i++){
                        let objeto = {servicio_id: tr_servicios[i].innerText};
                        servicio.push(objeto);
                    }
                    json.ordenservicios = servicio;
                          
                    //console.log(json);
                    ajaxGuardar(json);
                }else{
                      Swal.fire({
                        title: 'Orden',
                        text: 'Debe seleccionar al menos un servicio',
                        icon: 'warning',
                        confirmButtonText: 'Ok',
                        confirmButtonColor: '#004a43'
                    });
                }
            }
        });
    }

    function validar_orden(json){
        let orden = json.orden;
        if(orden.cliente_id.length == 0){
            Swal.fire({
                title: 'Orden',
                text: 'Debe seleccionar un cliente',
                icon: 'warning',
                confirmButtonText: 'Ok',
                confirmButtonColor: '#004a43'
            });
            return false;
        }else
        if(orden.vehiculo_id == 0){
            Swal.fire({
                title: 'Orden',
                text: 'Debe seleccionar un vehículo',
                icon: 'warning',
                confirmButtonText: 'Ok',
                confirmButtonColor: '#004a43'
            });
            return false;
        }else
        if(orden.mecanico_id == 0){
            Swal.fire({
                title: 'Orden',
                text: 'Debe seleccionar un mecánico',
                icon: 'warning',
                confirmButtonText: 'Ok',
                confirmButtonColor: '#004a43'
            });
            return false;
        }
        else{
            return true;
        }
    }

    function ajaxGuardar(json){
        $.ajax({
             // la URL para la petición
             url : urlServidor + 'orden/guardar',
             // especifica si será una petición POST o GET
             type : 'POST',
             data: 'data=' + JSON.stringify(json),
             // el tipo de información que se espera de respuesta
             dataType : 'json',
             success : function(response) {
                if(response.status){
                    Swal.fire({
                        title: 'Orden',
                        text: response.mensaje,
                        icon: 'success',
                        confirmButtonText: 'Ok',
                        confirmButtonColor: '#004a43'
                    });
                    $('#form-cliente-orden')[0].reset();
                    $('#form-nuevo-vehiculo')[0].reset();
                    $('#form-norden-vehiculo')[0].reset();
                    let img = urlServidor + 'resources/usuarios/default.jpg' ;
                    $('#mecanico-img').attr('src',img);
                    $('#items-servicio').html('');
                    $('#orden-total').text('0.00');
                }else{
                    Swal.fire({
                        title: 'Orden',
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

/* }); */

function seleccionar_cliente(id){
    let fila = '#fila-cliente-'+id;
    let f = $(fila)[0].children;
    console.log(f);
    
    let cedula = f[2].innerText;
    let nombres = f[3].innerText;
    let apellidos = f[4].innerText;
    let telefono = f[5].innerText;
    let correo = f[6].innerText;

    $('#cliente-id').val(id);
    $('#cliente-cedula').val(cedula);
    $('#cliente-nombres').val(nombres);
    $('#cliente-apellidos').val(apellidos);
    $('#cliente-telefono').val(telefono);
    $('#cliente-correo').val(correo);

    $.ajax({
        // la URL para la petición
        url : urlServidor + 'vehiculo/buscarClienteVehiculo/'+id,
        // especifica si será una petición POST o GET
        type : 'GET',
        // el tipo de información que se espera de respuesta
        dataType : 'json',
        success : function(response) {
            console.log(response);
            if(response.status){
                let option = '<option value=0>Seleccione una Placa</option>';
                
                response.vehiculos.forEach(element =>{
                    option += `<option value=${element.vehiculo_id}>${element.placa}</option>`;
                });
                //console.log(option);
                $('#select-placa').html(option);
            }else{
                Swal.fire({
                    title: 'Error!',
                    text: 'El cliente no tiene vehículos',
                    icon: 'error',
                    confirmButtonText: 'Ok'
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

function seleccionar_mecanico(id){
    let fila = '#fila-mecanico-'+id;
    let f = $(fila)[0].children;
    
    let nombres = f[3].innerText;
    let apellidos = f[4].innerText;
    let telefono = f[5].innerText;
    let imagen = f[8].innerText;

    let img = (imagen != 'default.jpg') ? urlServidor + 'resources/usuarios/' + imagen : urlServidor + 'resources/usuarios/default.jpg' ;
    
    $('#form-mecanico-id').val(id);
    $('#mecanico-nombres').val(nombres);
    $('#mecanico-apellidos').val(apellidos);
    $('#mecanico-telefono').val(telefono);

    $('#mecanico-img').attr('src',img);
}

function seleccionar_servicio(id){
    let fila = '#fila-servicio-'+id;
    let f = $(fila)[0].children;
    
    let detalle = f[2].innerText;
    let precio = f[3].innerText;

    $.ajax({
        // la URL para la petición
        url : urlServidor + 'servicio/listar/' + id,
        // especifica si será una petición POST o GET
        type : 'GET',
        // el tipo de información que se espera de respuesta
        dataType : 'json',
        success : function(response) {
            console.log(response);
            if(response.status){
                    let tr = `<tr id="fila-servicio-${response.servicio.id}">
                    <td><i class="fa fa-check-square-o"></i></td>
                    <td style="display: none" class="tr-servicio">${response.servicio.id}</td>
                    <td>${response.servicio.detalle}</td>
                    <td class="tr-servicio-precios">${response.servicio.precio}</td>
                    <td>
                        <div>
                            <button class="btn btn-danger"
                                onclick="borrar_servicio(${response.servicio.id})">
                                <i class="fa fa-times"></i>
                            </button>
                        </div>
                    </td>          
                </tr>`;
                $('#items-servicio').append(tr);
                total_servicio();
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

function borrar_servicio(id){
    let id_tr = '#fila-servicio-' + id;

    $(id_tr).remove();
    total_servicio2();
}

function total_servicio(){
    let precios = $('.tr-servicio-precios');
    console.log(precios);
    let total = 0;
    for(let i=0; i<precios.length; i++){
        let p = parseFloat(precios[i].innerText);
        total += p;
    }
    console.log(total);

    $('#orden-total').text(total);
}

function total_servicio2(){
    let precios = $('.tr-servicio-precios');
    let total = 0;
    for(let i=0; i<precios.length; i++){
        let p = parseFloat(precios[i].innerText);
        total += p;
    }

    $('#orden-total').text(total);
}