/* Crie uma função que compareas idades das pessoas, e diga quem é mais velho */

class pessoas{
    nome;
    idade;

    constructor(nome, idade){
        this.nome = nome;
        this.idade= idade;
    }
}

function comparaIdade(p1,p2){
    if(p1.idade > p2.idade){
        console.log(`${p1.nome} é mais velha que ${p2.nome}`);
    }else if (p2.idade > p1.idade){
        console.log(`${p2.nome} é mais velha que ${p1.nome}`);
    }else{
        console.log(`${p1.nome} e ${p2.nome} possuim a mesma idade`);
    }
}

const vitor = new pessoas('Vitor', 20);
console.log(vitor);

const mariana = new pessoas('Mariana', 19);
console.log(mariana);

comparaIdade(vitor, mariana);



/*1) Crie uma classe para representar carros. 
Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.
Crie um método que dado a quantidade de quilómetros e o preço do combustível nos dê o valor 
gasto em reais para realizar este percurso.*/

class Carros {
    marca;
    cor;
    gastoMedioPorKmRodado;

    constructor(marca, cor, gastoMedioPorKmRodado){
        this.marca= marca;
        this.cor= cor;
        this.gastoMedioPorKmRodado= gastoMedioPorKmRodado.toFixed(4);
    } 
    calcularViagem (distanciaEmKm , precoCombustivel){
        return distanciaEmKm * this.gastoMedioPorKmRodado * precoCombustivel;
    }
}

const uno = new Carros('fiat', 'prata', 1/12);
console.log(uno);
const valor =uno.calcularViagem(70, 5);
console.log(valor.toFixed(4));


const palio = new Carros('fiat', 'preto', 1/10);
console.log(palio.calcularViagem(70 ,5).toFixed(4));


/*
2) Crie uma classe para representar pessoas.
Para cada pessoa teremos os atributos nome, peso e altura.
As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));
Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura e peça ao José para dizer o valor
do seu IMC;*/

class Pessoa{
    nome;
    peso;
    altura;
    constructor(nome, peso, altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calculoDeIMC(){
        return this.peso / (this.altura * this.altura);
    }

    classificadorDeIMC(imc) {
        const usarIMC = this.calculoDeIMC();
        if(usarIMC < 18.5){
            return "Abaixo do peso";
        }else if(usarIMC >= 18.5 && usarIMC < 25){
            return "Peso normal";
        }else if(usarIMC >=25 && usarIMC < 30){
            return "Acima do peso";
        }else if(usarIMC >=30 && usarIMC < 40){
            return "Obeso";
        }else{
            return "Obesidade Grave";
        }
    }
}


const Jose = new Pessoa('José', 70, 1.75);
console.log(Jose);
const imc = Jose.calculoDeIMC();
console.log(imc.toFixed(2));
const casoDoIMC = Jose.classificadorDeIMC();
console.log(casoDoIMC);


