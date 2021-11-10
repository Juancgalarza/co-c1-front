<?php

class sesion {

    private $sesion = false;
    
    public function ___construct(){
        $this->sesion = $_SESSION['usuario'];
    }

    public function existe(){
        if($this->sesion){
            return true;
        }else{
            header('path view');
            return false;
        }  
    }
}