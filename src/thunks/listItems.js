import client from '../axios'
import {getFamiliesItem, getLocationItem, getProductItem, getTransactionItem} from '../actions';

const getAuthorization=()=>{
  const temp = localStorage.getItem('token')
  client.defaults.headers.common['Authorization'] = `Bearer ${temp}`
} 


export const requestProducts = (productFilter) => async (dispatch) => {
  getAuthorization();
  try {
    const params = {
      _page: productFilter.page,
      _limit: productFilter.limit,
    };
    const response = await client.get('/products',{ params });
    dispatch(getProductItem({products:response.data}));
  } catch (err) {
    console.log(err);
  }
}
export const requestLocation = (locationFilter) => async (dispatch) => {
  getAuthorization();
  try {
    const params = {
      _page : locationFilter.page,
      _limit:locationFilter.limit,
    };
    const response = await client.get('/locations',{params});
    dispatch(getLocationItem({location:response.data}));
  } catch (err) {
    console.log(err);
  }
}

export const requestFamilies = () => async (dispatch) => {
  getAuthorization();
  try {
    const response = await client.get('/families');
    dispatch(getFamiliesItem(response.data));
  } catch (err) {
    console.log(err);
  }
}

export const requestTransaction = () => async (dispatch) => {
  getAuthorization();
  try {
    const response = await client.get('/transactions');
    dispatch(getTransactionItem(response.data));
  } catch (err) {
    console.log(err);
  }
}