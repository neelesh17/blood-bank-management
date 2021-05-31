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
                <a className="donarListButton" href="/user/list" style={{cursor:"pointer"}}>Individual Donars</a>
                <a className="bankListButton" href="/bank/list" style={{cursor:"pointer"}}>Blood Banks</a>
                <a className="FAQButton"href={window.location.href==="/" ? "#faq" : "/#faq"} style={{cursor:"pointer"}}>FAQ's</a>
                <a className="aboutButton" href={window.location.href==="/" ? "#about" : "/#about"} style={{cursor:"pointer"}}>About</a>
                {/* <a className="userNameButton" href="/user/1/profile" style={{cursor:"pointer"}}>John Doe</a> */}
                <div className="dropdown">
                    <span type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="d-flex justify-content-between align-items-center dropdown-toggle">
                        Signup/Login
                    </span>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a className="dropdown-item" href="/user/signup">Donar</a>
                        <a className="dropdown-item" href="/bank/login">Blood Bank</a>
                    </div>
                </div>
                {/* <a className="registerButton" style={{cursor:"pointer"}} href="/signup">Signup/Login</a> */}
            </div>
        </div>
    )
}

export default NavBar;