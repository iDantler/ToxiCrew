import { mostrarPopUp } from './popUp.js';

const areaParaEscribir = document.querySelector(".inputArea");
const audio = document.getElementById("recordBtn");
const inpuT = document.getElementById("messageInput");
const botonEnviar = document.getElementById("sendBtn");

let contador = 0;

//hay que poner que se borre la grabación del audio cuando se pulse el botón de la basura
//poner que cuando borres el audio te salga una pestaña emergente que te diga si estás seguro de que quieres hacerlo o no

let botonPapelera;

audio.addEventListener("click", () => {
  if(contador % 2 === 0) {
    inpuT.style.width = "86%";

    botonPapelera = document.createElement("button");
    botonPapelera.id = "papelera";

    inpuT.placeholder = "🔴 Grabando audio";
    inpuT.readOnly = true;

    areaParaEscribir.insertBefore(botonPapelera, botonEnviar);
    botonPapelera.innerHTML = '<img src="imagenes/Icono de Basura.png" alt="basura">';

    const basura = document.getElementById("papelera");

    basura.addEventListener("click", () => {
      mostrarPopUp();
    });
  }
  else {
    inpuT.style.width = "";
    botonPapelera.remove();
    inpuT.placeholder = "Escribe un mensaje..."
    inpuT.readOnly = false;
  }
  contador++;
});