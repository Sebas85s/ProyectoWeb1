// Crear el elemento de diálogo
let bloqueNotificaciones = document.createElement("dialog");
bloqueNotificaciones.id = "NotificacionBox";

// Crear el contenido del modal
let recuadroNotificaciones = document.createElement("div");
recuadroNotificaciones.id = "RecuadroNotificaciones";
bloqueNotificaciones.appendChild(recuadroNotificaciones);

// Agregar elementos de ejemplo al modal
let notificaciones = [
    { mensaje: "Nuevo mantenimiento fue agregado.", tiempo: "Hace 5 minutos" },
    { mensaje: "Tu solicitud ya se encuentra en gestión", tiempo: "Hace 10 minutos" },
    { mensaje: "Tu mantenimiento fue finalizado correctamente.", tiempo: "Hace 20 minutos" },
    { mensaje: "Tu solicitud ha sido enviada", tiempo: "Hace 30 minutos" }
];

notificaciones.forEach((notificacion) => {
    let item = document.createElement("div");
    item.classList.add("notification-item");
    item.innerHTML = `<p>${notificacion.mensaje}</p><span class="timestamp">${notificacion.tiempo}</span>`;
    recuadroNotificaciones.appendChild(item);
});

// Agregar el diálogo al cuerpo del documento
document.body.appendChild(bloqueNotificaciones);

// Obtener el elemento h1 de notificaciones
let btnNotificaciones = document.getElementById("bntNotificaciones");

// Agregar evento para mostrar el modal al hacer clic en el h1
btnNotificaciones.addEventListener("click", () => {
    bloqueNotificaciones.showModal();
});

// Cerrar modal al hacer clic fuera de él
bloqueNotificaciones.addEventListener("click", (event) => {
    if (event.target === bloqueNotificaciones) {
        bloqueNotificaciones.close();
    }
});
