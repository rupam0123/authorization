import { SET_ACCESS_TOKEN } from "../actions";


const initialState ={
    token:'',
}

const setTokenOnLocalStorage = (token) => {
    localStorage.setItem('token', token);
  }

export const accessToken=(state=initialState,action)=>{
    switch(action.type){
        case SET_ACCESS_TOKEN:
            const token =action.payload
            setTokenOnLocalStorage(token);
            return{
                ...state,
                token:action.payload,
            }
        default:
        return state

    }
}