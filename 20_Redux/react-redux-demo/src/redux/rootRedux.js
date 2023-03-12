import {combineReducers} from 'redux'
import reducer from './cake/CakeReducer'
import IcecreamReducer from './icecrean/IcecreamReducers'


const rootReducers = combineReducers({
    cake: reducer,
    iceCream: IcecreamReducer,
})


export default rootReducers