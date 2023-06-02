const iva=16;
let precio=15;
let total;
let totalApagar;

total=(precio/100)*iva;
totalApagar=precio+total;

console.log("ticket de pago");
console.log("Total de pago es de $ "+precio);
console.log("Cargo por IVA $"+total);
console.log("Total a pagar $"+totalApagar)