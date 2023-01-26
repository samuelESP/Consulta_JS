"use strict";
//Linhas
//6 - 96 --> Primitive, objetos, tuplas, enum... Parte mais fácil
//97 - 129 --> Alias e Union
//130 - 172 --> TypeAlias
//173 - 250 --> Class e Exnteds
//251 - 293 --> Interface e Extends
//294 - 314 --> Class e implements e interface
//315 - 367 --> TypeAlias vs interface
//368 - 467 --> Generics extends e TypeAlias
//Types
//Existe tipos primitivos e os tipos que o TypeScript implementou
//Quando eu tento usar um resultado para um variavel que não é o seu tipo certo, ele me retorna um erro dizendo que essa váriavel não aceita tal tipo pois ela é de outro tipo.
//Boolean (true/ false)
let isOpen;
isOpen = true; //Passa
//string ('aba', "aba" e `aba`);
let msg = 'Testando';
msg = `é true ou é false? ${isOpen}`;
//number(int, float, hex, bi, ...)
let numero;
numero = 30;
//aray (Eu tenho que informar que é um array é o tipo de conteúdo dentro dele)
let arr1; //To dizendo que é um array de numeros
arr1 = [1, 2, 3, 4, 5, 6];
//Ou
let arr2; //To dizendo que é um array de strings
arr2 = ['a', 'b', 'c'];
//tuple (É um array que a gente já sabe seu tipo, podendo ser misto, e a quantidade de elementos dentro dele)
let tup1;
tup1 = ['teste', 24, false];
//enum (serve para se cruiar um conjunto de chave e valor)
var Color;
(function (Color) {
    Color["white"] = "#fff";
    Color["black"] = "#000";
})(Color || (Color = {}));
let qualCor = Color.white; //Assim eu consigo acessar a cor hexadecimal pelo nome.
//any(significa qualquer coisa, ou seja, eu tenho um elemento que aceita qualquer coisa que tiverem dando para ele);
let qualquer;
qualquer = [1];
qualquer = 'teste';
//Ele não é legal pq é a mesma coisa que eu falar que eu não estou tipando nada.
//void (vazio, quando a gente não retorna nada)
function vazio() {
    console.log('foo'); //console.log não retorna nada, so utiliza um comando
}
//nerver (ele nunca vai retornar, práticamente quando a gente quer jogar um erro)
function error() {
    throw new Error('error'); //Eu estou dizendo que essa função não vai retornar nunca, so vai jogar seu Error e pronto
}
//object (Não é: string, array, boolean, num. Ele é qualquer coisa que não seja um desses tipos primitivos)
let car;
car = {
    chave: 1
};
//Type Inference (Se notarmos nos exemplos acima eu sempre seguia os mesmos passos: criar uma váriavel, dizer qual o seu tipo e depois passar seu valor);
//Mas eu não preciso dizer qual o seu tipo, basta eu colocar um valor desse tipo dentro dele, assim ele vai enteder qual o tipo da minha variável.
let msg2 = 'teste';
msg2 = "string nova";
function logDetails(uid, item) {
    console.log(`A product with ${uid} has a title as ${item}`);
}
logDetails(124, "teste");
logDetails("124", 'testando');
function logInfo(uid, user) {
    console.log(`A user with ${uid} has a name as ${user}`);
}
logInfo(124, "teste");
logInfo("124", 'testando');
function renderPlataform(plataform) {
    return plataform;
}
renderPlataform("Windows");
const account = {
    id: 124,
    name: "samuel",
    //Não preciso colocar o meu email, pois ele não é obrigatório, mas se ele fosse obrigatório estaria me dando um error agora.
};
const char = {
    nickname: 'BraSam',
    level: 130,
};
const player = {
    nickname: 'BraSam',
    id: 124,
    level: 130,
    name: "samuel",
};
//Classes 
class UserAccount {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    logDetails() {
        console.log(`Th player ${this.name} is ${this.age} year old`);
    }
}
const Sam = new UserAccount('Samuel', 30);
console.log(Sam);
console.log(Sam.age);
Sam.logDetails();
//Extend
class CharAccount extends UserAccount {
    constructor(nickmane, level) {
        super('Matias', 30);
        this.nickname = nickmane;
        this.level = level;
    }
    info() {
        super.logDetails();
        console.log(`Char nickname is ${this.nickname}, level ${this.level}`);
    }
}
const NewAccount = new CharAccount('MathFPS', 300);
console.log(NewAccount);
NewAccount.info();
//E se eu quiser por exemplo deixar um elemento dessa classe fixo, ou seja, sem a possibilidade dele ser alterado? Eu posso passasr a propriedade como private.
class newChar extends UserAccount {
    constructor(nickname, level) {
        super('Anna', 19);
        this.nickname = nickname;
        this.level = level;
    }
    info() {
        console.log(`${this.nickname} ${this.level}`);
    }
}
const Anna = new newChar('Annenosca', 350);
//Anna.nickname = 'Maria';Property 'nickname' is private and only accessible within class 'newChar'. Note que não é possível trocar o nickname pelo fato dele ser um elemento private, sendo um elemento private ele so pode ser alterado dentro dessa classe.
console.log(Anna);
//Mas eu posso mudar isso usando uma atribuição dinâmica:
Anna['nickname'] = 'AnnaDinamic';
console.log(Anna);
Anna.info();
const tlou = {
    title: "The Last of Us",
    description: "Legendary game",
    genre: "Action",
    plataform: ["PS4", "XBOX", "PC"],
    getSimilars: (title) => {
        console.log(`Similiar games to ${title}: Uncharted, A Plague Tale, Metro`);
    }
};
console.log(tlou);
tlou.getSimilars ? tlou.getSimilars(tlou.title) : console.log('Noting');
const leftBehinf = {
    title: "The Last of Us - Left Behind",
    description: "You play as Ellie before the Original game",
    genre: "Action",
    originalGame: tlou,
    newContent: ["3 hours GamePlay", "New Characters"]
};
//Eu ainda posso criar uma classe baseada em uma Interface
/*implements --> significa que a minha classe precisa ter todos os tipos que são definidos na minha interface, ou seja, eu não posso so chegar e passar um super(elementos) no meu constructor, eu vou precisar definir 1 por 1.*/
class CreateGame {
    constructor(t, d, g) {
        this.title = t;
        this.description = d;
        this.genre = g;
    }
}
[1, 2]; //No Type eu tenho que declarar todos os meus itens da tupla
[1, 2, 3, 4, 'teste']; //Ele aceita itens diferentes sem precisar declarar. Mas, obrigatoriamente o meu array[0] e array[1] tem quer ser numeros e são obrigatórios.
const $ = {
    a: "boo",
    b: 'foo'
};
//Coclusão
//TypeAlias --> 
//Mais simples de usar.
//Pode estender pequenos detalhes diretamente na mesma linhas.
//React - props
//Interface --> 
/*Se eu tiver criando uma biblioteca e eu quero que essa biblioteca possa ser extensivo para outros projetos, ou seja, onde eu tenho meus metódos mas o user quer estender métodos novos encima da minha biblioteca eu vou usar inteface, pois, a minha interface vai permitir que a pessoa crie com o mesmo nome e crie novos métodos.*/
//Criando Objetos/ Classes (POO)
//Generics
/*Quando estamos criando um código um dos pontos principais que um programador tenta atingir e a possiblidade de reutilizar aquele código para diminuir a quantidades de linhas, melhorar a aparência e em caso de algum erro ou Bug ele pode simplesmente corrigir naquele trecho de código reutilizado*/
/* Mas para fazer isso nós precisamos tornar esses métodos mais genéricos, ou seja, eles precisam aceitar diferentes tipos de entradas e saídas, diferentes tipos de argumentos que podem ser passados para que possamos trabalhar e no final a gente ter o retorno esperado.*/
/* Como o typeScript é uma linguagem que fica tipando os itens/elemtos, ele não é tão genérico como por exemplo uma linguagem dinâmica, para isso surgiram os generics, mesmo eles não sendo tão flexíveis como uam linguagem dinâmica, eles ainda ajudam a gente um pouco nesse assunto. */
function useState() {
    let state;
    function getState() {
        return state;
    }
    function setState(newState) {
        state = newState;
    }
    return { getState, setState };
}
const newState = useState();
newState.setState(123);
console.log(newState.getState());
newState.setState('bla');
console.log(newState.getState());
//Nesse caso ele pode entrar como string ou como numero, mas vamos supor que eu não queira isso, eu quero que me de um erro caso eu tente entrar com uma string
//<nome dado>(){}
//Aqui embaixo existe alguns, que não são obrigatórios serem usados, mas são boas práticas de serem usados
//S - State
//T - Type 
//K - Key
//V - Value
//E - Element
//Se formos notar olha como fica depois de adicionar meu tipo generico:
/*function useState2<unknown>(): {
    getState: () => unknown;
    setState: (newState: unknown) => void;
} */
//Agora eu tenho que definir o que é esse meu S
//function useState2<S>() {...} const newState2 = useState2<string>();
//Pronto agora ele está definido.
//Eu também posso bloquear outros tipos basta dizer que meu <S> é um tipo especifico de elemento
/* function useState2<S extends number | string>() {...}
Agora na hora de eu passar meu  useState2<unknow>() meu tipo(S) ele so pode ser string ou number como tipo no lugar de unknow*/
function useState2() {
    let state;
    function getState() {
        return state;
    }
    function setState(newState) {
        state = newState;
    }
    return { getState, setState };
}
const newState2 = useState2();
newState2.setState('teste');
console.log(newState2.getState());
/*
newState2.setState(123); Agora eu já não consigo mais usar o meus numeros
function useState2<string>(): {
    
    getState: () => string;
    setState: (newState: string) => void;
}
 */
/*Eu ainda posso passar um padrão, ou seja, eu não vou precisar definir que tipo ele ele quando for chamado */
function useState3() {
    //Eu posso por exemplo fazer assim tambem:
    /* type NumOrString = number | string
    function useState3<S extends NumOrString = string>() {...}
     */
    let state;
    function getState() {
        return state;
    }
    function setState(newState) {
        state = newState;
    }
    return { getState, setState };
}
const newState3 = useState3(); //Se eu não passar nada ele vai entender que vai ser uma string
newState3.setState('teste4');
console.log(newState3.getState());
