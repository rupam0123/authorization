import { GET_LOCATIONS_ITEM ,SET_LOCATION_LIMIT} from "../actions";

const initialState = {
    page:{
    location:[],
    filter:{page:1,limit:3}
    }
}

export const getLocation=(state=initialState,action)=>{
    switch(action.type){
        case GET_LOCATIONS_ITEM:
            return{
                ...state,
                page:{
                    ...state.page,
                    ...action.payload
                }
            }

        case SET_LOCATION_LIMIT :
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