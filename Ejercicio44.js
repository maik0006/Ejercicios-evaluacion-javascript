function factorial(n) {
    if (n === 0 || n === 1) {
    return 1;
    }

    return n * factorial(n - 1);
    }
    
    console.log(factorial(5)); 
    console.log(factorial(0)); 
    
    function sumaHasta(n) {
    if (n === 0) {
    return 0;
    }
    return n + sumaHasta(n - 1);
    }
    
 console.log(sumaHasta(4)); 