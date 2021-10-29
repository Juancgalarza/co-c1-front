<?php


class ServicioController{

    public function __construct(){
        // echo "InicioController instanciado";
    }

    public function nuevo(){
        require_once 'views/contents/nuevoServicio.php';
    }

}