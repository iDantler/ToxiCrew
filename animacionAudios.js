// Este archivo es para la animación y la interfaz cuando grabas audios.

// Importamos las funciones que necesitamos
import { mostrarPopUp } from './popUp.js';
import { grabarAudio } from './grabarAudio.js';

// Cogemos los elementos del HTML
const areaParaEscribir = document.querySelector(".inputArea");
const audioBtn = document.getElementById("recordBtn");
const input = document.getElementById("messageInput");
const botonEnviar = document.getElementById("sendBtn");

// Un contador para saber si estamos grabando o no
let contador = 0;

// Variable para el botón de basura
let botonPapelera;

// Variables para grabar el audio
let mediaRecorder;
let audioChunks = [];

// Las ponemos globales para que el popup las pueda usar
window.mediaRecorder = mediaRecorder;
window.audioChunks = audioChunks;

// Cuando le das al botón de grabar
audioBtn.addEventListener("click", async () => {
  if (contador % 2 === 0) {
    // Empezar a grabar
    mediaRecorder = await grabarAudio();
    window.mediaRecorder = mediaRecorder; // Lo ponemos global
    if (mediaRecorder) {
      audioChunks = [];
      window.audioChunks = audioChunks; // También global
      mediaRecorder.start();
      mediaRecorder.ondataavailable = event => {
        audioChunks.push(event.data);
      };

      // Cambiar la interfaz para grabar
      input.style.width = "86%";
      input.placeholder = "🔴 Grabando audio";
      input.readOnly = true;

      // Crear el botón de basura
      botonPapelera = document.createElement("button");
      botonPapelera.id = "papelera";
      botonPapelera.innerHTML = '<img src="imagenes/Icono de Basura.png" alt="basura">';
      areaParaEscribir.insertBefore(botonPapelera, botonEnviar);

      // Si le das a la basura, sale el popup
      botonPapelera.addEventListener("click", () => {
        mostrarPopUp();
      });
    }
  } else {
    // Parar la grabación
    if (mediaRecorder && mediaRecorder.state === 'recording') {
      mediaRecorder.stop();
      mediaRecorder.onstop = () => {
        // Aquí se podría enviar el audio o guardarlo
        const audioBlob = new Blob(audioChunks, { type: 'audio/wav' });
        console.log('Audio grabado:', audioBlob);
        // Por ejemplo, crear un mensaje con el audio
        // const audioUrl = URL.createObjectURL(audioBlob);
        // Agregar al chat como mensaje de audio
      };
    }

    // Modo normal: restaurar UI
    input.style.width = "";
    if (botonPapelera) botonPapelera.remove();
    input.placeholder = "Escribe un mensaje...";
    input.readOnly = false;
  }
  contador++;
});