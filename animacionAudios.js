// animacionAudios.js
import { mostrarPopUp } from './funciones/popUp.js';
import { grabarAudio } from './funciones/grabarAudio.js';

const areaParaEscribir = document.querySelector(".inputArea");
const audioBtn = document.getElementById("recordBtn");
const input = document.getElementById("messageInput");
const botonEnviar = document.getElementById("sendBtn");

let contador = 0;
let mediaRecorder;
let audioChunks = [];
let botonPapelera;

audioBtn.addEventListener("click", async () => {
  if (contador % 2 === 0) {
    // --- MODO GRABAR ---
    mediaRecorder = await grabarAudio();
    
    if (mediaRecorder) {
      audioChunks = []; // Vaciamos la lista para la nueva grabación
            
      // IMPORTANTE: Guardamos en window para que el PopUp tenga acceso a lo último
      window.mediaRecorder = mediaRecorder;
      window.audioChunks = audioChunks;

      // Configuramos qué pasa cuando hay datos
      mediaRecorder.ondataavailable = event => {
        audioChunks.push(event.data);
      };

      // Configuramos qué pasa cuando se detiene (antes de darle a start)
      mediaRecorder.onstop = () => {
        // Creamos el archivo final (usamos webm porque wav no es nativo de MediaRecorder)
        const audioBlob = new Blob(audioChunks, { type: 'audio/webm' });
        const audioUrl = URL.createObjectURL(audioBlob);
        
        console.log('Audio generado correctamente:', audioUrl);
        
        // Aquí podrías llamar a una función de enviarMensaje(audioUrl)
        const audioParaReproducir = new Audio(audioUrl);
        audioParaReproducir.play(); 
      };

      mediaRecorder.start();

      // UI: Cambios visuales
      input.style.width = "86%";
      input.placeholder = "🔴 Grabando audio...";
      input.readOnly = true;

      botonPapelera = document.createElement("button");
      botonPapelera.id = "papelera";
      botonPapelera.innerHTML = '<img src="imagenes/Icono de Basura.png" alt="basura" style="width:20px;">';
      areaParaEscribir.insertBefore(botonPapelera, botonEnviar);

      botonPapelera.addEventListener("click", () => {
        mostrarPopUp(); // Este PopUp debería llamar a mediaRecorder.stop() si cancelas
      });
    }
  } else {
    // --- MODO PARAR ---
    if (mediaRecorder && mediaRecorder.state === 'recording') {
      mediaRecorder.stop();
    }

    // UI: Restaurar estado original
    input.style.width = "";
    if (botonPapelera) botonPapelera.remove();
    input.placeholder = "Escribe un mensaje...";
    input.readOnly = false;
  }
  contador++;
});