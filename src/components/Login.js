import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/Login.css'; // Import style using a relative path
import user_icon from './assets/person.png'; // Import assets using relative paths
import email_icon from './assets/email.png';
import password_icon from './assets/password.png';
import { notification } from 'antd';
import jwt from 'jsonwebtoken';

 

const Login = () => {
  const navigate = useNavigate();
  const [action, setAction] = useState('Login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

 

  const handleLogin = async (e) => {
    e.preventDefault();

 

    if (!email || !password) {
      console.error('Email and password are required');
      openNotification('error', 'Please enter email and password');
      return;
    }

 

    try {
      // Send a POST request to your backend for user authentication
      const response = await fetch('http://localhost:8000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

 

      if (response.ok) {
        // Replace the secret key with your actual secret key for JWT
        const token = jwt.sign({ email }, 'a369af6e4b242028384da2bb87605bc4a5b58c74939a58cd943496ba93b308f7');

 

        const validationResponse = await fetch('http://localhost:8000/api/validate', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`, // Include the JWT token in the 'Authorization' header
          },
        });

 

        if (validationResponse.ok) {
          // Authentication successful, redirect or perform the desired action
          console.log('Login successful');
          openNotification('success', 'Login Successful');
          navigate('/dashboard'); // Use the navigate function to redirect
        } else {
          // Authentication failed
          console.error('Token validation failed');
          openNotification('error', 'Login Failed');
        }
      } else {
        console.error('Login Failed');
        openNotification('error', 'Login Failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

 

  const handleSignup = async () => {
    try {
      // Send a POST request to your backend to create a new user
      const response = await fetch('http://localhost:8000/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

 

      if (response.ok) {
        // Registration successful, you can also auto-login the user here
        console.log('Registration successful');
        openNotification('success', 'Registration Successful');
      } else {
        // Registration failed
        console.error('Registration failed');
        openNotification('error', 'Registration failed');
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
<input type="email" placeholder='Email' name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
</div>
<div className="input">
<img src={password_icon} alt="" />
<input type="password" placeholder='Password' name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
</div>
</div>
      {action === 'Sign Up' ? <div></div> : <div className="forgot-password">Forgot Password? <span>Click Here!</span></div>}
<div className="submit-container">
<button
          id="enter"
          className={action === 'Login' ? 'submit gray' : 'submit'}
          onClick={action === 'Login' ? handleLogin : handleSignup}
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