import axios from 'axios';
import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_SAVE_SUCCESS,
  PRODUCT_SAVE_REQUEST,
  PRODUCT_SAVE_FAIL,
} from '../constants/productConstants';

// listProducts is where we make our get request to the back end
// listProducts returns another function that accepts a parameter "dispatch"
// Each dispatch is an object that has a type (and a payload which is the data we will get if
// our axios call is successfull
const listProducts = () => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_LIST_REQUEST });
    const { data } = await axios.get('https://roomsofa.herokuapp.com/products');
    // console.log(data);
    dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: PRODUCT_LIST_FAIL, payload: error.message });
  }
};

const saveProducts = (product) => async (dispatch, getState) => {
  try {
    dispatch({ type: PRODUCT_SAVE_REQUEST, payload: product });
    // replace this userInfo with admin
    const {
      adminSignin: { adminInfo },
    } = getState();
    const { data } = await axios.post('https://roomsofa.herokuapp.com/products', product, {
      headers: {
        // 'content-type': 'multipart/form-data',
        Authorization: 'Bearer ' + adminInfo.token,
      },
    });
    dispatch({ type: PRODUCT_SAVE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: PRODUCT_SAVE_FAIL, payload: error.message });
  }
};

export { listProducts, saveProducts };
