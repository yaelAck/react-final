import React, { Component, useEffect, useState } from "react";
import "../css/ToDo.css";

function ToDo(props) {
  const [userToDo, setUserToDo] = useState("");
  useEffect(() => {
    async function data(id) {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/todos?userId=${id}`
      );
      const serverData = await res.json();
      setUserToDo(serverData);
      console.log(props)
    }
    data(props.id);
  }, []);

  const mapToDo = userToDo
    ? userToDo.map((el, index) => {
        return (
          <li
            key={"input" + index}
            style={el.completed ? { color: "green" } : null}
          >
            {!el.completed ? (
              <div>
                <input id={"input" + index} type="checkbox"></input>
                <label htmlFor={index}>{el.title}</label>
              </div>
            ) : <p>{el.title}</p>}
          </li>
        );
      })
    : null;

  return (
    <div>
      <ul>{mapToDo}</ul>
    </div>
  );
}

export default ToDo;
