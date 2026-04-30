// Este archivo es para el popup que sale cuando quieres borrar un audio.

// Función que muestra el popup
export function mostrarPopUp() {
  const chat = document.querySelector(".chat");
  const input = document.getElementById("messageInput");

  // Creamos el popup
  const popUp = document.createElement("dialog");
  popUp.id = "popUp";
  chat.appendChild(popUp);

  // Ponemos el mensaje
  const texto = document.createElement("p");
  texto.id = "mensajePopUp";
  texto.innerHTML = "¿Deseas eliminar este audio?";
  popUp.appendChild(texto);

  // Creamos los botones
  const cancelar = document.createElement("button");
  const eliminar = document.createElement("button");

  cancelar.id = "botonCancelar";
  eliminar.id = "botonEliminar";
  cancelar.innerHTML = "Cancelar";
  eliminar.innerHTML = "Eliminar";

  popUp.appendChild(cancelar);
  popUp.appendChild(eliminar);

  // Lo mostramos
  popUp.showModal();

  // Si cancelas, cierras y limpias
  cancelar.addEventListener("click", () => {
    popUp.close();
    popUp.remove(); // Quitamos del DOM
  });

  // Si eliminas, paras la grabación y reseteas
  eliminar.addEventListener("click", () => {
    // Parar grabación si está andando
    if (window.mediaRecorder && window.mediaRecorder.state === 'recording') {
      window.mediaRecorder.stop();
    }
    // Limpiar los pedazos de audio
    if (window.audioChunks) window.audioChunks = [];
    // Cerrar y quitar
    popUp.close();
    popUp.remove();
    // Resetear la interfaz
    const recordBtn = document.getElementById("recordBtn");
    if (recordBtn) recordBtn.click();
  });
}