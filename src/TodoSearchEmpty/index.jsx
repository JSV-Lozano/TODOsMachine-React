import React from "react";
import "./TodoSearchEmpty.css";

function TodoSearchEmpty(props) {
  return (
    <div className="todo_Empty-Search">
      <span className="icon_Empty-Search">🔎</span>
      <h2 className="titulo_Empty-Search">
        No se a encontrado ningun TODO con
      </h2>
      <p>{props.setText}</p>
    </div>
  );
}

export { TodoSearchEmpty };
