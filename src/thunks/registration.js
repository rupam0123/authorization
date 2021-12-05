import client from '../axios';
import {setAccessToken} from '../actions'

export const requestNewUsers = (user) => async (dispatch) => {
    try {
      const response = await client.post('/auth/register',user);
      console.log('i am registered',response.data)
      dispatch(setAccessToken(response.data.access_token));
      
    } catch (err) {
      console.log(err);
    }
  }