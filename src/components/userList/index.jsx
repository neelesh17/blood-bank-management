import React from 'react';
import './userList.css';
import {userList} from '../../constants';
const UserListTable = () => {
    return ( 
        <div className="userListContainer">
            <div className="userListHeader">Individual Donar List</div>
            <div className="tableContainer">
                <table className="table table-bordered">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Dob</th>
                        <th scope="col">Blood Group</th>
                        <th scope="col">City</th>
                        <th scope="col">State</th>
                        <th scope="col">Contact</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            userList.map((user, index) => (
                                <tr>
                                    <th scope="row">{index+1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.dob}</td>
                                    <td>{user.bloodGroup}</td>
                                    <td>{user.city}</td>
                                    <td>{user.state}</td>
                                    <td>{user.contact}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}
 
export default UserListTable;