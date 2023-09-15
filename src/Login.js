import React,{useState} from 'react';
import { useNavigate} from 'react-router-dom';
import './Login.css';
import user_icon from './assets/person.png';
import email_icon from './assets/email.png';
import password_icon from './assets/password.png';

const Login = () => {
  const navigate = useNavigate();
  const [action, setAction] = useState('Login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    try {
      // Send a POST request to your backend for user authentication
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        // Authentication successful, redirect or perform desired action
        console.log('Login successful');
        navigate('/dashboard');
      } else {
        // Authentication failed
        console.error('Login failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleSignup = async () => {
    try {
      // Send a POST request to your backend to create a new user
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        // Registration successful, you can also auto-login the user here
        console.log('Registration successful');
      } else {
        // Registration failed
        console.error('Registration failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
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
        <input type="email" placeholder='email' />
      </div>
      <div class="input">
        <img src={password_icon} alt="" />
        <input type="password" placeholder='password' />
      </div>
      </div>
      {action==="Sign Up"?<div></div>:<div class="forgot-password">Forgot Password? <span>Click Here!</span></div>}
      
      <div class="submit-container">
        <div
          class={action === 'Login' ? 'submit gray' : 'submit'}
          onClick={action === 'Login' ? handleLogin : handleSignup}
        >
          {action}
        </div>
        <div
          class={action === 'Sign Up' ? 'submit gray' : 'submit'}
          onClick={() => {
            setAction(action === 'Login' ? 'Sign Up' : 'Login');
          }}
        >
          {action === 'Login' ? 'Sign Up' : 'Login'}
        </div>
      </div>
    </div>
  )
}
export default Login;