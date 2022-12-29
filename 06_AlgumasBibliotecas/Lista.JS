//Listas
const listas=[];


//.push()  --> adiciona na lista, onde o primeiro lugar vai ser ocupado pelo primeiro item a ser adicionada, no caso "3"
listas.push(3,2,1);
console.log(listas);


//.Pop() --> Retira o último elemento da lista
listas.pop();//Ele retira o ultimo item da lista
console.log(listas);


//.shift() --> retira o primeiro item da lista
listas.shift(); // Ele vai retirar o numero "3"
console.log(listas);


//.unshift()  --> Adicionar um item na primeira colocação
listas.unshift(10);
console.log(listas); 


//.reverse() --> ele vai virar a lista do contrário
listas.reverse();
console.log(listas);


/*O método indexOf() retorna o primeiro índice em que o elemento pode ser encontrado no array, retorna -1 caso o mesmo não esteja presente. Ou seja, ele vai pecorrer o array da esquerda para direita, um a um, até achar o item do index que ele precisa,  retornando ele assim 
indexOf(Elemento, start)*/
const index = [1,2,3,6,1,5,2,5,7,2,5,7]
console.log(index.indexOf(3, 2));//--> Encontrou o 3 no index 2
console.log(index.indexOf(3, 3));// --> Não encontrou o 3 pois ele começou por um item 1 casa a frente do 3, logo me retornou -1
let retorno = index.filter((element, index, arr) => arr.indexOf(element) == index);
console.log(retorno);//[ 1, 2, 3, 6, 5, 7 ] --> excluiu os itens repetidos


/*String.sort()
O método sort() ordena os elementos do próprio array e retorna o array. A ordenação não é necessariamente estável. A ordenação padrão é de acordo com a pontuação de código unicode.
arr.sort([funcaoDeComparacao]);
funcaoDeComparacao--> Especifica uma função que define a ordenação. Se omitido, o array é ordenado de acordo com a pontuação de código Unicode de cada um dos caracteres, de acordo com a conversão de cada elemento para string.
Se funcaoDeComparacao não for informado, os elementos serão ordenados de acordo com a sua conversão para texto e o texto comparado na pontuação unicode do texto convertido.
*/
var fruit = ['cherries', 'apples', 'bananas'];
console.log(fruit.sort()); // --> [ 'apples', 'bananas', 'cherries' ]
var scores = [1, 10, 2, 21];
console.log(scores.sort());// --> [ 1, 10, 2, 21 ]
/*Se o parametro funcaoDeComparacao é fornecido, o array será ordenado de acordo com o valor de retorno da funcaoDeComparacao. Considerando que a e b são dois elementos sendo comparados, então:
Se funcaoDeComparacao(a, b) for menor que 0, ordena a para um índice anterior a b, i.e. a vem primeiro.
Se funcaoDeComparacao(a, b) retornar 0, deixa a e b inalterados em relação um ao outro, mas ordenado em relação a todos os outros elementos. N
Se funcaoDeComparacao(a, b) é maior que 0, ordena b para um índice anterior que a.*/
var ordem =[3,4,1,2]
var r = ordem.sort((a, b) => {
    return a - b //Crescente
})
console.log(r);
var r = ordem.sort((a, b) => {
    return b - a //decrescente
})
console.log(r);