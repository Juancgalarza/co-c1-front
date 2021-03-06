/* $(function(){ */

    _init();

    function _init(){
        ordenes_terminado_detalle();
        imprimir_comprobante();
    }

    function ordenes_terminado_detalle(){
        let usuario = JSON.parse(localStorage.getItem('sesion'));
        let persona_id = usuario.persona_id;

        $.ajax({
            // la URL para la petición
            url : urlServidor + 'orden/estado/' + persona_id + '/' + 3,
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
                            <h4 style="color:white" ; class="card-header bg-success d-flex justify-content-between">
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
                                <div class="row">
                                    <div class="col-12 text-center">
                                        <a class="text-success" style="cursor: pointer" onclick='ver_comprobante(${element.orden.id})'><i class="fas fa-tools mr-2"></i>Ver Comprobante</a>
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
                        <strong>No se encuentran Ordenes Terminadas</strong> 
                      </div>
                    </div>
                  </div>`;
                }      
                $('#orden-terminada').html(div);
            },
            error : function(jqXHR, status, error) {
                console.log('Disculpe, existió un problema');
            },
            complete : function(jqXHR, status) {
                // console.log('Petición realizada');
            }
        });
    }

    function imprimir_comprobante(){
        $('#btn-imprimir').click(function(){
            let element = document.getElementById('modal-body-comprobante');
            let opt = {
            margin:       1,
            filename:     'Comprobante.pdf',
            image:        { type: 'jpeg', quality: 2 },
            html2canvas:  { scale: 1 },
            jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
            };

            // New Promise-based usage:
            html2pdf().set(opt).from(element).save();
        });
    }

/* }); */

function ver_comprobante(id){
    $('#modal-comprobante').modal('show');
    $.ajax({
        // la URL para la petición
        url : urlServidor + 'orden/listar/' + id ,
        // especifica si será una petición POST o GET
        type : 'GET',
        // el tipo de información que se espera de respuesta
        dataType : 'json',
        success : function(response) { 
           console.log(response);
           if(response.status){
            $('#proceso-fecha-orden').text(response.orden.fecha);
            $('#proceso-id-orden').text(response.orden.id);
            $('#proceso-kilometro-orden').text(response.orden.vehiculo.kilometraje);
            $('#proceso-placa-orden').text(response.orden.vehiculo.placa);
            $('#proceso-marca-orden').text(response.orden.vehiculo.marca.nombre);
            $('#proceso-modelo-orden').text(response.orden.vehiculo.modelo);
            $('#proceso-cedula-cliente-orden').text(response.orden.cliente.persona.cedula);
            $('#proceso-nombre-cliente-orden').text(response.orden.cliente.persona.nombres + ' ' + response.orden.cliente.persona.apellidos);
            $('#proceso-telefono-cliente-orden').text(response.orden.cliente.persona.telefono);
           
            let tr = '';
            let i = 0;
            let serviciosc = response.servicio;

            serviciosc.forEach((element, i) => {
                tr += `<tr>
                <td>${i+1} </td>
                <td>${element.servicio}</td>
                <td>${element.precio}</td>
                <td>${element.precio}</td>
            </tr>`;
            });

            $('#body_detalle_comprobante').html(tr);
            total_comprobante();

           }
        },
        error : function(jqXHR, status, error) {
            console.log('Disculpe, existió un problema');
        },
        complete : function(jqXHR, status) {
            // console.log('Petición realizada');
        }
    });

    $('#btn-comprobante').click(function(){
        let orden_id = id;
        let subtotal = $('#comprobante_subtotal').text();
        let iva =  $('#comprobante_iva').text();
        let total = $('#comprobante_total').text(); 

        let json = {
            comprobantes: {
                orden_id: orden_id,
                total: total,
                subtotal: subtotal,
                iva: iva
            }
        };

        $.ajax({
            // la URL para la petición
            url : urlServidor + 'comprobantes/guardar',
            // especifica si será una petición POST o GET
            type : 'POST',
            data: 'data=' + JSON.stringify(json),
            // el tipo de información que se espera de respuesta
            dataType : 'json',
            success : function(response) {
               if(response.status){
                   Swal.fire({
                       title: 'Comprobante de Orden!',
                       text: response.mensaje,
                       icon: 'success',
                       confirmButtonText: 'Ok',
                       confirmButtonColor: '#004a43'
                   });
                   $('#modal-comprobante').modal('hide');
                   ordenes_terminado_detalle();
               }else{
                   Swal.fire({
                       title: 'Comprobantes',
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

    });
}

function total_comprobante(){
    let tr = $('#body_detalle_comprobante tr');

    let subtotal = 0;
    let total = 0;

    for (let i = 0; i < tr.length; i++) {
        let hijos = tr[i].children;
        subtotal += parseFloat(hijos[3].innerText); 
    }

    let iva = Number(subtotal.toFixed(2)) * 0.12;
    
     total = Number(subtotal) + Number(iva.toFixed(2));
    
    $('#comprobante_subtotal').text(subtotal.toFixed(2));
    $('#comprobante_iva').text(iva.toFixed(2));
    $('#comprobante_total').text(total.toFixed(2));  
}


