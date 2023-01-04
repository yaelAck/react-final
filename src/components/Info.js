import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { UserNav } from './UserNav';

export function Info() {
    const userInfoString = localStorage.getItem("currentUser")
    const userInfo = JSON.parse(userInfoString)
    return (
        <>
            <UserNav />
            {/* <p>{userInfoString}</p> */}
            <h3>User Info:</h3>
            <p>name: {userInfo.name}</p>
            <p>email: {userInfo.email}</p>
            <p>phone: {userInfo.phone}</p>
            <p>username: {userInfo.username}</p>

        </>
    )
}