function sumarArreglo(arr) {
    let sumamt = 0;
    for (let i = 0; i < arr.length; i++) {
    sumamt += arr[i];
    }
    return sumamt;
    }
    
    let ventas = [100, 200, 300, 400, 500];
    console.log("Total:", sumarArreglo(ventas));