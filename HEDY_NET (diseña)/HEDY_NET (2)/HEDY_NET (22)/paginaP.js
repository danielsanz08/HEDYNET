//Ejecutar funcion en el evento click//
document.getElementById("btn_open").addEventListener("click", open_close_menu);

//Declarar variables//
var menu = document.getElementById("menu");
var btn_open = document.getElementById("btn_open");
var body = document.getElementById("body");

//Evento para mostrar y ocultar menu//
function open_close_menu(){
    body.classList.toggle("body_mov");
    menu.classList.toggle("menu_mov");
}