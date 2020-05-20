import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { productListReducer } from './reducers/productReducer';
import { cartReducer } from './reducers/cartReducer';
import { userSigninReducer, userRegisterReducer } from './reducers/userReducer';
import Cookie from 'js-cookie';

// we want to set our initial state to be what we have in the Cookie and if the cookie is empty
// we want to set it to an empty array
const cartItems = Cookie.getJSON('cartItems') || [];
const userInfo = Cookie.getJSON('userInfo') || null;
const initialState = { cart: { cartItems }, userSignin: { userInfo } };

const reducer = combineReducers({
  productList: productListReducer,
  cart: cartReducer,
  userSignin: userSigninReducer,
  userRegister: userRegisterReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));
export default store;
