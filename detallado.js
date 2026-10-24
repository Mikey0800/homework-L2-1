const fs = require('fs/promises');
const os = require('os');
const path = require('path');

function formatearTamano(bytes) {
  // Tu lógica para convertir bytes a formato legible
}

async function listarDetallado() {
  try {
    const dirUsuario = os.homedir();
    const items = await fs.readdir(dirUsuario);
    
    for (const item of items) {
      const rutaCompleta = path.join(dirUsuario, item);
      const stats = await fs.stat(rutaCompleta);
      
      // Formatear y mostrar información
    }
  } catch (error) {
    console.log('Error:', error.message);
  }
}

listarDetallado();