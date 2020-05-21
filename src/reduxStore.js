import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { productListReducer, productSaveReducer } from './reducers/productReducer';
import { cartReducer } from './reducers/cartReducer';
import {
  userSigninReducer,
  userRegisterReducer,
  adminSigninReducer,
  adminRegisterReducer,
} from './reducers/userReducer';
import Cookie from 'js-cookie';

// we want to set our initial state to be what we have in the Cookie and if the cookie is empty
// we want to set it to an empty array
const cartItems = Cookie.getJSON('cartItems') || [];
// to save token for admin, we'll save to localStorage and get it from there
const adminInfoRaw = localStorage.getItem('adminInfo');
const adminInfo = JSON.parse(adminInfoRaw) || null;
const userInfo = Cookie.getJSON('userInfo') || null;
// to get token for admin, come here and say adminSignin: {adminInfo}
const initialState = { cart: { cartItems }, userSignin: { userInfo }, adminSignin: { adminInfo } };

const reducer = combineReducers({
  productList: productListReducer,
  cart: cartReducer,
  userSignin: userSigninReducer,
  userRegister: userRegisterReducer,
  adminSignin: adminSigninReducer,
  adminRegister: adminRegisterReducer,
  productSave: productSaveReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));
export default store;
