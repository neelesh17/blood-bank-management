import React from 'react';
import './editProfileDetailsModal.css';

const EditBlogDetailsModal = () => {
  // const [userInfo, setUserInfo] = useState({
  //   name :"John Doe",
  //   conatct:"9486375461",
  //   address:"422 Dicki Row Lavonne Key ,Albania",
  //   bloodGroup:"AB+",
  //   gender: "Male",
  //   email: "johndoe@moogle.cc",
  //   pinCode: "13815",
  //   dob: "12-May-1999",
  //   donationList: [
  //       {
  //           header: "White Blood",
  //           date: "13-July-2019",
  //           address: "City Hospital, Bhopal"
  //       },
  //       {
  //           header: "Plasma",
  //           date: "12-May-2020",
  //           address: "AIMS Hospital, Bhopal"
  //       },
  //       {
  //           header: "Platelets",
  //           date: "26-December-2018",
  //           address: "Hamidiya Hospital, Bhopal"
  //       }
  //   ]
  // });
  // const handleChange = async(e) => {
  //   e.preventDefault();
  //   const {name, value} = e.target;
  //   await setUserInfo({...userInfo, [name]:value});
  // }
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
              <form className="form center flex-column">
                <div className="form-group">
                  <label className="label" htmlFor="name"> Name </label>
                  <input type="text" className="form-control input" required id="name" name="name" placeholder="Name"/>
                </div>
                <div className="form-group">
                  <label className="label" htmlFor="email"> Email </label>
                  <input type="email" className="form-control input" required id="email" placeholder="Email" />
                </div>
                <div className="form-group">
                  <label className="label" htmlFor="address"> Address (max character: 250)</label> 
                  <textarea rows="3" type="text" maxLength="250" className="form-control input" required id="address" placeholder="Address" />
                </div>
                <div className="flex ">
                  <div className="col-8 form-group">
                    <label className="label" htmlFor="contact"> Contact Number </label>                  
                    <input type="number" className="form-control input" required id="contact" placeholder="Contact Number" />
                  </div>
                  <div className="col-4 form-group">
                    <label className="label" htmlFor="pinCode"> Pin Code </label>                  
                    <input type="number" className="form-control input" required id="pinCode" placeholder="Pin Code" />
                  </div>
                </div>
                <div className="flex ">
                  <div className="col-6 form-group">
                    <label className="label" htmlFor="dob"> Dob (dd-mm-yyyy)</label>
                    <input type="date" className="form-control input" required id="dob" placeholder="Dob :" />
                  </div>
                  <div className="col-3 form-group">
                    <label className="label" htmlFor="gender"> Gender</label>
                    <input type="text" className="form-control input" required id="gender" placeholder="Gender" />
                  </div>
                  <div className="col-3 form-group">
                    <label className="label" htmlFor="bloodGroup"> Blood Group</label>
                    <input type="text" className="form-control input" required id="bloodGroup" placeholder="Blood Group" />
                  </div>
                </div>
                <div className="flex">
                  <div className="col-6 form-group">
                    <label className="label" htmlFor="wbDate">Last donated White Blood on:</label>
                    <input type="date" className="form-control input" required id="wbDate" placeholder="Date" />
                  </div>
                  <div className="col-6 form-group">
                    <label className="label" htmlFor="wbPlace">Last donated White Blood in:</label>
                    <input type="text" className="form-control input" required id="wbPlace" placeholder="Place" />
                  </div>
                </div>
                <div className="flex">
                  <div className="col-6 form-group">
                    <label className="label" htmlFor="plasmaDate">Last donated Plasma on:</label>
                    <input type="date" className="form-control input" required id="plasmaDate" placeholder="Date" />
                  </div>
                  <div className="col-6 form-group">
                    <label className="label" htmlFor="plasmaPlace">Last donated Plasma in:</label>
                    <input type="text" className="form-control input" required id="plasmaPlace" placeholder="Place" />
                  </div>
                </div>
                <div className="flex">
                  <div className="col-6 form-group">
                    <label className="label" htmlFor="plateletDate">Last donated Platelets on:</label>
                    <input type="date" className="form-control input" required id="wbDate" placeholder="Date" />
                  </div>
                  <div className="col-6 form-group">
                    <label className="label" htmlFor="wbPlace">Last donated Platelets in:</label>
                    <input type="text" className="form-control input" required id="plateletPlace" placeholder="Place" />
                  </div>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button id="cancelBtn" data-dismiss="modal">Cancel</button>
              <button type="submit" id="updateBtn"> UPDATE </button>
            </div>
          </div>
        </div>
      </div>
  )
}

export default EditBlogDetailsModal;
