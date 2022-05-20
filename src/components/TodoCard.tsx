import { useState } from "react";

interface Todo {
  text: string;
  date: string;
  status: boolean;
  id: number;
}

export const TodoCard = (props: Todo) => {
  const [status, setStatus] = useState(props.status);

  const changeStatus = () => {
    setStatus(!status);
  };

  return (
    <>
      <div className={`container container--todo ${status ? "done " : ""}`}>
        <p className="todo">{props.text}</p>
        <p className="date">{props.date}</p>
        <button
          className="btn btn--remove"
          type="button"
          onTouchStart={(e: React.TouchEvent<HTMLButtonElement>) => {
            (e.target as HTMLButtonElement).classList.add("touch");
          }}
          onTouchEnd={(e: React.TouchEvent<HTMLButtonElement>) => {
            (e.target as HTMLButtonElement).classList.remove("touch");
          }}
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
