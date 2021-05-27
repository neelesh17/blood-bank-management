import React from 'react';
import './navbar.css';
import logo from '../../assets/logo.svg'

const NavBar = () => {
    return (
        <div className="navbarConatiner">
            <div className="leftContainer">
                <a href="/">
                    <div className="logoContainer"><img src={logo} alt="logo" /></div>
                    <div className="brandName">Lifeline</div>
                </a>
            </div>
            <div className="rightMenu">
                <a className="donarListButton" href={window.location.href==="/" ? "#faq" : "/"}style={{cursor:"pointer"}}>Individual Donars</a>
                <a className="bankListButton" href={window.location.href==="/" ? "#faq" : "/"} style={{cursor:"pointer"}}>Blood Banks</a>
                <a className="FAQButton"href={window.location.href==="/" ? "#faq" : "/#faq"} style={{cursor:"pointer"}}>FAQ's</a>
                <a className="aboutButton" href={window.location.href==="/" ? "#about" : "/#about"} style={{cursor:"pointer"}}>About</a>
                <a className="userNameButton" href="/1/profile" style={{cursor:"pointer"}}>John Doe</a>
                {/* <a className="registerButton" style={{cursor:"pointer"}} href="/signup">Signup/Login</a> */}
            </div>
        </div>
    )
}

export default NavBar;