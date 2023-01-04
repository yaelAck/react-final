import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export function Logout() {
    localStorage.removeItem('currentUser'); 
    const navigate = useNavigate()

    const toLogIn = () => {
        setTimeout(() => navigate("/LogIn"), 1000)
    }

    return (
        <>
            <h1>You Looged out successfuly</h1>
            <>{toLogIn()}</>
        </>
    )
}