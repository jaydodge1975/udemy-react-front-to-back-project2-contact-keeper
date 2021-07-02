import React, { useState } from 'react';

const Login = () => {
  const [user, serUser] = useState({
    email: '',
    password: '',
  });

  const { email, password } = user;

  const onChange = e => serUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    console.log('Login submit');
  };

  return (
    <div className='form-container'>
      <h1>
        Account <span className='text-secondary-bright'>Login</span>
      </h1>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <label htmlFor='email'>Email Address</label>
          <input
            type='email'
            name='email'
            value={email}
            onChange={onChange}
            autoComplete='off'
          />
        </div>
        <div className='form-group'>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            name='password'
            value={password}
            onChange={onChange}
            autoComplete='off'
          />
        </div>
        <input
          type='submit'
          value='Login'
          className='btn btn-primary btn-block'
        />
      </form>
    </div>
  );
};

export default Login;
