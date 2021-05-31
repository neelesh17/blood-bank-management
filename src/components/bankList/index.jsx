import React from 'react';
import './bankList.css';
import { bankList } from '../../constants';

const BankListTable = () => {
    return ( 
        <div className="userListContainer">
            <div className="userListHeader">Blood Bank List</div>
            <div className="tableContainer">
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Address</th>
                            <th scope="col">Availability</th>
                            <th scope="col">Last Update</th>
                            <th scope="col">Category</th>
                            <th scope="col">Phone Number</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bankList.map((bank, index) => (
                                <tr>
                                    <th scope="row">{index+1}</th>
                                    <td>{bank.name}</td>
                                    <td>{bank.address}</td>
                                    <td>{bank.availability}</td>
                                    <td>{bank.lastUpdated}</td>
                                    <td>{bank.category}</td>
                                    <td>{bank.phone}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}
 
export default BankListTable;