import React, { useEffect, useState, useReducer } from 'react';
import ReactDOM from 'react-dom';
import { Router, Link } from '@reach/router';

//bootstrap
import 'bootstrap';

// pages
import './style.scss';
import Cart from './components/pages/Cart';
import Footer from './components/footer/footer';
import Navbar from './components/navbar/navbar';
import Container from './components/MobileSidebar/Container/Container';
import Home from './components/pages/home';
import Categories from './components/pages/Categories/categories';
import ProductPage from './components/pages/Product';
import SignIn from './components/userSignin/Signin';
import Register from './components/userRegister/register';
import CreateProduct from './components/CreateProduct/CreateProduct';
import AdminSignIn from './components/adminSignIn/adminSignin';
import AdminRegister from './components/adminSignIn/adminSignup';
import UploadImage from './components/CreateProduct/uploadImages';
import Shipping from './components/Shipping/shipping';

// redux
import { Provider, useSelector, useDispatch } from 'react-redux';
import store from './reduxStore';
import { listProducts } from './actions/productActions';
import Payment from './components/Payment/Payment';

const App = (props) => {
  const productList = useSelector((state) => state.productList);
  const { products, loading, error } = productList;
  const dispatch = useDispatch();

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  //   console.log(userInfo);

  useEffect(() => {
    // the action we want useEffect to do is make an api call to get our product data
    dispatch(listProducts());
    return () => {
      //
    };
  }, []);

  return (
    <React.StrictMode>
      <Navbar user={userInfo} />
      <Container user={userInfo} />
      <Router>
        <Home path="/" exact component={Home} />
        <Cart path="/cart/*" component={Cart} />
        <Categories
          path="/:category"
          component={Categories}
          ProductData={products.data}
          loading={loading}
          error={error}
        />
        <ProductPage
          path="/product/*"
          component={ProductPage}
          ProductData={products.data}
          loading={loading}
          error={error}
        />
        <SignIn path="/signin" component={SignIn} />
        <Register path="/register" component={Register} />
        <CreateProduct path="/createproduct" component={CreateProduct} />
        <AdminSignIn path="/signin/admin" component={AdminSignIn} />
        <AdminRegister path="/register/admin" component={AdminRegister} />
        <UploadImage path="/admin/uploadImage" component={UploadImage} />
        <Shipping path="/shipping" component={Shipping} />
        <Payment path="/payment" component={Payment} />
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
