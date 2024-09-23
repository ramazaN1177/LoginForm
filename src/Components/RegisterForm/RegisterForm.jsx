import React from 'react'
import { FaUser, FaLock } from "react-icons/fa";

const RegisterForm = () => {
  return (
    <div className='wrapper'>
    <form action=''>
        <h1>Register</h1>
        <div className="input-box">
            <input type="text" placeholder='Username' required></input>
            <FaUser className='icon' />
        </div>
        <div className="input-box">
            <input type="text" placeholder='E-Mail' required></input>
            <FaUser className='icon' />
        </div>
        <div className="input-box">
            <input type="password" placeholder='Password' required></input>
            <FaLock className='icon' />
        </div>
        <div className="input-box">
            <input type="password" placeholder=' Confirm Password' required></input>
            <FaLock className='icon' />
        </div>

        
        <button type='submit'>Save</button>

        
    </form>
</div>
  )
}

export default RegisterForm;