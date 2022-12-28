/*Desafio
Neste desafio, você terá que criar uma função que faça um número como argumento e retorne "Fizz", "Buzz" ou "FizzBuzz". 

Entrada
Você receberá um número onde: 
Se o número for um múltiplo de 3 e 5 -> "FizzBuzz" ; 
Se o número for apenas múltiplo de 3 -> "Fizz" ; 
Se o número for apenas múltiplo de 5 -> "Buzz"; 
Se o número não for um múltiplo de 3 ou 5, o número deve ser exibido; 

Saída
Retorne a palavra correta de acordo com o seu múltiplo. Caso o valor não seja múltiplo de 3 ou 5, exiba o número, conforme exemplo abaixo:
Exemplo:
Entrada: 3        Saída:Fizz
Entrada: 5        Saída:Buzz
Entrada: 15       Saída:FizzBuzz
Entrada: 4        Saída:4*/ 

let numero = parseInt(4);

function FizzBuzz(numero) {
    if(numero % 3 == 0 && numero % 5 == 0){
        return 'FizzBuzz';
    }else if(numero % 3 == 0){
        return "Fizz";
    }else if(numero % 5 == 0){
        return "Buzz";
    }else{
        return `O número não é multiplico de 3 e nem de 5, sendo ele o número ${numero}`
    }
}

console.log(FizzBuzz(numero));
