import { TodoModel } from "../models/TodoModel";

export const NewTodo = (newTodo: TodoModel) => {
  const todos: string | null = localStorage.getItem("todos");
  let temp: TodoModel[] = [];
  if (todos) {
    temp = JSON.parse(todos);
    temp.push(newTodo);
  } else temp.push(newTodo);
  UpdateLocalStorage(temp);
};

export const RemoveTodo = (removeTodo: TodoModel) => {
  const todos: string | null = localStorage.getItem("todos");

  let temp: TodoModel[] = [];
  if (todos) {
    temp = JSON.parse(todos);
    let i = temp.findIndex((e) => e.id === removeTodo.id);
    temp.splice(i, 1);
  } else temp.splice(1);
  UpdateLocalStorage(temp);
};

export const UpdateStatus = (updateTodo: TodoModel, status: boolean) => {
  const todos: string | null = localStorage.getItem("todos");
  let temp: TodoModel[] = [];
  if (todos) {
    temp = JSON.parse(todos);
    let i = temp.findIndex((e) => e.id === updateTodo.id);
    temp[i].status = !status;
  }
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
};
