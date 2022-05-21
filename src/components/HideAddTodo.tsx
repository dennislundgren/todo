interface IProps {
  showAddTodo: boolean;
  setShowAddTodo: React.Dispatch<React.SetStateAction<boolean>>;
}

export const HideAddTodo = (props: IProps) => {
  const changeState = () => {
    props.setShowAddTodo(!props.showAddTodo);
  };
  return (
    <>
      <button
        className="btn btn--hide-add-todo"
        type="button"
        onClick={changeState}
        onTouchStart={(e: React.TouchEvent<HTMLButtonElement>) => {
          (e.target as HTMLButtonElement).classList.add("touch");
        }}
        onTouchEnd={(e: React.TouchEvent<HTMLButtonElement>) => {
          (e.target as HTMLButtonElement).classList.remove("touch");
        }}
      >
        <i
          className={`fa-solid fa-magnifying-glass-${
            props.showAddTodo ? "minus" : "plus"
          }`}
        ></i>
        <i className={`fa-solid fa-moon"}`}></i>
      </button>
    </>
  );
};
