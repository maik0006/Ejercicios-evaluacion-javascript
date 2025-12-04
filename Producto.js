class Producto {
    constructor(nombre, precio, cantidad) {
    this.nombre = nombre;
    this.precio = precio;
    this.cantidad = cantidad;
    }
    
    valorTotal() {
    return this.precio * this.cantidad;
    }
    
    static categoriaBase() {
    return "General";
    }
    }
    
    class ProductoElectronico extends Producto {
    constructor(nombre, precio, cantidad, garantia) {
    super(nombre, precio, cantidad);
    this.garantiaMeses = garantia;
    this.categoria = "Electrónico";
    }
    }
    class ProductoAlimenticio extends Producto {
        constructor(nombre, precio, cantidad, fecha) {
        super(nombre, precio, cantidad);
        this.fechaVencimiento = fecha;
        this.categoria = "Alimenticio";
        }
        }
        
        class Inventario {
        constructor() {
        this.productos = [];
        }
        
        agregar(producto) {
        this.productos.push(producto);
        }
        
        buscarPorCategoria(categoria) {
        return this.productos.filter(
        p => p.categoria === categoria
        );
        }
        }

const tienda = new Inventario();


tienda.agregar(new ProductoElectronico("Laptop", 1200, 5, 24));
tienda.agregar(new ProductoElectronico("Mouse", 25, 20, 12));


tienda.agregar(new ProductoAlimenticio("Leche", 3, 50, "2024-12-31"));
tienda.agregar(new ProductoAlimenticio("Pan", 2, 30, "2024-12-15"));


const electronicos = tienda.buscarPorCategoria("Electrónico");
console.log("\n=== PRODUCTOS ELECTRÓNICOS ===");
electronicos.forEach(p => {
console.log(`${p.nombre} - $${p.precio} - Stock: ${p.cantidad}`);
console.log(`Garantía: ${p.garantiaMeses} meses`);
console.log(`Valor total: $${p.valorTotal()}\n`);
});


const valorTotal = tienda.productos.reduce(
(sum, p) => sum + p.valorTotal(), 0
);
console.log(`Valor total del inventario: $${valorTotal}`);