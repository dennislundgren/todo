import React from "react";
import "./scss/Main.scss";
import { TodoCard } from "./components/TodoCard";
import { AddTodo } from "./components/AddTodo";
import { PrintTodos } from "./components/PrintTodos";
import { DarkMode } from "./components/DarkMode";

function App() {
  return (
    <>
      <DarkMode />
      <AddTodo />
      <PrintTodos />
    </>
  );
}

export default App;
