import React from "react";
import "./CreateTodoButton.css";

function CreateTodoButton({ setOpenModal, openModal }) {
  const onClickButton = () => {
    !openModal ? setOpenModal(true) : setOpenModal(false);
  };
  return (
    <div className="container-Create">
      <div className="container-img">
        <h2>Crea TODOS</h2>
        <img src="../img/ilustracion.png" />
        <button className="botton" onClick={onClickButton}>
          Crear un TODOs nuevo
        </button>
      </div>
    </div>
  );
}

export { CreateTodoButton };
