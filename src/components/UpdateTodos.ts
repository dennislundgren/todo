import { TodoModel } from "../models/TodoModel";

let count = 0;

export const NewTodo = (newTodo: TodoModel) => {
  const todos: string | null = localStorage.getItem("todos");
  let temp: TodoModel[] = [];
  if (todos) {
    temp = JSON.parse(todos);
    temp.push(newTodo);
  } else temp.push(newTodo);
  UpdateLocalStorage(temp);
};

export const GetTodos = () => {
  const todos: string | null = localStorage.getItem("todos");
  if (todos) {
    return JSON.parse(todos);
  } else return [];
};

export const UpdateLocalStorage = (todos: TodoModel[]) => {
  localStorage.setItem("todos", JSON.stringify(todos));

  console.log(count);

  return count++;
};
