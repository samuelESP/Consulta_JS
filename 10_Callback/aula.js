//Uma função callback é uma função passada a outra função como argumento, que é então invocado dentro da função externa para completar algum tipo de rotina ou ação.
const call = function (operacao, num_1, num_2){
    return operacao(num_1, num_2);
}

const soma = function(num_1, num_2){
    return num_1 + num_2;
}

const sub = function(num_1, num_2){
    return num_1 - num_2;
}

const resultado = call(soma, 10, 2);
console.log(resultado);
//Aqui no caso a gente criou uma função chamada de call, que vai receber como um de seus parâmetros outras função, podendo ser de soma ou de subtração.
