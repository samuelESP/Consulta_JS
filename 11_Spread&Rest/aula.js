//Utilizaremos da tecnologia Spread e Rest em relação a Listas.
/*Spread:
O Spread lida com os elementos do array de  forma separada, ou seja, o que era parte do array se torna algo independente daquele array
Para declarar essa tecnologia usamos "..." antes de passar o nome do array
*/

function sum(x,y,z){
    return x+y+z;
}
const numbers = [1,2,3];
console.log(sum(...numbers));//É como se a gente criase um FOR compacto.

/*Note o tantoque é mais simples trabalhar com SPREAD do que trabalhar com FOR:

let sum = 0 ;
const numbers = [1,2,3];
for(i = 0; i < numbers.length; i++){
    sum += numbers[i];
}
console.log(sum)
*/


//O Rest é o contrario do Spread, ou seja, o que é um elemento separado começa a ser interpretado como um elemento de um array:
function confereTamanho(...args) {
    console.log(args.length);
}

confereTamanho();//0
confereTamanho(1);//1
confereTamanho(1,1);//2
confereTamanho(1,1,1);//3

//Funciona como se eu estivese colocando essses elementos dentro de um array.
