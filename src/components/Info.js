import React, { useRef, useEffect, useState } from 'react';
import Header from './Header';
import checkLocalStorage from './useLocalStorage';
import '../css/Info.css'

function Info(props) {
  const [user, setUser] = useState([]);
  const refInfo = useRef('')

  useEffect(() => {
    async function getInfo() {
      let userInfo = await checkLocalStorage('currentUser', `https://jsonplaceholder.typicode.com/users?id=${props.id}`)
      setUser(userInfo)
      refInfo.current = userInfo
    }
    getInfo()

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