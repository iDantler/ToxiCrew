export function mostrarPopUp() {
  const chat = document.querySelector(".chat");
  const inpuT = document.getElementById("messageInput");

  
  //creamos el popUp
  const popUp = document.createElement("dialog");
  popUp.id = "popUp";
  chat.appendChild(popUp);
      
  const texto = document.createElement("p");
  popUp.appendChild(texto);
  texto.id = "mensajePopUp";
  texto.innerHTML = "¿Deseas eliminar este mensaje?";

  //ahora creamos las dos opciones
  const cancelar = document.createElement("button");
  const eliminar = document.createElement("button");
  const botonPapelera = document.getElementById("papelera");

  cancelar.id = "botonCancelar";
  eliminar.id = "botonEliminar";

  cancelar.innerHTML = "Cancelar";
  eliminar.innerHTML = "Eliminar";

  popUp.appendChild(cancelar);
  popUp.appendChild(eliminar);

  popUp.showModal();

  cancelar.addEventListener("click", () => {
    popUp.close();
  });
}