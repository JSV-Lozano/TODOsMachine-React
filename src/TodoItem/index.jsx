import React from "react";
import "./TodoItem.css";

function TodoItem(props) {
  return (
    <li className="TodoItem">
      <span
        className={`Icon Icon-check ${props.completed}`}
        onClick={props.onComplete}
      >
        {props.completed ? "✔️" : "❗"}
      </span>
      <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
        {props.text}
      </p>
      <span className="Icon Icon-delete" onClick={props.onDeletedTodos}>
        X
      </span>
    </li>
  );
}

export { TodoItem };
