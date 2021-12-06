import { GET_TRANSACTIONS_ITEM } from "../actions";

const initialState ={
    trans:[]
}

export const getTranstaction=(state=initialState,action)=>{
    switch(action.type){
        case GET_TRANSACTIONS_ITEM:
            return{
                ...state,
                trans:action.payload
            }
        default:
            return state    
    }
        
}