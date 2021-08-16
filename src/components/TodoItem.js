import React from "react";
import './style.css';

function TodoItem(props){
  return(
    <div className="todo-item">
        <input type="checkbox" checked={props.completion}/>
        <h4>{props.item}</h4>
    </div>
  );
}

export default TodoItem