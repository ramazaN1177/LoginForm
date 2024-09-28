import React,{useState} from 'react'
import { FaUser, FaLock } from "react-icons/fa";
import { Link,useNavigate } from 'react-router-dom';
import styles from './RegisterForm.module.css'; 
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth,db } from '../Firebase/firebase';
import { setDoc,doc } from 'firebase/firestore';
import alertify from "alertify.js";




const RegisterForm = () => {


const [email,setEmail]=useState("");
const [password,setPassword]=useState("");
const [fname,setFname]=useState("");
const [lname,setLname]=useState("");
const navigate = useNavigate();
const handleRegister = async (e)=>{
        e.preventDefault();
        try {
          await createUserWithEmailAndPassword(auth,email,password);
          const user = auth.currentUser;
          console.log(user);
          if(user){
            await setDoc(doc(db,"Users",user.uid),{
                email:user.email,
                firstname: fname,
                lastname: lname
            });
          }
       
          console.log("User Registered Succesfully!");
          alertify.success("User Registered Succesfully!");
        //navigate("/login")
          

        } catch (error) {
            console.log(error.message);
            alertify.error(error.message);

        }
}



  return (
    <div className={styles['wrapper']}>
    <form onSubmit={handleRegister} >
        <h1>Register</h1>
        <div className={styles["input-box"]}>
            <input type="text" placeholder='First Name' onChange={(e)=>setFname(e.target.value)} required></input>
            <FaUser className={styles['icon']} />
        </div>
        <div className={styles["input-box"]}>
            <input type="text" placeholder='Last Name' onChange={(e)=>setLname(e.target.value)} required></input>
            <FaUser className={styles['icon']} />
        </div>
        <div className={styles["input-box"]}>
            <input type="text" placeholder='E-Mail' onChange={(e)=>setEmail(e.target.value)} required></input>
            <FaUser className={styles['icon']} />
        </div>
        <div className={styles["input-box"]}>
            <input type="password" placeholder='Password' onChange={(e)=>setPassword(e.target.value)} required></input>
            <FaLock className={styles['icon']} />
        </div>
        
        
        
         <div className={styles["login-link"]}>
                <p>Already have an account?
                    {/* Use Link instead of <a> for routing */}
                    <Link to='/login'> Login</Link>
                </p>
            </div>



        
        <button type='submit'>Save</button>

        
    </form>
</div>
  )
}

export default RegisterForm;