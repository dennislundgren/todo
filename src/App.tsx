import { useEffect, useState } from "react";
import "./scss/Main.scss";
import { AddTodo } from "./components/AddTodo";
import { PrintTodos } from "./components/PrintTodos";
import { DarkMode } from "./components/DarkMode";
import { TodoModel } from "./models/TodoModel";
import { GetTodos } from "./components/UpdateTodos";
import { TrashTodos } from "./components/TrashTodos";

function App() {
  const [todos, setTodos] = useState<TodoModel[]>([]);

  useEffect(() => {
    setTodos(GetTodos);
  }, []);

  return (
    <>
      <TrashTodos setTodos={setTodos} />
      <DarkMode />
      <AddTodo setTodos={setTodos} />
      <PrintTodos todos={todos} setTodos={setTodos} />
    </>
  );
}

export default App;
