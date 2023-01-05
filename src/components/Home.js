import React, {useEffect, useState} from 'react';
import Header from "./Header";
import "../css/Home.css"

export function Home(props) {
    const [userName, setUserName] = useState([]);

    useEffect(() => {
        setUserName(props.userName)
    }, [props.userName])

    return (
        <>
            <Header id={props.id} />
            <h1 className='home'> Hello,{userName}</h1>
            <h3 className='home'>Welcome to your profile</h3>
        </>
    )
}

export default Home;