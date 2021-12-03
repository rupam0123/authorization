import axios from 'axios';
import { setAccessToken } from '../actions';

const client = axios.create({
  baseURL: 'http://localhost:8000',
});

export const requestlogIn = (user,history) => async (dispatch) => {
    try {
      const response = await client.post('/auth/login ',user);
      history.push('/loggedin')
      dispatch(setAccessToken(response.data));
    } catch (err) {
      alert('invalid user')
      console.log(err);
    }
  }