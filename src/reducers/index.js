import { combineReducers } from 'redux';
import { productsReducer } from './productsReducer';
import { alertReducer } from './alertReducer';

export const reducer = combineReducers({
    products: productsReducer,
    alert: alertReducer
})