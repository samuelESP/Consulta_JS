// O filter funciona como um filtro, aonde apenas os elementos escolhidos iram compor o novo array.
//array.filter(callback, thisArg)
////callback(item, index, array)

const frutas =['maça verde', 'laranja', 'banana nanica', 'maça fuji'];

const maças = frutas.filter(function (fruta){
    return fruta.includes('maça');//Vai me retornar true ou false, o que retornar true entra dentro do meu filter.
})
console.log(maças);
//---------------------------//

//Filtre e retorne todos os números pares de um array.
const numbers = [1,2,3,4,5,6,7,8,9,10];



function filtrador(arr) {
    return arr.filter( function(number){
        return number % 2 == 0;
    })
}
console.log(filtrador(numbers));


function filtradorResumido(array) {
    return array.filter(item => item % 2 == 0)
}
console.log(filtradorResumido(numbers));
//---------------------------//


//Remover elementos duplicados

const meuArray =[1,1,2,2,3,5,7,9,1,6];

const retorno = meuArray.filter((element, index, arr) => arr.indexOf(element) == index);
console.log(retorno);

