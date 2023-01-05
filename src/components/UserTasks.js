import React from 'react';
import "../css/Tasks.css";

function userTasks(props) {
    return (
        <li className="to-do-list" key={Math.random()} style={props.el.completed ? { backgroundColor: "rgb(10, 227, 10)" } : null}>
            <p>id: {props.el.id}</p>
            {!props.el.completed ? (
                <div>
                    <input id={props.index} type="checkbox" onChange={() => props.changeElComplete(props.index)}></input>
                    <label htmlFor={props.index}>{props.el.title}</label>
                </div>
            ) : <p>{props.el.title}</p>}
        </li>
    )
}
export default userTasks;