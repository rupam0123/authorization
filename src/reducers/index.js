import { combineReducers } from 'redux';
import {registration} from './registration'
import { accessToken } from './accessToken';
import { LogIn } from './logIn';
import { getProduct } from './product';
import { getLocation } from './location';
import { getFamily } from './families';
import { getTranstaction } from './transaction';


export default combineReducers({
    registration,
		accessToken,
		LogIn,
		getProduct,
		getLocation,
		getFamily,
		getTranstaction
});