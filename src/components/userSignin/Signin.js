import React, { useEffect, useState } from 'react';
import './Signin.scss';
import { useSelector, useDispatch } from 'react-redux';
import { Link, navigate } from '@reach/router';
import { signin } from '../../actions/userActions';

const SignIn = (props) => {
  //   console.log(props);

  const dispatch = useDispatch();
  const userSignin = useSelector((state) => state.userSignin);
  const { loading, userInfo, error } = userSignin;
  const redirect = props.location.search ? props.location.search.split('=')[1] : '/';
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [userInfo]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(signin(email, password));
  };

  return (
    <div className="SignIn">
      <form onSubmit={submitHandler}>
        <ul>
          <li>
            {loading && <div>Loading...</div>}
            {error && <div>{error}</div>}
          </li>
          <li>
            {/* <label for="email">Email</label> */}
            <input
              type="email"
              name="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
          </li>

          <li>
            {/* <label for="password">Password</label> */}
            <input
              type="password"
              name="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
          </li>

          <li>
            <button type="submit" className="button primary">
              Sign in
            </button>
          </li>

          <li>
            {/* <Link to="/register">Create an account</Link> */}
            <Link to={redirect === '/' ? 'register' : 'register?redirect=' + redirect}>Create an account</Link>
          </li>
        </ul>
      </form>
    </div>
  );
};

export default SignIn;
