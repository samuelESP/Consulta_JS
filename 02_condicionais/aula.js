/*Condicionais funcionam como todas de decisões dentro do nosso código; 
as condicionais utilizam Boolena (verdadeiro e Falso). 0 --> False  1--> Verdadeiro*/
const azul = true;
const verde = false;
//if --> se;  se a condição for verdadeira eu entro no código mandado;
//else --> senão; caso seja falso ,a resposta do if, eu entro no else.
//else if --> funciona como uma condiciona composta, ou seja, caso o primeiro if não seja veradeiro, ele passa para o else if, e caso esse não seja verdadeiro ele passa para outro else if, e assim por diante;

const nome = "Samuel";

if(nome == "Pedro"){
    console.log(nome);
}else if(nome =="Anna"){
    console.log(nome);
}else if(nome == "Samuel"){
    console.log(nome);
}else{
    console.log("nenhuma das condições foram atendidas");
}
//"=" atribuição; "==" comparação de texto; "===" comparação de texto e  de tipo.