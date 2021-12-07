import { GET_EMAIL_PASS } from "../actions";

const initialState = {
  logIn: {
    email: '',
    password: ''
  }
}

export const LogIn = (state = initialState, action) => {
  switch (action.type) {
    case GET_EMAIL_PASS:
      return {
        ...state,
        logIn: action.payload
      }
    default:
      return state
  }
}