//O método reduce() executa uma função reducer (fornecida por você) para cada elemento do array, resultando num único valor de retorno.
/*A função reducer recebe quatro parâmetros:

Acumulador (acc)-valor inicial (ou o valor do callback anterior),
Valor Atual (cur) - o valor do elemento atual
Index Atual (idx)- o índice atual e
Array original (src)- o array onde a iteração está ocorrendo.

O valor de retorno da sua função reducer é atribuída ao acumulador. O acumulador, com seu valor atualizado, é repassado para cada iteração subsequente pelo array, que por fim, se tornará o valor resultante, único, final.
array.reduce(callbackFn, initialValue)
callbackFn(accumalor, currentValue, index, array)
array.reduce(callback( acumulador, valorAtual[, index[, array]] )[, valorInicial])*/


//Some todos os números de um array
const numeros = [1,2,3,4,5];

const soma = numeros.reduce(function(acumulator, currenrValue, index, numeros){
    return acumulator + currenrValue;
});
console.log(soma);


//Crie uma função que recebe uma lista de preços e um número representando o saldo disponível. Calcule qual será o saldo final após subtrair todos os preços da lista enviada.
const lista = [
    {
        nome : 'sabao',
        preco: 3,
    },
    {
        nome: 'escova',
        preco: 7,
    },
    {
        nome: 'algodao',
        preco: 5,
    },
    {
        nome: 'papel-higiênico',
        preco: 15
    },
];
const SALDO_DISPONIVEL = 33;

function calculaSaldo(SALDO_DISPONIVEL,lista) {
    return lista.reduce(calculos, SALDO_DISPONIVEL); // O primeiro prev vai ser 'SALDO_DISPONIVEL'(50).
} 
function calculos(prev, current){
    return prev - current.preco; //lembrando que o prev vai ser o meu acumulator
}

console.log(calculaSaldo(SALDO_DISPONIVEL, lista));



const rockets = [
    {country : 'Russia', launches:32},
    {country : 'USA', launches:23},
    {country : 'China', launches:16},
    {country : 'India', launches:4},
    {country : 'Japan', launches:3},
]

const totalLaunches = rockets.reduce(somaDeLancamentos, 0);
function somaDeLancamentos(acc, cur) {
    return acc + cur.launches;
}

console.log(totalLaunches);