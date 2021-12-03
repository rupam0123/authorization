import client from '../axios';
import { setAccessToken } from '../actions';



export const requestlogIn = (user,history) => async (dispatch) => {
    try {
      const response = await client.post('/auth/login ',user);
      history.push('/loggedin')
      dispatch(setAccessToken(response.data.access_token));
    } catch (err) {
      alert('invalid user')
      console.log(err);
    }
  }