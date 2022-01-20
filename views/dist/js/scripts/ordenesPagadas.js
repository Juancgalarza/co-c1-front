$(function(){

    _init();

    function _init(){
        ordenes_pagadas_detalle();
    }

    function ordenes_pagadas_detalle(){
        let usuario = JSON.parse(localStorage.getItem('sesion'));
        let persona_id = usuario.persona_id;

        $.ajax({
            // la URL para la petición
            url : urlServidor + 'orden/estadoPagada/' + persona_id + '/' + 3,
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
                       
                        servicios.forEach(s => {
                            label += `<label>
                                <i class="fa fa-angle-double-right mr-2"></i>
                                <span> ${s.servicio} </span>
                            </label>`;
                        });

                        div += `<div class="col-12 col-md-6 col-lg-4">
                        <div class="card shadow">
                            <h4 style="color:white" ; class="card-header bg-info d-flex justify-content-between">
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
                                    <div class="col-12 form-group d-flex justify-content-between flex-column" style="margin-bottom: 0px" id="servicio-det">
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
                            </div>
                        </div>
                    </div>`;
                    label = '';
                    });
                }else{
                    div = `<div class="col-12">
                    <div class="bs-component">
                      <div class="alert alert-dismissible alert-danger">
                        <strong>No se encuentran Ordenes Pagadas</strong> 
                      </div>
                    </div>
                  </div>`;
                }      
                $('#orden-pagada').html(div);
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