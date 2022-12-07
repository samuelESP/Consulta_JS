/*Nesta atividade, vamos testar os conceitos de Orientação a Objetos simulando a criação de diversos tipos de contas bancárias e operações disponíveis em cada uma.

Crie a classe ContaBancaria, que possui os parâmetros agencia, numero, tipo e saldo;
Dentro de ContaBancaria, construa o getter e o setter de saldo;
Dentro de ContaBancaria, crie os métodos sacar e depositar;
Crie uma classe-filha chamada ContaCorrente que herda todos esses parâmetros e ainda possua o parâmetro cartaoCredito;
Ainda em ContaCorrente, construa o getter e o setter de cartaoCredito;
Ainda em ContaCorrente, faça com que o tipo seja 'conta corrente' por padrão;
Crie uma classe-filha chamada ContaPoupanca que herda todos os parâmetros de ContaBancaria;
Crie uma classe-filha chamada ContaUniversitaria que herda todos os parâmetros de ContaBancaria;
Faça com que o método saque de ContaUniversitaria apenas seja capaz de sacar valores menores que 500 reais. */

class ContaBancaria{
    static agencia;
    static numero;
    static tipo;
    constructor(agencia, numero, tipo){
        this. agencia = agencia;
        this.numero=numero;
        this.tipo=tipo;
        this._saldo=0;
    }
    get saldo(){
        return this._saldo;
    }

    set saldo(valor){
        this._saldo=valor
    }

    sacar(valor){
        if(valor > this._saldo){
            return console.log('Saque negado; saldo insuficiente!');
        }else{
            this._saldo = this._saldo - valor;
            return console.log("Valor a ser sacado...: " + this._saldo);
        }
    }
    depositar(valor){
        this._saldo = this._saldo + valor;
        return console.log(`Valor depositado de ${valor}, saldo atual somado de ${this._saldo}`);
    }
    info(){
        
        console.log("Agencia: " + this.agencia);
        console.log("Sua conta bancária é do tipo: " + this.tipo);
        console.log("Numero da conta: " + this.numero);
        console.log("Seu saldo atual é de: R$" + CB.saldo);
    }
}  



class ContaCorrente extends ContaBancaria{
    constructor(agencia, numero, cartaoCredito){
        super(agencia, numero);
        this,this.tipo='corrente';
        this._cartaoCredito = cartaoCredito;
    }
    get cartaoCredito(){
        return this._cartaoCredito;
    }
    set cartaoCredito(limite){
        return this.cartaoCredito = limite;
    }
}



class ContaPoupanca extends ContaBancaria {
    constructor(agencia, numero){
        super(agencia,numero);
        this.tipo= 'Poupança';
    }
}

class ContaUniversitaria extends ContaBancaria {
    constructor(saldo) {
        super(CB.agencia,CB.numero);
        this.tipo = 'universitario';
        this._saldo = CB.saldo;
    }
    sacar(valor){
        if(valor >= 500){
            return console.log('operação indeferida.Contas Universitárias so possibilitam saques abaixo de 500 reais');
        }else{
            this._saldo = this._saldo - valor
            return console.log(`Operação realizada com sucesso, saldo atual de ${this._saldo}`);
        }
    }
    info(){
        super.info()
    }
}

//ContaBancaria
let CB= new ContaBancaria("Bradesco", 174, 'ContaBancaria');
console.log(/======================ContaBancaria======================/);
CB.saldo = 5300;
CB.info();


//ContaUniversitaria
let CU = new ContaUniversitaria();
console.log(/======================ContaUniversitaria======================/);

CU.info();
CU.sacar(400);

