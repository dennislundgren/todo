import { TodoModel } from "../models/TodoModel";
import { TodoCard } from "./TodoCard";

interface IProps {
  todos: TodoModel[];
  setTodos: React.Dispatch<React.SetStateAction<TodoModel[]>>;
}

export const PrintTodos = (props: IProps) => {
  let html = props.todos.map((todo, i) => {
    return <TodoCard setTodos={props.setTodos} todo={todo} key={i} />;
  });

  return (
    <>
      <div className="wrapper">{html}</div>
    </>
  );
};
