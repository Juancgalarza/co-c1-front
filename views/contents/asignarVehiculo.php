<main class="app-content">
    <div class="app-title">
        <div>
            <h1><i class="fa fa-car"></i> Asignar Vehículo</h1>
            <!-- <p>Sample forms</p> -->
        </div>
        <ul class="app-breadcrumb breadcrumb">
            <li class="breadcrumb-item"><i class="fa fa-home fa-lg"></i></li>
            <li class="breadcrumb-item">Gestión de Vehículos</li>
            <li class="breadcrumb-item"><a href="#">Asignar Vehículo</a></li>
        </ul>
    </div>
    <div class="row mb-3">
        <div class="col-12 col-sm-4 col-md-3 col-lg-3">
            <a class="btn btn-primary" href="<?=BASE?>marcas/nueva">
                <i class="fa fa-tachometer mr-2"></i>
                Agregar Marca</a>
        </div>
        <div class="col-12 col-sm-4 col-md-3 col-lg-3">
            <a class="btn btn-primary" href="<?=BASE?>vehiculo/nuevo">
                <i class="fa fa-car mr-2"></i>
                Agregar Vehículo</a>
        </div>
    </div>
    <div class="row">
        <div class="col-12">
            <div class="tile">
                <div class="tile-body">
                    <div class="row">
                        <div class="col-6">
                            <div class="widget-small warning"><i class="icon fa fa-user fa-3x"></i>
                                <div class="info">
                                    <h4>Cliente</h4>
                                    <p id="cliente-cargar"><b>------------------</b></p>
                                </div>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="widget-small primary"><i class="icon fa fa-car fa-3x"></i>
                                <div class="info">
                                    <h4>Vehículo</h4>
                                    <p id="vehiculo-cargar"><b>------------------</b></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row text-center">
                        <div class="col-12">
                            <button id="btn-asignar" class="btn btn-primary btn-lg"><i
                                    class="fa fa-car mr-2"></i>Asignar</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>

    <div class="row">
        <div class="col-md-6">
            <div class="tile">
                <h3 class="tile-title">Clientes</h3>
                <div class="tile-body">
                    <div class="row">
                        <div class="col-12">
                            <div class="form-group">
                            <input type="hidden" id="cliente-id">
                                <label for="">Buscar Cliente</label>
                                <input id="buscar-cli" type="text" class="form-control"
                                    placeholder="Ingrese cedula, nombre o apellido del Cliente">
                            </div>
                        </div>
                    </div>
                    <div class="row" style="height: 200px !important; overflow: auto;">
                        <div class="col-12">
                            <div class="tabla-buscar-cliente">
                                <table class="table table-hover text-nowrap table-bordered">
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th style="display: none">ID</th>
                                            <th>Cédula</th>
                                            <th>Nombres</th>
                                            <th>Apellidos</th>
                                            <th>Seleccionar</th>
                                        </tr>
                                    </thead>
                                    <tbody id="cliente-body">

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-6">
            <div class="tile">
                <h3 class="tile-title">Vehículos</h3>
                <div class="tile-body">
                    <div class="row">
                        <div class="col-12">
                            <div class="form-group">
                            <input type="hidden" id="vehiculo-id">
                                <label for="">Buscar Vehículo</label>
                                <input id="buscar-vehiculo" type="text" class="form-control"
                                    placeholder="Ingrese placa del Vehículo">
                            </div>
                        </div>
                    </div>
                    <div class="row" style="height: 200px !important; overflow: auto;">
                        <div class="col-12">
                            <div class="tabla-buscar-vehiculo">
                                <table class="table table-hover text-nowrap table-bordered">
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th style="display: none">ID</th>
                                            <th>Placa</th>
                                            <th>Marca</th>
                                            <th>Modelo</th>
                                            <th>Kilometraje</th>
                                            <th>Seleccionar</th>
                                        </tr>
                                    </thead>
                                    <tbody id="vehiculo-body">

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
        <div class="col-md-12">
            <div class="tile">
                <h3 class="tile-title">Cliente - Vehículo</h3>
                <div class="tile-body">
                    <div class="row" style="height: 200px !important; overflow: auto;">
                        <div class="col-12">
                            <div class="tabla-buscar-cliente-vehiculo">
                                <table class="table table-hover text-nowrap table-bordered">
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th style="display: none">ID</th>
                                            <th>Cédula</th>
                                            <th>Cliente</th>
                                            <th>Vehiculo</th>
                                            <th>Marca</th>
                                            <th>Modelo</th>
                                            <th>Kilometraje</th>
                                            <th>Acción</th>
                                        </tr>
                                    </thead>
                                    <tbody id="cliente-vehiculo-body">

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</main>
<script src="<?=BASE?>views/plugins/jquery.validate.js"></script>
<script src="<?=BASE?>views/dist/js/scripts/asignarVehiculo.js?ver=1.1.1.1"></script>