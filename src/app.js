import React, { useEffect, useState, useReducer } from 'react';
import ReactDOM from 'react-dom';
import { Router, Link } from '@reach/router';

// pages
import './style.scss';
import Cart from './components/cart/cart';
import Footer from './components/footer/footer';
import Navbar from './components/navbar/navbar';
import Container from './components/MobileSidebar/Container/Container';
import Home from './components/pages/home';

// redux
import { Provider, useSelector, useDispatch } from 'react-redux';
import store from './reduxStore';
import { listProducts } from './actions/productActions';
import Categories from './components/pages/Categories/categories';

const App = (props) => {
  const productList = useSelector((state) => state.productList);
  const { products, loading, error } = productList;
  const dispatch = useDispatch();

  useEffect(() => {
    // the action we want useEffect to do is make an api call to get our product data
    dispatch(listProducts());
    return () => {
      //
    };
  }, []);

  return (
    <React.StrictMode>
      <Navbar />
      <Container />
      <Router>
        <Home path="/" />
        <Cart path="/cart" />
        <Categories path="/:category" ProductData={products.data} loading={loading} error={error} />
      </Router>

      <Footer />
    </React.StrictMode>
  );
};

const wrapper = document.getElementById('app');
wrapper
  ? ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>,
      wrapper
    )
  : false;
