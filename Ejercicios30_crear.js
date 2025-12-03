import fs from 'fs';

const fecha = new Date().toISOString();
const contenido = `Log creado: ${fecha}\n`;

fs.writeFile('log.txt', contenido, (err) => {if (err) {console.error("Error:", err);return;}
console.log("Archivo creado exitosamente (CREATE)");
});