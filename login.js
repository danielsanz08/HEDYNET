function ingresar(){
    var usuario = document.getElementById("email").value;
    var contraseña = document.getElementById("contraseña").value;

    if(usuario === "" || contraseña === ""){
        mostrarAlert();
    } else if(usuario === "daniel" && contraseña === "CONTRASEÑA1"){
        window.location.href = "paginap/paginaP.html";
    } else {
        mostrarAlert();
        return false;
    }
}

function mostrarAlert() {
    document.getElementById("alert").style.display = 'block';
    return false;
}

function cerrarVentana() {
    document.getElementById("alert").style.display = 'none';
}
