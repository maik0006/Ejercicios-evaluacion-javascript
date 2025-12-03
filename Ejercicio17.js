function clasificartorresTemperatura(fahrenheit) {
    if (fahrenheit >= 14 && fahrenheit < 32) {
    return "Temperatura baja";
    } else if (fahrenheit >= 32 && fahrenheit < 68) {
    return "Temperatura adecuada";
    } else if (fahrenheit >= 68 && fahrenheit < 96) {
    return "Temperatura alta";
    } else {
    return "Temperatura desconocida";
    }
    }
    
    console.log(clasificartorresTemperatura(25));
    console.log(clasificartorresTemperatura(50)); 
    console.log(clasificartorresTemperatura(85)); 