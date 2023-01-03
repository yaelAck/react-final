import React, { useEffect } from 'react';
// import { Link } from 'react-router-dom';

export function Header() {




    return (
        <>
            <h1> Hellow {location.state}</h1>
            <ul>
                {/* <li><NavLink to={'/login'}>Login</NavLink></li> */}
                <li><NavLink to={'/home'}>Home</NavLink></li>
                <li><NavLink to={'/toDo'}>ToDo</NavLink></li>
                <li><NavLink to={'/posts'}>Posts</NavLink></li>
                <li><NavLink to={'/albums'}>Albums</NavLink></li>

            </ul>
        </>
    )
}