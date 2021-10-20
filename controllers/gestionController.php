<?php


class GestionController{

    public function __construct(){
        // echo "InicioController instanciado";
    }

    public function nuevo(){
        require_once 'views/contents/nuevoUsuario.php';
    }

    public function listar(){
        require_once 'views/contents/listarUsuario.php';
    }

    public function clienteslistar(){
        require_once 'views/contents/listarCliente.php';
    }

}