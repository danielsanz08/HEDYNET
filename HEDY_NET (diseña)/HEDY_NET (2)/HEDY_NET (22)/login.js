function ingresar() {
    var usuario = document.getElementById('email').value;
    var password = document.getElementById('contraseña').value;

    if (usuario === "daniel" && password === "CONTRASEÑA1") {
        window.location.href = "paginap/paginaP.html";
        return false;
    } else if(usuario==="" || password===""){
        mostrarAlert();
        // Evitar redireccionamiento por defecto
        return false;
    }
}

function mostrarAlert() {
    document.getElementById("alert").style.display = 'block';
}

function cerrarVentana() {
    document.getElementById("alert").style.display = 'none';
}
