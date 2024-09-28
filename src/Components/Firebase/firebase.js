// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4fjhoVoxs4ZPExhfuInzljUTC2g6dHHY",
  authDomain: "login-auth-react-3bc6c.firebaseapp.com",
  projectId: "login-auth-react-3bc6c",
  storageBucket: "login-auth-react-3bc6c.appspot.com",
  messagingSenderId: "562298082650",
  appId: "1:562298082650:web:a86b9a6a340df5bf408f63"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth();
export const db=getFirestore(app);
export default app;