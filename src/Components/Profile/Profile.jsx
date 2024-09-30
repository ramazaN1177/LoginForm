import React, { useEffect, useState, useCallback } from 'react';
import styles from './Profile.module.css';
import { auth, db } from '../Firebase/firebase';
import { doc, getDoc } from 'firebase/firestore';
import alertify from 'alertify.js';
import { useNavigate } from 'react-router-dom';
import profilePhoto from '../Assets/profilephoto.png';



const Profile = () => {

    const [userDetails, setUserDetails] = useState(null);
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



    const handleLogout = async () => {
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
        <div>
            <div className={styles["profile"]}>
                <div className={styles["profile-info"]}>
                    <div>
                        <img src={profilePhoto} alt="User's profile"></img>
                        <p>Email: {userDetails ? userDetails.email : 'Loading...'}</p>
                        <p>First Name: {userDetails ? userDetails.firstname : 'Loading...'}</p>
                        <p>Last Name: {userDetails ? userDetails.lastname : 'Loading...'}</p>


                    </div>
                    <button className={styles['exit-button']} type="button" onClick={handleLogout}>Exit</button>

                </div>
                <div className={styles["profile-set"]}>
                    <div className={styles["profile-set-general"]}>
                        <div className={styles["profile-info-set"]}>
                            profile-info-set
                        </div>
                        <div className={styles["profile-contact-set"]}>
                            profile-contact-set
                        </div>
                        <div className={styles["profile-address-set"]}>
                            profile-address-set
                        </div>
                    </div>
                </div>
            </div>
        </div>






    )
}

export default Profile;