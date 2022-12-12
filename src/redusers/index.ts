import { combineReducers } from "redux";
import { todosReduser } from "./todos";
import { Todo } from "../actions";

export interface StoreState {
  todos: Todo[];
}

export const redusers = combineReducers<StoreState>({
  todos: todosReduser,
});
