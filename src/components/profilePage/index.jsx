import React from 'react';
import profile from "../../assets/profile.jpg"
import { donationList } from '../../constants';
import "./profile.css";

const ProfilePage = () => {
    return ( 
        <div className="profilePageContainer">
            <div className="leftSide">
                <div className="imageContainer"><img src={profile} alt="profile" /></div>
                <div className="divider">
                    <hr />
                    <p>Donation Information</p>
                </div>
                <div className="donationList">  
                {
                    donationList?.map(donation => (
                        <div className="donation">
                        <div className="header">{donation.header}</div>
                        <div className="element">
                            <span>Last Donated on:</span> <span className="donationDate value">{donation.date}</span>
                        </div>
                        <div className="element">
                            <span>Place:</span> <span className="donationAddress value">{donation.address}</span>
                        </div>
                    </div> 
                    ))
                }              
                </div>
            </div>
            <div className="rightSide">
                <div className="username">John Doe</div>
                <div className="divider">
                    <hr />
                    <p>Personal Information</p>
                </div>
                <div className="info">
                    <div className="element">
                        <span>Gender:</span> <span className="gender value">Male</span>
                    </div>
                    <div className="element">
                        <span>Date of Birth:</span> <span className="dob value">12-May-1999</span>
                    </div>
                    <div className="element">
                        <span>Blood Group:</span> <span className="bloodGroup value">AB+</span>
                    </div>
                </div>
                <div className="divider">
                    <hr />
                    <p>Contact Information</p>
                </div>
                <div className="info">
                    <div className="element">
                        <span>Phone Number :</span> <span className="contact value">9486375461</span>
                    </div>
                    <div className="element">
                        <span>Address :</span> <span className="address value">422 Dicki Row Lavonne Key ,Albania</span>
                    </div>
                    <div className="element">
                        <span>Pin Code :</span> <span className="pinCode value">13815</span>
                    </div>
                    <div className="element">
                        <span>Email :</span> <span className="email value">johndoe@moogle.cc</span>
                    </div>
                </div>
                <div className="editProfileButton">Edit</div>
            </div>         
        </div>
    );
}
 
export default ProfilePage;