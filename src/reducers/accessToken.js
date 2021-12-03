import { SET_ACCESS_TOKEN } from "../actions";

const getTokenFromLocalStorage = () => {
    const tokenJsonString = localStorage.getItem('tokenReducer') || '[]'; 
    return JSON.parse(tokenJsonString);
  };

const initialState ={
    token:getTokenFromLocalStorage(),
}
const setTokenOnLocalStorage = (token = []) => {
    const tokenJsonString = JSON.stringify(token);
    localStorage.setItem('tokenReducer', tokenJsonString);
  }

export const accessToken=(state=initialState,action)=>{
    switch(action.type){
        case SET_ACCESS_TOKEN:
            const token =[...state.token,action.payload]
            setTokenOnLocalStorage(token);
            return{
                ...state,
                token,
            }
        default:
        return state

    }
}