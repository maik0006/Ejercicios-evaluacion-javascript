let estudiantes = [
    { nombre: "Carlos", aprobado: true },
    { nombre: "Elena", aprobado: true },
    { nombre: "Pedro", aprobado: true }
    ];
    
    let todosAprobados =
    estudiantes.every(estudiante =>estudiante.aprobado === true);
    console.log(todosAprobados);
    estudiantes[1].aprobado = false;
    
    todosAprobados = estudiantes.every(estudiante=> estudiante.aprobado === true);
    console.log(todosAprobados);
   
    
    let edades = [18, 22, 35, 19];
    let todosMayoresDeEdad = edades.every(edad=> edad >= 18);console.log(todosMayoresDeEdad);