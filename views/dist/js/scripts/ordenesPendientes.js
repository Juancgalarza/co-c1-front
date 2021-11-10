/* $(function(){ */

    _init();

    function _init(){
        ordenes_pendiente_detalle();
    }

    function ordenes_pendiente_detalle(){
        let usuario = JSON.parse(localStorage.getItem('sesion'));
        let persona_id = usuario.persona_id;
        $.ajax({
            // la URL para la petición
            url : urlServidor + 'orden/estado/' + persona_id + '/' + 1,
            // especifica si será una petición POST o GET
            type : 'GET',
            // el tipo de información que se espera de respuesta
            dataType : 'json',
            success : function(response) { 
                let div = '';  
                console.log(response);
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

                        div += `<div class="col-12 col-md-6 col-lg-4">
                        <div class="card shadow">
                            <h4 style="color:white" ; class="card-header bg-danger d-flex justify-content-between">
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
                                            <span>Nombres:</span></label>
                                        <span> ${element.orden.cliente.persona.nombres}</span>
                                    </div>
                                    <div class="col-12 form-group d-flex justify-content-between"
                                        style="margin-bottom: 0px">
                                        <label>
                                            <i class="fa fa-address-card mr-2"></i>
                                            <span>Apellidos:</span></label>
                                        <span> ${element.orden.cliente.persona.apellidos}</span>
                                    </div>
                                    <medium class="ml-2 text-danger title-orden-card"> <b> Datos del Vehículo</b>
                                    </medium>
                                    <div class="col-12 form-group d-flex justify-content-between"
                                        style="margin-bottom: 0px">
                                        <label>
                                            <i class="fa fa-cc mr-2"></i>
                                            <span>Placa:</span></label>
                                        <span> ${element.orden.vehiculo.placa}</span>
                                    </div>
                                    <div class="col-12 form-group d-flex justify-content-between"
                                        style="margin-bottom: 0px">
                                        <label>
                                            <i class="fa fa-trademark mr-2"></i>
                                            <span>Marca:</span></label>
                                        <span> ${element.orden.vehiculo.marca.nombre}</span>
                                    </div>
                                    <div class="col-12 form-group d-flex justify-content-between"
                                        style="margin-bottom: 0px">
                                        <label>
                                            <i class="fa fa-medium mr-2"></i>
                                            <span>Modelo:</span></label>
                                        <span> ${element.orden.vehiculo.modelo}</span>
                                    </div>
                                    <div class="col-12 form-group d-flex justify-content-between"
                                        style="margin-bottom: 0px">
                                        <label>
                                            <i class="fa fa-tachometer mr-2"></i>
                                            <span>Kilometraje:</span></label>
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
                                        <button class="btn btn-danger" onclick=cambiar_estado(${element.orden.id},2,'O')><i class="fa fa-check mr-2"></i>Aceptar
                                            Orden</button>
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
                        <strong>No se encuentran Ordenes Pendientes</strong> 
                      </div>
                    </div>
                  </div>`;
                }     
                $('#orden-pendiente').html(div);
            },
            error : function(jqXHR, status, error) {
                console.log('Disculpe, existió un problema');
            },
            complete : function(jqXHR, status) {
                // console.log('Petición realizada');
            }
        });
    }
/* });
 */
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
                    title: 'Orden!!',
                    text: response.mensaje,
                    icon: 'success',
                    confirmButtonText: 'Ok',
                    confirmButtonColor: '#004a43'
                });
                  ordenes_pendiente_detalle();

                  if(estado_id == '2'){
                    agregar_actividad(id);
                  }
            }
        },
        error : function(jqXHR, status, error) {
            console.log('Disculpe, existió un problema');
        },
        complete : function(jqXHR, status) {
            // console.log('Petición realizada');
        }
    });

    function agregar_actividad(id){
        let progreso = {
            orden_id: id,
            detalle: 'Orden en Proceso',
            progreso: 10,
            total: 10,
            faltante: 90
        };

        let json = {
            progreso: progreso
        }

        $.ajax({
            // la URL para la petición
            url : urlServidor + 'progreso/guardar',
            data : "data=" + JSON.stringify(json),
            // especifica si será una petición POST o GET
            type : 'POST',
            // el tipo de información que se espera de respuesta
            dataType : 'json',
            success : function(response) { 
                if(response.status){
                   console.log('Actividad Agregada');
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
}
