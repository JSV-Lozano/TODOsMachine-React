import React from "react";
import "./TodoMain.css";
/* import { TodoContainer } from "../TodoContainer"; */
import { CreateTodoButton } from "../CreateTodoButton";

function TodoMain({ children, setOpenModal, openModal }) {
  return (
    <div className="container">
      <div className="container-main">
        <CreateTodoButton setOpenModal={setOpenModal} openModal={openModal} />
        {children}
      </div>
    </div>
  );
}

export { TodoMain };
