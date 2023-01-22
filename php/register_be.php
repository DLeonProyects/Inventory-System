
<!---BACKEND register By Daniel-->


<?php

    include 'conexion_be.php';

    $usuario_register = $_POST['Usuario_register'];
    $nombre_register = $_POST['Nombre_register'];
    $apellido_register = $_POST['Apellido_register'];
    $correo_register = $_POST['Correo_register'];
    //$correo_register = hash('sha512', $correo_register); para encriptar la clave
    

    $query = "INSERT INTO register(Usuario_R, Nombre_R, Apellido_R, Correo_R) 
    VALUES ('$usuario_register', '$nombre_register', '$apellido_register', '$correo_register')";

    $verificar_correo  = "SELECT * FROM register WHERE Correo_R='$correo_register' ";
    $verificar_usuario  = "SELECT * FROM register WHERE Usuario_R='$usuario_register' ";


    //Verificar que el correo no se repita en la base de datos
    $verificar_correos_repetidos = mysqli_query($conexion, $verificar_correo );
    if(mysqli_num_rows($verificar_correos_repetidos) > 0){
        echo '

            <script>
                alert("Este Correo Electronico esta en uso, intenta con otro diferente");
                window.location = "../index.php";
            </script>
        
        ';
        exit(); //Esto es para que el php termine la ejecucion y el codigo de abajo no se ejecute por ende no almacene correos repetidos
        
    };


    //Verificar que el usuario no se repita en la base de datos
    $verificar_usuarios_repetidos = mysqli_query($conexion, $verificar_usuario );
    if(mysqli_num_rows($verificar_usuarios_repetidos) > 0){
        echo '

            <script>
                alert("Este Nombre de Usuario esta en uso, intenta con otro diferente");
                window.location = "../index.php";
            </script>
        
        ';
        exit(); //Esto es para que el php termine la ejecucion y el codigo de abajo no se ejecute por ende no almacene correos repetidos
       
    };


    //REGISTRO DE USUARIOS
    //Insercion de datos en la tabla register 
    $ejecutar = mysqli_query($conexion, $query);

    if ($ejecutar){
        echo '
            <script>
                alert("Usuario registrado correctamente ")
                window.location = "../index.php";
            </script>

        ';
    }else{
        echo '
            <script>
                alert("Usuario no registrado ")
                window.location = "../index.php";
            </script>

        ';
    }

    mysqli_close($conexion);
?>