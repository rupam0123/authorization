import client from '../axios'
import {getFamiliesItem, getLocationItem, getProductItem} from '../actions';


const token = localStorage.getItem('token')
console.log('i am get',token)
   client.defaults.headers.common['Authorization'] = `Bearer ${token}`


export const requestProducts = (productFilter) => async (dispatch) => {
  try {
    const params = {
      page: productFilter.page,
      limit: productFilter.limit,
    };
    const response = await client.get('/products',{ params });
    dispatch(getProductItem({products:response.data}));
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