import React, { useState } from "react";
import { TodoDate, TodoModel } from "../models/TodoModel";
import { NewTodo } from "./UpdateTodos";

export const AddTodo = () => {
  const [todoText, setTodoText] = useState("");
  const addNewTodo = () => {
    const d = new Date();
    const newTodoDate = new TodoDate(
      d.getFullYear().toString(),
      d.getMonth().toString(),
      d.getDate().toString(),
      d.getDay().toString(),
      d.getHours().toString(),
      d.getMinutes().toString(),
      d.getSeconds().toString()
    );
    const newTodo = new TodoModel(todoText, newTodoDate, false, Date.now());
    NewTodo(newTodo);
    setTodoText("");
  };

  return (
    <>
      <div className="container container--add-todo">
        <input
          className="input input--add-todo"
          type="text"
          placeholder=". . ."
          value={todoText}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setTodoText(e.target.value);
          }}
          onKeyUp={(e: React.KeyboardEvent<HTMLInputElement>) => {
            e.preventDefault();
            if (e.key === "Enter" && todoText) {
              addNewTodo();
            }
          }}
        />
        <button
          type="button"
          className="btn btn--add"
          onTouchStart={(e: React.TouchEvent<HTMLButtonElement>) => {
            (e.target as HTMLButtonElement).classList.add("touch");
          }}
          onTouchEnd={(e: React.TouchEvent<HTMLButtonElement>) => {
            (e.target as HTMLButtonElement).classList.remove("touch");
          }}
        >
          Add
        </button>
      </div>
    </>
  );
};
