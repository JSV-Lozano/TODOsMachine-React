import React from "react";
import { useTodos } from "./useTodos";
import { TodoMain } from "../TodoMain";
import "./App.css";
import { TodoHeader } from "../TodoHeader";
import { TodoContainer } from "../TodoContainer";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { Modal } from "../Modal";
import { TodoForm } from "../TodoForm";
import { TodoEmpty } from "../TodoEmpty";
import { TodoSearchEmpty } from "../TodoSearchEmpty";
import { TodoLoading } from "../TodoLoading";
import { TodoError } from "../TodoError";

function App() {
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
    addNewTodo,
    setOpenModal,
  } = useTodos();
  return (
    <React.Fragment>
      <TodoMain setOpenModal={setOpenModal} openModal={openModal}>
        <TodoContainer>
          <TodoHeader>
            <TodoCounter
              totalTodos={totalTodos}
              completedTodos={completedTodos}
            />
            <TodoSearch
              searchValue={searchValue}
              setSearchValue={setSearchValue}
            />
          </TodoHeader>

          {/*    <TodoList>
            error = {error}
            loading ={loading}
            searchTodosFilter={searchTodosFilter}
            onError={() => <TodoError />}
            onLoading={() => <TodoLoading />}
            onEmptyTodos={() => <TodoEmpty />}
            render=
            {(listTodos) => (
              <TodoItem
                key={listTodos.text}
                text={listTodos.text}
                completed={listTodos.completed}
                onComplete={() => onCompletedTodo(listTodos.text)}
                onDeletedTodos={() => onDeletedTodo(listTodos.text)}
              />
            )}
          </TodoList> */}

          <TodoList>
            {error && <TodoError error={error} />}
            {loading && <TodoLoading />}
            {!loading && !totalTodos && <TodoEmpty />}
            {!!totalTodos && !searchTodosFilter.length && <TodoSearchEmpty />}
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
              <TodoForm addNewTodo={addNewTodo} setOpenModal={setOpenModal} />
            </Modal>
          )}
        </TodoContainer>
      </TodoMain>
    </React.Fragment>
  );
}

export default App;
