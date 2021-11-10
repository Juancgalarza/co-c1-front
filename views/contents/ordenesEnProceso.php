<main class="app-content">
    <div class="app-title">
        <div>
            <h1><i class="fa fa-cogs"></i> Ordenes En Proceso</h1>
        </div>
        <ul class="app-breadcrumb breadcrumb">
            <li class="breadcrumb-item"><i class="fa fa-home fa-lg"></i></li>
            <li class="breadcrumb-item">Progreso de Ordenes</li>
            <li class="breadcrumb-item"><a href="#">Ordenes en Proceso</a></li>
        </ul>
    </div>

    <div class="row">
        <div class="col-12">
            <div class="tile">
                <h3 class="tile-title">Lista de Ordenes En Proceso</h3>
                <div class="tile-body">
                    <div class="row" id="orden-en-proceso">

                    </div>
                </div>
            </div>
        </div>

    </div>

    <!-- Modales -->
    <div class="modal fade" id="modal-progreso">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header bg-primary">
                    <h4 class="modal-title" style="color:white;">Progreso</h4>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="contanier-fluid">
                        <div class="row">
                            <div class="col-12">
                                <div class="tab-content">
                                    <div>
                                        <form method="post" id="form-progreso">
                                            <input type="hidden" id="orden-id">
                                            <div class="row">
                                                <div class="col-2">
                                                    <div class="form-group">
                                                        <label for="">Código:</label>
                                                        <input type="text" class="form-control" readOnly
                                                            id="orden-codigo">
                                                    </div>
                                                </div>
                                                <div class="col-2">
                                                    <div class="form-group">
                                                        <label for="">Placa:</label>
                                                        <input type="text" class="form-control" readOnly
                                                            id="orden-placa">
                                                    </div>
                                                </div>
                                                <div class="col-4">
                                                    <div class="form-group">
                                                        <label for="">Detalle</label>
                                                        <textarea cols="30" rows="2" class="form-control"
                                                            id="orden-act"></textarea>
                                                    </div>
                                                </div>
                                                <div class="col-2">
                                                    <div class="form-group">
                                                        <label for="">Progreso %</label>
                                                        <input type="text" class="form-control numeros-vd"
                                                            id="orden-progreso" maxlength="2">
                                                    </div>
                                                </div>
                                                <div class="col-2" style="margin-top: 28px;">
                                                    <div class="btn-group">
                                                        <button type="submit" class="btn btn-dark"><i
                                                                class="fa fa-save mr-2"></i>Guardar</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr class="bg-dark">
                        <div>
                            <div class="card">
                                <div class="card-header">
                                    <h3 class="card-title">Lista de Progresos</h3>
                                </div>
                                <!-- /.card-header -->
                                <div class="card-body table-responsive p-0" style="height: 258px; overflow: auto;">
                                    <table class="table table-hover text-nowrap">
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>Detalle</th>
                                                <th>Progreso %</th>
                                            </tr>
                                        </thead>
                                        <tbody id="body-progreso">
                                            
                                        </tbody>
                                    </table>
                                </div>
                                <!-- /.card-body -->
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <!-- /.modal-content -->
        </div>
        <!-- /.modal-dialog -->
    </div>
</main>

<script src="<?=BASE?>views/dist/js/scripts/ordenesEnProceso.js"></script>