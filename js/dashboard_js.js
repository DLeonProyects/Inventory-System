//dashboard JS_1.1


//Ejecucion de la funcion con el evento click
document.getElementById("btn_open").addEventListener("click", open_close_menu);


//Variables
var btn_open = document.getElementById("btn_open");


//var menuapagado = document.querySelector(".menu-botones-usuario");
var side_menu = document.getElementById("menu_side"); /*aqui se declaran variables del html*/
var body = document.getElementById("body");
var botones_login_salir_menu = document.getElementById("botones_de_usuario_menu"); //ID en el HTML
var titulo_del_menu = document.getElementById("titulo_menu"); 
var opciones_menu = document.getElementById("opciones_del_menu"); 
//menu-botones-usuario
//var opciones_menu_img = document.getElementById("menu_side"); 


//Funcion
    function open_close_menu(){
        body.classList.toggle("body_move");
        side_menu.classList.toggle("menu__side_move");
        botones_login_salir_menu.classList.toggle("prender_botones_login_salir_menu");// Clase en el CSS
        titulo_del_menu.classList.toggle("titulo_del_menu");
        opciones_menu.classList.toggle("opciones_menu");
       // opciones_menu_img.classList.toggle("opciones_menu_img")
    }



//Si el ancho de la página es menor a 760px, ocultará el menú al recargar la página

if (window.innerWidth < 760){

    body.classList.add("body_move");
    side_menu.classList.add("menu__side_move");
    //botones_login_salir_menu.classList.toggle("menu-botones-usuario-apagado");
}



window.addEventListener("resize", function(){

    if (window.innerWidth > 760){

        body.classList.remove("body_move");
        side_menu.classList.remove("menu__side_move");
       // opciones_menu.classList.add("opciones_menu");
        //botones_login_salir_menu.classList.add("prender_botones_login_salir_menu");
    }

    if (window.innerWidth < 760){

        body.classList.add("body_move");
        side_menu.classList.add("menu__side_move");
    }

});
