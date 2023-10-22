import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/Login.css';
import user_icon from './assets/person.png';
import email_icon from './assets/email.png';
import password_icon from './assets/password.png';
import { notification } from 'antd';
import axios from 'axios';
import LocalStorage from 'local-storage';

const Login = () => {
  const navigate = useNavigate();
  const [action, setAction] = useState('Login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email && !password) {
      console.error('Email and password are required');
      openNotification('error', 'Please Enter email and password');
      return;
    }
    try {
      // Send a POST request to your backend for user authentication
      const response = await axios.post('http://localhost:8000/api/login', {
        email,
        password,
      });

      if (response.status === 200) {
        // Authentication successful, store the JWT token in local storage
        const { token } = response.data;
        LocalStorage.set('token', token); // Store in local storage

        console.log('Login successful');
        openNotification('success', 'Login Successful');
        navigate('/dashboard');
      } else {
        // Authentication failed
        console.error('Login failed');
        openNotification('error', 'Login Failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const openNotification = (type, message) => {
    notification[type]({
      message: message,
    });
  };

  return (
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {action === 'Login' ? <div></div> : <div className="input">
          <img src={user_icon} alt="" />
          <input type="text" placeholder="Name" />
        </div>}

        <div className="input">
          <img src={email_icon} alt="" />
          <input
            type="email"
            placeholder="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input">
          <img src={password_icon} alt="" />
          <input
            type="password"
            placeholder="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>
      {action === 'Sign Up' ? <div></div> : <div className="forgot-password">Forgot Password? <span>Click Here!</span></div>}

      <div className="submit-container">
        <button
          id="enter"
          className={action === 'Login' ? 'submit gray' : 'submit'}
          onClick={handleLogin}
        >
          {action}
        </button>
        <button
          className={action === 'Sign Up' ? 'submit gray' : 'submit'}
          onClick={() => {
            setAction(action === 'Login' ? 'Sign Up' : 'Login');
          }}
        >
          {action === 'Login' ? 'Sign Up' : 'Login'}
        </button>
      </div>
    </div>
  );
};

export default Login;