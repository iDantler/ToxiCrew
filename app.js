const boton = document.getElementById("sendBtn");
const input = document.getElementById("messageInput");

boton.addEventListener("click", () => {
  const texto = input.value;

  if(texto !== "") {
    const nuevoMensaje = document.createElement("div");
    nuevoMensaje.classList.add("burbuja");
    nuevoMensaje.innerText = texto;

    messages.appendChild(nuevoMensaje);

    input.value = "";
    messages.scrollTop = messages.scrollHeight;
  }
});

input.addEventListener("keypress", (event) => {
  if(event.key === "Enter") {
    boton.click();
  }
});