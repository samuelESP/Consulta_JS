//Array.prototype.map()
//O método map() invoca a função callback passada por argumento para cada elemento do Array e devolve um novo Array como resultado.
//Ele cria um novov array, e não deleta o anterior.
/*O método map chama a função callback recebida por parâmetro para cada elemento do Array original, em ordem, e constrói um novo array com base nos retornos de cada chamada. A função callback é chamada apenas para os elementos do array original que tiverem valores atribuídos; os elementos que estiverem como undefined, que tiverem sido removidos ou os que nunca tiveram valores atribuídos não serão considerados.
A função callback é chamada com três argumentos: o valor do elemento corrente, o índice do elemento corrente e o array original que está sendo percorrido. */
//arrray.map(callback, thisArg);
//callback(item, index, array)
const array = [1,3,6,7,8,10];

console.log(array.map((item) => item * 2))//item representa cada elemento do array


//---------------------------//

function semThis(arr) {
    return arr.map(function(item){
        return item * 2;
    });
}
console.log(semThis(array));



//---------------------------//
const hotDog ={
    value : 2,
}

const salad = {
    value: 4,
}

function mapWithThis(array, thisArg) {
    return array.map(funcao, thisArg)
}
function funcao (item) {
    return item * this.value; //this.value aponta para hotDog e salad, que são substituidos no lugar de thisArg.
}

const nums = [1,2]
console.log(mapWithThis(nums, hotDog))
console.log(mapWithThis(nums, salad))


//---------------------------//
var vencedores = [
    {
        nome : "Equipe Super",
        pais : "Brasil"
    },
    {
        nome : "Time Maximo",
        pais : "EUA"
    },
    {
        nome : "Mega Grupo",
        pais : "Canadá"
    }
];

var podioPorPais = vencedores.map(function(item){
    return item.pais;
});
console.log(podioPorPais);