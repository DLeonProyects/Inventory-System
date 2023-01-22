//JS Login and Register by BOTH




document.getElementById("solicitar").addEventListener("click", register);

document.getElementById("iniciar").addEventListener("click", login);

var caja__trasera = document.querySelector(".caja_trasera");

var caja__login = document.querySelector(".caja_login");
var caja__register = document.querySelector(".caja_register");

var formulario___login = document.querySelector(".formulario__login");
var formulario___register = document.querySelector(".formulario__register");


function register(){

    caja__register.style.display = "block";
    formulario___register.style.opacity = "1";
    



    caja__login.style.opacity = "0";
    formulario___login.style.display = "none";

}



function login(){


    caja__login.style.opacity = "1";
    formulario___login.style.display = "block";

    caja__register.style.display = "none";
    formulario___register.style.opacity = "0";




}

