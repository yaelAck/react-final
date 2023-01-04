import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import "../css/Header.css"

function Header() {
    /////////try
    const [username, setUsername] = useState(0)
    const [count, setCount] = useState(0)
    const [styleLi, setStyleLi] = useState(null)

    let userInfoString;
    useEffect(() => {
        userInfoString = localStorage.getItem("currentUser")
        const userInfo = JSON.parse(userInfoString)
        setUsername(userInfoString !== null ? userInfo.username : null)
        console.log(username)
        setStyleLi("block")
    }, [count])

    const countChange = () => {
        setCount(count + 1)
    }
    /////////
    return (
        <div>
            <ul>
                <li className='header' onClick={countChange}><NavLink to={'/login'}>Login</NavLink></li>
                <li className='header' /*style={styleLi !== null ? {display : styleLi } : { display: "none" }*/><NavLink to={'/home'}>Home</NavLink></li>{/*******/}
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