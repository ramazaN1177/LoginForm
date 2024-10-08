import React from 'react'
import { FaUser } from "react-icons/fa";
import styles from './ForgotPassword.module.css'
const ForgotPassword = () => {
  return (

    <div>
      <div className={styles["forgot-password"]}>
        <div className={styles['wrapper']}>
          <form action=''>
            <h1>Enter Your E-Mail</h1>
            <div className={styles["input-box"]}>
              <input type="text" placeholder='Username' required></input>
              <FaUser className={styles['icon']} />
            </div>


            <button type='submit'>Send</button>


          </form>
        </div>
      </div>
    </div>

  )
}

export default ForgotPassword;