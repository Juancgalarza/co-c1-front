<div>

<body>
    <section class="material-half-bg">
      <div class="cover"></div>
    </section>
    <section class="login-content">
      <div class="logo">
        <h1>Taller Hrns Orrala</h1>
      </div>
      <div class="login-box">
        <form id="form-login" method="post" class="login-form">
          <h3 class="login-head"><i class="fa fa-lg fa-fw fa-user"></i>Iniciar Sesion</h3>
          <div class="form-group">
            <label class="control-label">Usuario</label>
            <input class="form-control" type="text" placeholder="usuario o correo" id="login-usuario" autofocus>
          </div>
          <div class="form-group">
            <label class="control-label">Contraseña</label>
            <input class="form-control" type="password" placeholder="Contraseña" id="login-clave">
          </div>
          <div class="form-group">
            <!-- <div class="utility">
              <div class="animated-checkbox">
                <label>
                  <input type="checkbox"><span class="label-text">Stay Signed in</span>
                </label>
              </div>
              <p class="semibold-text mb-2"><a href="#" data-toggle="flip">Has olvidado tu contraseña ?</a></p>
            </div> -->
          </div>
          <div class="form-group btn-container">
            <button type="submit" class="btn btn-primary btn-block" id="login-ingresar"><i class="fa fa-sign-in fa-lg fa-fw"></i>Iniciar</button>
          </div>
        </form>
       <!--  <form class="forget-form" action="index.html">
          <h3 class="login-head"><i class="fa fa-lg fa-fw fa-lock"></i>Forgot Password ?</h3>
          <div class="form-group">
            <label class="control-label">EMAIL</label>
            <input class="form-control" type="text" placeholder="Email">
          </div>
          <div class="form-group btn-container">
            <button class="btn btn-primary btn-block"><i class="fa fa-unlock fa-lg fa-fw"></i>RESET</button>
          </div>
          <div class="form-group mt-3">
            <p class="semibold-text mb-0"><a href="#" data-toggle="flip"><i class="fa fa-angle-left fa-fw"></i> Back to Login</a></p>
          </div>
        </form> -->
      </div>
    </section>
   
  </body>

</div>


<script src="<?=BASE?>views/dist/js/scripts/login.js?ver=1.1.1.2"></script>