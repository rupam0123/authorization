import axios from 'axios';
import {getLocationItem} from '../actions';

const client = axios.create({
  baseURL: 'http://localhost:8000',
});
 const token=JSON.parse(localStorage.getItem('tokenReducer'))
 token.map((item=>
    client.defaults.headers.common['Authorization'] = `Bearer ${item.access_token}`
 ))


export const requestLocation = () => async (dispatch) => {
  try {
    const response = await client.get('/locations');
    dispatch(getLocationItem(response.data));
  } catch (err) {
    console.log(err);
  }
}