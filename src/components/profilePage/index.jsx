import React, {useState} from 'react';
import profile from "../../assets/profile.jpg"
import "./profile.css";

const ProfilePage = () => {
    const [userInfo, setUserInfo] = useState({
        "_id": "60b464c8d27de74c964f5099",
        "name": "Sandoval Hull",
        "gender": "male",
        "email": "sandovalhull@olympix.com",
        "contact": "+91 (919) 563-3492",
        "address": "779 Bliss Terrace",
        "city": "Caroleen",
        "state": "Massachusetts",
        "pinCode": 3989,
        "bloodGroup": "O+",
        "dob": "1997-07-28",
        "latitude": -66.284815,
        "longitude": -10.027864,
        "donationList": [
          {
            "header": "White Blood",
            "date": "2020-03-01",
            "address": "Specialty Medical Clinic, Hasty"
          },
          {
            "header": "Plasma",
            "date": "2020-08-26",
            "address": "White Willow Clinic, Nord"
          },
          {
            "header": "Platelets",
            "date": "2019-03-05",
            "address": "Serenity Medical Clinic,Breinigsville"
          }
        ]
    });
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
                    userInfo?.donationList?.map(donation => (
                        <div className="donation">
                        <div className="header">{donation.header}</div>
                        <div className="element">
                            <span>Last Donated on:</span> <span className="donationDate value">{donation.date || "Not Avaliable"}</span>
                        </div>
                        <div className="element">
                            <span>Place:</span> <span className="donationAddress value">{donation.address  || "Not Avaliable"}</span>
                        </div>
                    </div> 
                    ))
                }              
                </div>
            </div>
            <div className="rightSide">
                <div className="username">{userInfo.name}</div>
                <div className="divider">
                    <hr />
                    <p>Personal Information</p>
                </div>
                <div className="info">
                    <div className="element">
                        <span>Gender:</span> <span className="value">{userInfo.gender}</span>
                    </div>
                    <div className="element">
                        <span>Date of Birth:</span> <span className="value">{userInfo.dob}</span>
                    </div>
                    <div className="element">
                        <span>Blood Group:</span> <span className="value">{userInfo.bloodGroup}</span>
                    </div>
                </div>
                <div className="divider">
                    <hr />
                    <p>Contact Information</p>
                </div>
                <div className="info">
                    <div className="element">
                        <span>Phone Number :</span> <span className="value">{userInfo.contact}</span>
                    </div>
                    <div className="element">
                        <span>Address :</span> <span className="value">{userInfo.address}, {userInfo.city}, {userInfo.state}</span>
                    </div>
                    <div className="element">
                        <span>Pin Code :</span> <span className="value">{userInfo.pinCode}</span>
                    </div>
                    <div className="element">
                        <span>Email :</span> <span className="value">{userInfo.email}</span>
                    </div>
                </div>
                <button className="editProfileButton"  data-toggle="modal" data-target="#modal" >Edit</button>
            </div>         
        </div>
    );
}
 
export default ProfilePage;