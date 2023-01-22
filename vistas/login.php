<!DOCTYPE html>
<html lang="en">
<head>
    
</head>

<!---By Harold--->

<body>

    <main>
        <!---Login-->
        <div class="Caja_Principal">
            <div class="caja_trasera">
                <div class="img_login">
                    <img src="http://localhost/Login-register//assets/login-logo.png" alt="Login">
                </div>

                
                <div class="caja_login">
                    <form action="http://localhost/Login-register/php/login_be.php" class="formulario__login" method="POST">
                        <h2>INICIAR SESION</h2>
                        <input type="text" placeholder="Usuario" id="user" class="usuario" required="true" name="Usuario_login">
                        <input type="password" placeholder="Contraseña" id="pass" class="contrasena" required="true" name="Contrasena_login">
                        <button>Entrar</button>
                        <p>¿No tienes usuario? <a id="solicitar" href="#">¡Solicita uno aqui!</a>.</p>
                    </form>
                </div>

                <div class="caja_register">
                    <form action="http://localhost/Login-register/php/register_be.php" method="POST" class="formulario__register">
                        <h2>SOLICITAR USUARIO</h2>
                        <input type="text" placeholder="Usuario" name="Usuario_register" required="true">
                        <input type="text" placeholder="Nombre" name="Nombre_register" required="true">
                        <input type="text" placeholder="Apellido" name="Apellido_register" required="true">
                        <input type="text" placeholder="Correo Eletronico" name="Correo_register" required="true">
                        <button>Solicitar</button>
                        <p>¿Tienes cuenta? <a id="iniciar" href="#">¡Inicia sesion aqui!</a>.</p>
                    </form>
                </div>
            </div>
        </div>
    </main>
    <script src="http://localhost/Login-register/js/scripts.js"></script>
</body>
</html>