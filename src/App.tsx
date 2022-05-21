import { useEffect, useState } from "react";
import "./scss/Main.scss";
import { AddTodo } from "./components/AddTodo";
import { PrintTodos } from "./components/PrintTodos";
import { TodoModel } from "./models/TodoModel";
import { GetTodos } from "./components/UpdateTodos";
import { Menu } from "./components/Menu";

function App() {
  const [todos, setTodos] = useState<TodoModel[]>([]);
  const [showAddTodo, setShowAddTodo] = useState<boolean>(true);

  useEffect(() => {
    setTodos(GetTodos);
  }, []);

  return (
    <>
      <Menu
        setShowAddTodo={setShowAddTodo}
        showAddTodo={showAddTodo}
        setTodos={setTodos}
      />
      <AddTodo setTodos={setTodos} showAddTodo={showAddTodo} />
      <PrintTodos todos={todos} setTodos={setTodos} />
    </>
  );
}

export default App;
