// Um array(também chamada de lista) consiste em uma estrutura de dados que armazena uma coleção de elementos de tal forma que cada um dos elementos possa ser identificado por, pelo menos, um índice ou uma chave. 
const lista = []; // Dessa forma que se declara um array
const lista2 = ['Samuel', 'marina', 12];
console.log(lista2);


//Para acessar um valor especifico de uma lsita eu posso passar a posição dele na lista, lembrando que sempre começa a contar do número zero, então o primeiro elemento se encontra na posição 0:
const posicao = ['alo', 'amigos', 'da', 'rede', 'globo'];
console.log(posicao[1]);// --> 'amigos'.


//Para adicioar um elemento na mista lista eu uso o push:
const array = [1,2,3,4,6];
array.push(30); 
console.log(array);//--> [ 1, 2, 3, 4, 6, 30 ]
//OU
array[2]= 100;
console.log(array);// -->[ 1, 2, 100, 4, 6, 30 ]

//Se encontra mais sobre as funções : push, pop, shift, unshift e reverse na aula sobre bibliotecas.

//Para mostrar o tamanho da lista se usa o length:
const numeros = [1,2,3,4,5,6,7,8,9]
console.log(numeros.length);


//Imagine que se quer tirar a media das provas que o aluno tirou, mas não se sabe o número de provas que ele fez e nem se ele ainda vai fazer mais provas no futuro, para resolver isso podemos usara uma lista com estrutura de repetição.

const notas = [];

notas.push(10);
notas.push(2);
notas.push(3);
notas.push(6);
notas.push(7);

//Vamos usar a estrutura for. O For é usado quando se que fazer repetições que o programa "sabe" a quantidade de vezes ele vai repetir:
let sum = 0;
for (let i = 0; i < notas.length; i++) {
    const nota = notas[i];
    sum = sum + nota; // sum += nota
} 

console.log("A média do miliante é de " + sum / notas.length); //Toda vez eu adicionar uma nova push nas notas ele iram modificar o valor da minha soma

