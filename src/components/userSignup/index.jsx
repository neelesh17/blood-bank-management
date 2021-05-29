import React from 'react';
import image from "../../assets/image3.jpg";
import './signup.css';

const SignUp = () => {
    return ( 
        <div className="signupContainer">
            <div className="signupImageContainer"><img src={image} alt="background" /></div>
            <div className="backButton"><a href="/"><i class="fas fa-arrow-left"></i> Back</a></div>
            <div className="signupHeader">Sign Up</div>
            <form className="signupForm">
                <div>
                    <input style={{width:"100%"}} type="text" placeholder="Email" name="email" required/>
                </div>
                <div>
                    <input style={{width:"63%"}} type="text" placeholder="Name" name="name" required/>
                    <input style={{width:"31%"}} type="date" onChange={(e) =>e.target.className=(e.target.value!==''?'has-value':'')} placeholder="DOB" name="dob" required/>
                </div>
                <div>
                    <input style={{width:"47%"}} type="password" placeholder="Password" name="password" required/>
                    <input style={{width:"47%"}} type="password" placeholder="Confirm Password" name="confirmPassword" required/>
                </div>
                <div>
                    <input style={{width:"47%"}} type="number" placeholder="Contact Number" name="contactNumber" required/>
                    <input style={{width:"22%"}} type="text" placeholder="Blood Group"name="bloodGroup" required/>
                    <input style={{width:"21%"}} type="text" placeholder="Gender" name="gender" required/>
                </div>
                <div>
                    <textarea style={{width:"100%", height:"10vh"}} name="address" placeholder="Address" maxLength="250" minLength="20"></textarea>
                </div>
                <div>
                    <input style={{width:"25%"}} type="text" placeholder="City" name="city" required/>
                    <input style={{width:"25%"}} type="text" placeholder="State"name="state" required/>
                    <input style={{width:"25%"}} type="number" placeholder="Pin Code" name="pinCode" required/>
                </div>
                <button type="submit" className="signUpButton">SignUp</button>
                <p>Already a user? <a href="/user/login">Login</a></p>
            </form>
        </div>
     );
}
 
export default SignUp;