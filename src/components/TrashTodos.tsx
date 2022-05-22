import React, { useState } from "react";
import { TodoModel } from "../models/TodoModel";
import { UpdateLocalStorage } from "./UpdateTodos";

interface ITodos {
  setTodos: React.Dispatch<React.SetStateAction<TodoModel[]>>;
}

export const TrashTodos = (props: ITodos) => {
  const [state, setState] = useState(false);

  const showOptions = () => {
    if (state) {
      (
        document.querySelector(".child-menu") as HTMLDivElement
      ).classList.replace("child-menu", "slide-out");
      setTimeout(() => {
        setState(!state);
      }, 145);
    } else setState(!state);
  };

  const trashTodos = () => {
    props.setTodos([]);
    UpdateLocalStorage([]);
    showOptions();
  };

  return (
    <>
      <div className={`${state ? "child-menu" : "hidden"}`}>
        <button
          className="btn btn--undo"
          type="button"
          onClick={showOptions}
          onTouchStart={(e: React.TouchEvent<HTMLButtonElement>) => {
            (e.target as HTMLButtonElement).classList.add("touch");
          }}
          onTouchEnd={(e: React.TouchEvent<HTMLButtonElement>) => {
            (e.target as HTMLButtonElement).classList.remove("touch");
          }}
        >
          <i className="fa-solid fa-x"></i>{" "}
        </button>
        <button
          className="btn btn--check"
          type="button"
          onClick={trashTodos}
          onTouchStart={(e: React.TouchEvent<HTMLButtonElement>) => {
            (e.target as HTMLButtonElement).classList.add("touch");
          }}
          onTouchEnd={(e: React.TouchEvent<HTMLButtonElement>) => {
            (e.target as HTMLButtonElement).classList.remove("touch");
          }}
        >
          <i className="fa-solid fa-check-double"></i>{" "}
        </button>
      </div>
      <button
        className="btn btn--trashcan"
        type="button"
        onClick={showOptions}
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
