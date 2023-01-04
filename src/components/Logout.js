import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export function Logout() {
    
    const navigate = useNavigate()

    const toLogIn = () => {
        localStorage.clear();
        window.history.pushState(null, null, window.location.href);
        window.onpopstate = window.history.go(1);
        setTimeout(() => navigate("/"), 700)
    }

    return (
        <>
            <h1>You Looged out successfuly</h1>
            <>{toLogIn()}</>
        </>
    )
}