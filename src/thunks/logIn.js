import client from '../axios';
import { setAccessToken } from '../actions';



export const requestlogIn = (user,history) => async (dispatch) => {
    try {
      const response = await client.post('/auth/login ',user);
       history.push('/product')
      dispatch(setAccessToken(response.data.access_token))
      } catch (err) {
      alert('please register first')
      console.log(err);
    }
  }