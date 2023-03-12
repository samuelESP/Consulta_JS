# Instalar o Redux no React:

No console: **npm i redux react-redux**

Agora vou criar meu Cakecontainer.js:
```JS
import React from 'react'

function Cakecontainer() {
  return (
    <div>
        <h2>Nunber of cakes</h2>
        <button>Buy cake</button>
    </div>
  )
}

export default Cakecontainer
```

E jogalo dentro do meu App.js:

```JS
import logo from './logo.svg';
import './App.css';
import Cakecontainer from './components/Cakecontainer';

function App() {
  return (
    <div className="App">
      <Cakecontainer></Cakecontainer>
    </div>
  );
}

export default App;

```

como resultado inicial eu vou ter:

<img src='../imgs/cakecotainer.jpg' />


# Action:

Agora eu vou criar meu action.

1. Vou criar na meu Action nesse path: ``/src/redux/cake/CakeACtions.js ``


```JS

import { BUY_CAKE } from "./CakeType"


export const buyCake = () =>{
    return{
        type: BUY_CAKE
    }
}

```

2. meu type eu exportei de outras pasta chamada CakeType.js

```JS
export const BUY_CAKE = "BUY_CAKE"
```

# Reducer

Agora vamos fazer nosso reducer em um arquivo nomeaod de `CakeReducer.js`


```JS
import { BUY_CAKE } from "./CakeType"

const initialState = {
    numOfCakes: 10
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case BUY_CAKE: return{
            ...state,
            numOfCakes: state.numOfCakes - 1
        }
        default: return state
    }
}


export default reducer
```

# Redux store

vou criar um novo file chamado de Store.js;

lembre-se que a minha store precisa receber meu reducer.

```JS
import {createStore} from 'redux'
import reducer from './CakeReducer'

const store = createStore(reducer)


export default store
```

## Provider
 
 O nosso componente pode ler o state pela store, mas o React-Redux vai encontrar a store correta?

 Bom a gente resolve isso usando o **Provider**.

 Primeiramente a gente renderiza nosso App.js inteira dentro do nosso Provider e passa o nosso Redux store como uma prop.

 Apos fazer isso toda aplicação vai ser capaz de acessar nosso Redux store se for necessário:

 ```JS
 import logo from './logo.svg';
import './App.css';

import Cakecontainer from './components/Cakecontainer';
import { Provider } from 'react-redux';
import store from './redux/cake/Store';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Cakecontainer/>
    </div>
    </Provider>
  );
}

export default App;

 ```


# Connect

vamos aprender a Subscribed e dispatch meu react component;

Eu vou ir primeiramento no meu CakeContainer.js para display o numero de cakes; 
E esse também será o componente que eu quero dispatch a Action ao clicar no Botão de comprar um Cake.

A função connect() é usada para ligar um React component a minha Redux Store.

Ele fornece a seu componente conectado as partes dos dados de que precisa da store e as funções que pode usar para dispatch ações para a store.

Ele possui até 4 parâmetros, mas geralmente só se usam 2, sendo eles:

## mapStateToProps(state) => {Object}

Se uma função mapStateToProps for especificada, o novo componente wrapper se inscreverá nas atualizações da Redux store. 

Isso significa que sempre que o armazenamento for atualizado, mapStateToProps será chamado. **Funciona como se fosse o getState() no JS vanilla**

Os resultados de mapStateToProps devem ser um objeto simples, que será mesclado nas props do componente envolvido. 

Se você não deseja se inscrever para armazenar atualizações, passe null ou undefined no lugar de mapStateToProps.



## mapDispatchToProps = (dispatch, ownProps?) => {Object}

Convencionalmente chamado mapDispatchToProps, este segundo parâmetro para connect() pode ser um objeto, uma função ou não fornecido.

Seu componente receberá dispatch por padrão, ou seja, quando você não fornecer um segundo parâmetro para connect():

**Funciona como se fosse o Dispatch(Action) do JS vanilla**

<br>

Usando esses dois eu consigo passar meu dispatch e meu States como props para dentro do meu component:

**OBS: não é recomendado usar o connect hoje em dia, e sim o hook que ja já vamos dar uma olhada**
```JS

import React from 'react'
import { connect } from 'react-redux'
import { buyCake } from '../redux' 
//buyCake: export {buyCake} from './cake/CakeActions'
//Se refere ao meu Action


function Cakecontainer(props) {
  return (
    <div>
        <h2>Nunber of cakes - {props.numOfCakes}</h2>
        <button onClick={props.buyCake}>Buy cake</button>
    </div>
  )
}

const mapStateToProps = state  => {
  return{
    numOfCakes: state.numOfCakes
  }
}


const mapDispatchToProps = dispatch => {
  return{
    buyCake: () => dispatch(buyCake())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cakecontainer)

```

# Redux with Hooks

Os hooks serão usados para substituir o connect()

## useSelector

ele é um hook que permite extrair as informações da Redux Store state, usando um selector function;

Ele é parecido com o mapStateToProps

O seletor será chamado com todo o estado da loja Redux como seu único argumento. 


O seletor será executado sempre que o componente de função for renderizado.

useSelector() também se inscreverá na loja Redux e executará seu seletor sempre que uma ação for dispatch.

```JS
import React from 'react'

import {useSelector} from 'react-redux'

function HooksCakeContainer() {

    const numOfCakes = useSelector(state => state.numOfCakes)


  return (
    <div>
        <h2>Numbers of Cakes - {numOfCakes}</h2>
        <button>BUY CAKE</button>
    </div>
  )
}

export default HooksCakeContainer
```
```JS
//Dentro do meu App.js

import logo from './logo.svg';
import './App.css';
import Cakecontainer from './components/Cakecontainer';
import { Provider } from 'react-redux';
import store from './redux/cake/Store';
import HooksCakeContainer from './components/HooksCakeContainer';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Cakecontainer/>
      <HooksCakeContainer />
    </div>
    </Provider>
  );
}

export default App;

````

Agora eu tenho o mesmo resultado de status que o meu Cakecontainer possui.


agora basta fazer o meu dispatch:
 
## useDispatch 

Este hook retorna uma referência para a função dispatch do armazenamento Redux. 
Você pode usá-lo para despachar ações conforme necessário.

```JS

import React from 'react'

import {useSelector, useDispatch} from 'react-redux'
import { buyCake } from '../redux'

function HooksCakeContainer() {

    const numOfCakes = useSelector(state => state.numOfCakes)

    const dispatch = useDispatch()

  return (
    <div>
        <h2>Numbers of Cakes - {numOfCakes}</h2>
        <button onClick={() => dispatch(buyCake())}>BUY CAKE</button>
    </div>
  )
}

export default HooksCakeContainer
```

# Diferentes reducers:

 Bom, é a mesma coisa que o Vanilla;

 Primeiramente vou criar componentes diferente para Action, Reducer e Type do meu Icecream:

```JS
 //Type:
export const BUY_ICECREAM = 'BUY_ICECREAM'

//Reducer
import { BUY_ICECREAM } from "./IcecreamTypes"

const initialState = {
    numOfIcecream: 20
}

const IcecreamReducer = (state = initialState, action) => {
    switch(action.type){
        case BUY_ICECREAM: return{
            ...state,
            numOfIcecream: state.numOfIcecream -1 
        }
        default: return state
    }
}


export default IcecreamReducer

//Action
import { BUY_ICECREAM } from "./IcecreamTypes"

export const buyIcecream = () => {
    return{
        type: BUY_ICECREAM
    }
}


 
```

lembrando que cada um desses está em componentes diferentes.

Agora dentro do meu index.js do Redux eu vou deixar assim:

```JS
export {buyCake} from './cake/CakeActions'

export {buyIcecream} from './icecrean/IcecreamActions'
```

Em seguida tu lembra que o meu store so pode armazenar um elemento por vez?

E para resolver isso a gente usa o combineReducers, então eu vou criar um componente com o nome de rootRedux.js:

```JS
import {combineReducers} from 'redux'
import reducer from './cake/CakeReducer'
import IcecreamReducer from './icecrean/IcecreamReducers'


const rootReducers = combineReducers({
    cake: reducer,
    iceCream: IcecreamReducer,
})


export default rootReducers
```

Pronto agora eu juntei os dois em um so, para ser usado no meu store:

```JS
import {createStore} from 'redux'
import rootReducers from '../rootRedux'

const store = createStore(rootReducers)


export default store
```


Agora sou falta eu passar para o meu App.js para fazer display na tela do meu computador.

**OBS: lembra que eu disse que quando eu uso o combiner eu consigo fazer o acesso do meu store de forma separada?**
**Pois bem aqui vai ele:**


```JS
//Cake - state.cake.numOfCakes

import React from 'react'
import { connect } from 'react-redux'
import { buyCake } from '../redux'


function Cakecontainer(props) {
  return (
    <div>
        <h2>Nunber of cakes - {props.numOfCakes}</h2>
        <button onClick={props.buyCake}>Buy cake</button>
    </div>
  )
}

const mapStateToProps = state  => {
  return{
    numOfCakes: state.cake.numOfCakes
  }
}


const mapDispatchToProps = dispatch => {
  return{
    buyCake: () => dispatch(buyCake())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cakecontainer)



//Icecream- state.iceCream.numOfIcecream
import React from 'react'
import { connect } from 'react-redux'
import { buyIcecream } from '../redux'


function IcecreamContaier(props) {
  return (
    <div>
        <h2>Nunber of icecreams - {props.numOfIcecream}</h2>
        <button onClick={props.buyIcecream}>Buy Icecream</button>
    </div>
  )
}

const mapStateToProps = state  => {
  return{
    numOfIcecream: state.iceCream.numOfIcecream
  }
}


const mapDispatchToProps = dispatch => {
  return{
    buyIcecream: () => dispatch(buyIcecream())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(IcecreamContaier)

```
