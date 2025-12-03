let torres1 = prompt("Ingrese primer valor:");
let torres2 = prompt("Ingrese segundo valor:");

let n1 = parseInt(torres1, 10);
let n2 = parseInt(vtorres2, 10);

if (isNaN(n1) || isNaN(n2)) {
alert("Por favor ingrese números válidos");
} else {
let resultado = n1 + n2;
alert(`El resultado de ${n1} + ${n2} = ${resultado}`);
}