/*1) Crie um programa que dado um número imprima a sua tabuada.*/

const numero = 3;
console.log("Tabuada do número " + numero);
for(let i = 1; i <= 10; i++){
    console.log(numero + " X "  + i + " = "+  numero * i);
}

/*2) Crie um programa que seja capaz de percorrer uma lista de números e imprima cada número Par encontrado.*/

let lista_organizada= [];
const lista_de_numeros = [1,2,3,4,5,6,7,8,9,11,23,635,876,12];
 for (let i = 0; i < lista_de_numeros.length; i++) {
    if(lista_de_numeros[i] % 2 == 0){
        lista_organizada.push(lista_de_numeros[i])
    }
    
 }
console.log(lista_organizada);

/*3) Faça um programa que dado uma lista de nomes imprima os nomes que começem com a letra "V".*/


/*4) Faça um programa que preencha uma lista com todos os números pares contidos no intervalo de 10 a 50;*/

let pares = [];
for (let index = 11; index < 50; index++) {
    if (index % 2 ==0) {
        pares.push(index);
    }
}
console.log(pares);

/*5) Dado uma lista com as médias tiradas pelos alunos. Imprima todas as médias que ficaram de recuperação (média < 5).
   Ex de lista = [2, 7, 3, 8, 10, 4]*/

const media = [2, 7, 3, 8, 10, 4];
let recup=[];
for (let i = 0; i < media.length; i++) {
    if(media[i] < 5){
        recup.push(media[i]);
    }
    
}
console.log(recup);




/*6) Dado uma lista com as notas tiradas pelos alunos. imprima a maior nota.
   Ex de lista de notas = [2, 7, 3, 8, 10, 4]*/


const notas = [2, 7, 3, 8, 10, 4];

let variavel = 0;

for (let i = 0; i < notas.length; i++) {
    
    if (notas[i]>variavel) {
        
        variavel = notas[i];
    }

}
console.log(variavel);

//console.log(Math.max(...notas)); --> resposta alternativa