
<!---BACKEND login By Harold-->


<?php

    include 'conexion_be.php';


    $usuario_login = $_POST['Usuario_login'];
    $contrasena_login = $_POST['Contrasena_login'];

    $verificar_usuario_contrasena = "SELECT * FROM usuarios WHERE Usuario='$usuario_login' and Contrasena='$contrasena_login' and Rol='Administrador' ";

    $validar_login_admin = mysqli_query($conexion, $verificar_usuario_contrasena);


    if (mysqli_num_rows($validar_login_admin) > 0) {
        header("location: ../dashboard.html");
    }else{
        echo '
            <script>
                alert("Usuario o Contrasena incorrectos ************")
                window.location = "../index.php";
            </script>

        ';
    }




?>