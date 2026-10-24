//index.js
const fs = require('fs/promises');
const os = require('os');
const path = require('path');
const { mostrarCiudad } = require('./process');

async function listarDirectorio() {
  try {
    const ruta = path.join(__dirname, 'datos');
    const archivos = await fs.readdir(ruta);
    console.log(archivos);
    
  } catch (error) {
    console.log('Error:', error.message);
  }
  
}

listarDirectorio();


console.log(mostrarCiudad({ nombre: 'Bogotá', habitantes: 1790000}));
console.log(mostrarCiudad({ nombre: 'Medellín', habitantes: 543050}));
console.log(mostrarCiudad({ nombre: 'Buenos aires', habitantes: 1234532}));



