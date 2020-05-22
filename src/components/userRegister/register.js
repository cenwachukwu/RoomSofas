import React, { useEffect, useState } from 'react';
import './register.scss';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from '@reach/router';
import { register } from '../../actions/userActions';

const Register = (props) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');

  const redirect = props.location.search ? props.location.search.split('=')[1] : '/';

  const dispatch = useDispatch();
  const userRegister = useSelector((state) => state.userRegister);
  const { loading, userInfo, error } = userRegister;

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [userInfo]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(register(name, email, password));
  };

  //   X6ZrRwt4hq8cU78

  return (
    <div className="SignIn">
      <form onSubmit={submitHandler}>
        <ul>
          <li>
            {loading && <div>Loading...</div>}
            {error && <div>{error}</div>}
          </li>

          <li>
            <input type="name" name="name" id="name" onChange={(e) => setName(e.target.value)} placeholder="Username" />
          </li>

          <li>
            <input
              type="email"
              name="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
          </li>

          <li>
            <input
              type="password"
              name="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
          </li>

          <li>
            <input
              type="password"
              name="password"
              id="repassword"
              onChange={(e) => setRePassword(e.target.value)}
              placeholder="Confirm Password"
            />
          </li>

          <li>
            <button type="submit" className="button primary">
              Register
            </button>
          </li>

          <li>
            {/* <Link to="/signin">Click here to sign in</Link> */}
            <Link to={redirect === '/' ? 'signin' : 'signin?redirect=' + redirect}>Click here to sign in</Link>
          </li>
        </ul>
      </form>
    </div>
  );
};

export default Register;
