import { FeatchTodosAction, DeleteTodosAction } from "./todos";

export enum ActionTypes {
  fetchTodos,
  deleteTodo,
}

export type Action = FeatchTodosAction | DeleteTodosAction;
