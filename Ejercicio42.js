function crearSaludo(saludoInicial) {
    return function(nombre) {
    return `${saludoInicial}, ${nombre}!`;
    };
    }
    
    const saludarHola = crearSaludo("Hola");
    const saludarQueTal = crearSaludo("Qué tal");
    
console.log(saludarHola("Ana")); 
console.log(saludarQueTal("Pedro")); 