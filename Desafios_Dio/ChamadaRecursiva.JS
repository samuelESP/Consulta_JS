/*Descrição
Neste desafio, receba um número inteiro N, calcule e imprima o somatório de todos os números de N até 0.   

Entrada
A Entrada será composta por um número inteiro, N. 

Saída
Será  impresso o somatório de N até 0, como no exemplo a baixo: 
Entrada:10     Saída:55 
Entrada:4     Saída:10 
Entrada:15     Saída:120 */

let N = parseInt(4);

function recursiva(N){
    if(N != 0){
        return N + recursiva(N-1)
    }else{
        return N
    }
}
console.log(recursiva(N));