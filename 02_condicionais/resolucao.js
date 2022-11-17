/*Faça um programa para calcular o valor de uma viagem.

Você terá 5 variáveis. Sendo elas:
 1 - Preço do etanol;
 2 - Preço do gasolina;
 3 - O tipo de combustível que está no seu carro;
 4 - Gasto médio de combustível do carro por KM;
 5 - Distância em KM da viagem;

Imprima no console o valor que será gasto para realizar esta viagem.*/

const etanol= 4;
const gasolina= 5;
const kmPorLitros = 10;
const distanciaEmKm = 30;
const tipoCombustivel = "a";

const quantidadeGasta = distanciaEmKm*kmPorLitros;

if(tipoCombustivel == "Gasolina"){//Se for escrito "gasolina"(com o g minúsculo) ele já não entra mais nesse if, e sim no else.
    const valorGasto  = quantidadeGasta * gasolina;
    console.log("Foram gastos R$"+valorGasto.toFixed(2)+ " para esta viagem");
}else{
    const valorGasto  = quantidadeGasta * etanol;
    console.log("Foram gastos R$"+valorGasto.toFixed(2)+ " para esta viagem");
}