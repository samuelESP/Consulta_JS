//Linhas
//15 - 104 --> Primitive, objetos, tuplas, enum... Parte mais fácil
//105 - 137 --> Alias e Union
//138 - 179 --> TypeAlias
//180 - 256 --> Class e Exnteds
//257 - 298 --> Interface e Extends
//299 - 314 --> Class e implements e interface
//315 - 367 --> TypeAlias vs interface
//373 - 467 --> Generics extends e TypeAlias
//468 - 550 --> TypeUtilities(readonly, Partial, Pick, Omit)


//Types

//Existe tipos primitivos e os tipos que o TypeScript implementou
//Quando eu tento usar um resultado para um variavel que não é o seu tipo certo, ele me retorna um erro dizendo que essa váriavel não aceita tal tipo pois ela é de outro tipo.


//Boolean (true/ false)
 let isOpen: boolean;
 isOpen = true;//Passa


//string ('aba', "aba" e `aba`);
let msg: string = 'Testando';
msg = `é true ou é false? ${isOpen}`;


//number(int, float, hex, bi, ...)
let numero: number;
numero = 30;


//aray (Eu tenho que informar que é um array é o tipo de conteúdo dentro dele)
let arr1: number[]; //To dizendo que é um array de numeros
arr1 =[1,2,3,4,5,6];
//Ou
let arr2: Array<string>;//To dizendo que é um array de strings
arr2 = ['a', 'b', 'c']


//tuple (É um array que a gente já sabe seu tipo, podendo ser misto, e a quantidade de elementos dentro dele)
let tup1: [string, number, boolean]
tup1 = ['teste', 24, false];


//enum (serve para se cruiar um conjunto de chave e valor)

enum Color{
    white = '#fff',
    black = '#000',
}

let qualCor: string = Color.white;//Assim eu consigo acessar a cor hexadecimal pelo nome.


//any(significa qualquer coisa, ou seja, eu tenho um elemento que aceita qualquer coisa que tiverem dando para ele);
let qualquer: any;
qualquer = [1];
qualquer = 'teste';
//Ele não é legal pq é a mesma coisa que eu falar que eu não estou tipando nada.


//void (vazio, quando a gente não retorna nada)
function vazio():void {
    console.log('foo');//console.log não retorna nada, so utiliza um comando
    
}


//null | undefined (quando a gente não tem valor e quando ele é indefinido)
type Bla = string | undefined;


//nerver (ele nunca vai retornar, práticamente quando a gente quer jogar um erro)
function error(): never {
    throw new Error('error');//Eu estou dizendo que essa função não vai retornar nunca, so vai jogar seu Error e pronto
}


//object (Não é: string, array, boolean, num. Ele é qualquer coisa que não seja um desses tipos primitivos)
let car: object;
car = {
    chave: 1
};


//Type Inference (Se notarmos nos exemplos acima eu sempre seguia os mesmos passos: criar uma váriavel, dizer qual o seu tipo e depois passar seu valor);
//Mas eu não preciso dizer qual o seu tipo, basta eu colocar um valor desse tipo dentro dele, assim ele vai enteder qual o tipo da minha variável.
let msg2 = 'teste';
msg2 = "string nova";

//O TypeScript é interesssante de ser usado não so pela sua tipagem, mas também pelas suas dicas e auxilios:
//Exemplo:
/*window.addEventListener('click', (e)=>{//Aqui ele me falar qual o meu tipo de evento do meu Listener, sem nem precisar tipar ele, se eu quiser-se eu podia fazer (e): MouseEvent que daria o mesmo resultado.
    //console.log(e.foo);Ele me diz: Property 'foo' does not exist on type 'MouseEvent'.
    console.log(e.target);//(property) Event.target: EventTarget | null
    
    })*/





//Alias (eu vou usar isso para evitar redudâncias no meu código e também para evitar esforço inputil, ele funciona como se fosse um atalho para algo)

type Uid = string | number;//Isso quer dizer que eu posso usar o tipo Uid(eu criei o nome), sendo que esse tipo pdoe ser ou string ou number

function logDetails(uid: Uid, item: string) {
    console.log(`A product with ${uid} has a title as ${item}`);
}
logDetails(124, "teste");
logDetails("124", 'testando');

function logInfo(uid:Uid, user: string) {
    console.log(`A user with ${uid} has a name as ${user}`);
}
logInfo(124, "teste");
logInfo("124", 'testando');
//Agora eu nn preciso ficar escrevendo todas as vezes tring | number;


//Union (Eu posso criar um tipo já definindo exatamente o que pode ser, ou seja, eu posso criar meu tipo)

type Plataform = "Windows" | "Linux" | "Mac Os"

function renderPlataform(plataform: Plataform) {
    return plataform
}
renderPlataform("Windows");
//renderPlataform("ios") ele não vai aceitar se eu nã colocar no meu Plataform o tipo ios.






//Type Aliases com Intersection(Eu como se eu cria-se algo que não é obrigatório ser feito, isso é indicado com um ?)

type Accountinfo =  {
    id: number,
    name: string,
    email?: string,//email já não é mais obrigatório ser passado, pois ele passar a ser ou uma string ou um undefenied "(property) email?: string | undefined"
}

const account: Accountinfo ={
    id: 124,
    name: "samuel",
    //Não preciso colocar o meu email, pois ele não é obrigatório, mas se ele fosse obrigatório estaria me dando um error agora.
}


type CharInfo = {
    nickname: string,
    level : number,
    
}

const char: CharInfo ={
    nickname: 'BraSam',
    level: 130,
}


//Vamo supor que eu queira juntar as caracteristicas tanto do AccountInfo quanto do CharInfo, eu posso fazer dessa maneira:
type PlayerInfo = Accountinfo & CharInfo;//O meu PlayerInfo é a união entre esses dois carinhas

const player: PlayerInfo = {
    nickname: 'BraSam',
    id: 124,
    level: 130,
    name: "samuel",
}






//Classes 
class UserAccount {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    logDetails() : void{
        console.log(`Th player ${this.name} is ${this.age} year old`);
        
    }
}

const Sam = new UserAccount('Samuel', 30);
console.log(Sam);
console.log(Sam.age);
Sam.logDetails();



//Extend
class CharAccount extends UserAccount {
    nickname:string;
    level: number;
    constructor(nickmane:string, level:number) {
        
        super('Matias', 30);
        
        this.nickname = nickmane;
        this.level = level;

    }
    info(){
        super.logDetails();
        console.log(`Char nickname is ${this.nickname}, level ${this.level}`);
        
    }
}

const NewAccount = new CharAccount('MathFPS', 300);
console.log(NewAccount);
NewAccount.info();


//E se eu quiser por exemplo deixar um elemento dessa classe fixo, ou seja, sem a possibilidade dele ser alterado? Eu posso passasr a propriedade como private.

class newChar extends UserAccount{
    private nickname: string;
    readonly level: number;//readonly = apenas pode ser lido

    constructor(nickname: string, level:number){
        super('Anna', 19)
        this.nickname = nickname;
        this.level = level;
    }
    info(){
        console.log(`${this.nickname} ${this.level}`);
        
    }
} 

const Anna = new  newChar('Annenosca', 350);
//Anna.nickname = 'Maria';Property 'nickname' is private and only accessible within class 'newChar'. Note que não é possível trocar o nickname pelo fato dele ser um elemento private, sendo um elemento private ele so pode ser alterado dentro dessa classe.
console.log(Anna);
//Mas eu posso mudar isso usando uma atribuição dinâmica:
Anna['nickname'] = 'AnnaDinamic';
console.log(Anna);
Anna.info()
//Tambem tem a Public --> quer dizer que ela não tem regra nenhuma diferente da linguagem padrão;
//Tambem Protect --> É quando consegue chamar a propriedade dentro da classe, ou da classe que está estendo a ela, mas não consegue chamar fora daquela classe






//Intaface(São exclusivas do TypeScript) 
/*Nada mais são do que um conjunto de dados que são usadas para descrever a estrutura de um Objeto. a gente usa ela para descrição de estrutura de objetos, e o typealias funciona para objetos e para tipos primitivos;*/

interface IGame {
 title: string;
 description: string;
 genre: string;
 plataform?: Array<string>;

 getSimilars?: (title : string) => void;
}

const tlou: IGame ={
    title : "The Last of Us",
    description: "Legendary game",
    genre: "Action",
    plataform : ["PS4","XBOX","PC"],
    getSimilars: (title : string) =>{
        console.log(`Similiar games to ${title}: Uncharted, A Plague Tale, Metro`);
    }

}
console.log(tlou);

tlou.getSimilars? tlou.getSimilars(tlou.title) : console.log('Noting');


interface DLC extends IGame{
    originalGame: IGame;
    newContent: string[];

}

const leftBehinf: DLC ={
    title: "The Last of Us - Left Behind",
    description: "You play as Ellie before the Original game",
    genre: "Action",
    originalGame: tlou,
    newContent: ["3 hours GamePlay", "New Characters"]
}


//Eu ainda posso criar uma classe baseada em uma Interface
/*implements --> significa que a minha classe precisa ter todos os tipos que são definidos na minha interface, ou seja, eu não posso so chegar e passar um super(elementos) no meu constructor, eu vou precisar definir 1 por 1.*/
class CreateGame implements IGame{
    title: string;
    description: string;
    genre: string;

    constructor(t: string, d:string, g:string){

       this.title = t;
       this.description= d;
       this.genre = g;
    }
}





//TypeAlias vs Interface
//Intersection----- TypeAlias(&)  Interface(extends)
//declarar função ------ TypeAlias{ type aaaa = (title: string) => void }  
// interface{  interface aaa {  (title: string): void } }

//Type permite declarar números primitivos ja interfaces apenas objetos

//Tuplas

type TuplaT = [number, number];
[1,2] as TuplaT;//No Type eu tenho que declarar todos os meus itens da tupla

interface ITupla {
    0: number;
    1: number;
}
[1,2,3,4,'teste'] as ITupla;//Ele aceita itens diferentes sem precisar declarar. Mas, obrigatoriamente o meu array[0] e array[1] tem quer ser numeros e são obrigatórios.




//Type eu posso ter apenas uma declaração por escopo
type JQuerryT = {a: string};
//type JQuerryT = {b: string}; me da um erro

//Na interface pode ter várias

interface IJQuerryT{
    a: string;
}
interface IJQuerryT{
    b: string;
}
const $: IJQuerryT = {
    a:"boo",
    b: 'foo'
}


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
    let state: number | string


    function getState() {
        return state
    }
    function setState(newState:number | string){
        state = newState
    }
    return{getState, setState}
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

function useState2<S extends number | string>() {//
    let state: S


    function getState() {
        return state
    }
    function setState(newState:S){
        state = newState
    }
    return{getState, setState}
}

const newState2 = useState2<string>();
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
function useState3<S extends number | string = string>() {//Agora como default meu S é uma string, mas isso não que dizer que eu não possa usar meu number
    //Eu posso por exemplo fazer assim tambem:
    /* type NumOrString = number | string
    function useState3<S extends NumOrString = string>() {...}
     */
    let state: S


    function getState() {
        return state
    }
    function setState(newState:S){
        state = newState
    }
    return{getState, setState}
}

const newState3 = useState3();//Se eu não passar nada ele vai entender que vai ser uma string
newState3.setState('teste4');
console.log(newState3.getState());



/*TypeUtilities- São utilitarios para se trabalhar com tipos. Quando a gente trabalha com tipos existe casos onde se quer fazer uma operação ou outra encima dos próprios tipos, para isso usa esses utilitários*/
//Os mais comuns são:
//Readonly<T> - apenas leitura;
//Partial<T> - opcionais;
//Pick<T, "elemento a ser observado"> - pega dentro de um objeto os tipos que a gente quer ;
//Omit <T, "elemento a ser omitido"> - De acordo com os tipos que a gente tem ele vai omitir;



type TodoT = {
    title: string;
    description: string;
    completed: boolean;
}

const Todo: TodoT = {
    title : "Assistir Dark denovo",
    description : "Relembrar Detalhes",
    completed : false,
}
console.log(Todo);
//E se eu quiser colocar completed como true? Eu posso fazer assim:?
Todo.completed = true;
console.log(Todo);
//Mas isso muda diretamente no nosso objeto, ento o mais ideal é ter uma função que cria um novo objeto com essa mudança.
//Eu também posso fazer um Readonly para dizer que o meu item seja lido e não possa ser alterado;

type TodoT2 = {
    title: string;
    description: string;
    completed: boolean;
}

const Todo2: Readonly<TodoT2> = {
    title : "Assistir Dark denovo",
    description : "Relembrar Detalhes",
    completed : false,
}
console.log(Todo2);

//Todo2.completed = true; --> Aqui já me retorna um erro dessa vez;


function UpdateToDo(todo: TodoT2, fieldUpdate: Partial<TodoT2>) {
    return {...todo, ...fieldUpdate}
}
//O Partial deixa todas as proprieades que são passados para ele como opcionais;

const Todo3: TodoT2 = UpdateToDo(Todo2 , {completed : true })

console.log(Todo3);
//Vamos supor que a gente so quer mostrar so o title e o completed, eu não quere descrição, eu posso usar o Pick para isso:

type TodoPreview = Pick<TodoT2,"title" | "completed">

/*type TodoPreview = {
    title: string;
    completed: boolean;
    ele não tem description
} */

const Todo4: TodoPreview = {
    title: "Uncharted",
    completed: false,
}

console.log(Todo4);


//Omit - Eu posso escolher omitir um elemento do meu objeto
type TodoPreview2 = Omit<TodoT2, "description">;
/*type TodoPreview2 = {
    title: string;
    completed: boolean;
} */
const Todo5: TodoPreview2 = {
    title: "God of War",
    completed: true
}
console.log(Todo5);


