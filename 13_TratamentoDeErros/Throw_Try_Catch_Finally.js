/* As declarações try...catch marcam um bloco de declarações para testar (try), e especifica uma resposta, caso uma exceção seja lançada.
Sintaxe:

try {
   try_statements 
}
[catch (exception_var_1 if condition_1) 
   catch_statements_1
}]
...
[catch (exception_var_2) {
   catch_statements_2
}]
[finally {
   finally_statements
   
}] 
try_statements
Declarações (statements) a serem executadas.

catch_statements_1, catch_statements_2
Declarações que são executadas se uma exceção é lançada no bloco try.

exception_var_1, exception_var_2
Um indentificador que leva um objeto exceção para uma cláusula catch associada.

condition_1
Uma expressão condicional.

finally_statements
Declarações que são executadas depois que a declaração try é completada. Essas declarações são executadas independetemente se uma exceção foi ou não lançada ou capturada.

A declaração try consiste em um bloco try, que contém uma ou mais declarações, e ao menos uma cláusula catch ou uma cláusula finally, ou ambas. Ou seja, há 3 formas de declarações try :

try...catch
try...finally
try...catch...finally
*/
/*A declaração throw lança uma exceção definida pelo usuário. A execução da função atual vai parar (as instruções após o throw não serão executadas), e o controle será passado para o primeiro bloco catch na pilha de chamadas. Se nenhum bloco catch existe entre as funções "chamadoras", o programa vai terminar.]
Ou seja, o Throw te permite criar um error personalizado */

/*
try {
    document.write('teste');
} catch (e) {
    document.write('error');
}finally{
    document.write("Aqui vai aparecer toda vez dentro do meu Documento")//Lembrando que não é obrigatorio usar o finally
}
Mas vamos forçar uma exeção, vamos escrever o document.write de forma errada*/


try {
    document.writ('teste de exeção <br>')
} catch (e) {
    document.write('error' + e.message+ "<br>"); //Se observar dentro do meu documento, o que foi exercutado foi o catch e não o try, ou seja, ele encontrou o erro
    console.log('Mensagem de error ' + e.message);//aqui a gente colocou no console o error, dessa meneira:"Mensagem de error document.writ is not a function"
}


//Da para a gente gerar uma exceção com o throw, veja bem:
var num;//Vamos supor que eu não quero que o user use um número maior que 10



try {
    num = prompt("Digite um valor:");
    if(num >10){
        throw new Error("Valor inválido, o valor deve ser menor ou igual a 10");
    }
    document.write("Valor: " + num);
} catch (e) {
    document.write("Error: " + e.message)
}finally{
    document.write(" <br> Fim do tratamento.")
}
/* num = prompt("Digite um valor"); --> Vai aparecer uma janela na tela pedindo um valor;

if(num >10){
        throw new Error("Valor inválido");
    } --> Essa é a minha exceção, que caso esse if retorne true, ele vai "jogar" um erro;

    document.write("Valor: " + num); --> Caso a minha execeção retorne false ele vai imprimir no meu documento o comando.

    } catch (e) {
    document.write("Error: " + e.message)
}--> Esse comando so vai ser realizado se a minha exceçõ retornar true, aonde ele vai escrever no meu documento Error: <aqui vai a mensagem que eu coloquei no throw>
*/