import client from '../axios'
import {getFamiliesItem, getLocationItem, getProductItem} from '../actions';

const getItem=()=>{
  const temp = localStorage.getItem('token')
  client.defaults.headers.common['Authorization'] = `Bearer ${temp}`
} 


export const requestProducts = (productFilter) => async (dispatch) => {
  getItem();
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
  getItem();
  try {
    const response = await client.get('/locations');
    dispatch(getLocationItem(response.data));
  } catch (err) {
    console.log(err);
  }
}

export const requestFamilies = () => async (dispatch) => {
  getItem();
  try {
    const response = await client.get('/families');
    dispatch(getFamiliesItem(response.data));
  } catch (err) {
    console.log(err);
  }
}