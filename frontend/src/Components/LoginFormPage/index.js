import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { NavLink, Link } from 'react-router-dom';
import './LoginForm.css';

function LoginFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const [credential, setCredential] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);

  if (sessionUser) return (
    <Redirect to="/main" />
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password }))
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      });
  }

  const handleDemo = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential:"demo@user.io", password:"password" }))
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      });
  }

  return (
    <div className='login__container'>
      <form className='login__form' onSubmit={handleSubmit}>
        <div className= 'logo'>
          <NavLink exact to='/'><img src='/assets/roughdraftWriteItDown.png' alt='img' /></NavLink>
        </div>
        <div>
          <input
            placeholder='Email'
            className = 'login__email'
            type="text"
            value={credential}
            onChange={(e) => setCredential(e.target.value)}
            required
          />
        </div>
        <div>
          <input
            placeholder='Password'
            className = 'login__password'
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <ul>
          {errors.map((error, idx) => <li key={idx}>{error}</li>)}
        </ul>
        <button type="submit">Log In</button>
        <button className= "submit" onClick={handleDemo}>Log In as Demo</button>
        <p>
          <NavLink to='/signup'> Don't have an account? Sign Up!</NavLink>
        </p>
      </form>
    </div>
  );
}

export default LoginFormPage;
