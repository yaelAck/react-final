import React, { useEffect, useState } from 'react';
import useLocalStorage from './useLocalStorage';

function LogIn() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [items, setItems] = useState([])

    useEffect(() => {
        async function serchUser() {
            const response = await fetch(`https://jsonplaceholder.typicode.com/users`)
            const data = await response.json();
            setItems(data)
        }
        serchUser()
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault()


        // return () => {
        // }

        let flagUsername = false;
        let flagPassword = false;
        for (let item in items) {
            if (items[item].username === username) {
                flagUsername = true;
                let notPassword = items[item].address.geo.lat
                let pointIndex = notPassword.indexOf(".")
                let tempPassword = notPassword.slice(pointIndex + 1, pointIndex + 5)
                if (tempPassword === password) {
                    flagPassword = true;
                    console.log("yyyyy")
                    localStorage.setItem('currentUser', JSON.stringify(items[item]))
                }
            }
        }
        if (!flagUsername) {
            alert("incorrect username")
        }
        if (flagUsername && !flagPassword) {
            alert("incorrect password")
        }

    }


    return (
        <div>
            <h1></h1>
            <form onSubmit={handleSubmit}>
                <input type="text" value={username} placeholder="username" onChange={(e) => setUsername(e.target.value)} />
                <input type="text" value={password} placeholder="password" onChange={(e) => setPassword(e.target.value)} />
                <button type="submit">login</ button>
            </form>
        </div>
    )
}
export default LogIn;
