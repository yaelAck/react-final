import { useEffect, useState } from "react";
import React from 'react';
import "../css/ToDo.css";

function userToDo(props) {  
    return (
        <li
          className="to-do-list"
          key={props.index}
          style={props.el.completed ? { backgroundColor: "rgb(10, 227, 10)" } : null}>
              {/* {console.log(props.el)} */}
          <p>id: {props.el.id}</p>
          {!props.el.completed ? (
            <div>
              <input id={props.index} type="checkbox" onChange={()=>props.changeElComplete(props.index)}></input>
              <label htmlFor={props.index}>{props.el.title}</label>
            </div>
          ) : <p>{props.el.title}</p>
          }
        </li>
    )
}
export default userToDo;