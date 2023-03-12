const redux = require('redux') 
const createStore = redux.createStore
const combineReducers = redux.combineReducers


const BUY_CAKE = "BUY_CAKE"
const BUY_ICECREAM = 'BUY_ICECREAM'
function buyCake() {
    return {
        type: BUY_CAKE,
        info: 'First redux action'
    }
}
function buyIcecream() {
    return {
        type: BUY_ICECREAM,
    }
}

//(previousState, action) => newState

const initialState = {
    numOfCakes : 10, //No começo do dia eu tenho 10 bolos na vitrine
    numOfIcecreams: 20,
}

//Agora eu já tenho o previousState(initialState) e a minha action (buyCake);

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
store.dispatch(buyIcecream())
store.dispatch(buyIcecream())


//unsubscribe
unsubscribed()





//Outro Exemplo:

function getMoney(){//Action
    return{
        type:"Vendendo",
    }
}


const initialState2 = {//state Inicial
    sumOfSelleing: 0
}


const reducer2 = (state = initialState2, action) => {//Reducer => newState
    switch (action.type) {
        case 'Vendendo': return{
            ...state,
            sumOfSelleing: state.sumOfSelleing + 1
        }
            
        default: return state
            
    }
}

const store2 = createStore(reducer2)

console.log('Valor Inicial do meu state', store2.getState());//Valor Inicial do meu state { sumOfSelleing: 0 }


const unsubscribe2 = store2.subscribe(() => console.log('novo state' , store2.getState()))

store2.dispatch(getMoney())//Registro novo - novo state { sumOfSelleing: 1 }
store2.dispatch(getMoney())//Registro novo - novo state { sumOfSelleing: 2 }
store2.dispatch(getMoney())//Registro novo - novo state { sumOfSelleing: 3 }


unsubscribe2()

console.log(store2.getState());//{ sumOfSelleing: 3 }




//Split | Combiner


const initialCake = {
    numOfCakes: 10
}
const initialIcecream = {
    numOfIcecreams: 20
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

const rootReducer = combineReducers({
cake: reducerCake,
icecream: reducerIcecream 
})

const store3 = createStore(rootReducer)

console.log('Initial State', store3.getState());

const unsubscribed3 = store3.subscribe(() => console.log('update State', store3.getState()))

store3.dispatch(buyCake())
store3.dispatch(buyCake())
store3.dispatch(buyIcecream())
store3.dispatch(buyIcecream())

unsubscribed()

