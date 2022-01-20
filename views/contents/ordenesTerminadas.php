<main class="app-content">
    <div class="app-title">
        <div>
            <h1><i class="fa fa-toggle-on"></i> Ordenes Terminadas</h1>
        </div>
        <ul class="app-breadcrumb breadcrumb">
            <li class="breadcrumb-item"><i class="fa fa-home fa-lg"></i></li>
            <li class="breadcrumb-item">Progreso de Ordenes</li>
            <li class="breadcrumb-item"><a href="#">Ordenes Terminadas</a></li>
        </ul>
    </div>

    <div class="row">
        <div class="col-12">
            <div class="tile">
                <h3 class="tile-title">Lista de Ordenes Terminadas</h3>
                <div class="tile-body">
                    <div class="row" id="orden-terminada">

                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Modales -->
    <div class="modal fade" id="modal-comprobante">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header bg-primary">
                    <h4 class="modal-title" style="color:white;">Visualizar Comprobante</h4>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="contanier-fluid">
                        <section class="orden-trabajo" id="modal-body-comprobante">
                            <div class="row d-flex align-items-center sin-margin-y">
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
                                <div class="col-12 col-sm-6 text-start pl-2 d-flex justify-content-center">
                                    <div class="ml-4">
                                        <img src="<?=BASE?>views/dist/img/logo.jpg" alt="Logo empresa" width="120px">
                                    </div>
                                </div>

                            </div>

                            <div class="row d-flex border-top sin-margin-y">
                                <div class="col-6 border-rigth">
                                    <div class="row">
                                        <div class="col-12 sin-padding-y">
                                            <div class="row">
                                                <div class="col-12"><span class="title-orden">Datos del Cliente</span>
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
                                            <div class="col-12 sin-padding-y">
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
                                                            <b>Telefono: </b> <b
                                                                id="proceso-telefono-cliente-orden"></b>
                                                        </span>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
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
                            </div>

                            <div class="row d-flex border-top sin-margin-y">

                                <div class="col-12 sin-padding-y">
                                    <div class="row">
                                        <div class="col-12"><span class="title-orden">Detalle del Comprobante</span></div>
                                    </div>

                                    <div class="factura-body mt-4" style="overflow: auto;">
                                        <table>
                                            <thead>
                                                <tr>
                                                    <td class="text-primary">#</td>
                                                    <td class="text-primary">Descripción</td>
                                                    <td class="text-primary">Precio</td>
                                                    <td class="text-primary">Total</td>
                                                </tr>
                                            </thead>

                                            <tbody id="body_detalle_comprobante">
                                                <!-- <tr>
                                            <td>1</td>
                                            <td>Llanta cuadrada</td>
                                            <td>4</td>
                                            <td>10.56</td>
                                            <td>44.56</td>
                                        </tr> -->
                                            </tbody>
                                        </table>
                                    </div>

                                    <div class="row mt-4 sin-margin-y">

                                        <div class="col-6 col-md-4 box-items">
                                            <div class="item-valores">
                                                <b>$ Subototal</b>
                                                <span id="comprobante_subtotal" class="text-center">0.00</span>
                                            </div>
                                        </div>

                                        <div class="col-6 col-md-4 box-items">
                                            <div class="item-valores">
                                                <b>$ Iva</b>
                                                <span id="comprobante_iva" class="text-center">0.00</span>
                                            </div>
                                        </div>

                                        <div class="col-6 col-md-4 box-items">
                                            <div class="item-valores">
                                                <b>$ Total</b>
                                                <span id="comprobante_total" class="text-center">0.00</span>
                                            </div>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </section>
                        <main class="mt-3 text-right">
                            <button class="btn btn-primary" id="btn-comprobante">
                                <i class="fa fa-money mr-2"></i>
                                Pagar
                            </button>
                            <button class="btn btn-info" id="btn-imprimir">
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
<script src="<?=BASE?>views/dist/js/scripts/ordenesTermindas.js"></script>