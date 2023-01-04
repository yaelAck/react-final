import React from 'react';
import { Link } from 'react-router-dom';

export function UserNav() {
    return (
        <>
            <Link to="/toDo">ToDo</Link>
            <br />
            <Link to="/posts">Posts</Link>
            <br />
            <Link to="/albums">Albums</Link>
            <br />
            <Link to="/info">Info</Link>
            <br />
            <Link to="/logout">Logout</Link>
        </>
    )
}



