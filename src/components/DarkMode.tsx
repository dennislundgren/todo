import { useEffect, useState } from "react";

export const DarkMode = () => {
  const [state, setState] = useState<boolean>();

  useEffect(() => {
    let temp = localStorage.getItem("darkMode");
    if (temp === "true") {
      temp = JSON.parse(temp);
      setState(true);
    } else setState(false);
  }, []);

  const handleClick = () => {
    setState(!state);
    localStorage.setItem("darkMode", state ? "false" : "true");
  };

  if (state) {
    document.body.classList.add("darkmode");
  } else {
    document.body.classList.remove("darkmode");
  }

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
