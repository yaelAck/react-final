import React, { Component, useEffect, useState } from "react";
import "../css/ToDo.css";
import Header from "./Header";

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
  }, [props.id]);

  const mapToDo = userToDo
    ? userToDo.map((el, index) => {
        return (
          <li
          className="to-do-list"
            key={index}
            style={el.completed ? { backgroundColor: "rgb(10, 227, 10)" } : null}
          >
             <p>id: {el.id}</p>
            {!el.completed ? (
              <div>
                <input id={index} type="checkbox"></input>
                <label htmlFor={index}>{el.title}</label>
                </div>
            ) : <p>{el.title}</p>}
          </li>
      );
    })
    : null;
    return (
      <div>
       <Header id={props.id}/>
       <button>sort by complete posts</button>
      <ul>{mapToDo}</ul>
    </div>
  );
}

export default ToDo;
