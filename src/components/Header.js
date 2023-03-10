import React from 'react';
import { NavLink } from 'react-router-dom';
import "../css/Header.css"

function Header(props) {
    const user = props.id;
    const id = user;
    return (
        <div id='header-div'>
            <ul>
                <li className='header'><NavLink to={`/user/${id}/home`}>Home</NavLink></li>
                <li className='header'><NavLink to={`/user/${id}/info`}>Info</NavLink></li>
                <li className='header'><NavLink to={`/user/${id}/tasks`}>Tasks</NavLink></li>
                <li className='header'><NavLink to={`/user/${id}/posts`}>Posts</NavLink></li>
                <li className='header'><NavLink to={`/user/${id}/albums`}>Albums</NavLink></li>
                <li className='header' id="navRight"><NavLink to={`/user/${id}/logout`}>Logout</NavLink></li>
            </ul>
        </div>
    )
}

export default Header;