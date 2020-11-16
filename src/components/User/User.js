import React from 'react';
import UserCount from '../UserCount/UserCount';
import { useState, useEffect } from 'react';
import fakeUsers from '../../data/users.json';
import UserProfile from '../UserProfile/UserProfile';
import userStyle from './User.css'
const User = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        setUsers(fakeUsers);
    }, [])

    const [addUser, setAddUser] = useState([]);
    const handleUserClick = (user) => {
        const newUser = [...addUser, user]
        setAddUser(newUser);
    }
    return (
        <div className = 'user'>
        <ul>
            {
                users.map(user => <UserProfile handleUserClick = {handleUserClick} user={user} ></UserProfile>)
            }
        </ul>
            <UserCount addUser = {addUser}></UserCount>
        </div>
    );
};

export default User;