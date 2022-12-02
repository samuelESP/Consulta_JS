//funções são pequenos trechos de código que podem ser invocados no momento que for necessário
//"function <nome>(<parâmetros se necessário>)" --> dessa maneira se invoca uma função.

function soma() {
    let a = 5;
    let b = 10;
    return a + b;// o return indica que a função vai retormar algum resultado. Quando eu alcanço o return minha função é parada.
}
console.log(soma()); 
//-------------------------------------------------------//
function teste() {
    console.log("teste do teste");
}
teste();
//------------------------------------------------------//
//Os parâmetros podem ser passado no momento de invocação da função

function meuNome(nome) {
    console.log("O seu nome é "+ nome);
}
meuNome("Samuel"); // Estou passando como parâmetro para a minha função o nome "Samuel".
meuNome("Pedro"); //Eu posso usar a mesma função várias vezes, então o resultado da de cima não interfere na outra;

//------------------------------------------------------//

function quadrado(num) {
    return num * num;
}
const resultado = quadrado(10);
console.log(resultado);

//Vamos fazer um exemplo com mais de um parâmetro:

function acrecentarJuros(valor, juros) {
    let valorDeAcrescimo = (juros/100) * valor;
    return valorDeAcrescimo + valor;
}

console.log("Será pago um valor de R$"+ acrecentarJuros(100, 10));

// nos usamos uma função principal para chamar as outras, essa função se da o nome de main.
/*function main() {
    
}*/

//Função anônima:
//É uma função em que não se declara um nome especifico para ela

const testando = function(){
    return 'Ola mundo'
}
console.log(testando());//Note que a minha variável necessitou de um parâmtro, mesmo sendo undefined;

//Eu ainda posso usar uma função dentro de outra:
const soma2 = ( function (a, b) {
    
    return a+b;

})(1,2);
console.log(soma2);


/* Arrow Function:
Uma arrow function é como se fosse uma abreviação da função, ou seja, ela encurta a função fazendo ela ficar mais elegante e organizada para quem está vendo,
Observação: geralmente se usa ela junto com a técnica de função anônima
*/
/* const helloWorld = function(){
    return 'Hello World';
} 
OU
const helloWorld = () =>{
    return 'Hello World';
}
OU
*/
const helloWorld = () => 'Hello World';//Quando tem uma linha só não precisa escrever return e nem das chaves.
console.log(helloWorld());

const somando = (a,b) => a + b;
console.log(somando(1,2));
//Se houver so 1 paramêtros eu posso dispensar os parenteses:
const numeros = a => a;
console.log(numeros(2));


//É muito importante saber que as arrow functions não fazem Hoisting
