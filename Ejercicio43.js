function contador() {
    let cuenta = 0; 
    
    return function() {
    cuenta++;
    return cuenta;
    };
    }
    
const miContador = contador(); 
console.log(miContador());
console.log(miContador()); 
console.log(miContador()); 
const otroContador = contador();
console.log(otroContador()); 