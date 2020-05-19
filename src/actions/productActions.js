import axios from 'axios';
import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
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

export { listProducts };
