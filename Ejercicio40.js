let frutas = ["Manzana", "Naranja", "Banana","Kiwi"];
frutas.sort();
console.log(frutas);
let numeros = [40, 100, 1, 5, 25, 10];

numeros.sort(function(a, b) {
return a - b;
});
console.log(numeros);

numeros.sort((a, b) => b - a);
console.log(numeros);

let productos = [
{ nombre: "Mouse", precio: 25 },
{ nombre: "Laptop", precio: 1200 },
{ nombre: "Teclado", precio: 75 }
];

productos.sort((a, b) => a.precio - b.precio);
console.log(productos);