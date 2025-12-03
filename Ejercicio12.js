let colaClientesmt = ["Cliente A", "Cliente B", "Cliente C"];
console.log("Cola inicial:", colaClientesmt);

let atendido = colaClientesmt.shift();
console.log("Cliente atendido:", atendido);
console.log("Cola después de shift:", colaClientesmt);

colaClientesmt.unshift("Cliente Prioritario");
console.log("Cola final:", colaClientesmt);