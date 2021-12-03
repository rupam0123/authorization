import { GET_FAMILIES_ITEM } from "../actions";

const initialState ={
    family:[]
}

export const getFamily =(state=initialState,action)=>{
    switch(action.type){
        case GET_FAMILIES_ITEM:
        return{
            ...state,
            family:action.payload
        }
        default:
            return state
    }
}