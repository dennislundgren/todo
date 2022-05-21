import React, { useState } from "react";
import { TodoModel } from "../models/TodoModel";
import { UpdateLocalStorage } from "./UpdateTodos";

interface ITodos {
  setTodos: React.Dispatch<React.SetStateAction<TodoModel[]>>;
}

export const TrashTodos = (props: ITodos) => {
  const trashTodos = () => {
    props.setTodos([]);
    UpdateLocalStorage([]);
  };

  return (
    <>
      <button
        className="btn btn--trashcan"
        type="button"
        onClick={trashTodos}
        onTouchStart={(e: React.TouchEvent<HTMLButtonElement>) => {
          (e.target as HTMLButtonElement).classList.add("touch");
        }}
        onTouchEnd={(e: React.TouchEvent<HTMLButtonElement>) => {
          (e.target as HTMLButtonElement).classList.remove("touch");
        }}
      >
        <i className={`fa-solid fa-trash-can`}></i>
      </button>
    </>
  );
};
