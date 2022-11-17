const precoCombustivelPorLitro = 5.79;
const kmPorLitros = 1;
const distanciaEmKM = 10;

const resultado = (distanciaEmKM * kmPorLitros)*precoCombustivelPorLitro;
console.log("Foram gastos R$"+ resultado.toFixed(2) + " de combustível para realizar esta viagem");
//toFixed() --> converte o valor para uma string e obriga o valor a ter um quantidade pré-definida de números depois da casa deciamal.