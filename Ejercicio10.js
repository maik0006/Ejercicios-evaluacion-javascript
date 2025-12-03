let temperaturastorres = [15, 22, 33, 45, 68, 82, 91];

let temperaturasAltas = temperaturastorres.filter(temp => temp > 50);

console.log("Originales:", temperaturastorres);
console.log("Mayores a 50:", temperaturasAltas);