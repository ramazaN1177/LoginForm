import React from 'react';
import './LoginForm.css';
import { FaUser, FaLock } from "react-icons/fa";
import { Link } from 'react-router-dom';

const LoginForm = () => {
  return (
    <div className='wrapper'>
        <form action=''>
            <h1>Login</h1>
            <div className="input-box">
                <input type="text" placeholder='Username' required></input>
                <FaUser className='icon' />
            </div>
            <div className="input-box">
                <input type="password" placeholder='Password' required></input>
                <FaLock className='icon' />
            </div>

            <div className="remember-forgot">
                <label><input type='checkbox'/>Remember me</label>
                {/* Use Link instead of <a> for routing */}
                <Link to='/forgot-password'>Forgot password?</Link>
            </div>
            <button type='submit'>Login</button>

            <div className="register-link">
                <p>Don't have an account? 
                    {/* Use Link instead of <a> for routing */}
                    <Link to='/register'> Register</Link>
                </p>
            </div>
        </form>
    </div>
  );
}

export default LoginForm;
