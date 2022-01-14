import React from "react";
import { TodoProvider } from "../TodoContext";
import { TodoMain } from "../TodoMain";
//import "./App.css";

function App() {
  return (
    <TodoProvider>
      <TodoMain />
    </TodoProvider>
  );
}

export default App;
