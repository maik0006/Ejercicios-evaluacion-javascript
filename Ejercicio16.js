function esMayorDeEdad(edad) {
    if (edad >= 18) {
    return true;
    } else {
    return false;
    }
    }
    
    function esMayorDeEdadSimple(edad) {
    return edad >= 18;
    }
    
    console.log("Edad 20:", esMayorDeEdad(20)); 
    console.log("Edad 16:", esMayorDeEdad(16));