/*Desafio
Dado um número A e o seu limite N, encontre a soma de todos os múltiplos A até o seu limite N.

Entrada
A entrada deverá ser composta pelo valor A na primeira linha, seguido do valor N na segunda. 

Saída
A saída deverá retornar o valor da soma de todos os múltiplos A até o seu limite N.Desafio
Dado um número A e o seu limite N, encontre a soma de todos os múltiplos A até o seu limite N.
Exmplo:
Entrada: 5 e 20                                    saída:50
                            5+10+15+20=50
*/

let a = parseInt(5);

let N = parseInt(20);

let soma = 0;

for(let i = 0; (a*i) <= N; i++){
    soma += a * i
}

console.log(soma);