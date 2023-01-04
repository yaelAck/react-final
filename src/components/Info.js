import React, { useRef } from 'react';
import { useEffect, useState } from "react";
import Header from './Header';
import '../css/Info.css'

function Info(props) {
  const [user, setUser] = useState([]);
  const refInfo = useRef('')
  useEffect(() => {
    if (localStorage.getItem('currentUserInfo') !== null) {
      setUser(JSON.parse(localStorage.getItem('currentUserInfo')))
      refInfo.current = JSON.parse(localStorage.getItem('currentUserInfo'))
      console.log("enter to local storage info")
    }
    else {
      async function data(id) {
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/users?id=${id}`
        );
        const serverData = await res.json();
        setUser(serverData[0]);
        refInfo.current = serverData[0];
      }
      data(props.id);
    }
    return () => localStorage.setItem("currentUserInfo", JSON.stringify(refInfo.current))
  }, [props.id]);
  const address = `${user?.address?.city}, ${user?.address?.street},  ${user?.address?.zipcode} `;

  return (
    <>
      <Header id={props.id} />
      <div id='info-div'>
        <h2>Name: {user?.name}</h2>
        <h3>Email: {user?.email}</h3>
        <h3>phone: {user?.phone}</h3>
        <h3>Address: {address}</h3>
      </div>
    </>
  );
}
export default Info;