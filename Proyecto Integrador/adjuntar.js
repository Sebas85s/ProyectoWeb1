document.addEventListener("DOMContentLoaded", function() {
    var contenedorAdjuntar = document.getElementById("contenedorAdjuntar");
    var uploadInput = document.getElementById("upload");
    var nombreArchivoSpan = document.getElementById("nombreArchivo");
    var archivoAdjuntoDiv = document.getElementById("archivoAdjunto");
    var quitarArchivoBtn = document.getElementById("quitarArchivo");

    contenedorAdjuntar.addEventListener("click", function() {
        uploadInput.click(); // Simular clic en el input de archivo
    });

    uploadInput.addEventListener("change", function() {
        var archivo = uploadInput.files[0];
        if (archivo) {
            nombreArchivoSpan.textContent = archivo.name;
            archivoAdjuntoDiv.removeAttribute("hidden");
        }
    });

    quitarArchivoBtn.addEventListener("click", function() {
        uploadInput.value = ""; // Limpiar el input de archivo
        nombreArchivoSpan.textContent = "";
        archivoAdjuntoDiv.setAttribute("hidden", true);
    });
});
