// Aquí está la función para grabar audio.
// Está medio incompleta, pero sirve para pedir permiso al micro y empezar.

// Función que inicia la grabación
export async function grabarAudio() {
  try {
    // Pedimos permiso para usar el micro
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    // Creamos el grabador con el stream
z
    const mediaRecorder = new MediaRecorder(stream);
    // Después habría que guardar el audio o mandarlo, pero por ahora solo lo devolvemos
    return mediaRecorder;

  } catch (error) {
    alert("No se pudo acceder al micrófono. Por favor, dale permiso en el navegador.");  
    console.log("no funciona");
    return null;
  }
}