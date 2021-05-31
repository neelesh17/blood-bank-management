import React, { useState } from 'react';
import './editProfileDetailsModal.css';

const EditBlogDetailsModal = () => {
  const [userInfo, setUserInfo] = useState({
    name :"John Doe",
    contact:"9486375461",
    address:"422 Dicki Row Lavonne Key",
    city: 'Albania',
    state: "New York",
    bloodGroup:"AB+",
    gender: "Male",
    email: "johndoe@moogle.cc",
    pinCode: "13815",
    dob: '1999-05-12',
    wbDate: "2019-07-13",
    wbAddress: "City Hospital, Bhopal",
    plasmaDate: "2020-05-12",
    plasmaAddress: "AIMS Hospital, Bhopal",
    plateletsDate: "2018-12-26",
    plateletsAddress: "Hamidiya Hospital, Bhopal",
  });
  const handleChange = async(e) => {
    e.preventDefault();
    const {name, value} = e.target;
    await setUserInfo({...userInfo, [name]:value});
  }
  const handleSubmit = async(e) => {
    e.preventDefault();
    const data = {
      name :userInfo.name,
      conatct:userInfo.contact,
      address:userInfo.address,
      city: userInfo.city,
      state: userInfo.state,
      bloodGroup:userInfo.bloodGroup,
      gender: userInfo.gender,
      email: userInfo.email,
      pinCode: userInfo.pinCode,
      dob: userInfo.dob,
      donationList: [
          {
              header: "White Blood",
              date: userInfo.wbDate,
              address: userInfo.wbAddress
          },
          {
              header: "Plasma",
              date: userInfo.plasmaDate,
              address: userInfo.plasmaAddress
          },
          {
              header: "Platelets",
              date: userInfo.plateletsDate,
              address: userInfo.plateletsAddress
          }
      ]
    };
    console.log(data);
  }
  return(
    <div className="modal fade" id="modal" tabIndex="-1" aria-labelledby="modalLabel" aria-hidden="true" >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="modalLabel"> Update Profile </h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close" >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form className="form center flex-column" id="profileUpdateForm" onSubmit={handleSubmit}>
                <div className="col-12 form-group">
                  <label className="label" htmlFor="email"> Email </label>
                  <input type="email" className="form-control input" required id="email" name="email" value={userInfo.email} onChange={handleChange} placeholder="Email" />
                </div>
                <div className="flex">
                  <div className="col-8 form-group">
                    <label className="label" htmlFor="name"> Name </label>
                    <input type="text" className="form-control input" required id="name" name="name" placeholder="Name" value={userInfo.name} onChange={handleChange}/>
                  </div>
                  <div className="col-4 form-group">
                    <label className="label" htmlFor="contact"> Contact Number </label>                  
                    <input type="number" className="form-control input" required id="contact" name="contact" value={userInfo.contact} onChange={handleChange} placeholder="Contact Number" />
                  </div>
                </div>
                <div className="col-12 form-group">
                  <label className="label" htmlFor="address"> Address (max character: 250)</label> 
                  <textarea rows="3" type="text" maxLength="250" className="form-control input" required id="address" name="address" value={userInfo.address} onChange={handleChange} placeholder="Address" />
                </div>
                <div className="flex ">
                  <div className="col-4 form-group">
                    <label className="label" htmlFor="city">City</label>                  
                    <input type="text" className="form-control input" required id="city" name="city" value={userInfo.city} onChange={handleChange} placeholder="City" />
                  </div>
                  <div className="col-4 form-group">
                    <label className="label" htmlFor="state">State</label>                  
                    <input type="text" className="form-control input" required id="state" name="state" value={userInfo.state} onChange={handleChange} placeholder="State" />
                  </div>
                  <div className="col-4 form-group">
                    <label className="label" htmlFor="pinCode"> Pin Code </label>                  
                    <input type="number" className="form-control input" required id="pinCode" name="pinCode" value={userInfo.pinCode} onChange={handleChange} placeholder="Pin Code" />
                  </div>
                </div>
                <div className="flex ">
                  <div className="col-6 form-group">
                    <label className="label" htmlFor="dob"> Dob (dd-mm-yyyy)</label>
                    <input type="date" className="form-control input" required id="dob" name="dob" value={userInfo.dob} onChange={handleChange} placeholder="Dob :" />
                  </div>
                  <div className="col-3 form-group">
                    <label className="label" htmlFor="gender"> Gender</label>
                    <input type="text" className="form-control input" required id="gender" name="gender" value={userInfo.gender} onChange={handleChange} placeholder="Gender" />
                  </div>
                  <div className="col-3 form-group">
                    <label className="label" htmlFor="bloodGroup"> Blood Group</label>
                    <input type="text" className="form-control input" required id="bloodGroup" name="bloodGroup" value={userInfo.bloodGroup} onChange={handleChange} placeholder="Blood Group" />
                  </div>
                </div>
                <div className="flex">
                  <div className="col-6 form-group">
                    <label className="label" htmlFor="wbDate">Last donated White Blood on:</label>
                    <input type="date" className="form-control input" id="wbDate" name="wbDate" value={userInfo.wbDate} onChange={handleChange} placeholder="Date" />
                  </div>
                  <div className="col-6 form-group">
                    <label className="label" htmlFor="wbPlace">Last donated White Blood in:</label>
                    <input type="text" className="form-control input" id="wbPlace" name="wbAddress" value={userInfo.wbAddress} onChange={handleChange} placeholder="Place" />
                  </div>
                </div>
                <div className="flex">
                  <div className="col-6 form-group">
                    <label className="label" htmlFor="plasmaDate">Last donated Plasma on:</label>
                    <input type="date" className="form-control input" id="plasmaDate" name="plasmaDate" value={userInfo.plasmaDate} onChange={handleChange} placeholder="Date" />
                  </div>
                  <div className="col-6 form-group">
                    <label className="label" htmlFor="plasmaPlace">Last donated Plasma in:</label>
                    <input type="text" className="form-control input" id="plasmaPlace" name="plasmaAddress" value={userInfo.plasmaAddress} onChange={handleChange} placeholder="Place" />
                  </div>
                </div>
                <div className="flex">
                  <div className="col-6 form-group">
                    <label className="label" htmlFor="plateletDate">Last donated Platelets on:</label>
                    <input type="date" className="form-control input" id="plateletsDate" name="plateletsDate" value={userInfo.plateletsDate} onChange={handleChange} placeholder="Date" />
                  </div>
                  <div className="col-6 form-group">
                    <label className="label" htmlFor="wbPlace">Last donated Platelets in:</label>
                    <input type="text" className="form-control input" id="plateletPlace" name="plateletsAddress" value={userInfo.plateletsAddress} onChange={handleChange} placeholder="Place" />
                  </div>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button id="cancelBtn" data-dismiss="modal">Cancel</button>
              <button type="submit" form="profileUpdateForm" id="updateBtn"> UPDATE </button>
            </div>
          </div>
        </div>
      </div>
  )
}

export default EditBlogDetailsModal;
