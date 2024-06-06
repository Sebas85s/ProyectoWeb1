let botonRegistrate = document.getElementById("boton_registrate")
let formularioRegistro = document.getElementById("registrarse")
let botonGuardar = document.getElementById("btnRegistrate")

botonRegistrate.addEventListener("click",()=>{
    registrarse.showModal();
})

botonGuardar.addEventListener("click",()=>{
    registrarse.close();
})