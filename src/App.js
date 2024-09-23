import './App.css';
import ForgotPassword from './Components/ForgotPassword/ForgotPassword';
import LoginForm from './Components/LoginForm/LoginForm';
import RegisterForm from './Components/RegisterForm/RegisterForm';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/" element={<LoginForm />} />

      </Routes>
    </div>

  );
}

export default App;
