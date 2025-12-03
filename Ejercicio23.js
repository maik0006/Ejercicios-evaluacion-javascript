class Auto{
    contructor(marca,velocidadinicial){
        this.marca=marca;
        this._velocidadinicial=velocidadinicial;
    }

set velocidad(valor){
    if(valor>=0){
        this._velocidad=valor;
    }else{
        console.log("Error:La velocidad no puede ser negativa");
    }
}
get velocidad(){
    return this._velocidad;
}
}
const carro = new Auto("Ford", 80);
console.log("Velocidad:", carro.velocidad); 
carro.velocidad = 120; 
carro.velocidad = -50; 