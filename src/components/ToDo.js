import React, { Component, useEffect, useRef, useState } from "react";
import "../css/ToDo.css";
import Header from "./Header";
import UserToDo from './UserToDo'

function ToDo(props) {
  const [userToDo, setUserToDo] = useState([]);
  const refToDo = useRef('')
  useEffect(() => {
    if(localStorage.getItem('currentUerToDo') !== null){
      setUserToDo(JSON.parse(localStorage.getItem('currentUerToDo')))
      refToDo.current = JSON.parse(localStorage.getItem('currentUerToDo'))
      console.log("enter to local storage to do")
    }
    else{
      async function data(id) {
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/todos?userId=${id}`
        );
        const serverData = await res.json();
        setUserToDo(serverData);
        refToDo.current = serverData;
        // console.log(props)
      }
      data(props.id);
    }
    return(()=>localStorage.setItem("currentUerToDo", JSON.stringify(refToDo.current)))
  }, [props.id]);

  let mapToDo = userToDo.map((el, index) => 
     <UserToDo el={el} index={index} changeElComplete={()=>changeElComplete(index)}/>
    )
  
  const changeElComplete = (index) => {
    const tempUserToDo = [...userToDo];
    tempUserToDo[index].completed = tempUserToDo[index].completed ? false : true;
    setUserToDo(tempUserToDo)
    refToDo.current = tempUserToDo;
  }

  const sortByComplited = () => {
    const tempUserToDo = [...userToDo];
    tempUserToDo.sort((a, b) => {
      if (a.completed) {
        return -1;
      }
      return 1;
    });
    setUserToDo(tempUserToDo);
  };

  const sortById = () => {
    const tempUserToDo = [...userToDo];
    tempUserToDo.sort((a, b) => a.id - b.id);
    setUserToDo(tempUserToDo);
  };

  const sortByAlphabet = () => {
    const tempUserToDo = [...userToDo];
    tempUserToDo.sort((a, b) => a.title.localeCompare(b.title));
    setUserToDo(tempUserToDo);
  };

  const sortRandomly = () => {
    const tempUserToDo = [...userToDo];
    tempUserToDo.sort(() => 0.5 - Math.random());
    setUserToDo(tempUserToDo);
  };

  return (
    <div>
      <Header id={props.id} />
      <div id="to-div">
        <div>
        <button className="to-button" onClick={sortByComplited}>
          sort by complited posts
        </button>
        <button className="to-button" onClick={sortById}>
          sort by posts id
        </button>
        <button className="to-button" onClick={sortByAlphabet}>
          sort by alphabet
        </button>
        <button className="to-button" onClick={sortRandomly}>
          sort randomly
        </button>
        </div>
        <ul>{mapToDo}</ul>
      </div>
    </div>
  );
}

export default ToDo;
