import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <>
            <ul>
                <li className='header'><NavLink to={'/login'}>Login</NavLink></li>
                <li className='header'><NavLink to={'/home'}>Home</NavLink></li>
                <li className='header'><NavLink to={'/toDo'}>ToDo</NavLink></li>
                <li className='header'><NavLink to={'/posts'}>Posts</NavLink></li>
                <li className='header'><NavLink to={'/albums'}>Albums</NavLink></li>

            </ul>
        </>
    )
}

export default Header;