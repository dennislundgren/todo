import { useState } from "react";

export const DarkMode = () => {
  const [state, setState] = useState(false);

  const handleClick = () => {
    document.body.classList.toggle("darkmode");
    setState(!state);
  };
  return (
    <>
      <button
        className="btn btn--darkmode"
        type="button"
        onClick={handleClick}
        onTouchStart={(e: React.TouchEvent<HTMLButtonElement>) => {
          (e.target as HTMLButtonElement).classList.add("touch");
        }}
        onTouchEnd={(e: React.TouchEvent<HTMLButtonElement>) => {
          (e.target as HTMLButtonElement).classList.remove("touch");
        }}
      >
        <i className={`fa-solid fa-${state ? "sun" : "moon"}`}></i>
      </button>
    </>
  );
};
