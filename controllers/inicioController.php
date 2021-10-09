<?php


class InicioController{

    public function __construct(){
        // echo "InicioController instanciado";
    }

    public function administrador(){
        require_once 'views/contents/administrador.php';
    }

}