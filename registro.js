
/*function validar() {
    var nombres = document.getElementById("nombres").value;
    var apellidos = document.getElementById("apellidos").value;
    var correo = document.getElementById("correo").value;
    var contraseña = document.getElementById("contraseña").value;
    var val_string = /^[a-zA-Z\s]+$/;
    var val_correo = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    //VALIDAR QUE NO ACEPTE VACIOS
    if (nombres === "" || apellidos === "" || correo === "" || contraseña === "") {
        window.alert("Por favor, complete todos los campos requeridos.");
        return false;

    } else if (!val_string.test(nombres) ||!val_string.test(apellidos)){
        alert("Revise Nombres o Apellidos y digite correctamente");
        return false;
    }else if(!val_correo.test(correo)){
        alert("Revise el correo y digite correctamente");
        return false;
    }else if(contraseña.length <8){
        alert("Debe ser mayor o igual a 8 caracteres");
        return false;
    }else{
        return true;
        }
    }

function Registrar() {
    if (validar()) {
        var pass_admin = window.prompt("Digite la contraseña del administrador para continuar");
        if (pass_admin === "CONTRASEÑA1") {
            window.location = "paginap/index.html";
        }
    }

} */
function validar() {
    var nombres = document.getElementById("nombres").value;
    var apellidos = document.getElementById("apellidos").value;
    var correo = document.getElementById("correo").value;
    var contraseña = document.getElementById("contraseña").value;
    var val_string = /^[a-zA-Z\s]+$/;
    var val_correo = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    var val_contraseña = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/;

    if (nombres === "" || apellidos === "" || correo === "" || contraseña === "") {
        mostrarPopup();
        return false;
    } else if (!val_string.test(nombres) || !val_string.test(apellidos)) {
        mostrarPopup();
        return false;
    } else if (!val_correo.test(correo)) {
        mostrarPopup();
        return false;
    } else if (!val_contraseña.test(contraseña) && contraseña.length < 12) {
        mostrarPopup();
        return false;
    } else {
        mostrarREg_Ex();
        window.location.href = "paginap/paginaP.html"
        return true;

    }
}

function mostrarPopup() {
    document.getElementById("popup").style.display = 'block';
}
//funcion para cerrar la ventana
function cerrarVentana() {
    document.getElementById("popup").style.display = 'none';
}
function mostrarREg_Ex() {
    document.getElementById("reg_ex").style.display = 'block';


}
function cerrarReg_ex() {
    document.getElementById("reg_ex").style.display = 'none';
}
function paginap() {
    window.location.href = "paginap/paginaP.html"
}
/*f */
