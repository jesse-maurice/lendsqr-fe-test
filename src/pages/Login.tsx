import '../styles/Login.module.scss';

import React, { useState } from 'react';

import logo from '../assets/images/Group.jpg';
import image from '../assets/images/pablo-sign-in_1-removebg-preview.png';

const Login: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };


  return (
    <div className="login-container">
      <section className="image-container">
        <div className="logo">
          <img className="logo" src={logo} alt="" />
        </div>
        <div className="image">
          <img className="logo-image" src={image} alt="" />
        </div>
      </section>
      <section className="form-container">
        <h1>Welcome!</h1>
        <h2>Enter details to login</h2>
        <div className="form">
          <input placeholder="Email" type="email" />
          <div className="password-container">
            <input
              placeholder="Password"
              type={showPassword ? "text" : "password"}
            />
            <button
              type="button"
              className="show-password-button"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
          <p>forgot password?</p>
          <button className="login-button">Log in</button>
        </div>
      </section>
    </div>
  );
}

export default Login