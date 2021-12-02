import axios from 'axios';
import {getProductItem} from '../actions';

const client = axios.create({
  baseURL: 'http://localhost:8000',
});
 const token=JSON.parse(localStorage.getItem('token'))
 token.map((item=>
    client.defaults.headers.common['Authorization'] = `Bearer ${item.token}`
 ))


export const requestProducts = () => async (dispatch) => {
  try {
    const response = await client.get('/products');
    console.log("i am response",response.data)
    dispatch(getProductItem(response.data));
  } catch (err) {
    console.log(err);
  }
}