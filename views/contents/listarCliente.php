<main class="app-content">
    <div class="app-title">
        <div>
            <h1><i class="fa fa-users"></i> Listar Clientes</h1>
            <!-- <p>Sample forms</p> -->
        </div>
        <ul class="app-breadcrumb breadcrumb">
            <li class="breadcrumb-item"><i class="fa fa-home fa-lg"></i></li>
            <li class="breadcrumb-item">Gestión de Usuarios</li>
            <li class="breadcrumb-item"><a href="#">Listar Clientes</a></li>
        </ul>
    </div>
    <div class="content">
        <div class="container-fluid">
            <div class="row mb-3">
                <div class="col-12">
                    <a class="btn btn-primary" href="<?=BASE?>gestion/nuevo">
                        <i class="fa fa-hand-pointer-o mr-2"></i>
                        Agregar Usuario</a>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <div class="card card-success">
                        <div class="card-header">
                            <h3 class="card-title">Clientes</h3>
                        </div>
                        <!-- /.card-header -->
                        <div class="card-body">
                            <div class="div" style="overflow: auto;">
                                <table id="tabla-cliente" class="table table-bordered table-striped">
                                    <thead>
                                        <tr>
                                            <th style="width: 10px">#</th>
                                            <th>Cédula</th>
                                            <th>Nombres</th>
                                            <th>Apellidos</th>
                                            <th>Teléfono</th>
                                            <th>Correo</th>
                                            <th>Dirección</th>
                                            <th>Acciones</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <!--  <tr>
                                            <td class="pt-25">1</td>
                                            <td class="pt-25">imagen.jpg</td>
                                            <td class="pt-25">Burro</td>
                                            <td class="pt-25">Hourse</td>
                                            <td class="pt-25">Bu</td>
                                            <td class="pt-25">Tuuu crees</td>
                                            <td class="pt-25">
                                                <div class="btn-group">
                                                    <button class="btn btn-warning  fa-lg">
                                                        <i class="fa fa-pencil-square fa-lg"></i>
                                                    </button>
                                                    <button class="btn btn-danger fa-lg">
                                                        <i class="fa fa-trash fa-lg"></i>
                                                    </button>
                                                </div>
                                            </td>
                                        </tr> -->
                                        </tfoot>
                                </table>
                            </div>
                        </div>
                        <!-- /.card-body -->
                    </div>
                </div>

            </div>
            <!-- /.row -->

        </div><!-- /.container-fluid -->
    </div>

    <!-- Modales -->
    <div class="modal fade" id="actualizar_cliente">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header bg-primary">
                    <h4 class="modal-title">Actualizar Cliente</h4>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="contanier-fluid">
                        <form id="update-cliente" method="post">
                            <input type="hidden" id="cliente-id">
                            <div class="row">
                                <input type="hidden" id="upd-persona-id">
                                <div class="col-12 col-md-6 form-group">
                                    <label for="">Cédula</label>
                                    <input id="upd-cedula" type="text" readOnly class="form-control">
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-12 col-md-6 form-group">
                                    <label for="">Nombres</label>
                                    <input id="upd-nombres" type="text" class="form-control letras-vd">
                                </div>
                                <div class="col-12 col-md-6 form-group">
                                    <label for="">Apellidos</label>
                                    <input id="upd-apellidos" type="text" class="form-control letras-vd">
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-12 col-md-6 form-group">
                                    <label for="">Teléfono</label>
                                    <input id="upd-telefono" type="text" class="form-control">
                                </div>
                                <div class="col-12 col-md-6 form-group">
                                    <label for="">Correo</label>
                                    <input id="upd-correo" type="text" class="form-control">
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-12 form-group">
                                    <label for="">Dirección</label>
                                    <textarea id="upd-direccion" class="form-control col-md-12" rows="2"
                                        placeholder="Escribir su dirección"></textarea>
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


<script src="<?=BASE?>views/dist/js/scripts/listaCliente.js"></script>