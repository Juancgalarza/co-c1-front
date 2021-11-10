/* $(function(){ */

    _init();

    function _init(){
        listar_ordenes_pendiente(1,1);
        listar_ordenes_proceso(1,2);
        listar_ordenes_terminados(1,3);
        filtrar_lista_ordenes_pendiente();
        filtrar_lista_ordenes_proceso();
        filtrar_lista_ordenes_terminados();
    }

    function listar_ordenes_pendiente(op,estado){        
        $.ajax({
            // la URL para la petición
            url : urlServidor + 'orden/visualizar/' + op + '/' + estado,
            // especifica si será una petición POST o GET
            type : 'GET',
            // el tipo de información que se espera de respuesta
            dataType : 'json',
            success : function(response) {
                let option = '';
                let b = '';
                
                if(response.status){
                    response.ordenes.forEach(data => {
                        data.servicios.forEach(e =>{
                            b +=`
                                
                                ${e.servicio} - $ ${e.precio} <br>  
                            `;

                        });
                    });
                    $('#servicio-pendiente').html(b);        
                    response.ordenes.forEach(element => { 
                                              
                        option +=`<div class="col-4">
                        <div class="card mb-2 border-danger">
                        <h4 style="color:white";
                            class="card-header bg-danger d-flex justify-content-between">
                            <i class="fa fa-file-text"></i>
                            Código: <b>${element.orden.codigo}</b>
                        </h4>
                        <div class="card-body">
                            <div class="row">
                                <div
                                    class="col-12 d-flex justify-content-between">
                                    <label class="text-dark">
                                        <h5>
                                            <i
                                                class="fa fa-user-circle"></i>
                                            Cliente:
                                        </h5>
                                    </label> <span>${element.orden.cliente.persona.nombres + ' ' +element.orden.cliente.persona.apellidos} </span>
                                </div>
                                <div
                                    class="col-12 d-flex justify-content-between">
                                    <label class="text-dark">
                                        <h5>
                                            <i class="fa fa-car"></i>
                                            Vehículo:
                                        </h5>
                                    </label> <span>${element.orden.vehiculo.placa}</span>
                                </div>
                                <div
                                    class="col-12 d-flex justify-content-between">
                                    <label class="text-dark">
                                        <h5>
                                            <i class="fa fa-id-badge"></i>
                                            Mecánico:
                                        </h5>
                                    </label> <span>${element.orden.mecanico.persona.nombres + ' ' +element.orden.mecanico.persona.apellidos}</span>
                                </div>
                                <div
                                    class="col-12 d-flex justify-content-between">
                                    <label class="text-dark">
                                        <h5>
                                            <i class="fa fa-money"></i>
                                            <b>Total del Servicio: </b>
                                        </h5>
                                    </label> <span>$ ${element.orden.total}</span>
                                </div>
                                <div
                                    class="col-12 d-flex justify-content-between">
                                    <label class="text-dark">
                                        <h5>
                                            <i class="fa fa-calendar"></i>
                                            Fecha:
                                        </h5>
                                    </label> <span>${element.orden.fecha}</span>
                                </div>
                            </div>
                        </div>
                     </div>
                    </div>` 
                    
                    }); 
                    $('#orden-pendiente').html(option);
                }else{
                    option +=`<div class="col-12">
                    <div class="bs-component">
                      <div class="alert alert-dismissible alert-danger">
                        <strong>No se encuentran Ordenes Pendientes</strong> 
                      </div>
                    </div>
                  </div>`
                    $('#orden-pendiente').html(option);
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

    function listar_ordenes_proceso(op,estado){        
        $.ajax({
            // la URL para la petición
            url : urlServidor + 'orden/visualizar/' + op + '/' + estado,
            // especifica si será una petición POST o GET
            type : 'GET',
            // el tipo de información que se espera de respuesta
            dataType : 'json',
            success : function(response) {
                let option = '';
                let b = '';
                
                if(response.status){
                    response.ordenes.forEach(data => {
                        data.servicios.forEach(e =>{
                            b +=`
                                
                                ${e.servicio} - $ ${e.precio} <br>  
                            `;

                        });
                    });
                    $('#servicio-en-proceso').html(b);        
                    response.ordenes.forEach(element => { 

                        option +=`<div class="col-4">
                        <div class="card mb-2 border-warning">
                        <h4 style="color:white";
                            class="card-header bg-warning d-flex justify-content-between">
                            <i class="fa fa-file-text"></i>
                            Código: <b>${element.orden.codigo}</b>
                        </h4>
                        <div class="card-body">
                            <div class="row">
                                <div
                                    class="col-12 d-flex justify-content-between">
                                    <label class="text-dark">
                                        <h5>
                                            <i
                                                class="fa fa-user-circle"></i>
                                            Cliente:
                                        </h5>
                                    </label> <span>${element.orden.cliente.persona.nombres + ' ' +element.orden.cliente.persona.apellidos} </span>
                                </div>
                                <div
                                    class="col-12 d-flex justify-content-between">
                                    <label class="text-dark">
                                        <h5>
                                            <i class="fa fa-car"></i>
                                            Vehículo:
                                        </h5>
                                    </label> <span>${element.orden.vehiculo.placa}</span>
                                </div>
                                <div
                                    class="col-12 d-flex justify-content-between">
                                    <label class="text-dark">
                                        <h5>
                                            <i class="fa fa-id-badge"></i>
                                            Mecánico:
                                        </h5>
                                    </label> <span>${element.orden.mecanico.persona.nombres + ' ' +element.orden.mecanico.persona.apellidos}</span>
                                </div>
                                <div
                                    class="col-12 d-flex justify-content-between">
                                    <label class="text-dark">
                                        <h5>
                                            <i class="fa fa-money"></i>
                                            <b>Total del Servicio: </b>
                                        </h5>
                                    </label> <span>$ ${element.orden.total}</span>
                                </div>
                                <div
                                    class="col-12 d-flex justify-content-between">
                                    <label class="text-dark">
                                        <h5>
                                            <i class="fa fa-calendar"></i>
                                            Fecha:
                                        </h5>
                                    </label> <span>${element.orden.fecha}</span>
                                </div>
                            </div>
                        </div>
                     </div>
                    </div>` 
                    
                    }); 
                    $('#orden-en-proceso').html(option);
                }else{
                    option +=`<div class="col-12">
                    <div class="bs-component">
                      <div class="alert alert-dismissible alert-danger">
                        <strong>No se encuentran Ordenes En Proceso</strong> 
                      </div>
                    </div>
                  </div>`
                    $('#orden-en-proceso').html(option);
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

    function listar_ordenes_terminados(op,estado){        
        $.ajax({
            // la URL para la petición
            url : urlServidor + 'orden/visualizar/' + op + '/' + estado,
            // especifica si será una petición POST o GET
            type : 'GET',
            // el tipo de información que se espera de respuesta
            dataType : 'json',
            success : function(response) {
                console.log(response);
                let option = '';
                let b = '';
                
                if(response.status){
                    response.ordenes.forEach(data => {
                        data.servicios.forEach(e =>{
                            b +=`
                                
                                ${e.servicio} - $ ${e.precio} <br>  
                            `;

                        });
                    });
                    $('#servicio-terminado').html(b);        
                    response.ordenes.forEach(element => { 
                                              
                        option +=`<div class="col-4">
                        <div class="card mb-2 border-success">
                        <h4 style="color:white";
                            class="card-header bg-success d-flex justify-content-between">
                            <i class="fa fa-file-text"></i>
                            Código: <b>${element.orden.codigo}</b>
                        </h4>
                        <div class="card-body">
                            <div class="row">
                                <div
                                    class="col-12 d-flex justify-content-between">
                                    <label class="text-dark">
                                        <h5>
                                            <i
                                                class="fa fa-user-circle"></i>
                                            Cliente:
                                        </h5>
                                    </label> <span>${element.orden.cliente.persona.nombres + ' ' +element.orden.cliente.persona.apellidos} </span>
                                </div>
                                <div
                                    class="col-12 d-flex justify-content-between">
                                    <label class="text-dark">
                                        <h5>
                                            <i class="fa fa-car"></i>
                                            Vehículo:
                                        </h5>
                                    </label> <span>${element.orden.vehiculo.placa}</span>
                                </div>
                                <div
                                    class="col-12 d-flex justify-content-between">
                                    <label class="text-dark">
                                        <h5>
                                            <i class="fa fa-id-badge"></i>
                                            Mecánico:
                                        </h5>
                                    </label> <span>${element.orden.mecanico.persona.nombres + ' ' +element.orden.mecanico.persona.apellidos}</span>
                                </div>
                                <div
                                    class="col-12  d-flex justify-content-between">
                                    <label class="text-dark">
                                        <h5>
                                            <i class="fa fa-money"></i>
                                            <b>Total: </b>
                                        </h5>
                                    </label> <span>$ ${element.orden.total}</span>
                                </div>
                                <div
                                    class="col-12 d-flex justify-content-between">
                                    <label class="text-dark">
                                        <h5>
                                            <i class="fa fa-calendar"></i>
                                            Fecha:
                                        </h5>
                                    </label> <span>${element.orden.fecha}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>` 
                    }); 
                    $('#orden-terminado').html(option);
                }else{
                    option +=`<div class="col-12">
                    <div class="bs-component">
                      <div class="alert alert-dismissible alert-danger">
                        <strong>No se encuentran Ordenes Terminadas</strong> 
                      </div>
                    </div>
                  </div>`
                    $('#orden-terminado').html(option);
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

    function filtrar_lista_ordenes_pendiente(){
        $('#orden-filtrar-pendientes').change(function(){
            let opcion = $('#orden-filtrar-pendientes option:selected').val();
            listar_ordenes_pendiente(opcion,1);
        });
    }

    function filtrar_lista_ordenes_proceso(){
        $('#orden-filtrar-en-proceso').change(function(){
            let opcion = $('#orden-filtrar-en-proceso option:selected').val();
            listar_ordenes_proceso(opcion,2);
        });
    }

    function filtrar_lista_ordenes_terminados(){
        $('#orden-filtrar-terminado').change(function(){
            let opcion = $('#orden-filtrar-terminado option:selected').val();
            listar_ordenes_terminados(opcion,3);
        });
    }

/* }); */

function cambiar_estado(id,estado_id,estado_mecanico){

    $.ajax({
        // la URL para la petición
        url : urlServidor + 'orden/actualizarOrden/' + id + '/' + estado_id + '/' + estado_mecanico,
        // especifica si será una petición POST o GET
        type : 'GET',
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
                listar_ordenes_pendiente(1,1);
                listar_ordenes_proceso(1,2);
                listar_ordenes_terminados(1,3);
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
