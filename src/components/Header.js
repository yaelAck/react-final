import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import "../css/Header.css"

function Header(props) {
   const user = props.id;
   const id = user;
    return (
        <div>
            <ul>
                <li className='header'><NavLink to={`user/${id}/home`}>Home</NavLink></li>
                <li className='header'><NavLink to={`user/${id}/toDo`}>ToDo</NavLink></li>
                <li className='header'><NavLink to={`user/${id}/posts`}>Posts</NavLink></li>
                <li className='header'><NavLink to={`user/${id}/albums`}>Albums</NavLink></li>

            </ul>
        </div>
    )
}

export default Header;