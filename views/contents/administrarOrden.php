<main class="app-content">
    <div class="app-title">
        <div>
            <h1><i class="fa fa-clipboard"></i> Visualizar Orden</h1>
        </div>
        <ul class="app-breadcrumb breadcrumb">
            <li class="breadcrumb-item"><i class="fa fa-home fa-lg"></i></li>
            <li class="breadcrumb-item">Gestión Orden</li>
            <li class="breadcrumb-item"><a href="#">Visualizar de Orden</a></li>
        </ul>
    </div>

    <div class="row">
        <div class="col-12">
            <div class="tile">
                <div class="row mb-3">
                    <div class="col-12 m-2 p-2">
                        <div class="row">
                            <div class="col-8">
                                <h3>Ordenes <i class="fa fa-file-text"></i></h3>
                            </div>
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="bs-component">
                            <ul class="nav nav-tabs">
                                <li class="nav-item">
                                    <a class="nav-link active" data-toggle="tab" href="#tab_1">Pendiente</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" data-toggle="tab" href="#tab_2">En Proceso</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" data-toggle="tab" href="#tab_3">Terminado</a>
                                </li>
                            </ul>
                            <div class="tab-content" id="myTabContent">
                                <div class="tab-pane fade active show" id="tab_1">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="tile">
                                                <div class="card-body">
                                                    <div class="row d-flex justify-content-end">
                                                        <div class="col-12 col-sm-6 col-md-4">
                                                            <div class="form-group">
                                                                <select id="orden-filtrar-pendientes"
                                                                    class="form-control">
                                                                    <option value="1">Hoy</option>
                                                                    <option value="2">Ayer</option>
                                                                    <option value="3">Últimos 7 días</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="row" id="orden-pendiente">

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="tab_2">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="tile">
                                                <div class="card-body">
                                                    <div class="row d-flex justify-content-end">
                                                        <div class="col-12 col-sm-6 col-md-4">
                                                            <div class="form-group">
                                                                <select id="orden-filtrar-en-proceso"
                                                                    class="form-control">
                                                                    <option value="1">Hoy</option>
                                                                    <option value="2">Ayer</option>
                                                                    <option value="3">Últimos 7 días</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="row" id="orden-en-proceso">

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="tab_3">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="tile">
                                                <div class="card-body">
                                                    <div class="row d-flex justify-content-end">
                                                        <div class="col-12 col-sm-6 col-md-4">
                                                            <div class="form-group">
                                                                <select id="orden-filtrar-terminado"
                                                                    class="form-control">
                                                                    <option value="1">Hoy</option>
                                                                    <option value="2">Ayer</option>
                                                                    <option value="3">Últimos 7 días</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="row" id="orden-terminado">

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Modales -->
    <div class="modal fade" id="modal-orden">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header bg-primary">
                    <h4 class="modal-title" style="color:white;">Visualizar Orden</h4>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="contanier-fluid">
                        <section class="orden-trabajo" id="modal-body-orden">
                            <div class="row d-flex align-items-center sin-margin-y">
                                <div class="col-12 col-sm-6 text-start pl-2 d-flex justify-content-center">
                                    <div class="ml-4">
                                        <img src="<?=BASE?>views/dist/img/logo.jpg" alt="Logo empresa" width="120px">
                                    </div>
                                </div>
                                <div class="col-12 col-sm-6">
                                    <div class="row">
                                        <div class="col-12">
                                            <p class="text-primary mb-0 text-center">
                                                <b>TALLER AUTOMOTRIZ "HRNOS. ORRALLA"</b>
                                            </p>
                                            <p class="text-primary text-center" style="margin-bottom: 5px">
                                                <b>MANTENIMIENTO Y REPARACIÓN DE VEHÍCULO</b>
                                            </p>
                                        </div>

                                        <div class="col-12">
                                            <p class="text-primary text-center" style="margin-bottom: 5px">
                                                <b>
                                                    Teléfono: 0999999999
                                                </b>
                                            </p>
                                        </div>

                                        <div class="col-12">
                                            <p class="text-primary text-center" style="margin-bottom: 5px">
                                                <b>
                                                    La Libertad - Ecuador
                                                </b>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="row d-flex border-top sin-margin-y">
                                <div class="col-12">
                                    <div class="row">
                                        <div class="col-12 sin-padding-y">
                                            <div class="row">
                                                <div class="col-12"><span class="title-orden">Orden de trabajo</span>
                                                </div>
                                            </div>

                                            <div class="row">
                                                <div class="col-12 col-lg-6 pl-3 pr-3">
                                                    <span class="text-primary d-flex">
                                                        <b class="mr-2">Fecha: </b> <b id="proceso-fecha-orden"></b>
                                                    </span>
                                                </div>

                                                <div class="col-12 col-lg-6 pl-3">
                                                    <span class="text-primary d-flex">
                                                        <b class="mr-2">N°: </b> <b id="proceso-id-orden"></b>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="row mt-2">
                                        <div class="col-12 sin-padding-y">
                                            <div class="row">
                                                <div class="col-12"><span class="title-orden">Responsable del
                                                        Vehículo</span>
                                                </div>
                                            </div>

                                            <div class="row">
                                                <div class="col-12 pl-3 pr-3">
                                                    <span class="text-primary d-flex justify-content-between">
                                                        <b>Cédula: </b> <b id="proceso-cedula-cliente-orden"></b>
                                                    </span>
                                                </div>

                                                <div class="col-12 pl-3 pr-3">
                                                    <span class="text-primary d-flex justify-content-between">
                                                        <b>Nombre: </b> <b id="proceso-nombre-cliente-orden"></b>
                                                    </span>
                                                </div>

                                                <div class="col-12 pl-3 pr-3">
                                                    <span class="text-primary d-flex justify-content-between">
                                                        <b>Telefono: </b> <b id="proceso-telefono-cliente-orden"></b>
                                                    </span>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="row d-flex border-top sin-margin-y">
                                <div class="col-6 sin-padding-y border-rigth">
                                    <div class="row">
                                        <div class="col-12"><span class="title-orden">Datos del vehiculo</span></div>
                                    </div>

                                    <div class="row">
                                        <div class="col-12 pl-3 pr-3">
                                            <span class="text-primary d-flex justify-content-between">
                                                <b>Placa: </b> <b id="proceso-placa-orden"></b>
                                            </span>
                                        </div>

                                        <div class="col-12 pl-3 pr-3">
                                            <span class="text-primary d-flex justify-content-between">
                                                <b>Marca: </b> <b id="proceso-marca-orden"></b>
                                            </span>
                                        </div>

                                        <div class="col-12 pl-3 pr-3">
                                            <span class="text-primary d-flex justify-content-between">
                                                <b>Modelo: </b> <b id="proceso-modelo-orden"></b>
                                            </span>
                                        </div>

                                        <div class="col-12 pl-3 pr-3">
                                            <span class="text-primary d-flex justify-content-between">
                                                <b>Kilometro: </b> <b id="proceso-kilometro-orden"></b>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-6 sin-padding-y border-rigth">
                                    <div class="row">
                                        <div class="col-12"><span class="title-orden">Datos del Mecánico</span></div>
                                    </div>

                                    <div class="row">
                                        <div class="col-12 pl-3 pr-3">
                                            <span class="text-primary d-flex justify-content-between">
                                                <b>Cédula: </b> <b id="mecanico-cedula-orden"></b>
                                            </span>
                                        </div>

                                        <div class="col-12 pl-3 pr-3">
                                            <span class="text-primary d-flex justify-content-between">
                                                <b>Nombre: </b> <b id="mecanico-nombre-orden"></b>
                                            </span>
                                        </div>

                                        <div class="col-12 pl-3 pr-3">
                                            <span class="text-primary d-flex justify-content-between">
                                                <b>Teléfono: </b> <b id="mecanico-telefono-orden"></b>
                                            </span>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div class="row sin-margin-y border-top">
                                <div class="col-12 sin-padding-y">
                                    <div class="row">
                                        <div class="col-12"><span class="title-orden">Servicios</span></div>
                                    </div>
                                </div>

                                <div class="col-12 sin-padding-y border box-items-averias" id="proceso-servicio-orden">

                                </div>
                            </div>

                            <div class="row border-top sin-margin-y">
                                <div class="col-6">
                                    <div class="row">
                                        <div class="col-6 sin-padding-y"><span class="title-orden">Total Servicio:
                                            </span></div>
                                        <div class="col-6 sin-padding-y">$<span id="proceso-total-orden"></span></div>
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-6 mt-5 text-center">
                                    <span>_______________________________</span>
                                    <br>
                                    <span> <b>Firma Autorizada</b> </span>
                                </div>
                                <div class="col-6 mt-5 text-center">
                                    <span>_______________________________</span>
                                    <br>
                                    <span> <b>Firma Mecánico</b> </span>
                                </div>
                            </div>
                        </section>
                        <main class="mt-3 text-right">
                            <button class="btn btn-primary" id="btn-imprimir">
                                <i class="fa fa-print mr-2"></i>
                                Descargar PDF
                            </button>
                        </main>
                    </div>
                </div>

            </div>
            <!-- /.modal-content -->
        </div>
        <!-- /.modal-dialog -->
    </div>
</main>

<script src="<?=BASE?>views/plugins/html2pdf/html2pdf.bundle.js"></script>
<script src="<?=BASE?>views/dist/js/scripts/administrarOrden.js"></script>