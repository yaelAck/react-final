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
      // console.log(props)
    }
    data(props.id);
  }, [props.id]);

  let mapToDo = userToDo
    ? userToDo.map((el, index) => {
      return (
        <li
        className="to-do-list"
          key={index}
          style={el.completed ? { backgroundColor: "rgb(10, 227, 10)" } : null}>
          <p>id: {el.id}</p>
          {!el.completed ? (
            <div>
              <input id={index} type="checkbox" onChange={()=>changeElComplite(index)}></input>
              <label htmlFor={index}>{el.title}</label>
            </div>
          ) : <p>{el.title}</p>
          }
        </li>
      );
    })
    : null;

    const changeElComplite =(index) =>{
      const tempUserToDo = [...userToDo];
      tempUserToDo[index].completed= tempUserToDo[index].completed?false:true;
      console.log(tempUserToDo, tempUserToDo[index])
      setUserToDo(tempUserToDo)
    }
  // console.log(userToDo)

  const sortByComplited = () => {
    const tempUserToDo = [...userToDo]
    tempUserToDo.sort((a, b) => {
      if (a.completed) {
        return -1
      }
      return 1
    })
    setUserToDo(tempUserToDo)
  }

  const sortById = () => {
    const tempUserToDo = [...userToDo]
    tempUserToDo.sort((a, b) => a.id - b.id)
    setUserToDo(tempUserToDo)
  }

  const sortByAlphabet = () => {
    const tempUserToDo = [...userToDo]
    tempUserToDo.sort((a, b) => a.title.localeCompare(b.title));
    setUserToDo(tempUserToDo)
  }

  const sortRandomly = () => {
    const tempUserToDo = [...userToDo]
    tempUserToDo.sort(() => 0.5 - Math.random());
    setUserToDo(tempUserToDo)
  }

  return (
    <div>
      <Header id={props.id} />
      <button onClick={sortByComplited}>sort by complited posts</button>
      <button onClick={sortById}>sort by posts id</button>
      <button onClick={sortByAlphabet}>sort by alphabet</button>
      <button onClick={sortRandomly}>sort randomly</button>

        <ul>{mapToDo}</ul>
      </div>
      );
}

      export default ToDo;
