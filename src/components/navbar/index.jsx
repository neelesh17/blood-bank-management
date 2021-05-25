import React from 'react';
import './navbar.css';
import logo from '../../assets/logo.svg'

const NavBar = () => {
    return (
        <div className="navbarConatiner">
            <div className="leftContainer">
                <div className="logoContainer"><img src={logo} alt="logo" /></div>
                <div className="brandName">Lifeline</div>
            </div>
            <div className="rightMenu">
                <div className="FAQButton">FAQ's</div>
                <div className="aboutButton">About</div>
                <div className="registerButton">Signup/Login</div>
            </div>
        </div>
    )
}

export default NavBar;