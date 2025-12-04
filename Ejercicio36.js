let numeros = [10, 20, 30, 40];

numeros.forEach(function(numero, index) {
console.log(`El número en la posición ${index}
es ${numero}`);
});

let productos = [
{ nombre: "Laptop", precio: 1200 },
{ nombre: "Mouse", precio: 25 },
{ nombre: "Teclado", precio: 75 }
];

productos.forEach(producto => {
console.log(`Producto: ${producto.nombre},
Precio: $${producto.precio}`);
});