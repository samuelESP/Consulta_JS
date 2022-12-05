/*video explicatório:https://www.youtube.com/watch?v=we5Ac8U21lI&t=0s 
Asfunções assíncronas funcionam como promises, porém com uma sintaxe mais simples;
Precisamos declarar a função com a palavra async;
E qaundo precisamos aguardar por algo a instrução precisa de await;
Podemos aplicar o recurso em funções anônimas e métodos de classe;
Tentar usar await sem async gera um erro.


async function nome([param[, param[, ... param]]]) {
   instruções
}
 */

function primeiraFuncao() {
    
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Esperou isso aqui");
            resolve()
        },2000)
    })
};

async function segundaFuncao() {
    console.log("Iniciou");

    await primeiraFuncao();

    console.log("Terminou");
}

segundaFuncao();

//Ele vai iniciar a função asincrona, onde primeiro ele vai buscar o log("iniciou"); depois, por conta do await, ele vai esperar primeiraFuncao() ser executada para dar continuidade com a leitura do código. Depois de executar a primeiraFuncao() ele executa o log('Terminou').

//prático

function getUser(id){

    return fetch(`http://reqres.in/api/users?id=${id}`)
    .then((data) => data.json())
    .catch((err) => console.log(err))
}

async function showUserName(id) {
    try {
        const user = await getUser(id);
    
        console.log(`O nome do usuario é: ${user.data.first_name}`);
    } catch (err) {
        console.log(`Erro: ${err}`);
    }
}
showUserName(3);