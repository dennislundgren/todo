import { useEffect, useState } from "react";
import { TodoModel } from "../models/TodoModel";
import { TodoCard } from "./TodoCard";
import { GetTodos } from "./UpdateTodos";

export const PrintTodos = () => {
  const [todos, setTodos] = useState<TodoModel[]>([]);

  useEffect(() => {
    setTodos(GetTodos);
  }, []);

  let html = todos.map((todo, i) => {
    return (
      <TodoCard
        text={todo.text}
        date={todo.date.toString()}
        status={todo.status}
        id={todo.id}
        key={i}
      />
    );
  });

  return <>{html}</>;
};
