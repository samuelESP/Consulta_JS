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
