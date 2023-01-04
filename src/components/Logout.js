import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export function Logout() {
    localStorage.removeItem('currentUser'); 
    const navigate = useNavigate()
    
    const toLogIn = () => {
        window.history.pushState(null,null,window.location.href);
        window.onpopstate =window.history.go(1);
        navigate("/")
    }

    return (
        <>
            <>{toLogIn()}</>
        </>
    )
}