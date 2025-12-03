import fs from 'fs';

const archivo = "temporal.txt";

if (fs.existsSync(archivo)) {
try {
fs.unlinkSync(archivo);
console.log(`Archivo '${archivo}' eliminado exitosamente`);
} catch (err) {
console.error("Error al eliminar:", err);
}
} else {
console.log(`El archivo '${archivo}' no existe`);
}