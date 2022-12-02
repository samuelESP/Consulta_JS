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
