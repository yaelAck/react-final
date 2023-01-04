import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export function Logout() {
    localStorage.removeItem('currentUser'); 
    const navigate = useNavigate()

    const toLogIn = () => {
        window.history.pushState(null,null,window.location.href);
        window.onpopstate =window.history.go(1);
        setTimeout(() => navigate("/"), 500)
    }

    return (
        <>
            <h1>You Looged out successfuly</h1>
            <>{toLogIn()}</>
        </>
    )
}