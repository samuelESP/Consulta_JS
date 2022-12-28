/*Desafio
Neste desafio você deverá construir uma função que recebe uma String e identifique se a mesma é um palíndromo, ou seja, se a String é igual a ela mesma invertida. 

Dado que temos a String "digital" uma vez invertida temos "latigid" que são diferentes. 

Logo, NÃO é um Palíndromo. 

Já se recebemos a string "radar" uma vez invertida temos "radar" que são iguais.

Entrada
A entrada consiste em um palavra.

Saída
Para cada String informada, terá uma saída de valor Booleano: TRUE, caso a palavra seja um palíndromo, ou FALSE caso a palavra NÃO seja um palíndromo.

Entrada: radar      Saída= true
Entrada: carro       Saída= False*/

let str = 'radar';



function Palindromo1(){
    return str === str.split('').reverse().join('')
    }
console.log(Palindromo1(str));




function Palindromo2(){
for (let i = 0; i < str.length/2; i++) {
    if(str[i] !== str[str.length -1 -i]) {
        return 'FALSE';
    }
   
 }
return 'TRUE'; 
}
console.log(Palindromo2(str));

    