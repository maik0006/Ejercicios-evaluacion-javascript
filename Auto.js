class Auto {
    constructor(marca, modelo) {
    this.marca = marca;
    this.modelo = modelo;
    }
    
    obtenerDescripcion() {
    return `${this.marca} ${this.modelo}`;
    }
    }
    
    export default Auto;