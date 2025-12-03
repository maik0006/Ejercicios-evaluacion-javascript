import fs from 'fs';

function actualizarContenido(nuevoContenido) {
fs.writeFile('log.txt', nuevoContenido, (err) => {
if (err) {
console.error("Error:", err);
return;
}
console.log("Archivo actualizado (UPDATE)");
});
}

const contenidoActualizado =
"Registro actualizado: " +
new Date().toLocaleString() + "\n";

actualizarContenido(contenidoActualizado);