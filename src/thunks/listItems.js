import axios from 'axios';
import {getFamiliesItem, getLocationItem, getProductItem} from '../actions';

const client = axios.create({
  baseURL: 'http://localhost:8000',
});
const token=JSON.parse(localStorage.getItem('tokenReducer')||'[]')
token.map((item=>
   client.defaults.headers.common['Authorization'] = `Bearer ${item.access_token}`
))


export const requestProducts = () => async (dispatch) => {
  try {
    const response = await client.get('/products');
    dispatch(getProductItem(response.data));
  } catch (err) {
    console.log(err);
  }
}
export const requestLocation = () => async (dispatch) => {
  try {
    const response = await client.get('/locations');
    dispatch(getLocationItem(response.data));
  } catch (err) {
    console.log(err);
  }
}

export const requestFamilies = () => async (dispatch) => {
  try {
    const response = await client.get('/families');
    console.log('i am family',response.data)
    dispatch(getFamiliesItem(response.data));
  } catch (err) {
    console.log(err);
  }
}