import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider(props) {
  const {
    item: listTodos,
    saveItem: setListTodos,
    loading,
    error,
  } = useLocalStorage("TODOS_V1", []);

  const [searchValue, setSearchValue] = React.useState("");
  const [openModal, setOpenModal] = React.useState(false);

  const completedTodos = listTodos.filter(
    (listTodos) => !!listTodos.completed
  ).length;
  const totalTodos = listTodos.length;

  let searchTodosFilter = [];

  if (!searchValue >= 1) {
    searchTodosFilter = listTodos;
  } else {
    searchTodosFilter = listTodos.filter((todo) => {
      const todoText = todo.text.toLowerCase();
      const searchTodoText = searchValue.toLowerCase();
      return todoText.includes(searchTodoText);
    });
  }

  const addNewTodo = (text) => {
    const newListTodos = [...listTodos];
    newListTodos.push({
      completed: false,
      text,
    });
    setListTodos(newListTodos);
  };

  const onCompletedTodo = (text) => {
    const todosIndex = listTodos.findIndex((todo) => todo.text === text);
    const newListTodos = [...listTodos];
    newListTodos[todosIndex].completed = !newListTodos[todosIndex].completed;
    setListTodos(newListTodos);
  };

  const onDeletedTodo = (text) => {
    const todosIndex = listTodos.findIndex((todo) => todo.text === text);
    const newListTodos = [...listTodos];
    newListTodos.splice(todosIndex, 1);
    setListTodos(newListTodos);
  };

  return (
    <TodoContext.Provider
      value={{
        loading,
        error,
        totalTodos,
        completedTodos,
        searchValue,
        setSearchValue,
        searchTodosFilter,
        addNewTodo,
        onCompletedTodo,
        onDeletedTodo,
        searchValue,
        setSearchValue,
        openModal,
        setOpenModal,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };
