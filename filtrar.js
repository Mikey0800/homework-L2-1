const fs = require('fs/promises');
const os = require('os');
const path = require('path');

async function filtrarJavaScript() {
  try {
    const dirUsuario = os.homedir();
    const items = await fs.readdir(dirUsuario);
    const archivosJS = [];
    
    for (const item of items) {
      if (path.extname(item) === '.js') {
        // Procesar y agregar a archivosJS
      }
    }
    
    console.log(`Encontrados ${archivosJS.length} archivos JavaScript`);
    // Mostrar cada uno
  } catch (error) {
    console.log('Error:', error.message);
  }
}

filtrarJavaScript();