import { GET_LOCATIONS_ITEM } from "../actions";

const initialState = {
    location:[]
}

export const getLocation=(state=initialState,action)=>{
    switch(action.type){
        case GET_LOCATIONS_ITEM:
            return{
                ...state,
                location: action.payload
            }
            default:
                return state
    }

}