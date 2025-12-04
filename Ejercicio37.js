let productos = [
    { nombre: "Leche", agotado: true },
    { nombre: "Pan", agotado: false },
    { nombre: "Huevos", agotado: false }
    ];
    
    let hayAgotados = productos.some(producto =>
    producto.agotado === true);
    console.log(hayAgotados);

    
    let hayProductosCaros =
    productos.some(producto => producto.precio >
    100);
    console.log(hayProductosCaros);
    
    let numeros = [10, 25, 30, 45];
    let hayNumerosGrandes = numeros.some(num=> num > 40);
    console.log(hayNumerosGrandes);
 