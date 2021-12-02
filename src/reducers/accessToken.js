import { SET_ACCESS_TOKEN } from "../actions";

const initialState ={
    token:[]
}

export const accessToken=(state=initialState,action)=>{
    switch(action.type){
        case SET_ACCESS_TOKEN:
            return{
                ...state,
                token:action.payload
            }
        default:
        return state

    }
}