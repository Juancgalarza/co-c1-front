<?php


class OrdenController{

    public function __construct(){
        // echo "InicioController instanciado";
    }

    public function nueva(){
        require_once 'views/contents/nuevaOrden.php';
    }

}