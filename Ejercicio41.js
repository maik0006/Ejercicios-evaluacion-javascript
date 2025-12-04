function aplicarOperacion(a, b, operacion) {
    return operacion(a, b);
    }
    
    function sumar(x, y) {
    return x + y;
    }
    
    function multiplicar(x, y) {
    return x * y;
    }
    
let resultadoSuma = aplicarOperacion(5, 3, sumar);
console.log(resultadoSuma); 
    
let resultadoMultiplicacion = aplicarOperacion(5, 3,multiplicar);
console.log(resultadoMultiplicacion);