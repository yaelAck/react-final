import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export function Logout() {
    localStorage.removeItem('currentUser'); 
    const navigate = useNavigate()
    navigate("/LogIn")

    return (
        <>
            <h1>Logout</h1>
        </>
    )
}