import React, { useState } from "react";
import { TodoModel } from "../models/TodoModel";
import { RemoveTodo, UpdateStatus } from "./UpdateTodos";

interface IProps {
  todo: TodoModel;
  setTodos: React.Dispatch<React.SetStateAction<TodoModel[]>>;
}

export const TodoCard = (props: IProps) => {
  const [status, setStatus] = useState(props.todo.status);
  const [folded, setFolded] = useState(true);

  const changeFolded = (e: React.MouseEvent<HTMLDivElement>) => {
    let wrapper = document.querySelector(".wrapper") as HTMLDivElement;
    wrapper.childNodes.forEach((child) => {
      if (child !== e.target) {
        (child as HTMLDivElement).classList.replace("order-1", "folded");
      } else if (
        child === e.target &&
        (e.target as HTMLDivElement).classList.contains("folded")
      ) {
        (child as HTMLDivElement).classList.replace("folded", "order-1");
        setFolded(false);
      } else {
        setFolded(true);
        (child as HTMLDivElement).classList.replace("order-1", "folded");
      }
    });
  };

  const removeTodo = () => {
    RemoveTodo(props.todo);
    props.setTodos((prevTodos) =>
      [...prevTodos].filter((e) => e !== props.todo)
    );
  };

  const changeStatus = () => {
    setFolded(false);
    setStatus(!status);
    UpdateStatus(props.todo, status);
  };

  return (
    <>
      <div
        className={`container container--todo ${status ? "done" : ""} ${
          folded ? "folded" : "order-1"
        }`}
        onClick={(e: React.MouseEvent<HTMLDivElement>) => {
          e.preventDefault();
          if (!(e.target as HTMLDivElement).className.includes("btn")) {
            changeFolded(e);
          }
        }}
      >
        {/* {folded ? (
          <p className="todo">{props.todo.text}</p>
        ) : (
          <input value={props.todo.text} className="todo-input" />
        )} */}
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
