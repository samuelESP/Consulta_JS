//Numbers (Math.())
const x = 8.5533;
//math.floor() --> arredonda para baixo
console.log(Math.floor(x));
//math.ceil() --> arrendonda para cima
console.log(Math.ceil(x));
//Math.trunc() --> apenas mostra a parte inteira
console.log(Math.trunc(x));
//Math.sqrt() --> raiz quadrada
console.log(Math.sqrt(x));
//Math.pow(x,y) --> eleva um numero a outro
console.log(Math.pow(2,3)); //2 elevado a 3
//toFixed() --> Quantidade de decimais desejados
console.log(x.toFixed(2));

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