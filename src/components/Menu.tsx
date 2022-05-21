import { TodoModel } from "../models/TodoModel";
import { DarkMode } from "./DarkMode";
import { HideAddTodo } from "./HideAddTodo";
import { TrashTodos } from "./TrashTodos";

interface IProps {
  showAddTodo: boolean;
  setShowAddTodo: React.Dispatch<React.SetStateAction<boolean>>;
  setTodos: React.Dispatch<React.SetStateAction<TodoModel[]>>;
}

export const Menu = ({ showAddTodo, setShowAddTodo, setTodos }: IProps) => {
  return (
    <>
      <div className="menu">
        <DarkMode />
        <HideAddTodo
          setShowAddTodo={setShowAddTodo}
          showAddTodo={showAddTodo}
        />
        <TrashTodos setTodos={setTodos} />
      </div>
    </>
  );
};
