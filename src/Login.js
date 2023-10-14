import React,{useState} from 'react';
import { useNavigate} from 'react-router-dom';
import './styles/Login.css';
import user_icon from './assets/person.png';
import email_icon from './assets/email.png';
import password_icon from './assets/password.png';
import {  notification } from 'antd';

const Login = () => {
  const navigate = useNavigate();
  const [action, setAction] = useState('Login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
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
        // Authentication successful, redirect or perform desired action
        console.log('Login successful');
        openNotification('success','Login Successful');
        navigate('/dashboard');
      } else {
        // Authentication failed
        console.error('Login failed');
        openNotification('error','Login Failed');
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
        openNotification('success','Registration Successful');
      } else {
        // Registration failed
        console.error('Registration failed');
        openNotification('error','Registration failed');
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
  return(
      <div class="container">
      <div class="header">

        <div class="text">{action}</div>
        <div class="underline"></div>
      </div>
      <div class="inputs">
      {action==="Login"?<div></div>:<div class="input">
        <img src={user_icon} alt="" />
        <input type="text" placeholder="Name" />
      </div>}
      
      <div class="input">
        <img src={email_icon} alt="" />
        <input type="email" placeholder='email'name="email" value={email} onChange={(e)=> setEmail(e.target.value)} />
      </div>
      <div class="input">
        <img src={password_icon} alt="" />
        <input type="password" placeholder='password' name="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
      </div>
      </div>
      {action==="Sign Up"?<div></div>:<div class="forgot-password">Forgot Password? <span>Click Here!</span></div>}
      
      <div class="submit-container">
        <button id ="enter"
          class={action === 'Login' ? 'submit gray' : 'submit'}
          onClick={action === 'Login' ? handleLogin : handleSignup}
        >
          {action}
        </button>
        <button
          class={action === 'Sign Up' ? 'submit gray' : 'submit'}
          onClick={() => {
            setAction(action === 'Login' ? 'Sign Up' : 'Login');
          }}
        >
          {action === 'Login' ? 'Sign Up' : 'Login'}
        </button>
      </div>
    </div>
  )
}
export default Login;