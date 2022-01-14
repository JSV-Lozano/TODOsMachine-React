import React from "react";
import "./TodoMain.css";
import { TodoContainer } from "../TodoContainer";
import { CreateTodoButton } from "../CreateTodoButton";
import { TodoContext } from "../TodoContext";

function TodoMain() {
  const { setOpenModal, openModal } = React.useContext(TodoContext);
  return (
    <div className="container">
      <div className="container-main">
        <CreateTodoButton setOpenModal={setOpenModal} openModal={openModal} />
        <TodoContainer />
      </div>
    </div>
  );
}

export { TodoMain };
