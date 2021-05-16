import React from 'react';
import './navbar.css';
import logo from '../../logo.svg'

const NavBar = () => {
    return (
        <div className="navbarConatiner">
            <div className="logoContainer"><img src={logo} alt="logo" /></div>
            <div className="rightMenu">
                <div className="loginButton">Login</div>
                <div className="registerButton">Register</div>
            </div>
        </div>
    )
}

export default NavBar;