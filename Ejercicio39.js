let precios = [10.50, 25.75, 5.20, 15.00];
    
let totalPrecios =
precios.reduce(function(acumulador,
precioActual) {
return acumulador + precioActual;
}, 0); 
console.log(totalPrecios);


let palabras = ["Hola", "mundo", "JavaScript"];

let fraseCompleta =
palabras.reduce((acumulador, palabra) =>
acumulador + " " + palabra);
console.log(fraseCompleta);


let votos = ['JavaScript', 'Python', 'JavaScript',
'C++', 'Python', 'JavaScript'];

let recuentoVotos = votos.reduce((acc, voto) =>
{
acc[voto] = (acc[voto] || 0) + 1;
return acc;
}, {});
acumulador
console.log(recuentoVotos);
