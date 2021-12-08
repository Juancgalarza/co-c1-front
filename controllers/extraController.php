<?php


class ExtraController{

    public function __construct(){
        // echo "InicioController instanciado";
    }

    public function cotizacion(){
        require_once 'views/contents/cotizacionServicio.php';
    }

}