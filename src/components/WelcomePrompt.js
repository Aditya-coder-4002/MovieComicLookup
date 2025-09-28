
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './logincss.css'; 

export default function Login() {
  const [isActive, setIsActive] = useState(false);
  const navigate = useNavigate();

  const toggleForms = () => {
    setIsActive(!isActive);
  };

  const handleSignUp = (e) => {
    e.preventDefault();

    navigate('/signup'); 
  };

  const handleSignIn = (e) => {
    e.preventDefault();

    navigate('/signin'); 
  };

  return (
    <div className={`container ${isActive ? 'active' : ''}`}>
      <div className="form-container sign-up">
        <form onSubmit={handleSignUp}>
          <h1>Create Account</h1>
          <input type="text" name="name" placeholder="Name" required />
          <input type="email" name="email" placeholder="Email" required />
          <input type="password" name="password" placeholder="Password" required />
          <button href='/signup' type="submit" name="signup">Sign Up</button>
        </form>
        <div className="social-icons">
          {}
        </div>
        <span>or use your email for registration</span>
      </div>

      <div className="form-container sign-in">
        <form onSubmit={handleSignIn}>
          <h1>Sign In</h1>
          <input type="email" name="email" placeholder="Email" required />
          <input type="password" name="password" placeholder="Password" required />
          <button href='/signin' type="submit" name="signin">Sign In</button>
        </form>
        <div className="social-icons">
          {}   
        </div>
        <span>or use your email for login</span>
      </div>

      <div className="toggle-container">
        <div className="toggle">
          <div className="toggle-panel toggle-left">
            <h1>Welcome Back!</h1>
            <p>Enter your personal details to use all the site features</p>
            <button className="hidden" id="login" onClick={toggleForms}>Sign In</button>
          </div>
          <div className="toggle-panel toggle-right">
            <h1>Hello, Friend!</h1>
            <p>Register with your personal details to use all the site features</p>
            <button className="hidden" id="register" onClick={toggleForms}>Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
}

