/*Desafio
Nesse desafio, dados dois números, verifique se eles são iguais. Caso sejam, retorne "Sao iguais!”. Caso contrário, retorne "Nao sao iguais!” sem as aspas. 

Entrada
As entradas serão dois valores, um em cada linha, representados por A e B, que sempre serão números inteiros. 

Saída
A saída deverá retornar a frase "Sao iguais!" caso A e B sejam o mesmo valor. Caso contrário,  retorne "Nao sao iguais!", sem as aspas.
Exemplo:
Entrada: 1 e 2            Saída: Não são igauis
Entrada: 50 e 50          Saída: São iguais  */

let A = 10;
let B= 10;

function Iguais(A, B) {
    if(A == B){
        return "São iguais"
    }
    return "Não são Iguais"
}

console.log(Iguais(A,B));