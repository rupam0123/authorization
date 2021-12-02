import { SET_EMAIL_PASS } from "../actions";

const initialState = {
  data: {
  email:'',
  password:'',
  }
}

export const registration = (state = initialState, action) => {
  switch (action.type) {
    case SET_EMAIL_PASS:
      return {
        ...state,
        data: action.payload
      }
    
    default:
      return state

  }
}