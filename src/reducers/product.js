import { GET_PRODUCT_ITEM ,SET_PRODUCT_PAGE} from "../actions";

const initialState = {
    page:{
    products:[],
    filter:{page:1,limit:1}
    }
}

export const getProduct=(state=initialState,action)=>{
    switch(action.type){
        case GET_PRODUCT_ITEM:
            return{
                ...state,
                page:{
                    ...state.page,
                    ...action.payload
                }
            }

        case SET_PRODUCT_PAGE :
            return{
                ...state,
                page:{
                    ...state.page,
                  filter:{
                      ...state.page.filter,
                      ...action.payload 
                  }  
                }
                
            }   
            default:
                return state
    }

}