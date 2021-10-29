<main class="app-content">
    <div class="app-title">
        <div>
            <h1><i class="fa fa-tags"></i> Nuevo Servicio</h1>
            <!-- <p>Sample forms</p> -->
        </div>
        <ul class="app-breadcrumb breadcrumb">
            <li class="breadcrumb-item"><i class="fa fa-home fa-lg"></i></li>
            <li class="breadcrumb-item">Servicios</li>
            <li class="breadcrumb-item"><a href="#">Nuevo Servicio</a></li>
        </ul>
    </div>
    <div class="row mb-3">
        <div class="col-12">
            <a class="btn btn-primary" href="<?=BASE?>marcas/nueva">
                <i class="fa fa-hand-pointer-o mr-2"></i>
                Agregar Marca</a>
        </div>
    </div>

    <div class="row">
        <div class="col-md-6">
            <div class="tile">
                <h3 class="tile-title">Nuevo Servicio</h3>
                <div class="tile-body">
                    <form id="form-nuevo-servicio" class="form-horizontal">
                        <div class="form-group row" style="margin-top: 30px;">
                            <label for="vehiculo-modelo" class="control-label col-md-2">Servicio</label>
                            <div class="col-md-8">
                                <input class="form-control" type="text" placeholder="Servicio" id="servicio-nombre">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="vehiculo-km" class="control-label col-md-2">Precio</label>
                            <div class="col-md-8">
                                <input class="form-control" type="text" placeholder="Precio" id="servico-precio">
                            </div>
                        </div>
                        <br>
                        <div class="col-xs-12 tile-footer">
                            <div class="row">
                                <div class="col-12 col-md-12 col-lg-12 col-sm-12">
                                    <button type="submit" class="btn btn-primary" type="button">
                                        <i class="fa fa-fw fa-lg fa-check-circle"></i>
                                        Registrar
                                    </button>
                                    <button class="btn btn-secondary" type="button">
                                        <i class="fa fa-fw fa-lg fa-check-circle"></i>
                                        cancelar
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <div class="col-md-6">
            <div class="tile">
                <h3 class="tile-title">Lista de Servicios</h3>
                <div class="tile-body">
                    <div class="div" style="overflow: auto;">
                        <table id="tabla-servicio" class="table table-bordered table-striped">
                            <thead>
                                <tr>
                                    <th style="width: 10px">#</th>
                                    <th>Detalle del Servicio</th>
                                    <th>Precio</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>

                                </tfoot>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Modales -->
    <div class="modal fade" id="actualizar_servicio">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header bg-primary">
                    <h4 class="modal-title">Actualizar Servicio</h4>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="contanier-fluid">
                        <form id="update-marca" method="post">
                            <input type="hidden" id="marca-id">
                            <div class="row">
                                <input type="hidden" id="upd-servicio-id">
                                <div class="col-12 col-md-6 form-group">
                                    <label for="">Servicio</label>
                                    <input id="upd-servicio" type="text" class="form-control">
                                </div>
                                <div class="col-12 col-md-6 form-group">
                                    <label for="">Precio</label>
                                    <input id="upd-precio" type="text" class="form-control">
                                </div>
                            </div>
                        </form>
                        <div class="row">
                            <div class="col-12">
                                <button id="btn-update" class="btn btn-primary"><i
                                        class="fas fa-pencil-alt mr-2"></i>Actualizar</button>
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

<script src="<?=BASE?>views/plugins/datatables/jquery.dataTables.min.js"></script>
<script src="<?=BASE?>views/plugins/datatables-bs4/js/dataTables.bootstrap4.min.js"></script>
<script src="<?=BASE?>views/plugins/datatables-responsive/js/dataTables.responsive.min.js"></script>
<script src="<?=BASE?>views/plugins/datatables-responsive/js/responsive.bootstrap4.min.js"></script>
<script src="<?=BASE?>views/plugins/datatables-buttons/js/dataTables.buttons.min.js"></script>
<script src="<?=BASE?>views/plugins/datatables-buttons/js/buttons.bootstrap4.min.js"></script>
<script src="<?=BASE?>views/plugins/jszip/jszip.min.js"></script>
<script src="<?=BASE?>views/plugins/pdfmake/pdfmake.min.js"></script>

<script src="<?=BASE?>views/plugins/jquery.validate.js"></script>
<script src="<?=BASE?>views/dist/js/scripts/nuevoServicio.js"></script>