class GestionTareas {
    constructor() {
    this.tareas = [];
    }
    
    agregar(tarea) {
    this.tareas.push(tarea);
    console.log(`Tarea agregada: "${tarea}"`);
    }
    
    completar(indice) {
    if (indice >= 0 && indice < this.tareas.length) {
    this.tareas[indice] = "7 " + this.tareas[indice];
    console.log("Tarea marcada como completada");
    } else {
    console.log("Índice inválido");
    }
    }
    
    obtenerEstadisticas() {
    const total = this.tareas.length;
    const completadas = this.tareas.filter(
    t => t.startsWith("7")
    ).length;
    const pendientes = total - completadas;
    
    return { total, completadas, pendientes };
    }
    
    mostrar() {
    console.log("\n=== LISTA DE TAREAS ===");
    this.tareas.forEach((tarea, i) => {
    console.log(`${i}. ${tarea}`);
    });
    }
    }
 
const misTareas = new GestionTareas();


misTareas.agregar("Estudiar JavaScript");
misTareas.agregar("Hacer ejercicio");
misTareas.agregar("Preparar presentación");


misTareas.mostrar();

misTareas.completar(0);

misTareas.mostrar();

const stats = misTareas.obtenerEstadisticas();
console.log("\n=== ESTADÍSTICAS ===");
console.log(`Total: ${stats.total}`);
console.log(`Completadas: ${stats.completadas}`);
console.log(`Pendientes: ${stats.pendientes}`);