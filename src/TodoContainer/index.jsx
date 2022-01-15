import React from "react";
import "./TodoContainer.css";

function TodoContainer({ children }) {
  return <div className="container-container">{children}</div>;
}

export { TodoContainer };
