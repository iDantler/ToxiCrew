// Este archivo es para mandar mensajes de texto al chat.

// Cogemos los elementos del HTML que necesitamos, supongo que lo sabrás xd
const boton = document.getElementById("sendBtn");
const input = document.getElementById("messageInput");
const messages = document.getElementById("messages"); // Aquí van los mensajes

// Ponemos un sonido para cuando llegue un mensaje
const sonido = new Audio("audios/Notificación Universfield.mp3");

// Cuando le das al botón de enviar
boton.addEventListener("click", () => {
  const texto = input.value.trim(); // Sacamos el texto y quitamos espacios

  if (texto !== "") {
    // Creamos un div nuevo para el mensaje
    const nuevoMensaje = document.createElement("div");
    nuevoMensaje.classList.add("mis-mensajes");
    nuevoMensaje.innerText = texto;

    // Y otro para la hora
    const divFecha = document.createElement("div");
    divFecha.classList.add("fecha");
    const fecha = new Date();
    divFecha.innerText = fecha.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    // Lo metemos al chat
    messages.appendChild(nuevoMensaje);
    nuevoMensaje.appendChild(divFecha);

    // Limpiamos el input y bajamos el scroll
    input.value = "";
    messages.scrollTop = messages.scrollHeight;

    // Suena la notificación
    sonido.play();
  }
});

// También si pulsas Enter
input.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    boton.click();
  }
});