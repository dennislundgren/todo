import React, { useState } from "react";
import { TodoModel } from "../models/TodoModel";
import { RemoveTodo, UpdateStatus } from "./UpdateTodos";

interface IProps {
  todo: TodoModel;
  setTodos: React.Dispatch<React.SetStateAction<TodoModel[]>>;
}

export const TodoCard = (props: IProps) => {
  const [status, setStatus] = useState(props.todo.status);
  const [folded, setFolded] = useState<boolean>(true);

  const changeFolded = () => {
    setFolded(!folded);
  };

  const removeTodo = () => {
    RemoveTodo(props.todo);
    props.setTodos((prevTodos) =>
      [...prevTodos].filter((e) => e !== props.todo)
    );
  };

  const changeStatus = () => {
    setStatus(!status);
    UpdateStatus(props.todo, status);
  };

  return (
    <>
      <div
        className={`container container--todo ${status ? "done " : ""} ${
          folded ? "folded" : ""
        }`}
        onClick={(e: React.MouseEvent<HTMLDivElement>) => {
          e.preventDefault();
          if (!(e.target as HTMLDivElement).className.includes("btn")) {
            changeFolded();
          }
        }}
      >
        <p className="todo">{props.todo.text}</p>
        <p className="date">
          {props.todo.date.day} - {props.todo.date.month} {props.todo.date.date}
          , {props.todo.date.year}. {props.todo.date.hour}:
          {props.todo.date.minute}:{props.todo.date.second}
        </p>
        <button
          className="btn btn--remove"
          type="button"
          onTouchStart={(e: React.TouchEvent<HTMLButtonElement>) => {
            (e.target as HTMLButtonElement).classList.add("touch");
          }}
          onTouchEnd={(e: React.TouchEvent<HTMLButtonElement>) => {
            (e.target as HTMLButtonElement).classList.remove("touch");
          }}
          onClick={removeTodo}
        >
          Remove
        </button>
        <button
          className={`btn ${status ? "btn--undone" : "btn--done"}`}
          type="button"
          onClick={changeStatus}
          onTouchStart={(e: React.TouchEvent<HTMLButtonElement>) => {
            (e.target as HTMLButtonElement).classList.add("touch");
          }}
          onTouchEnd={(e: React.TouchEvent<HTMLButtonElement>) => {
            (e.target as HTMLButtonElement).classList.remove("touch");
          }}
        >
          {status ? "Undo" : "Done"}
        </button>
      </div>
    </>
  );
};
