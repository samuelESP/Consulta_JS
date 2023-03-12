# O que é o Redux?

Ele é uma lib de arquiteturo para qualquer aplicação JavaScript, ou seja, ele vai ser utilizar no momento que precisamos gerenciar os dados (informações) da nossa aplicação.

Essas informações não são apenas arrays, objetos, apis, etc; mas também são ações do user, como cliques em botões, navegação de página e etc.

O Redux ajuda você a escrever aplicativos que se comportam de forma consistente, executados em diferentes ambientes (cliente, servidor e nativo) e fáceis de testar.

Exemplo:

**Imagine um site de aulas online, onde no centro da minha tela eu tenho um vídeo da aula selecionado na minha sidebar a direita da tela**

<img src='./imgs/ExAulas.png' />

Essa Side bar é totalmente desconexa com a minha aula;

Mas ao terminar a aula 1 ele ira passar automaticamente para a aula 2, isso é um efeito colateral. Baseado em uma ação que aconteceu a gente foi jogado automaticamete para a próxima aula.

Essa ação de pular para próxima aula poderia por disparada de uma outra forma automaticamente também, então a gente precisaria centralizar essa ação de pular para a próxima aula em algum local para não ter esssa lógica repetida.

Com o Redux eu consigo tratar de forma única as ações que acontecem na nossa aplicação, e também o fluxo de dados da nossa aplicação.


<br><br>

# React + Redux

Você deve estar se perguntando agora por qual motivo tu quer usar Redux com React? Componentes no React tem seu proprio state.

Vamos ver um exemplo:

 1. O componente A tem um input que aceita o ``name`` que é guardado localmente no state do componente A 
<img src='./imgs/StateInReactApp.jpg' />

 2. Mas vamos supor que na hora da aplicação agora tu precisa desse input `name` também no componente B, para fazer isso eu vou ter que **"levantar"** o `name` para o componente C:

 <img src='./imgs/StateInReactApp2.jpg' />

 3. Mas ai tu decide também usar no componente D, para fazer isso vai ter que levantar para o componente E, e por ai vai.

 4. Se eu quiser passar para o componente G eu vou ter que passar como uma props por todo o caminho até chegar no componente G, e ainda os componentes que não precisam receber o elemento `name` vão acabar recebendo

 <img src='./imgs/StateInReactApp3.jpg' />

 **Dependendo do tamanho da cadeia de componente essa missão pode ser um pouco exaustiva e repetitiva, e ainda pode causar algumas rendâncias**

 <br>

 ### Agora vamos entrar com o Redux

  1. Vai guardar seu state fora dos seus componentes;

  2. Se um conponente quer o state, pode se comunicar diretamente com o Redux.

  <img src='./imgs/StateInRedux.jpg' />

  <br>

  Para usar React com Redux é um pouco complicado, por isso existe o React-Redux package

  <img src='./imgs/ReactRedux.jpg'/>


  O React-redux é uma lib que providência bindings para se usar react e Redux juntos na aplicação.



  # Getting start

  Para começar a usar o Redux eu posso começar usando ele sozinho ou ele junto com o REACT.

    vamos usar ele primeiro sozinho, depois seguiremos usando ele com React, fazendo um projeto

    
  ## Sozinho:

Primeiro colocamos no nosso terminal:

    npm init --yes
    vai iniciar o package.json com configurações default
```JS
    {
  "name": "redux-demo",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

    npm install redux
    para instalar as dependências do redux;
    vai adicionar o redux no nosso package.json e vai criar um package-lock.json e uma pasta node_modules

<img src='./imgs/ambiente.jpg' />

Lembrando que o Redux em si é instalado de forma global


    Agora a gente cria um arquivo JavaScript para rodar nosso código
<br>

## 3 Conceitos principais

Imagine uma loja que vende bolos;


<img src='./imgs/ThreeCoreEx.jpg'/>

Tu primeiro fala que quer comprar um bolo, e em seguida o balconista ira tirar o bolo da prateleira para você colocar numa caixa e o entregar mediante ao pagamento.

Como ele tirou o bolo da prateleira ele precisa gerar um tipo de documento ou recipo para controlar seus estoque e anotar que o numero de bolos diminuiu por que você comprou um.

Mas como isso se relaciona com Redux?


Bom Exixte 3 conceitos principais do Reduce, sendo eles Store, Action e Reducer


<img src='./imgs/ThreeCoreMean.jpg'/>

#### **Store**

Store se refere a guardar a informação de state da aplicação;
*Loja*

#### **Action**

Action se refere a descrever a ação de mudar o stae da aplicação;
*Comprar um Bolo*

#### **Reducer**

Reducer se refere ao laço que liga a ação com a armazenamento da informação;
*Balconista*


## 3 principios:

<img src='./imgs/FirstPRinciples.jpg'/>

<img src='./imgs/SecondPRinciples.jpg'/>

<img src='./imgs/ThirtyPRinciples.jpg'/>
Você não pode mudar o state guardado por si memso de forma direta, tem que chamar o meu reduce para gerar um novo state, ou seja:
    
    "Tu não pode simplesmente chegar e pegar o bolo, tu tem que avisar para o balconista que tu quer o bolo e ele vai fazer a ação de retirar o bolo e retirar a nota"

    
<img src='./imgs/Fundaments.jpg'/>

# Mão na massa:

## Action:
São a única maneira da minha aplicação interagir com a store;

Descrevem o que muda;

Ela carrega informações do meu app para o redux store;

Eles possuem `type` que indica o tipo de Action a ser executada;

`Type` é geralmente definida como uma string

```JS
const BUY_CAKE = "BUY_CAKE"

function buyCake() {
    return {
        type: BUY_CAKE,
        info: 'First redux action'
    }
}
//Action é um objeto com o type propriedade
//Action creator é uma function que retorna a Action
```

## Reducer:

Especifica como o state da aplicação respondem com a store;

Descreve como o state da aplicação muda;

É uma função que aceita states e actions como argumentos, e retorna o novo state da aplicação.

```JS
(previousState, action) => newState
```
<br>

Como um balconista eu quero manter um acompanhanmento de estoque do número de bolos na vitrine.

Então o meu state é um simples valor numerico.

Lembre-se minha aplicação de state tem que ser um simples objeto.


```JS
const BUY_CAKE = "BUY_CAKE"

function buyCake() {
    return {
        type: BUY_CAKE,
        info: 'First redux action'
    }
}

//(previousState, action) => newState

const initialState = {
    numOfCakes : 10, //No come do dia eu tenho 10 bolos na vitrine

}

//Agora eu já tenho o previousState(initialState) e a minha action (buyCake);

const reduce = (state = initialState, action) =>{
    switch(action.type){
        case BUY_CAKE: return{
            ...state,
            numOfCakes: state.numOfCakes -1 
        }
        default: return state
    }
}
```


## Store

Para nossa aplicação inteira so vamos ter uma Store;

1. Guardar o state da aplicação;
2. Permite acessar a aplicação via getState();
3. Permite state ser atualizado via dispatch(action);
4. Registrar listeners via subscribe(listener);
5. Retirar o registro dos listeners via função que retorna o subscribe(listener);


```JS

const redux = require('redux') 
const createStore = redux.createStore


const BUY_CAKE = "BUY_CAKE"

function buyCake() {
    return {
        type: BUY_CAKE,
        info: 'First redux action'
    }
}

//(previousState, action) => newState

const initialState = {
    numOfCakes : 10, //No come do dia eu tenho 10 bolos na vitrine

}

//Agora eu já tenho o previousState(initialState) e a minha action (buyCake);

const reducer = (state = initialState, action) =>{
    switch(action.type){
        case BUY_CAKE: return{
            ...state,
            numOfCakes: state.numOfCakes -1 
        }
        default: return state
    }
}

//Hold aplication State
/*Se você lembra nós ja temos um state, que é o initialState.
1. Vamos ter que required meu redux: const redux = requre('redux') 
const createStore = redux.createStore */
//createStore(reducer, [preloadedState], [enhancer])

const  store = createStore(reducer)

//getState(), me envia o state atual da minha Store

console.log('Initial State', store.getState());

//subscribe(), permiti o app a increver as mudanças na store

const unsubscribed = store.subscribe(() => console.log('update State', store.getState()))

//dispatch, recebe uma action como parâmetro

store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())


//unsubscribe
unsubscribed()
/*
Initial State { numOfCakes: 10 }
update State { numOfCakes: 9 }
update State { numOfCakes: 8 }
update State { numOfCakes: 7 }
*/
```

Ficou um pouco confuso? calma que eu vou explicar o que aconteceu.

<br>
Primeiro a gente precisa importar o redux com o CreateStore:

```JS
const redux = require('redux') 
const createStore = redux.createStore

//createStore(reducer, [preloadedState], [enhancer]) -> CreateStore tem como obrigatorio a passada do meu reducer
//Cria uma Redux store que contém a árvore de estado completa da sua aplicação. Deve haver apenas uma única store em sua aplicação.

//Mas o que é um Reducer mesmo? 
//Ruducer = Uma função redutora que retorna a próxima árvore de estado, dada a árvore de estado atual e uma ação a ser tratada. Ou seja, é uma função que é usada para retornar o newState do meu componente.
```

Esse é o meu Reducer: 
```JS
const reducer = (state = initialState, action) =>{
    switch(action.type){
        case BUY_CAKE: return{
            ...state,
            numOfCakes: state.numOfCakes -1 
        }
        default: return state
    }
}
//O parâmetro state se refere ao meu primeiro state da minhar arvore.
//O parâmetro action se refere a minha informação da aplicação

//Minhas Action:
const BUY_CAKE = "BUY_CAKE"

function buyCake() {
    return {
        type: BUY_CAKE,
        info: 'First redux action'
    }
}

//Eu ainda tenho o valor inicial da minha state declarodo aqui
const initialState = {
    numOfCakes : 10, 
}
```

E o que esses tres vão fazer?
 
 Ao usar o meu reducer ele vai perguntar primeiramente o type da minha Action, lembre-se que a minha action é um objeto.

 Em seguida caso o valor do meu type seja `BUY_CAKE` ele vai me cópiar o state e depois alterar o valor inicial do meu state para `numOfCakes : 10 -1`;


 Mas como ele faz tudo isso e ainda me printa na tela esse valor:

 ```JS
Initial State { numOfCakes: 10 }
update State { numOfCakes: 9 }
update State { numOfCakes: 8 }
update State { numOfCakes: 7 }
 ```

Primeiro a gente precisar sabar que o meu create vai receber um reducer, que ira fazer a function de reduzir a cada chamada o número de bolos:

```JS
const  store = createStore(reducer)
```
Agora a gente precisa entender a ``getState()``:

**getState() ->** Retorna a árvore de estado atual do seu aplicativo. É igual ao último valor retornado pelo store's reducer.

Então quando eu chamo:

```JS
console.log('Initial State', store.getState());
 //ele me retorna : Initial State { numOfCakes: 10 }
 //Eu ainda não registrei a minha função de reduzir elementos, por isso ele não me reduz nenhum item ainda. Vamos fazer isso ao seguir o exemplo.
```

<br>
dispatch(action)
Despacha uma ação. Essa é a única maneira de acionar uma mudança de estado.

A função de redução da store será chamada com o resultado getState() atual e a ação dada de forma síncrona. 
Seu valor de retorno será considerado o próximo estado. 
Ele será retornado de getState() a partir de agora e os listeners de alteração serão notificados imediatamente.

```JS
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
//Ou seja, ao usar dispatch(action = buyCake()), será possível alterar o state da minha aplicação via reducer.

//Lembra-se o store é a minha função de createStore(), então eu estou chamando 3 vezes essa minha função de reducer.
```

subscribe(listener):

Adiciona um listener de alteração.
 Ele será chamado sempre que uma ação for despachada e alguma parte da árvore de estado pode ter sido alterada. 
 Você pode então chamar getState() para ler a árvore de estado atual dentro do retorno de chamada.
```JS
const unsubscribed = store.subscribe(() => console.log('update State', store.getState()))
```

listener : O retorno de chamada a ser invocado sempre que uma ação foi despachada e a árvore de estado pode ter mudado. 
Você pode chamar getState() dentro deste callback para ler a árvore de estado atual. 
É razoável esperar que o redutor da store seja uma função pura, portanto, você pode comparar as referências a algum caminho profundo na árvore de estado para saber se seu valor foi alterado.



### Resumindo tudo:


1. primeiro dou um console.log; Me retornando assim o valor inicial do meu state na store;
```JS
 ('Initial State', store.getState());
```
***OBS: Eu ainda não registrei o meu action, então ele apenas pula o código***


2. chamei a função `unsubscribed()`;

***OBS: Agora eu já registrei o meu Action = buyCake(), unsando `store.dispatch(buyCake())`***
```JS
store.subscribe(() => console.log('update State', store.getState()))
```
Lembre que o mue subscribe() será chamado todas vez que haver um dispatch() ou uma parte da arvores de state seja alterada

3. a minha variável store recebe `createStore(reducer)`, isso quer dizer que ele vai criar uma Redux Store que recebe a arvore completa da minha aplicação;

4. o meu reduce não0 tem muito o que falar, pois ele é so uma função de switch;

5. e como eu to chamando o meu subscribe() 3 vezes ele vai fazer a suas validações 3 vezes e me retornar o que eu quero;


<br>

# Cake e IceCreams

Imagine agora que na sua loja alem de vender cakes você também quer vender sorvetes.
Você poderia muito bem pedir para seu balconista vender os 2, mas nesse caso você vai contratar um novo balconista só para vender seus sorvetes.

Agora o states da loja é o número de Cakes e Icecreams na vitrine e não apenas as do cake.


1. primeiro no meu initialstate eu vou adicionar os numeros de sorvetes:

```JS
const initialState = {
    numOfCakes : 10, 
    numOfIcecreams: 20,
}
```

2. Agora eu vou criar um novo switch case para compar sorvete:
```JS
const reducer = (state = initialState, action) =>{
    switch(action.type){
        case BUY_CAKE: return{
            ...state,
            numOfCakes: state.numOfCakes -1 
        }
        case BUY_ICECREAM: return{
            ...state,
            numOfIcecreams: state.numOfIcecreams -1 
        }
        
        default: return state
    }
}
```

3. Agora eu vou criar um nova ACTION:
```JS
store.dispatch(buyIcecream())
```

4. Agora vou dispatch esse action:
```JS
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIcecream())
store.dispatch(buyIcecream())
```

5. Como resultado eu vou ter:
```JS
Initial State { numOfCakes: 10, numOfIcecreams: 20 }
update State { numOfCakes: 9, numOfIcecreams: 20 }
update State { numOfCakes: 8, numOfIcecreams: 20 }
update State { numOfCakes: 8, numOfIcecreams: 19 }
update State { numOfCakes: 8, numOfIcecreams: 18 }
```


## Split|Combiner Reducers

Imagine que eu quero 1 reduce por vez, eu posso simplesmente separar o states de cake dos states de Icecreams:

OBS: **Irei reaproveitar meus Actions pq estou com com preguiça de digitar**



```JS
//Vai ser necessário nas minhas dependência o combiner de reducers:
const redux = require('redux') 
const createStore = redux.createStore
const combineReducers = redux.combineReducers

const BUY_CAKE = "BUY_CAKE"
const BUY_ICECREAM = 'BUY_ICECREAM'
function buyCake() {
    return {
        type: BUY_CAKE,
    }
}
function buyIcecream() {
    return {
        type: BUY_ICECREAM,
    }
}

const reducerCake = (state = initialCake, action) => {
    switch(action.type){
        case BUY_CAKE: return{
            ...state,
            numOfCakes: state.numOfCakes -1
        }
        default: return state
    }
}
const reducerIcecream = (state = initialIcecream, action) => {
    switch(action.type){
        case BUY_ICECREAM: return{
            ...state,
            numOfIcecreams: state.numOfIcecreams -1
        }
        default: return state
    }
}

//Antes de criar minhas store eu combino os reducers:
/*
The suggested structure for a Redux
 store is to split the state object into multiple “slices” or “domains” by 
 key, and provide a separate reducer 
 function to manage each individual data slice.
*/
const rootReducer = combineReducers({
cake: reducerCake,
icecream: reducerIcecream 
})
//combineReducers vai receber meus reducers como se fossem chaves de um objeto.
//agora eu consigo usar meu createStore sem problemas

const store3 = createStore(rootReducer)

console.log('Initial State', store3.getState());//Initial State { cake: { numOfCakes: 10 }, icecream: { numOfIcecreams: 20 } }
const unsubscribed3 = store3.subscribe(() => console.log('update State', store3.getState()))

store3.dispatch(buyCake())//update State { cake: { numOfCakes: 9 }, icecream: { numOfIcecreams: 20 } }
store3.dispatch(buyCake())//update State { cake: { numOfCakes: 8 }, icecream: { numOfIcecreams: 20 } }
store3.dispatch(buyIcecream())//update State { cake: { numOfCakes: 8 }, icecream: { numOfIcecreams: 19 } }
store3.dispatch(buyIcecream())//update State { cake: { numOfCakes: 8 }, icecream: { numOfIcecreams: 18 } }

unsubscribed()
```

### Mas qual a diferença?

A diferença é que agora eu consigo acessar o meu numOfCakes e meu numOfIcecreams separadamente
