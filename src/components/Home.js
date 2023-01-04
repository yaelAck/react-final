import { useEffect, useState } from "react";
import Header from "./Header";
import React from 'react';



export function Home(props) {
    const [userName,setUserName] = useState('');

    useEffect(() => {
        setUserName(props.userName)
    },[props.userName])
  
    return (
        <>
             <Header id={props.id}/>
            <h1> Hello,{userName?userName:null}</h1>
        </>
    )
}
export default Home;