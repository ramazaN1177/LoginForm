import React from 'react'
import { FaUser } from "react-icons/fa";
const ForgotPassword = () => {
  return (
    <div className='wrapper'>
    <form action=''>
        <h1>Enter Your E-Mail</h1>
        <div className="input-box">
            <input type="text" placeholder='Username' required></input>
            <FaUser className='icon' />
        </div>
        
        
        <button type='submit'>Send</button>

        
    </form>
</div>
  )
}

export default ForgotPassword;