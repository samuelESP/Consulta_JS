/*Desafio
O fatorial de um número inteiro positivo N é o produto de todos os inteiros positivos menores ou iguais a n. Fazemos um fatorial desajeitado usando os inteiros em ordem decrescente, trocando as operações de multiplicação por uma rotação fixa de operações cuja ordem é: multiplicar '*', dividir '/', adicionar '+' e subtrair '-'. Por exemplo, desajeitado(10) = 10 * 9 / 8 + 7 - 6 * 5 / 4 + 3 - 2 * 1. Lembre-se que no fatorial desajeitado as operações ainda são aplicadas usando a ordem usual de operações aritméticas. Além disso, a divisão neste caso sempre resulta em um número inteiro, por exemplo, 90 / 8 = 11. Dado um inteiro N, retorne o fatorial desajeitado de n.

Entrada
A entrada consiste em um valor inteiro positivo N.

Saída
A saída consiste em retornar o valor do seu fatorial desajeitado de N, conforme exemplo abaixo.
Exemplo
Entrada: 4       Saída:7
Explicação: 7 = 4 * 3 / 2 + 1  */
//Dropei, inacabado
let n = parseInt(10);

let array = [];

function ArrayAte0(n) {
    if(n <= 2){
        return `Número muito baixo para se fazer o fatorial desajeitado`
    }else{
        while(n != 0){
            array.push(n);
            n = n -1;
        } 
    }

}
let resultado = n;

let operadores = ['*','/', '+','-']


function FatorialDesajeitado() {
    for(let j =1; j < array.length; j = j+3){
            
        for(let i = 1; i <= 4; i++){
                let b = n - [i]
                let operadoresNew = operadores[i-1]
                switch (operadoresNew) {
                    case '*':
                        resultado = resultado * (b);
                        break;
                    case '/':
                        resultado = resultado / (b);
                        break;
                    case '+':
                        resultado = resultado + (b);
                        break;
                    case '-':
                        resultado = resultado - (b);
                        n = n - 7;
                         break;
                    default:
                        'erro na operação'
                        break;
                }
            
        }
    }

}



ArrayAte0(n);
FatorialDesajeitado()

console.log(array);
console.log(resultado);
let resposta = parseInt(resultado)
console.log(resposta);