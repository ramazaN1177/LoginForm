import React,{useEffect,useState,useCallback} from 'react';
import styles from './Profile.module.css';
import{auth,db} from '../Firebase/firebase';
import {doc, getDoc} from 'firebase/firestore';
import alertify from 'alertify.js';
import { useNavigate } from 'react-router-dom';



const Profile = () => {

    const [userDetails,setUserDetails]=useState(null);
    const navigate = useNavigate();

    
        const fetchUserData = useCallback(() => {
            const unsubscribe = auth.onAuthStateChanged(async (user) => {
                if (user) {
                    const docRef = doc(db, "Users", user.uid);
                    const docSnap = await getDoc(docRef);
                    if (docSnap.exists()) {
                        setUserDetails(docSnap.data());
                    } else {
                        console.log("User is not in the application!");
                    }
                } else {
                    console.log("No user is signed in");
                    navigate('/login');
                }
            });
            return unsubscribe;
        }, [navigate]);
    
        useEffect(() => {
            const unsubscribe = fetchUserData();
            return () => unsubscribe();  // Cleanup listener when component unmounts
        }, [fetchUserData]);
    
        // rest of the component
    ;
    
    

  const handleLogout=async ()=>{
    try {
        await auth.signOut();
        
        console.log("User Logged Out Succesfully!");
        alertify.error("User Logged Out Succesfully!");
        navigate("/login");
      
 
    } catch (error) {
        console.log("Error logging out:", error.message);
        alertify.error("Error logging out:", error.message);
    }
  };

 return (
    <div  className={styles['wrapper-profile']}>
        {userDetails ?(
            <>
             <form>
            <h1>
                Welcome
            </h1>
            <div  className={styles['profile-table']}>
                <p>Email: {userDetails.email}</p>
                <p>First Name: {userDetails.firstname}</p>
                <p>Last Name: {userDetails.lastname}</p>
            </div>
            <button className={styles['exit-button']} type="button" onClick={handleLogout}>Exit</button>
            </form>
            </>
        ):(
            <p>Loading...</p>
        )}
       
    </div>
  )
}

export default Profile