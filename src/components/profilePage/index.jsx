import React, {useState} from 'react';
import profile from "../../assets/profile.jpg"
import "./profile.css";

const ProfilePage = () => {
    const [userInfo, setUserInfo] = useState({
        name :"John Doe",
        conatct:"9486375461",
        address:"422 Dicki Row Lavonne Key ,Albania",
        bloodGroup:"AB+",
        gender: "Male",
        email: "johndoe@moogle.cc",
        pinCode: "13815",
        dob: "12-May-1999",
        donationList: [
            {
                header: "White Blood",
                date: "13-July-2019",
                address: "City Hospital, Bhopal"
            },
            {
                header: "Plasma",
                date: "12-May-2020",
                address: "AIMS Hospital, Bhopal"
            },
            {
                header: "Platelets",
                date: "26-December-2018",
                address: "Hamidiya Hospital, Bhopal"
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
                        <span>Phone Number :</span> <span className="value">{userInfo.conatct}</span>
                    </div>
                    <div className="element">
                        <span>Address :</span> <span className="value">{userInfo.address}</span>
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