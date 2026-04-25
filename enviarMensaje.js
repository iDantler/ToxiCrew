const boton = document.getElementById("sendBtn");
const input = document.getElementById("messageInput");

sonido = new Audio("audios/Notificación Universfield.mp3");

boton.addEventListener("click", () => {
  const texto = input.value;

  if(texto !== "") {
    const nuevoMensaje = document.createElement("div");
    const fecha = new Date();
    const divFecha = document.createElement("div");

    nuevoMensaje.classList.add("mis-mensajes");
    nuevoMensaje.innerText = texto;

    divFecha.classList.add("fecha");
    divFecha.innerText = fecha.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    messages.appendChild(nuevoMensaje);
    nuevoMensaje.appendChild(divFecha);

    input.value = "";
    messages.scrollTop = messages.scrollHeight;

    sonido.play();
  }
});

input.addEventListener("keypress", (event) => {
  if(event.key === "Enter") {
    boton.click();
  }
});