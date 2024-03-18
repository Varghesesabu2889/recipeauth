// Navbar.js
import React from 'react';
import './Header.css';

const Header = ({ loginVisible, toggleForm }) => {
  return (
    <nav className="nav">
      <div className="nav-logo">
        <p>LOGO .</p>
      </div>
      <div className="nav-menu" id="navMenu">
        <ul>
          <li><a href="/" className="link">Home</a></li>
          <li><a href="#" className="link">Blog</a></li>
          <li><a href="#" className="link">Services</a></li>
          <li><a href="#" className="link">About</a></li>
        </ul>
      </div>
      <div className="nav-button">
        <button className="btn white-btn" id="loginBtn" onClick={toggleForm}>Sign In</button>
        <button className="btn" id="registerBtn" onClick={toggleForm}>Sign Up</button>
      </div>
      <div className="nav-menu-btn">
        <i className="bx bx-menu" onClick={toggleForm}></i>
      </div>
    </nav>
  );
};

export default Header;
