<main class="app-content">
    <div class="app-title">
        <div>
            <h1><i class="fa fa-car"></i> Nuevo Vehículo</h1>
            <!-- <p>Sample forms</p> -->
        </div>
        <ul class="app-breadcrumb breadcrumb">
            <li class="breadcrumb-item"><i class="fa fa-home fa-lg"></i></li>
            <li class="breadcrumb-item">Gestión de Vehículos</li>
            <li class="breadcrumb-item"><a href="#">Nuevo Vehículo</a></li>
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
                <h3 class="tile-title">Nuevo Vehículo</h3>
                <div class="row mb-3 text-right">
                    <div class="col-12">
                        <button class="btn btn-primary" id="buscar-marca" data-toggle="modal"
                            data-target="#modal-marcas" data-backdrop="static" data-keyboard="false"><i
                                class="fa fa-search mr-2"></i>Buscar Marca</button>
                    </div>
                </div>
                <div class="tile-body">
                    <form id="form-nuevo-vehiculo" class="form-horizontal">
                        <input type="hidden" id="form-vehiculo-id">
                        <div class="form-group row">
                            <label for="vehiculo-placa" class="control-label col-md-2">Placa</label>
                            <div class="col-md-8">
                                <input class="form-control" type="text" placeholder="Placa" maxlength="7" minlength="7"
                                    id="vehiculo-placa">
                            </div>
                        </div>
                        <div class="form-group row">
                            <input type="hidden" id="form-marca-id">
                            <label for="vehiculo-marca" class="control-label col-md-2">Marca</label>
                            <div class="col-md-8">
                                <input class="form-control letras-vd" type="text" readOnly placeholder="Marca"
                                    id="vehiculo-marca">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="vehiculo-modelo" class="control-label col-md-2">Modelo</label>
                            <div class="col-md-8">
                                <input class="form-control" type="text" placeholder="Modelo" id="vehiculo-modelo">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="vehiculo-km" class="control-label col-md-2">Kilometraje</label>
                            <div class="col-md-8">
                                <input class="form-control" type="text" placeholder="Kilometraje" id="vehiculo-km">
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
                <h3 class="tile-title">Lista de Vehículos</h3>
                <div class="tile-body">
                    <div class="div" style="overflow: auto;">
                        <table id="tabla-vehiculo" class="table table-bordered table-striped">
                            <thead>
                                <tr>
                                    <th style="width: 10px">#</th>
                                    <th>Placa</th>
                                    <th>Marca</th>
                                    <th>Modelo</th>
                                    <th>Kilometraje</th>
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
    <div class="modal fade" id="modal-marcas">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header bg-primary">
                    <h4 class="modal-title">Lista de Marcas</h4>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-12">
                            <div class="form-group">
                                <label for="">Buscar Representante</label>
                                <input id="buscar-repre" type="text" class="form-control"
                                    placeholder="Ingrese cedula o apellido del Representante">
                            </div>
                        </div>
                    </div>
                    <div class="row" style="height: 200px !important; overflow: auto;">
                        <div class="col-12">
                            <div class="tabla-buscar-marca">
                                <table class="table table-hover text-nowrap">
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th style="display: none">ID</th>
                                            <th>Marca</th>
                                            <th>Seleccionar</th>
                                        </tr>
                                    </thead>
                                    <tbody id="marca-body">

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

    <div class="modal fade" id="actualizar_vehiculo">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header bg-primary">
                    <h4 class="modal-title">Actualizar Vehículo</h4>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="contanier-fluid">
                        <form id="update-marca" method="post">
                            <input type="hidden" id="vehiculo-id">
                            <div class="row">
                                <div class="col-12 col-md-6 form-group">
                                    <label for="">Placa</label>
                                    <input id="upd-placa" type="text" readOnly class="form-control">
                                </div>
                                <input type="hidden" id="marca-id">
                                <div class="col-12 col-md-6 form-group">
                                    <label for="">Marca</label>
                                    <input id="upd-marca" type="text" readOnly class="form-control">
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-12 col-md-6 form-group">
                                    <label for="">Modelo</label>
                                    <input id="upd-modelo" type="text" class="form-control">
                                </div>
                                <input type="hidden" id="upd-persona-id">
                                <div class="col-12 col-md-6 form-group">
                                    <label for="">Kilometraje</label>
                                    <input id="upd-km" type="text" class="form-control">
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
<script src="<?=BASE?>views/dist/js/scripts/nuevoVehiculo.js"></script>