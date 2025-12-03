import fs from 'fs';

const nuevaLinea =
"--- Nueva entrada: Verificación OK\n";

fs.appendFile('log.txt', nuevaLinea, (err) => {
if (err) {
    console.error("Error:", err);
    return;
}
    console.log("Dato agregado (APPEND)");
});