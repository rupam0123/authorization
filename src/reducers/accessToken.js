import { SET_ACCESS_TOKEN } from "../actions";

const getTokenFromLocalStorage = () => {
    const tokenJsonString = localStorage.getItem('token'); 
    return tokenJsonString;
  };

const initialState ={
    token:getTokenFromLocalStorage(),
}
const setTokenOnLocalStorage = (token) => {
    
    console.log('i am set token',token)
    localStorage.setItem('token', token);
  }

export const accessToken=(state=initialState,action)=>{
    switch(action.type){
        case SET_ACCESS_TOKEN:
            const token =action.payload
            console.log('i am state',token);
            setTokenOnLocalStorage(token);
            return{
                ...state,
                token,
            }
        default:
        return state

    }
}