import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../css/Login.css"

function LogIn(props) {
    const [username, setUsername] = useState("Antonette")
    const [password, setPassword] = useState("9509")
    const [flag, setFlag] = useState(false)
    const navigate = useNavigate();

    localStorage.clear();
    //enable going back in history
    window.history.pushState(null, null, window.location.href);
    window.onpopstate = window.history.go(1);

    const handleSubmit = async (e) => {
        e.preventDefault()
        const response = await fetch(`https://jsonplaceholder.typicode.com/users?username=${username}`)
        const data = await response.json();
        const item = (data[0])

        if (!item) { //username incorrect
            setFlag(true)
            return
        }
        let notPassword = item.address.geo.lat
        let tempPassword = notPassword.slice(-4)

        if (tempPassword === password) {
            localStorage.setItem('currentUser', JSON.stringify(item));
            props.setUserId(item.id);
            navigate(`user/${item.id}/home`, { state: username });
        }
        else { //password incorrect
            setFlag(true)
        }
    }

    return (
        <div id="parentDiv">
            <div id="container">
                <h1>Login</h1>
                <form onSubmit={handleSubmit}>
                    <input className="LoginInput" type="text" value={username} placeholder="username" onChange={(e) => setUsername(e.target.value)} />
                    <input className="LoginInput" type="text" value={password} placeholder="password" onChange={(e) => setPassword(e.target.value)} />
                    <button className="Loginbutton" type="submit">login</ button>
                    <p>{flag ? "One or more of the details are incorrect" : ""}</p>
                </form>
            </div>
        </div>
    )
}

export default LogIn;
