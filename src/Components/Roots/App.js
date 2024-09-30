import './App.css';
import React,{useState, useEffect} from 'react';
import ForgotPassword from '../ForgotPassword/ForgotPassword';
import LoginForm from '../LoginForm/LoginForm';
import RegisterForm from '../RegisterForm/RegisterForm';
import { Route, Routes,Navigate } from 'react-router-dom';
import { auth } from '../Firebase/firebase';
import Profile from '../Profile/Profile';




function App() {
  const [user, setUser] = useState();
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
    });
  })
  return (
    <div>
      <Routes>
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/" element={user ? <Navigate to="/profile"/>:<LoginForm />} />
        <Route path="/login" element={<LoginForm/>} />


      </Routes>
  
    </div>

  );
}

export default App;
