import { useEffect, useState } from "react";
import React from 'react';

export function userToDo(props) {

  
    return (
        <li
          className="to-do-list"
          key={index}
          style={el.completed ? { backgroundColor: "rgb(10, 227, 10)" } : null}>
          <p>id: {el.id}</p>
          {!el.completed ? (
            <div>
              <input id={index} type="checkbox" onChange={() => changeElComplete(index)}></input>
              <label htmlFor={index}>{el.title}</label>
            </div>
          ) : <p>{el.title}</p>
          }
        </li>
    )
}
export default Home;