<main class="app-content">
    <div class="app-title">
        <div>
            <h1><i class="fa fa-clone"></i> Cotización </h1>
            <!-- <p>A free and open source Bootstrap 4 admin template</p> -->
        </div>
        <ul class="app-breadcrumb breadcrumb">
            <li class="breadcrumb-item"><i class="fa fa-home fa-lg"></i></li>
            <li class="breadcrumb-item">Extras</li>
            <li class="breadcrumb-item"><a href="#">Cotización</a></li>
        </ul>
    </div>

    <div class="row">
        <div class="col-md-12">
            <div class="tile">
                <div class="row mb-3 mt-3 text-right">
                    <div class="col-6">
                        <h4> <b> <i class="fa fa-tasks mr-2"></i> Servicios</b> </h4>
                    </div>
                    <div class="col-6">
                        <button class="btn btn-primary btn-sm" id="buscar-marca" data-toggle="modal"
                            data-target="#modal-servicio" data-backdrop="static" data-keyboard="false"><i
                                class="fa fa-search mr-2"></i>Buscar Servicio</button>
                    </div>
                </div>
                <div class="tile-body">
                    <div class="row d-none" style="overflow: auto;" id="tabla-cotizar">
                        <div class="col-12">
                            <div class="tabla-buscar-cliente">
                                <table class="table table-hover text-nowrap table-bordered table-striped mt-5">
                                    <thead class="thead-dark">
                                        <tr>
                                            <th>#</th>
                                            <th style="display: none">ID</th>
                                            <th>Detalle del Servicio</th>
                                            <th>Precio</th>
                                            <th>Acción</th>
                                        </tr>
                                    </thead>
                                    <tbody id="items-servicio">

                                    </tbody>
                                    <tfoot>
                                        <th></th>
                                        <th class="text-right">Total del Servicio:</th>
                                        <th id="total-servicio"></th>
                                        <th></th>
                                    </tfoot>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Modales -->
    <div class="modal fade" id="modal-servicio">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header bg-primary">
                    <h4 class="modal-title">Servicio</h4>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-12">
                            <div class="form-group">
                                <label for="">Buscar Servicio</label>
                                <input id="buscar-serv" type="text" class="form-control"
                                    placeholder="Ingrese el detalle del Servicio">
                            </div>
                        </div>
                    </div>
                    <div class="row" style="height: 200px !important; overflow: auto;">
                        <div class="col-12">
                            <div class="tabla-buscar-servicio">
                                <table class="table table-hover text-nowrap">
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th style="display: none">ID</th>
                                            <th>Detalle del Servicio</th>
                                            <th>Precio</th>
                                            <th>OK</th>
                                        </tr>
                                    </thead>
                                    <tbody id="servicio-body">

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer justify-content-between">
                </div>
            </div>
            <!-- /.modal-content -->
        </div>
        <!-- /.modal-dialog -->
    </div>
</main>

<script src="<?=BASE?>views/dist/js/scripts/cotizacionServicio.js"></script>