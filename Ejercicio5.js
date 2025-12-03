const TASA_IMPUESTO = 0.15;

let precioStringmt = prompt("Ingrese el precio:");
let preciomt = Number(precioStringmt);

if (!isNaN(precio)) {
let impuestomt = preciomt * TASA_IMPUESTO;
let total = preciomt + impuestomt;

console.log("Precio base:", preciomt);
console.log("Impuesto (15%):", impuestomt.toFixed(2));
console.log("Total a pagar:", total.toFixed(2));
} else {
console.log("Error: Entrada inválida");
}