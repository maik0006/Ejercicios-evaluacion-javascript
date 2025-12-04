function* generadorId() {
    let id = 1;
    while (true) {
    yield id++; 
    }
    }
    
    const siguienteId = generadorId();
    console.log(siguienteId.next().value); 
    console.log(siguienteId.next().value); 
    console.log(siguienteId.next().value); 
    
    function* secuenciaNumerica(limite) {
    for (let i = 0; i <= limite; i++) {
    yield i;
    }
    }
    
    const numeros = secuenciaNumerica(3);
    console.log(numeros.next().value);
    console.log(numeros.next().value); 
    console.log(numeros.next().value); 
    console.log(numeros.next().value); 
    console.log(numeros.next().done); 