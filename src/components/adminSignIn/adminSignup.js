import React, { useEffect, useState } from 'react';
import '../userRegister/register.scss';
import { useSelector, useDispatch } from 'react-redux';
import { Link, navigate, redirectTo } from '@reach/router';
import { register, adminRegister } from '../../actions/userActions';

const AdminRegister = (props) => {
  const [username, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');

  const dispatch = useDispatch();
  const userRegister = useSelector((state) => state.userRegister);
  const { loading, userInfo, error } = userRegister;

  useEffect(() => {}, []);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(adminRegister(username, email, password));
    navigate('/signin/admin');
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
            <Link to="/signin/admin">Click here to sign in</Link>
          </li>
        </ul>
      </form>
    </div>
  );
};

export default AdminRegister;
