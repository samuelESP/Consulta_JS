//String
const str = "Apple, Banana, Kiwi";
//String.slice(posição, posição) --> corta a string na posição indicada
console.log(str.slice(7,13)); //Banana

//String.substring()substr()é semelhante a slice().A diferença é que o segundo parâmetro especifica o comprimento da parte extraída.
console.log(str.substring(7,13));

//String.replace() --> substitui a string. OBS: Não substitui a string na sua base, e sim na sua chamada, é como se retorna-se uma nova string
console.log(str.replace("Banana", "Caju"));//No lugar de "Banana" vai entrar "Caju"
//é recomendado usar flags nesse metodo

// /String/i --> ignora o case da String
console.log(str.replace(/BANANA/i, "Caju"));

// /String/g --> replace globa, aonde tiver essa string idica sofrera um replace

//String.toUpperCase() --> Para Caixa alta
console.log(str.toUpperCase());

//String.toLowerCase() --> Para caixa baixa
console.log(str.toLowerCase());

//String.concat() --> Concatenar uma string com outra
const fruta = "banana";
const cor = "Verde";
console.log(fruta.concat(" "+ cor));


//String.trim() --> remove os espaços em branco nas extremidades da string
const emBranco = "       a             "
console.log(emBranco.trim());

//String.padStart(quantidade, o que vai adicionar) --> adicionar no começo;
let text = "5";
console.log(text.padStart(4,"x"));//Vai add 3 "X" do lado esquerdo do 5, se o text fosse de dois digitos ele ia adicionar 2 "X" do lado esquerdo.
//String.padEnd(quantidade, o que vai adicionar
console.log(text.padEnd(4,"x")); //--> 5xxx

//String.split() --> separa a string
const palavra = "Cabeça";
console.log(palavra.split("")); // --> "C", "a", "b", "e", "ç", "a"