/*Desafio
Seu Raimundo tem uma lista de números. Porém, ele gosta muito das coisas em ordem e deseja que você o ajude a construir um programa que pegue todas as listas dele, uma de cada vez, e coloque os inteiros pares no início e os inteiros ímpares no final.

Entrada
A entrada são arrays de tamanho variado que possuem somente números inteiros.

Saída
A saída deverá retornar todos os valores pares para o começo do array, seguido pelos ímpares, conforme exemplo abaixo:
Entrada:4,1,3,2  	 Saida:4,2,1,3 */

let arr = [4,1,3,2]
let arrayPares = [];
let arrayImpares = [];


function ParesEImpares(arr) {
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] % 2 == 0){
            arrayPares.push(arr[i]);
        }else{
            arrayImpares.push(arr[i]);
        }
    }
    
}
ParesEImpares(arr)
let arrVazio=[...arrayPares, ...arrayImpares]

console.log(arrVazio);