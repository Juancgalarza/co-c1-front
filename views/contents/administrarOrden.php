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
</main>

<script src="<?=BASE?>views/dist/js/scripts/administrarOrden.js"></script>