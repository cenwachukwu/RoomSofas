import axios from 'axios';
import Cookie from 'js-cookie';
import {
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_SUCCESS,
  USER_SIGNIN_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  USER_LOGOUT,
  USER_UPDATE_REQUEST,
  USER_UPDATE_SUCCESS,
  USER_UPDATE_FAIL,
  ADMIN_SIGNIN_REQUEST,
  ADMIN_SIGNIN_SUCCESS,
  ADMIN_SIGNIN_FAIL,
  ADMIN_REGISTER_REQUEST,
  ADMIN_REGISTER_SUCCESS,
  ADMIN_REGISTER_FAIL,
} from '../constants/userConstants';

const signin = (email, password) => async (dispatch) => {
  dispatch({ type: USER_SIGNIN_REQUEST, payload: { email, password } });
  try {
    const { data } = await axios.post('https://roomsofa.herokuapp.com/signin', { email, password });
    dispatch({ type: USER_SIGNIN_SUCCESS, payload: data });
    Cookie.set('userInfo', JSON.stringify(data));
  } catch (error) {
    dispatch({ type: USER_SIGNIN_FAIL, payload: error.message });
  }
};

const adminSignin = (email, password) => async (dispatch) => {
  dispatch({ type: ADMIN_SIGNIN_REQUEST, payload: { email, password } });
  try {
    const { data } = await axios.post('https://roomsofa.herokuapp.com/admin/signin', { email, password });
    console.log(data);
    dispatch({ type: ADMIN_SIGNIN_SUCCESS, payload: data });
    localStorage.setItem('adminInfo', JSON.stringify(data));
  } catch (error) {
    dispatch({ type: ADMIN_SIGNIN_FAIL, payload: error.message });
  }
};

const register = (name, email, password) => async (dispatch) => {
  dispatch({ type: USER_REGISTER_REQUEST, payload: { name, email, password } });
  try {
    const { data } = await axios.post('https://roomsofa.herokuapp.com/register', { name, email, password });
    dispatch({ type: USER_REGISTER_SUCCESS, payload: data });
    Cookie.set('userInfo', JSON.stringify(data));
  } catch (error) {
    dispatch({ type: USER_REGISTER_FAIL, payload: error.message });
  }
};

const adminRegister = (username, email, password) => async (dispatch) => {
  dispatch({ type: ADMIN_REGISTER_REQUEST, payload: { name, email, password } });
  try {
    const { data } = await axios.post('https://roomsofa.herokuapp.com/admin/signup', { username, email, password });
    dispatch({ type: ADMIN_REGISTER_SUCCESS, payload: data });
    localStorage.setItem('adminInfo', JSON.stringify(data));
  } catch (error) {
    dispatch({ type: ADMIN_REGISTER_FAIL, payload: error.message });
  }
};

export { signin, register, adminSignin, adminRegister };
