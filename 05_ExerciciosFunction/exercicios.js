/*Faça uma função que escreva seu nome*/
function meuNome(nome) {
    console.log("Meu nome é "+ nome);
}
meuNome("Samuel");
meuNome("Renan")

/*Faça uma função que confirma uma pessoa com mais de 18 anos*/
function confiraIdade(idade) {
    if(idade >= 18){
        return "Possui mais de 18 anos de idade";
    }else{
        return "Possui menos de 18 anos de idade";
    } 
}
console.log(confiraIdade(17));
/*
3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento. 
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.
Código Condição de pagamento:
1- À vista Débito, recebe 10% de desconto;
2- À vista no Dinheiro ou PIX, recebe 15% de desconto;
3- Em duas vezes, preço normal de etiqueta sem juros;
4- Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
OBS: Utiliza funções dessa vez.
*/  
const produtoNaEtiqueta = 10;
const parcelas= 1;
const formaDePagamento= 2;

function aplicarDesconto(valor, desconto) {
    return valor-((desconto/100) * valor);
}

function comoVaiSerPago(parcelas, forma){
   
    if(parcelas==1){
        if(forma == 1){
            return aplicarDesconto(produtoNaEtiqueta,10);
        }
        
        else if(forma == 2){
            return aplicarDesconto(produtoNaEtiqueta,15);
        }
        else{
            return "forma de pagamento não aceita";
        }
    }

    else if(parcelas == 2){
        return produtoNaEtiqueta;
    }

    else{
        return aplicarDesconto(produtoNaEtiqueta, -10);
    }
}

function main() {
    const valorDoDesconto = comoVaiSerPago(parcelas, formaDePagamento);
    console.log(valorDoDesconto);
}
main();