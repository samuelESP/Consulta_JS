// Um objeto é uma coleção de valores que funciona atras de key e value
const objeto = {  
    nome: "Samuel Espíndola",
    idade: 21,
    nacionalidade: "Brasileiro"
}//OBS: os objetos se separam por vírgula comum. O que vem antes do ":" é uma key, e o que vem depois é um value

// Para acessar um objeto passamos o nome da obj seguido de um ponto e em seguida a sua key:
console.log(objeto); // --> Me retorna a coleção de valores do objeto
console.log(objeto.nome);// --> Me retonar o value que a minha key aponta
console.log(objeto.idade);
console.log(objeto.nacionalidade);


//Para icrementar uma nova key e value basta fazer como o exemplo:
objeto.altura = 1.87;
console.log(objeto);
console.log(objeto.altura);


//Para deletar eu uso o delete:
delete objeto.idade;
console.log(objeto);

//Object.values() --> vai me mostrar apenas os valores do objeto
console.log(Object.values(objeto));
//Object.keys() --> vai me mostrar apenas as keys do objeto
console.log(Object.keys(objeto));




//this --> O this se refere a obj que ele pertence. EX:
const obj= {
    nome:"Alex",
    idade: 30,
    descrever : function (){
        console.log(`meu nome é ${this.nome} e tenho ${this.idade} anos de idade`);
    }//o this asume o objeto
}// Como o "Descrever" é uma key dentro do meu objeto eu ainda posso subscrever ela pelo lado de fora.
obj.nome= "Lucas";
obj.descrever();


//Para acessar dinamicamente um atributo se usa [ ]:
console.log(obj['idade']); //Isso quer dizer que eu quero o value da key dentro do meu objeto

//Também se pode atribuir dessa maneira:
obj['idade']= 20; // A diferença é que dessa maneira é dinâmico e obj.idade é acesso direto
console.log(obj['idade']); 






//-------------------//
// Se eu quiser fazer mais de um objeto mas com os mesmos atributos? seria viável ficar criando e excluindo objetos um por um? Creio que não, devemos evitar as redundâncias
// Então para resolver isso precisamos criar uma classe que precise definir como são os objetos para que ela seja instânciadas

class Pessoa {
    nome;
    idade;
    metodo () { //No exemplo passado a gente uso descrever: function (){}, mas eu posso abreviar desse jeito
        console.log(`meu nome é ${this.nome} e eu tenho ${this.idade} anos de idade`);
    }
}//Isso é uma pessoa, uma instância dessa pessoa seria por exemplo uma especificação da Pessoa.Ex:

const renan = new Pessoa();
console.log(renan);// --> Pessoa { nome: undefined, idade: undefined }
renan['idade']= 20;
renan.nome= "Renan Dos Santos";
console.log(renan); //Pessoa { nome: 'Renan Dos Santos', idade: 20 }
renan.metodo();//--> meu nome é Renan Dos Santos e eu tenho 20 anos de idade
//Agora eu posso criar várias instâncias da classe Pessoa

//Classe -definição do que deve ser aquele objeto
//Instância - Ocorrência do objeto

//--------Constructor--------//
//Construir a classe e atribuir parâmetros a certa valores dentro dessa classe;
//Ele é o que acontece quando um objeto é instânciado


/*class Pessoa {
    nome;
    idade;

    constructor(){
        this.nome = 'teste',
        this.idade = 1;
    }

    metodo () { 
        console.log(`meu nome é ${this.nome} e eu tenho ${this.idade} anos de idade`);
    }
}
const renan = new Pessoa(); 
Toda vez que a gente chamar uma instância, ela vai passar obrigatoriamente pelo constructor.
Podendo então ser passado parâmetros*/
class Testando {
    nome;
    idade;

    constructor(nome, idade){
        this.nome = nome,
        this.idade = idade;
    }

    metodo () { 
        console.log(`meu nome é ${this.nome} e eu tenho ${this.idade} anos de idade`);
    }
}
const vitor = new Testando('Vitor da Souza', 43); 
vitor.metodo();



//--------------Call---------------//
//Uma propriedade interessante de se usar é o objeto..call();
//Quando eu uso o call eu estou tentando chamar uma instrução para que o this use, mesmo não estando dentro ou ligada a outra.
const pessoa = {
    nome : 'Samuel',
    sobre: 'Espíndola'
}
const pet = {
    gato : 'Fallen'
}
 function getSomething() {
    console.log(this.nome);
 }
 
getSomething.call(pessoa);
//É de extrema importância ressaltar que a primeira coisa que vem entre ‘ ( ) ’ é o que o call chama, e não um parâmetro.


class numeros{
    num1;
    num2;
    constructor(num1,num2){
        this.num1 =num1;
        this.num2=num2;
    }
}
const num = new numeros(3,5);

function soma(a,b) {
    console.log(this.num1+ this.num2 + a + b);
}

soma.call(num,5,10);


//--------------Apply---------------//

/*Ela é muito parecida com call, mas ela tem uma diferença. 
Essa diferença é que a Apply na hora de passar argumentos eles devem ser dentro de um array ‘[ ]’ .
 */

const primeiroNome = {
    nome : 'Miguel',
};

const profissao = {
    setor : 'Obras',
};

function concatena(a) {
    console.log(`${this.nome} É um trabalhador do setor de ` + a +` em uma empresa multinacional`);
}
concatena.apply(primeiroNome, [profissao.setor]);
//É de extrema importância ressaltar que a primeira coisa que vem entre ‘ ( ) ’ é o que o apply chama, e não um parâmetro. O parâmetro vem depois dentro de colchetes ‘[ ]‘.

const myObjeto ={
    num1: 17,
    num2 : 13,
};

function testeDeApply(u) {
    console.log(this.num1 + this.num2 + u);
}
testeDeApply.apply(myObjeto , [30]);


//--------------Bind---------------//
//O método bind() cria uma nova função que, quando chamada, tem sua palavra-chave this definida com o valor fornecido, com uma sequência determinada de argumentos precedendo quaisquer outros que sejam fornecidos quando a nova função é chamada.

function retornaNome() {
    return this.nome + " habita o pais: " + this.pais;
};
let samuel = retornaNome.bind({nome : 'Samuel', pais : 'Brasil'});
 
console.log(samuel());//Samuel habita o pais: Brasil
console.log(samuel);//[Function: bound retornaNome]console.log(retornaNome());
