import React,{useState} from 'react';
import { FaUser, FaLock } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import styles from './LoginForm.module.css'; // Updated import
import { signInWithEmailAndPassword } from 'firebase/auth';
import{ auth } from '../Firebase/firebase';
import alertify from 'alertify.js';

const LoginForm = () => {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const navigate = useNavigate();


const handleSubmit= async(e)=>{
    e.preventDefault();
    try {
        await signInWithEmailAndPassword(auth,email,password);
        alertify.success("User Logged in Succesfully!");
        console.log("User Logged in Succesfully!");

       setTimeout(() => {
            navigate("/profile")
        }, 1000); // Delay of 1 second

        
    } catch (error) {
        console.log(error.message);
        alertify.error(error.message);

        
    }
}
    
    return (
        <div className={styles.wrapper}>  {/* Scoped style */}
            <form onSubmit={handleSubmit}>
                <h1>Login</h1>
                <div className={styles['input-box']}>
                    <input type="text" placeholder='E-Mail' value={email} onChange={(e)=>setEmail(e.target.value)} required />
                    <FaUser className={styles.icon} />
                </div>
                <div className={styles['input-box']}>
                    <input type="password" placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)} required />
                    <FaLock className={styles.icon} />
                </div>
                <div className={styles['remember-forgot']}>
                    <label><input type="checkbox" />Remember me</label>
                    <Link to='/forgot-password'>Forgot password?</Link>
                </div>
                <button type='submit'>Login</button>
                <div className={styles['register-link']}>
                    <p>Don't have an account? <Link to='/register'>Register</Link></p>
                </div>
            </form>
        </div>
    );
}

export default LoginForm;
