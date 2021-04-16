import React from "react";
import { TodosItems, TodosListWrapper } from "./TodosList.styles";
import Todo from "../../todos/Todo/Todo";
import TodoFooter from "../TodoFooter/TodoFooter";
const TodosList = () => {
  return (
    <TodosListWrapper>
      <TodosItems>
        <Todo />
        <Todo />
        <Todo />
        <Todo />
      </TodosItems>
      <TodoFooter />
    </TodosListWrapper>
  );
};

export default TodosList;
