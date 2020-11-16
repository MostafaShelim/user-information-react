import React from 'react';
import './UserCount.css'
const UserCount = (props) => {
    const addUser = props.addUser;
    const totalSalary = addUser.reduce((total, user) => total + user.salary
    , 0);
    return (
        <div className = { 'user-count' }>
            <h3><u>Users Account</u></h3>
            <p>User Added: {addUser.length}</p>
            <p>Total Salary: {totalSalary.toFixed(2)}$</p>
        </div>
    );
};

export default UserCount;