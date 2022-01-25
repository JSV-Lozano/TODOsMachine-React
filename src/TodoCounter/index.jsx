import React from "react";
import "./TodoCounter.css";

function TodoCounter({ totalTodos, completedTodos, loading }) {
  return (
    <h2 className={`todo-counter ${!!loading && "todo_counter--loading"}`}>
      Has completado {completedTodos} de {totalTodos} TODOS
    </h2>
  );
}

export { TodoCounter };
