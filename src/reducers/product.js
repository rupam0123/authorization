import { GET_PRODUCT_ITEM } from "../actions";

const initialState = {
    products:[]
}

export const getProduct=(state=initialState,action)=>{
    switch(action.type){
        case GET_PRODUCT_ITEM:
            return{
                ...state,
                products: action.payload
            }
            default:
                return state
    }

}