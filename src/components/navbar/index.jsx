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
                <a className="FAQButton" href="#faq" style={{cursor:"pointer"}}>FAQ's</a>
                <a className="aboutButton" href="#about" style={{cursor:"pointer"}}>About</a>
                <div className="registerButton" style={{cursor:"pointer"}}>Signup/Login</div>
            </div>
        </div>
    )
}

export default NavBar;