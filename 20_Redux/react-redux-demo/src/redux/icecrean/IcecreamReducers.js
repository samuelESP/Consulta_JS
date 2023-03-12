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