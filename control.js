
let lista = ["mochila1","mochila2","mochila3",
    "mochila4","mochila5","mochila6" ];

function enviarform(){

    let nombre ="Melody"
    let contraNuev ="ingresar"

    let usuario = document.getElementById("user1").value
    if(usuario == nombre){
        console.log("correcto")
        
    }
    else{
        console.log("Incorrecto")
    }
    let contra = document.getElementById("contra1").value
    if(contra == contraNuev){
        console.log("correcto")
        
    }
    else{
        console.log("Incorrecto")
    }
    
    
    if((usuario===nombre)&&(contra===contraNuev)){
        alert("usuario y contraseña correctos")
        window.location.href="principal.html"
    }

    else{
        alert("usuario o contraseña incorrectos")
    }
}

function pedidoNuevo(){
    
    window.location.href="FormCompra.html"
    
}
console.log(lista)


function enviarFormulario() {

    if(confirm("Desea enviar el formulario")){
        alert("formulario enviado")
        window.location.href = "enviado.html"
    }
    else{
        alert("envio cancelado")
    }
}

function redireccionarPagPrincipal() {
    window.location.href = "principal.html"
}


