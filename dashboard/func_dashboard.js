//JavaScript By Daniel



document.getElementById("inicio").addEventListener("click", ventana_inicio);
var boton_inicio = document.getElementById("inicio");
var ventana_inicio = document.getElementById("ventana_inicio");

function ventana_inicio(){
    boton_nuevo_user.classList.remove("selected");
    boton_todos_los_usuarios.classList.remove("selected");
    boton_buscar_usuarios.classList.remove("selected");
    boton_nueva_categoria.classList.remove("selected");
    boton_todas_las_categorias.classList.remove("selected");
    boton_buscar_categorias.classList.remove("selected");
    boton_nuevo_producto.classList.remove("selected");
    boton_lista_producto.classList.remove("selected");

    boton_inicio.classList.add("selected");

    ventana_nuevo_usuario.style.display = "none";
    ventana_nuevo_todos_los_usuarios.style.display = "none";
    ventana_inicio.style.display = "block";

    
   
}

/////USUARIOS

document.getElementById("nuevo-user").addEventListener("click", ventana_nuevo_user);
var boton_nuevo_user = document.getElementById("nuevo-user"); 
var ventana_nuevo_usuario = document.getElementById("ventana_nuevo_usuario"); 

function ventana_nuevo_user(){
    boton_nuevo_user.classList.add("selected");

    boton_inicio.classList.remove("selected");
    boton_buscar_usuarios.classList.remove("selected");
    boton_nueva_categoria.classList.remove("selected");
    boton_todos_los_usuarios.classList.remove("selected");
    boton_todas_las_categorias.classList.remove("selected");
    boton_buscar_categorias.classList.remove("selected");
    boton_nuevo_producto.classList.remove("selected");
    boton_lista_producto.classList.remove("selected");
    //side_menu.classList.add("menu__side_move");


    //caja__login.style.opacity = "0";
    ventana_nuevo_usuario.style.display = "block";
    ventana_inicio.style.display = "none";
    ventana_nuevo_todos_los_usuarios.style.display = "none";




   
}



document.getElementById("todos-los-usuarios").addEventListener("click", ventana_todos_los_usuarios);
var boton_todos_los_usuarios = document.getElementById("todos-los-usuarios");
var ventana_nuevo_todos_los_usuarios = document.getElementById("ventana_todos_los_usuarios"); 

function ventana_todos_los_usuarios(){
    boton_nuevo_user.classList.remove("selected");
    boton_inicio.classList.remove("selected");
    boton_buscar_usuarios.classList.remove("selected");
    boton_nueva_categoria.classList.remove("selected");
    boton_todas_las_categorias.classList.remove("selected");
    boton_buscar_categorias.classList.remove("selected");
    boton_nuevo_producto.classList.remove("selected");
    boton_lista_producto.classList.remove("selected");

    boton_todos_los_usuarios.classList.add("selected");


    ventana_nuevo_todos_los_usuarios.style.display = "block";
    ventana_inicio.style.display = "none";
    ventana_nuevo_usuario.style.display = "none";
    
}


document.getElementById("buscar-usuarios").addEventListener("click", ventana_buscar_usuarios);
var boton_buscar_usuarios = document.getElementById("buscar-usuarios");

function ventana_buscar_usuarios(){
    boton_nuevo_user.classList.remove("selected");
    boton_inicio.classList.remove("selected");
    boton_todos_los_usuarios.classList.remove("selected");
    boton_nueva_categoria.classList.remove("selected");
    boton_todas_las_categorias.classList.remove("selected");
    boton_buscar_categorias.classList.remove("selected");
    boton_nuevo_producto.classList.remove("selected");
    boton_lista_producto.classList.remove("selected");

    boton_buscar_usuarios.classList.add("selected");
}


document.getElementById("buscar-usuarios").addEventListener("click", ventana_buscar_usuarios);
var boton_buscar_usuarios = document.getElementById("buscar-usuarios");

function ventana_buscar_usuarios(){
    boton_nuevo_user.classList.remove("selected");
    boton_inicio.classList.remove("selected");
    boton_todos_los_usuarios.classList.remove("selected");
    boton_nueva_categoria.classList.remove("selected");
    boton_todas_las_categorias.classList.remove("selected");
    boton_buscar_categorias.classList.remove("selected");
    boton_nuevo_producto.classList.remove("selected");
    boton_lista_producto.classList.remove("selected");

    boton_buscar_usuarios.classList.add("selected");
}



///CATEGORIAS


document.getElementById("nueva-categoria").addEventListener("click", ventana_nueva_categoria);
var boton_nueva_categoria = document.getElementById("nueva-categoria");


function ventana_nueva_categoria(){
    boton_nuevo_user.classList.remove("selected");
    boton_inicio.classList.remove("selected");
    boton_todos_los_usuarios.classList.remove("selected");
    boton_buscar_usuarios.classList.remove("selected");
    boton_todas_las_categorias.classList.remove("selected");
    boton_buscar_categorias.classList.remove("selected");
    boton_nuevo_producto.classList.remove("selected");
    boton_lista_producto.classList.remove("selected");

    boton_nueva_categoria.classList.add("selected");
}



document.getElementById("todas-las-categorias").addEventListener("click", ventana_todas_las_categoria);
var boton_todas_las_categorias = document.getElementById("todas-las-categorias");


function ventana_todas_las_categoria(){
    boton_nuevo_user.classList.remove("selected");
    boton_inicio.classList.remove("selected");
    boton_todos_los_usuarios.classList.remove("selected");
    boton_buscar_usuarios.classList.remove("selected");
    boton_nueva_categoria.classList.remove("selected");
    boton_buscar_categorias.classList.remove("selected");
    boton_nuevo_producto.classList.remove("selected");
    boton_lista_producto.classList.remove("selected");

    boton_todas_las_categorias.classList.add("selected");
}


document.getElementById("buscar-categoria").addEventListener("click", ventana_buscar_categoria);
var boton_buscar_categorias = document.getElementById("buscar-categoria");


function ventana_buscar_categoria(){
    boton_nuevo_user.classList.remove("selected");
    boton_inicio.classList.remove("selected");
    boton_todos_los_usuarios.classList.remove("selected");
    boton_buscar_usuarios.classList.remove("selected");
    boton_nueva_categoria.classList.remove("selected");
    boton_todas_las_categorias.classList.remove("selected");
    boton_nuevo_producto.classList.remove("selected");
    boton_lista_producto.classList.remove("selected");

    boton_buscar_categorias.classList.add("selected");
}




////PRODUCTOS



document.getElementById("nuevo-producto").addEventListener("click", ventana_nuevo_producto);
var boton_nuevo_producto = document.getElementById("nuevo-producto");


function ventana_nuevo_producto(){
    boton_nuevo_user.classList.remove("selected");
    boton_inicio.classList.remove("selected");
    boton_todos_los_usuarios.classList.remove("selected");
    boton_buscar_usuarios.classList.remove("selected");
    boton_nueva_categoria.classList.remove("selected");
    boton_todas_las_categorias.classList.remove("selected");
    boton_buscar_categorias.classList.remove("selected");
    boton_lista_producto.classList.remove("selected");

    boton_nuevo_producto.classList.add("selected");
}


document.getElementById("lista-productos").addEventListener("click", ventana_lista_producto);
var boton_lista_producto = document.getElementById("lista-productos");


function ventana_lista_producto(){
    boton_nuevo_user.classList.remove("selected");
    boton_inicio.classList.remove("selected");
    boton_todos_los_usuarios.classList.remove("selected");
    boton_buscar_usuarios.classList.remove("selected");
    boton_nueva_categoria.classList.remove("selected");
    boton_todas_las_categorias.classList.remove("selected");
    boton_buscar_categorias.classList.remove("selected");
    boton_nuevo_producto.classList.remove("selected");

    boton_lista_producto.classList.add("selected");
}





