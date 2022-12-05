//----------Promises----------//
/*video explicatório: https://www.youtube.com/watch?v=87gWRVGRZ5o&t=0s
As promises se assemelham com as promessas na vida real, fica esperando um retorno.
Quando eu crio uma promiseSalamanca ele fica esperando uma resposta.

Para criar uma promesa a gente precisar intanciar a classe Promise, que leva dois argumentos:
resolve(solução) e reject(erro);
para encadear mais processos utilizamos o método 'then';
Alguns recursos de JS(fetch API) e bibliotecas retornar promises.


Exemplo: Suponha que um grupo de amigos decide comprar ingressos para ir ao Show do Iron Mainden;
A compra desses ingresso é a promesa de que eu vou ao show, mas, antes de eu conseguir ir ao show pode acontecer um monte de eventos que me obrigam a faltar ao show;
Eu posso acabar indo ao show --> resolved --> .then(onFullfillment);
Ou eu posso acabar faltando ao show --> reject --> .catch(onRejection)|.then(onRejection);

No momento que me passa a promise eu não sei o valor, mas depois de um tempo esse valor chega sendo resolvido ou rejeitado.

A promise possui 3 etapas: Pending(pendente), Fulfilled(Realizado) e Rejected(rejeitado).

Estrutura de uma Promise :
const myPromise = New Promise(function(resolve, reject) => {...}
Lembrando que a Promesa não bloqueia o código, então se eu tiver algo impedindo de executar a promesa outra linha vai ser executada.
*/


//---------------------------------------------------------------------------------------------------//



const myPromise = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve(document.write('Resolvido!'));
    }, 2000);
});//Depois de 2 segundos ele me retorna na tela do documento a palavra: 'Resolvido'.


const usuario = new Promise((resolve, reject) => {
    
    const nome ="Samuel";

    if (nome === "Samuel") {
        resolve("Usuário Samuel encontrado");
    } else {
        reject("Usuário Samuel não encontrado");
        
    }

})


usuario.then((data) => {//Then vai ser usado para a minha promesa ser executada.
    //Aqui dentro eu posso colocar um argumento qualquer que vai significar o que esu estou esperando da promessa
    
    console.log(data); // Esse data vai ser praticamente a minha resposta do resolve e reject. Se for resolve ele vai prinar no meu console "Usuário Samuel encontrado", se for reject ele vai printar um erro "Usuário Samuel não encontrado", se quiser pode personalizar esse erro com catch().
    
})




//----------Then()----------//


/*O método .then() aceita até dois argumentos; o primeiro argumento é uma função de retorno de chamada para o caso cumprido da promise e o segundo argumento é uma função de retorno de chamada para o caso rejeitado. Cada .then() retorna um objeto de promise recém-gerado, que pode ser usado opcionalmente para encadeamento.
Vamos tentar encadear ele, e não precitar tratar esse dado em outro lugar, e sim na mesma promessa */

const usandoThen = new Promise((resolve, reject) => {
    
    const nome ="Matias";

    if (nome === "Matias") {
        resolve("USUÁRIO MATIAS ENCONTRADO");
    } else {
        reject("Usuário Matias não encontrado");
        
    }
});

usandoThen.then((data) =>{
    return data.toLowerCase()
}).then((StringModificada) => {
    console.log(StringModificada);
})//Aqui eu peguei o primeiro then e joguei ele em caixa baixa, no segundo then eu usei ele para imprimir no meu console o resultado do meu then anterior




//----------Reject()/catch()----------//


const manipulandoReject = new Promise((resolve, reject) => {
    
    const nome ="ab";

    if (nome === "Amanda") {
        resolve("USUÁRIO AMANDA ENCONTRADO");
    } else {
        reject("Usuário Amanda não encontrado");
        
    }
});

manipulandoReject.then((data) => {
    console.log(data);//"USUÁRIO AMANDA ENCONTRADO"
}).catch((erro) => {
    console.log("Acconteceu um erro: " + erro);//"Acconteceu um erro: Usuário Amanda não encontrado"--> erro=reject("Usuário Amanda não encontrado");
})


//Resolver várias promessas/Método ALL

const p1 = new Promise((resolve, reject) =>{
    setTimeout(() =>{
        resolve("P1 ok!");
    },2000)
})
const P2 = new Promise((resolve, reject) =>{
    resolve("P2 oK!");
})

const P3 = new Promise((resolve, reject) =>{
    resolve("P3 oK!");
})

const resolveAll = Promise.all([p1,P2,P3]).then((data) => {
    console.log(data); //--> (3) ['p1 oK!', 'P2 oK!', 'P3 oK!']. Ela vai ser resolvida por ultimo, pois espera a P1 ser executada
})


console.log("Esse log vai retornar primeiro que todas as promessas já feitas, pelo fato de as promessas terem de esperar, pois, O JS pode achar que as promessas não são algo imediato, enão ele executa as coisas mais fáceis");

//Race
//Vamos criar uma corrida entre as promisses:
const p4 = new Promise((resolve, reject) =>{
    setTimeout(() =>{
        resolve("p4 ok!");
    },2000)
})
const p5 = new Promise((resolve, reject) =>{
    resolve("p5 oK!");
})

const p6 = new Promise((resolve, reject) =>{
    resolve("p6 oK!");
})

const resolveRace = Promise.race([p4,p5,p6]).then((data) => {
    console.log(data); 
})
//Ele me vai executar a p5 de ser a primeira a conseguir ser executada
//E o método ALL vai executar ainda depois disso.

const userName = 'samuelESP';

fetch(`https://api.github.com/users/${userName}`, {//fetch retorna uma promessa
    method: 'GET',
    headers:{
        Accept: 'aplication/vnd.github.V3+json'
    },
})
.then((response) => {
    console.log(typeof response);
    console.log(response);
    return response.json()
})
.then((data) =>{
    console.log(data);
    console.log(`O nome do usuario é ${data.name}`);
})
.catch((err) => {
    console.log(`Houve algum erro: ${err}`);
})