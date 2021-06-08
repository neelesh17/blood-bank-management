import React from 'react';
import image from '../../assets/image3.jpg'

const AdminLogin = () => {
    return ( 
        <div className="loginContainer">
            <div className="loginImageContainer"><img src={image} alt="background" /></div>
            <div className="backButton"><a href="/"><i class="fas fa-arrow-left"></i> Back</a></div>
            <div className="loginHeader">Login</div>
            <form className="loginForm">
                <input style={{width:"100%"}} type="text" placeholder="Username" name="username" required/>
                <input style={{width:"100%"}} type="password" placeholder="Password" name="password" required/>
                <button type="submit" className="loginButton">Login</button>
            </form>
        </div>
     );
}
 
export default AdminLogin;