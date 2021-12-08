/* $(function(){ */
    _init();

    function _init(){
        cargarServicio();
        buscarServicio();
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

/* }); */

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
                $('#tabla-cotizar').removeClass('d-none');
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
    total_servicio();
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

    $('#total-servicio').text(total);
}
