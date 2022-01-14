import React from "react";
import "./TodoContainer.css";
import { TodoHeader } from "../TodoHeader";
import { TodoContext } from "../TodoContext";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { Modal } from "../Modal";
import { TodoForm } from "../TodoForm";
import { TodoEmpty } from "../TodoEmpty";
import { TodoLoading } from "../TodoLoading";
import { TodoError } from "../TodoError";

function TodoContainer() {
  const {
    loading,
    error,
    searchTodosFilter,
    onCompletedTodo,
    onDeletedTodo,
    openModal,
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
  } = React.useContext(TodoContext);
  return (
    <div className="container-container">
      <TodoHeader>
        <TodoCounter totalTodos={totalTodos} completedTodos={completedTodos} />
        <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      </TodoHeader>
      <TodoList>
        {error && <TodoError error={error} />}
        {loading && <TodoLoading />}
        {!loading && !searchTodosFilter.length && <TodoEmpty />}
        {searchTodosFilter.map((listTodos) => (
          <TodoItem
            key={listTodos.text}
            text={listTodos.text}
            completed={listTodos.completed}
            onComplete={() => onCompletedTodo(listTodos.text)}
            onDeletedTodos={() => onDeletedTodo(listTodos.text)}
          />
        ))}
      </TodoList>
      {!!openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}
    </div>
  );
}

export { TodoContainer };
