/*Sintaxe de um erro:
new Error([message[, fileName[, lineNumber]]]) --> Todos os parametros são opcionais
Material de Apoio:
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Error
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/instanceof
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/typeof
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/throw#:~:text=A%20declara%C3%A7%C3%A3o%20throw%20lan%C3%A7a%20uma,%22%2C%20o%20programa%20vai%20terminar.
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/try...catch */

/*O objetivo é que a função receba um array e retorne ele caso o seu tamanho corresponda ao número enviado como parâmetro na função. Caso contrário, um erro será lançado.

Crie uma função que recebe um array e um número
Realize as seguintes validações
Se os parâmetros não forem enviados, lance um erro do tipo ReferenceError
Se o array não for do tipo 'object', lance um erro do tipo TypeError
Se o número não for do tipo 'number', lance um erro do tipo TypeError
Se o tamanho do array for diferente do número enviado como parâmetro, lance um erro do tipo RangeError
Utilize a declaração try...catch
Filtre as chamadas de catch por cada tipo de erro utilizando o operador instanceof */

function recebe(array, number) {
    try {
        if(!array && !number) 
            throw new ReferenceError('Envie os parâmetros');
        
        if(typeof(array) !== 'object')
            throw new TypeError('Esse array precisa ser do tipo object');

        if(typeof(number) !== 'number')
            throw new TypeError('Envie um elemento do tipo número');

        if(array.length !== number)
            throw new RangeError('Tamanho do array inválido!');

    return console.log(`numero: ${number} e array: [${array}]`); 
    } catch (e) {
        if(e instanceof ReferenceError){
            console.log(e.message);
            console.log('Esse erro é um ReferenceError!')
        }else if(e instanceof TypeError){
            console.log(e.message);
            console.log("Esse erro é um TypeError!");
        }else if(e instanceof RangeError){
            console.log(e.message);
            console.log("Esse erro é um RangerError!");
        }else{
            console.log('Outro tipo de erro!');
			console.log(e.stack);
        }
    }
}
const array= [1,2,3,4];
recebe(array, 3);

