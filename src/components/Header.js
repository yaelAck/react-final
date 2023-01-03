import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import "../css/Header.css"

function Header() {
    return (
        <div>
            <ul>
                <li className='header'><NavLink to={'/login'}>Login</NavLink></li>
                <li className='header'><NavLink to={'/home'}>Home</NavLink></li>
                <li className='header'><NavLink to={'/toDo'}>ToDo</NavLink></li>
                <li className='header'><NavLink to={'/posts'}>Posts</NavLink></li>
                <li className='header'><NavLink to={'/albums'}>Albums</NavLink></li>
                <li className='header'><NavLink to={'/info'}>Info</NavLink></li>
                <li className='header'><NavLink to={'/logout'}>Logout</NavLink></li>


            </ul>
        </div>
    )
}

export default Header;