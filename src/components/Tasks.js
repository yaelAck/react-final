import React, { useEffect, useRef, useState } from "react";
import UserTasks from './UserTasks'
import checkLocalStorage from "./useLocalStorage";
import Header from "./Header";
import "../css/Tasks.css";

function Tasks(props) {
  const [userTasks, setUserTasks] = useState([]);
  const refTasks = useRef('')
  
  useEffect(() => {
    window.onbeforeunload=()=>localStorage.setItem("currentUserTasks", JSON.stringify(refTasks.current))
    async function getTasks() {
      const userTasks = await checkLocalStorage('currentUserTasks', `https://jsonplaceholder.typicode.com/todos?userId=${props.id}`)
      setUserTasks(userTasks)
      refTasks.current = userTasks
      console.log(userTasks)
    }
    getTasks()
    return (() => localStorage.setItem("currentUserTasks", JSON.stringify(refTasks.current)))
  }, [props.id]);

  let mapTasks = userTasks.map((el, index) =>
    <UserTasks el={el} index={index} changeElComplete={() => changeElComplete(index)} />
  )

  const changeElComplete = (index) => {
    const tempUserTasks = [...userTasks];
    tempUserTasks[index].completed = tempUserTasks[index].completed ? false : true;
    setUserTasks(tempUserTasks)
    refTasks.current = tempUserTasks;
    // localStorage.setItem("currentUerTasks", JSON.stringify(tempUserTasks))
  }

  const sortByComplited = () => {
    const tempUserTasks = [...userTasks];
    tempUserTasks.sort((a, b) => {
      if (a.completed) { return 1; }
      return -1;
    });
    setUserTasks(tempUserTasks);
  };

  const sortById = () => {
    const tempUserTasks = [...userTasks];
    tempUserTasks.sort((a, b) => a.id - b.id);
    setUserTasks(tempUserTasks);
  };

  const sortByAlphabet = () => {
    const tempUserTasks = [...userTasks];
    tempUserTasks.sort((a, b) => a.title.localeCompare(b.title));
    setUserTasks(tempUserTasks);
  };

  const sortRandomly = () => {
    const tempUserTasks = [...userTasks];
    tempUserTasks.sort(() => 0.5 - Math.random());
    setUserTasks(tempUserTasks);
  };

  return (
    <div>
      <Header id={props.id} />
      <div id="to-div">
        <div>
          <button className="to-button" onClick={sortByComplited}>sort by complited posts</button>
          <button className="to-button" onClick={sortById}>sort by posts id</button>
          <button className="to-button" onClick={sortByAlphabet}>sort by alphabet</button>
          <button className="to-button" onClick={sortRandomly}>sort randomly</button>
        </div>
        <ul>{mapTasks}</ul>
      </div>
    </div>
  );
}

export default Tasks;
