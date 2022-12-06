//Nós ja sabemos o que é uma clase e um objeto, aula 07;

class Carro{
    marca;
    cor;

    constructor(){//É um método que será chamado toda vez que for intânciado um novo objeto da classe
        console.log('Olá, sou um novo carro');//Vai aparecer 3 vezes no meu console, por eu ter intanciado a classe 3 vezes.
        console.log("//--------------------------------------//");
    }
}

let c1 = new Carro() //Aqui eu tenho uma instância da classe Carro
let c2 = new Carro()
let c3 = new Carro()//Eu posso intanciar quantas objetos forem necessarios; Cada um deles tem um comportamento indivual, ou seja, independentes um dos outros.

//=====================================================================//

class Cores{
    cor;
    constructor(cor){//Como eu estou usando o constuctor como passada de parâmetro, e não definição, toda instância eu vou ser obrigado a trocar esse parâmetro. OBS: pode repetir se quiser;
        this.cor=cor;
    }
}
let a1 = new Cores('azul');
console.log(a1.cor);
let a2 = new Cores('vermelho')
console.log(a2.cor);


//==================================Métodos==================================//

//Os métodos são bloco de códigos que fazem alguma ação

class Aviao {
    cor;
    marca;

    constructor(cor){
        this.cor = cor
    }
    info (){//método
        console.log("A cor do aviao é " + this.cor);
        console.log("//--------------------------------------//");
    }
}
let v1 = new Aviao('azul');
let v2 = new Aviao('Amarelo')
//Para inprimir o meu método ele precisa ser chamado.
v1.info()//A cor do aviao é azul
v2.info()//A cor do aviao é Amarelo



class motos {

    constructor(marca, cor, id){
        this.marca = marca;
        this.cor = cor;
        this.id= id;
        this.km= 0;
        this.ligado = false;
    }
    metodos(){
        console.log("A marca é " + this.marca);
        console.log("A cor da moto é " + this.cor);
        console.log("O id da motot é " + this.id);
        console.log("A moto tem "+ this.km +"KM rodados");
        console.log("A moto foi ligado?" + (this.ligado ? "SIM" : "NAO"));
        console.log("//--------------------------------------//");
    }
    ligar(){
        this.ligado = true
    }
    desligado(){
        this.ligado=false
    }
}

//let m1 = new motos('Fiat', 'azul',03, 10, true); --> Não tem como mudar this.km e this.testada, pelo fato delas já terem sido definidas dentro do meu constructor
//let m1 = new motos('Fiat', 'azul'); --> O id da moto vai ser undefined.
let m1 = new motos('Fiat', 'azul',03);
console.log(m1);
m1.ligar()
m1.metodos();


//==================================GETTER/SETTER==================================//

/*Setter são funções especiais que vamos utilizar para alterar valor dos atributos da nossa classe.
O método setter é usado para atribuir um valor a um atributo do objeto */

class biciclietas {

    constructor(cor, id, marca){
        this.cor = cor;
        this.id= id;
        this.marca = marca;
        this.combustivel = 10;/*Lembra que o que foi declarado direto dentro do constructor não pode ser alterado? usando um setter se pode alterar esse valor. */
    }
    metodos(){
        console.log("A cor da bike é...............:" + this.cor);
        console.log("O id da bike é...............:" + this.id);
        console.log("A marca é...............:" + this.marca);
        console.log("A quantidade de combustível é de...............:" + this.combustivel);
        console.log("//--------------------------------------//");
    }/* 
    alterandoComb(v){
        this.combustivel=v;
    }b1.alterandoComb(100); --> usando esses códigos eu posso alterar o constructor*/
    //Quando eu for atribuir o set eu posso usa-lo como se fosse um atributo normal:
    set setCombustivel(v){
        this.combustivel=v;
    }
}

let b1 = new biciclietas('Azul',10,'XMX');
console.log(b1);
b1.setCombustivel= 50;//A quantidade de combustível é de...............:50
b1.metodos();


/*Os getter são métodos usados para obter o valro de um atributo*/

class teste {
    constructor(a){
        a = 20;
    }
    metodos(){
        console.log("a resposta de a é : " + this.a);
        console.log("//--------------------------------------//");
    }
    set alterandoA(v){
        this.a = v;
    }//Existe várias maneiras de pegar esse valor:
    pegarA(){
        return t.a
    }
    //Usando Get a gente faz assim:
    get utilizando_A(){
        return t.a //a diferneça é que sempre que eu querer obter eu posso chamar diretamente o get, sem precisar usar ().
    }
}

let t = new teste();
t.alterandoA = 10;
t.metodos();

//Existe várias maneiras de pegar esse valor
console.log(t.a);//--> 10
console.log(t.pegarA());//--> 10

//Usando Get a gente faz assim:
console.log(t.utilizando_A);// --> 10

//==================================Herança==================================//
/*A Herança é a criação de uma classe pai e classe filha, onde a classe pai passa parâmetros para a classe filha, mas a classe filha nn passa parâmetros para a classe pai. OBS: a classe filha é como se fosse uma especificação da classe pai, então ela pode ter seus próprios parâmetros */

class cadeira{
    constructor(pernas, encosto, material){
        this.pernas=pernas;
        this.encosto=encosto;
        this.material=material;
    }
    info(){
        console.log("//--------------------------------------//");
        console.log("Cadeira com "+ this.pernas + " pernas");
        console.log("Cadeira possui encosto?: " + (this.encosto ? "Sim" : "Não"));
        console.log("Cadeira é feita de " + this.material);
        
    }
}

let cad = new cadeira(4,true, 'Madeira');
cad.info();/*Cadeira com 4 pernas
Cadeira possui encosto?: Sim
Cadeira é feita de Madeira*/



class cadeiraDeRodinha extends cadeira{//cadeiraDeRodinha vai herdar cadeira
    //Para acessar o construtor da classe pai e alterar algo a gente chama o super();
    constructor(pes){

        super(3,false,'couro');

        this.pes = pes;

    }info(){

        super.info();//Ta chamando as caracteristicas do pai
        console.log("Cadeira com "+ this.pes + " pes");
    }
}


let cadRoda = new cadeiraDeRodinha(6);
cadRoda.info();/*Cadeira com 3 pernas
Cadeira possui encosto?: Não
Cadeira é feita de couro
Cadeira com 6 pes */


class cadeiraBalanço extends cadeira{

    constructor(balance){
        super(0,true,'Pano Grosso');
        this.balance = balance;
    }
    info(){
        super.info();
        console.log("Essa cadeira balança?..........:" + this.balance);
    }

}


let cadBal = new cadeiraBalanço("Sim");

cadBal.info();/*Cadeira com 0 pernas
Cadeira possui encosto?: Sim
Cadeira é feita de Pano Grosso
Essa cadeira balança?..........:Sim */