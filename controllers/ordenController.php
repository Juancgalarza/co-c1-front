<?php

require_once './guards/sesion.guard.php';

class OrdenController{

    private $guard;

    public function __construct(){
        // echo "InicioController instanciado";
        $this->guard = new sesion();
    }

    public function nueva(){
        require_once 'views/contents/nuevaOrden.php';
    }

    public function administrar(){     
        require_once 'views/contents/administrarOrden.php';
        /* if($this->guard->existe()){
        } */
    }

    public function pendientes(){
        require_once 'views/contents/ordenesPendientes.php';
    }

    public function proceso(){
        require_once 'views/contents/ordenesEnProceso.php';
    }

    public function terminadas(){
        require_once 'views/contents/ordenesTerminadas.php';
    }

    public function pagada(){
        require_once 'views/contents/ordenesPagadas.php';
    }

}