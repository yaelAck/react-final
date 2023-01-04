import React, { Component, useEffect, useState } from "react";
import "../css/ToDo.css";
import { UserNav } from "./UserNav";

function ToDo() {
  const [userToDo, setUserToDo] = useState("");
  useEffect(() => {
    async function data(id) {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/todos?userId=${id}`
      );
      const serverData = await res.json();
      setUserToDo(serverData);
    }
    data(1);
  }, []);



  const mapToDo = userToDo
    ? userToDo.map((el, index) => {
      return (
        <>
          <li key={index} style={el.completed ? { color: 'green' } : null}>
            {el.title}
            {!el.completed ? <input type="checkBox"></input> : null}
          </li>
        </>
      );
    })
    : null;
    
    return (
      <div>
      <UserNav />
      <ul>{mapToDo}</ul>
    </div>
  );
}

export default ToDo;
