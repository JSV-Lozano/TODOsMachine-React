import React from "react";
import "./Empty.css";

function TodoEmpty() {
  return (
    <div className="todo-Empty">
      <span className="icon-Empty">📝</span>
      <h2 className="titulo-Empty">¡Crea tu primer TODO!</h2>
      <p className="p-Empty">
        Para agregar tu primer TODO presiona el botón ➕
      </p>
    </div>
  );
}

export { TodoEmpty };
