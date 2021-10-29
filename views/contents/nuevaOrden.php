<main class="app-content">
    <div class="app-title">
        <div>
            <h1><i class="fa fa-file-text-o"></i> Nueva Orden</h1>
            <!-- <p>Sample forms</p> -->
        </div>
        <ul class="app-breadcrumb breadcrumb">
            <li class="breadcrumb-item"><i class="fa fa-home fa-lg"></i></li>
            <li class="breadcrumb-item">Gestión Orden</li>
            <li class="breadcrumb-item"><a href="#">Nueva Orden</a></li>
        </ul>
    </div>

    <div class="row">
        <div class="col-md-6">
            <div class="tile">
                <div class="row mb-3 text-right">
                    <div class="col-6">
                        <h4> <b>Datos del Cliente</b> </h4>
                    </div>
                    <div class="col-6">
                        <button class="btn btn-primary btn-sm" id="buscar-marca" data-toggle="modal"
                            data-target="#modal-clientes" data-backdrop="static" data-keyboard="false"><i
                                class="fa fa-search mr-2"></i>Buscar Cliente</button>
                    </div>
                </div>
                <div class="tile-body">
                    <form id="form-cliente-orden" class="form-horizontal">
                        <div class="form-group row">
                            <div class="col-6">
                                <input type="hidden" id="cliente-id">
                                <label for="cliente-cedula" class="control-label">Cédula</label>
                                <div class="col-md-12">
                                    <input class="form-control" type="text" readOnly placeholder="Cédula"
                                        id="cliente-cedula">
                                </div>
                            </div>
                            <div class="col-6">
                                <label for="cliente-nombres" class="control-label">Nombres</label>
                                <div class="col-md-12">
                                    <input class="form-control" type="text" readOnly placeholder="Nombres"
                                        id="cliente-nombres">
                                </div>
                            </div>
                        </div>
                        <div class="form-group row">
                            <div class="col-6">
                                <label for="cliente-apellidos" class="control-label">Apellidos</label>
                                <div class="col-md-12">
                                    <input class="form-control" type="text" readOnly placeholder="Apellidos"
                                        id="cliente-apellidos">
                                </div>
                            </div>
                            <div class="col-6">
                                <label for="cliente-telefono" class="control-label">Teléfono</label>
                                <div class="col-md-12">
                                    <input class="form-control" type="text" readOnly placeholder="Teléfono"
                                        id="cliente-telefono">
                                </div>
                            </div>
                        </div>
                        <div class="form-group row">
                            <div class="col-12">
                                <label for="cliente-correo" class="control-label">Correo</label>
                                <div class="col-md-12">
                                    <input class="form-control" type="text" readOnly placeholder="Correo"
                                        id="cliente-correo">
                                </div>
                            </div>
                        </div>
                    </form>
                    <hr class="bg-dark">
                    <div class="row mb-3">
                        <div class="col-12">
                            <h4> <b>Datos del Vehículo</b> </h4>
                        </div>
                    </div>
                    <form id="form-nuevo-vehiculo" class="form-horizontal">
                        <input type="hidden" id="form-vehiculo-id">
                        <div class="form-group row">
                            <div class="col-6">
                                <label for="vehiculo-placa" class="control-label">Placa</label>
                                <div class="col-md-12">
                                    <select id="select-placa" name="placa" class="form-control">
                                        <option>Seleccione una Placa</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-6">
                                <label for="vehiculo-marca" class="control-label">Marca</label>
                                <div class="col-md-12">
                                    <input class="form-control letras-vd" type="text" readOnly readOnly
                                        placeholder="Marca" id="vehiculo-marca">
                                </div>
                            </div>
                        </div>
                        <div class="form-group row">
                            <div class="col-6">
                                <label for="vehiculo-modelo" class="control-label">Modelo</label>
                                <div class="col-md-12">
                                    <input class="form-control" type="text" readOnly placeholder="Modelo"
                                        id="vehiculo-modelo">
                                </div>
                            </div>
                            <div class="col-6">
                                <label for="vehiculo-km" class="control-label">Kilometraje</label>
                                <div class="col-md-12">
                                    <input class="form-control" type="text" readOnly placeholder="Kilometraje"
                                        id="vehiculo-km">
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <div class="col-md-6">
            <div class="tile">
                <div class="row mb-3 text-right">
                    <div class="col-6">
                        <h4> <b> Datos del Mecánico</b> </h4>
                    </div>
                    <div class="col-6">
                        <button class="btn btn-primary btn-sm" id="buscar-marca" data-toggle="modal"
                            data-target="#modal-mecanico" data-backdrop="static" data-keyboard="false"><i
                                class="fa fa-search mr-2"></i>Buscar Mecánico</button>
                    </div>
                </div>
                <div class="tile-body">
                    <form id="form-norden-vehiculo" class="form-horizontal">
                        <input type="hidden" id="form-mecanico-id">
                        <div class="form-group row">
                            <div class="col-7">
                                <div class="col-12">
                                    <label for="mecanico-nombres" class="control-label">Nombres</label>
                                    <div class="col-12">
                                        <input class="form-control" type="text" readOnly placeholder="Nombres"
                                            id="mecanico-nombres">
                                    </div>
                                </div>
                                <div class="col-12" style="margin-top: 8px;">
                                    <label for="mecanico-apellidos" class="control-label">Apellidos</label>
                                    <div class="col-12">
                                        <input class="form-control" type="text" readOnly placeholder="Apellidos"
                                            id="mecanico-apellidos">
                                    </div>
                                </div>
                                <div class="col-12" style="margin-top: 8px;">
                                    <label for="mecanico-telefono" class="control-label">Teléfono</label>
                                    <div class="col-md-12">
                                        <input class="form-control" type="text" readOnly placeholder="Teléfono"
                                            id="mecanico-telefono">
                                    </div>
                                </div>
                            </div>
                            <div class="col-5">
                                <label for="mecanico-img" class="control-label">Foto</label>
                                <div class="col-md-12">
                                    <img id="mecanico-img" src="<?=SERVIDOR?>resources/usuarios/default.jpg"
                                        width=125px>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <hr class="bg-dark">
                <div class="row mb-3 text-right">
                    <div class="col-6">
                        <h4> <b>Datos del Servicio</b> </h4>
                    </div>
                    <div class="col-6">
                        <button class="btn btn-primary btn-sm" id="buscar-marca" data-toggle="modal"
                            data-target="#modal-servicio" data-backdrop="static" data-keyboard="false"><i
                                class="fa fa-search mr-2"></i>Buscar Servicio</button>
                    </div>
                </div>
                <div class="tile-body">
                    <div class="row" style="height: 200px !important; overflow: auto;">
                        <div class="col-12">
                            <div class="tabla-buscar-cliente">
                                <table class="table table-hover text-nowrap table-bordered">
                                    <thead>
                                        <tr>
                                            <th>*</th>
                                            <th style="display: none">ID</th>
                                            <th>Detalle del Servicio</th>
                                            <th>Precio</th>
                                            <th>Acción</th>
                                        </tr>
                                    </thead>
                                    <tbody id="items-servicio">

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="row">
        <div class="col-6">
            <div class="tile">
                <div class="tile-body">
                    <button id="guardar-orden" class="btn btn-primary" style="width: 100% !important;">
                        <i class="fa fa-save mr-2"></i>Guardar Orden
                    </button>
                </div>
            </div>
        </div>
        <div class="col-6">
            <div class="row">
                <div class="col-12">
                    <div class="widget-small primary coloured-icon"><i class="icon fa fa-usd fa-3x"></i>
                        <div class="info">
                            <h4>Total Servicio:</h4>
                            <p id="orden-total"><b>0.00</b></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Modales -->
    <div class="modal fade" id="modal-clientes">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header bg-primary">
                    <h4 class="modal-title">Clientes</h4>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-12">
                            <div class="form-group">
                                <label for="">Buscar Cliente</label>
                                <input id="buscar-cli" type="text" class="form-control"
                                    placeholder="Ingrese cedula, nombre o apellido del Cliente">
                            </div>
                        </div>
                    </div>
                    <div class="row" style="height: 200px !important; overflow: auto;">
                        <div class="col-12">
                            <div class="tabla-buscar-cliente">
                                <table class="table table-hover text-nowrap">
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th style="display: none">ID</th>
                                            <th>Cédula</th>
                                            <th>Nombre</th>
                                            <th>Apellido</th>
                                            <th>Teléfono</th>
                                            <th>Correo</th>
                                            <th>OK</th>
                                        </tr>
                                    </thead>
                                    <tbody id="cliente-body">

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

    <div class="modal fade" id="modal-mecanico">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header bg-primary">
                    <h4 class="modal-title">Mecánico</h4>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-12">
                            <div class="form-group">
                                <label for="">Buscar Mecánico</label>
                                <input id="buscar-mecanico" type="text" class="form-control"
                                    placeholder="Ingrese cedula, nombre o apellido del Mecánico">
                            </div>
                        </div>
                    </div>
                    <div class="row" style="height: 200px !important; overflow: auto;">
                        <div class="col-12">
                            <div class="tabla-buscar-cliente">
                                <table class="table table-hover text-nowrap">
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th style="display: none">ID</th>
                                            <th>Cédula</th>
                                            <th>Nombre</th>
                                            <th>Apellido</th>
                                            <th style="display: none">Teléfono</th>
                                            <th style="display: none">Correo</th>
                                            <th>Disponible</th>
                                            <th style="display: none">Imagen</th>
                                            <th>OK</th>
                                        </tr>
                                    </thead>
                                    <tbody id="mecanico-body">

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

<script src="<?=BASE?>views/plugins/datatables/jquery.dataTables.min.js"></script>
<script src="<?=BASE?>views/plugins/datatables-bs4/js/dataTables.bootstrap4.min.js"></script>
<script src="<?=BASE?>views/plugins/datatables-responsive/js/dataTables.responsive.min.js"></script>
<script src="<?=BASE?>views/plugins/datatables-responsive/js/responsive.bootstrap4.min.js"></script>
<script src="<?=BASE?>views/plugins/datatables-buttons/js/dataTables.buttons.min.js"></script>
<script src="<?=BASE?>views/plugins/datatables-buttons/js/buttons.bootstrap4.min.js"></script>
<script src="<?=BASE?>views/plugins/jszip/jszip.min.js"></script>
<script src="<?=BASE?>views/plugins/pdfmake/pdfmake.min.js"></script>

<script src="<?=BASE?>views/plugins/jquery.validate.js"></script>
<script src="<?=BASE?>views/dist/js/scripts/nuevaOrden.js?ver=1.1.1.2"></script>