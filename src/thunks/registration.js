import axios from 'axios';

const client = axios.create({
  baseURL: 'http://localhost:8000',
});

export const requestNewUsers = (user) => async (dispatch) => {
    try {
      const response = await client.post('/auth/register',user);
      console.log('i am registered',response.data)
      
    } catch (err) {
      console.log(err);
    }
  }