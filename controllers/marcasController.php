<?php


class MarcasController{

    public function __construct(){
        // echo "InicioController instanciado";
    }

    public function nueva(){
        require_once 'views/contents/nuevaMarca.php';
    }

}