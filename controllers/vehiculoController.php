<?php


class VehiculoController{

    public function __construct(){
        // echo "InicioController instanciado";
    }

    public function nuevo(){
        require_once 'views/contents/nuevoVehiculo.php';
    }

    public function asignar(){
        require_once 'views/contents/asignarVehiculo.php';
    }
}