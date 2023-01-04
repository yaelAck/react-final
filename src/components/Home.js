import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { UserNav } from './UserNav';

export function Home() {
    const location = useLocation()
    return (
        <>
            <UserNav/>
            <h1> Hello, {location.state}</h1>
            <button>button1</button>
            {/* <Link to="/ToDo"> ToDo</Link> */}

        </>
    )
}