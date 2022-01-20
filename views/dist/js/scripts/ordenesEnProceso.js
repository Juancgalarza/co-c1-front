/* $(function(){
 */
    _init();

    function _init(){
        ordenes_proceso_detalle();
        capturar_datos();
        resetBasic();
    }

    function ordenes_proceso_detalle(){
        let usuario = JSON.parse(localStorage.getItem('sesion'));
        let persona_id = usuario.persona_id;

        $.ajax({
            // la URL para la petición
            url : urlServidor + 'orden/estado/' + persona_id + '/' + 2,
            // especifica si será una petición POST o GET
            type : 'GET',
            // el tipo de información que se espera de respuesta
            dataType : 'json',
            success : function(response) { 
                console.log(response);
                let div = '';
                if(response.length > 0){
                    let label = '';
                    response.forEach(element => {
                        let servicios = element.servicios;

                        servicios.forEach(a => {
                            label += `<label>
                                <i class="fa fa-angle-double-right mr-2"></i>
                                <span> ${a.servicio} </span>
                            </label>`;
                        });
                        let eventoClick = (element.ultimo_progreso.total == 100) ? `onclick="cambiar_estado(${element.orden.id},3,'D')"`: '';
                        let atributoDisabled = (element.ultimo_progreso.total == 100) ? '' : 'disabled';

                        div += `<div class="col-12 col-md-6 col-lg-4">
                        <div class="card shadow">
                            <h4 style="color:white" ; class="card-header bg-warning d-flex justify-content-between">
                                <i class="fa fa-file-text"></i>
                                Código: <b>${element.orden.codigo}</b>
                            </h4>
                            <div class="card-body">
                                <div class="row">
                                    <medium class="ml-2 text-danger title-orden-card"><b>Datos del Cliente</b>
                                    </medium>
                                    <div class="col-12 form-group d-flex justify-content-between"
                                        style="margin-bottom: 0px">
                                        <label>
                                            <i class="fa fa-id-card-o mr-2"></i>
                                            <span>Nombres</span></label>
                                        <span> ${element.orden.cliente.persona.nombres}</span>
                                    </div>
                                    <div class="col-12 form-group d-flex justify-content-between"
                                        style="margin-bottom: 0px">
                                        <label>
                                            <i class="fa fa-address-card mr-2"></i>
                                            <span>Apellidos</span></label>
                                        <span> ${element.orden.cliente.persona.apellidos}</span>
                                    </div>
                                    <medium class="ml-2 text-danger title-orden-card"> <b> Datos del Vehículo</b>
                                    </medium>
                                    <div class="col-12 form-group d-flex justify-content-between"
                                        style="margin-bottom: 0px">
                                        <label>
                                            <i class="fa fa-cc mr-2"></i>
                                            <span>Placa</span></label>
                                        <span> ${element.orden.vehiculo.placa}</span>
                                    </div>
                                    <div class="col-12 form-group d-flex justify-content-between"
                                        style="margin-bottom: 0px">
                                        <label>
                                            <i class="fa fa-trademark mr-2"></i>
                                            <span>Marca</span></label>
                                        <span> ${element.orden.vehiculo.marca.nombre}</span>
                                    </div>
                                    <div class="col-12 form-group d-flex justify-content-between"
                                        style="margin-bottom: 0px">
                                        <label>
                                            <i class="fa fa-medium mr-2"></i>
                                            <span>Modelo</span></label>
                                        <span> ${element.orden.vehiculo.modelo}</span>
                                    </div>
                                    <div class="col-12 form-group d-flex justify-content-between"
                                        style="margin-bottom: 0px">
                                        <label>
                                            <i class="fa fa-tachometer mr-2"></i>
                                            <span>Kilometraje</span></label>
                                        <span> ${element.orden.vehiculo.kilometraje}</span>
                                    </div>
                                    <medium class="ml-2 text-danger title-orden-card"><b>Servicios</b> </medium>
                                    <div class="col-12 form-group d-flex justify-content-between flex-column" style="margin-bottom: 0px">
                                        ${label}
                                    </div>
                                    <medium class="ml-2 text-danger title-orden-card"><b>Total del Servicio</b> </medium>
                                    <div class="col-12 form-group d-flex justify-content-between" style="margin-bottom: 0px">
                                        <label>
                                            <i class="fa fa-money mr-2"></i>
                                            <span>Total:</span></label>
                                        <span> $ ${element.orden.total}</span>
                                    </div>
                                    <medium class="ml-2 text-danger title-orden-card"><b>Fecha de la Orden</b> </medium>
                                    <div class="col-12 form-group d-flex justify-content-between" style="margin-bottom: 0px">
                                        <label>
                                            <i class="fa fa-calendar mr-2"></i>
                                            <span>Fecha:</span></label>
                                        <span> ${element.orden.fecha}</span>
                                    </div>
                                </div>
                                <hr class="bg-dark">
                                <div class="row">
                                    <div class="col-12 text-center">
                                        <button class="btn btn-warning" onclick=agregar_progreso(${element.orden.id},"${element.orden.codigo}","${element.orden.vehiculo.placa}")><i class="fa fa-cogs mr-2"></i>Progreso</button>
                                        <button class="btn btn-success" ${atributoDisabled} ${eventoClick}><i class="fa fa-check mr-2"></i>Terminado</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>`;
                    label = '';
                    });
                }else{
                    div = `<div class="col-12">
                    <div class="bs-component">
                      <div class="alert alert-dismissible alert-danger">
                        <strong>No se encuentran Ordenes En Proceso</strong> 
                      </div>
                    </div>
                  </div>`;
                }          
                $('#orden-en-proceso').html(div);
            },
            error : function(jqXHR, status, error) {
                console.log('Disculpe, existió un problema');
            },
            complete : function(jqXHR, status) {
                // console.log('Petición realizada');
            }
        });
    }

    function agregar_progreso(id,codigo,placa){
        cargar_progreso(id);
        $('#orden-id').val(id);
        $('#orden-placa').val(placa);
        $('#orden-codigo').val(codigo);
        $('#modal-progreso').modal('show');
    }

    function cargar_progreso(id){
        $.ajax({
            // la URL para la petición
            url : urlServidor + 'progreso/listar/' + id,
            // especifica si será una petición POST o GET
            type : 'GET',
            // el tipo de información que se espera de respuesta
            dataType : 'json',
            success : function(response) { 
                console.log(response);
                let tr = '';
                let i = 1;
                if(response.status){
                    response.progreso.forEach(element => {
                        let color = '';

                        if(element.total == 0){
                            color = 'danger';
                        }else
                        if(element.total > 0 && element.total <= 10){
                            color = 'warning';
                        }else
                        if(element.total > 10 && element.total <= 99){
                            color = 'info';
                        }else
                        {
                            color = 'success';
                        }

                        tr += `<tr>
                            <td>${i}</td>
                            <td>${element.detalle}</td>
                            <td class="text-success">
                                ${element.total}
                                <div class="progress mb-2">
                                    <div class="progress-bar progress-bar-striped bg-${color}" role="progressbar" style="width: ${element.total}%" aria-valuenow="${element.total}" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </td>
                        </tr>`;
                        i++;
                    });
                    $('#body-progreso').html(tr);
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

    function resetBasic(){
        $('#orden-act').val('');
        $('#orden-progreso').val('');
    }

    function capturar_datos(){
        $('#form-progreso').submit(e => {
            e.preventDefault();
            let orden_id = $('#orden-id').val();
            let detalle = $('#orden-act').val();
            let progreso = $('#orden-progreso').val();
    
            let json = {
                progreso: {
                    orden_id: orden_id,
                    detalle: detalle,
                    progreso: parseInt(progreso),
                }
            }

            if(detalle.length == '0'){
                  Swal.fire({
                    title: 'Orden',
                    text: 'Ingrese el detalle del progreso',
                    icon: 'warning',
                    confirmButtonText: 'Ok',
                    confirmButtonColor: '#004a43'
                });
            }else
            if(progreso == '0'){
                Swal.fire({
                    title: 'Orden',
                    text:  'Debe ingresar un progreso mayor a 0',
                    icon: 'warning',
                    confirmButtonText: 'Ok',
                    confirmButtonColor: '#004a43'
                });
            }else
            if(progreso.length == '0'){
                Swal.fire({
                    title: 'Orden',
                    text:  'Ingrese un progreso a la actividad',
                    icon: 'warning',
                    confirmButtonText: 'Ok',
                    confirmButtonColor: '#004a43'
                });
            }else{
                $.ajax({
                    // la URL para la petición
                    url : urlServidor + 'progreso/guardarmodal',
                    // especifica si será una petición POST o GET
                    type : 'POST',
                    data: 'data=' + JSON.stringify(json),
                    // el tipo de información que se espera de respuesta
                    dataType : 'json',
                    success : function(response) { 
                        console.log(response);
                        if(response.status){
                              Swal.fire({
                                title: 'Orden',
                                text:  response.mensaje,
                                icon: 'success',
                                confirmButtonText: 'Ok',
                                confirmButtonColor: '#004a43'
                            });
                              resetBasic();
                              cargar_progreso(orden_id);
                              ordenes_proceso_detalle();
                        }else{
                            Swal.fire({
                                title: 'Orden',
                                text:  response.mensaje,
                                icon: 'error',
                                confirmButtonText: 'Ok',
                                confirmButtonColor: '#004a43'
                            });
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
                    text:  response.mensaje,
                    icon: 'success',
                    confirmButtonText: 'Ok',
                    confirmButtonColor: '#004a43'
                });
                  ordenes_proceso_detalle();
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

