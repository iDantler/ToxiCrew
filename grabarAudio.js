const areaParaEscribir = document.querySelector(".inputArea");
const audio = document.getElementById("recordBtn");
const inpuT = document.getElementById("messageInput");
const botonEnviar = document.getElementById("sendBtn");

contador = 0;

audio.addEventListener("click", () => {
  if(contador % 2 === 0) {
    input.style.width = "80%";

    botonPapelera = document.createElement("button");
    botonPapelera.id = "papelera";

    areaParaEscribir.insertBefore(botonPapelera, botonEnviar);
    botonPapelera.innerHTML = '<img src="imagenes/Icono de Basura.png" alt="basura" style="width:20px;">';
  }
  else {
    input.style.width = "";
    botonPapelera.remove();
  }
  contador++;
});