import React from "react";
import { TodosItems, TodosListWrapper } from "./TodosList.styles";
import Todo from "../../todos/Todo/Todo";
const TodosList = () => {
  return (
    <TodosListWrapper>
      <TodosItems>
        <Todo />
        <Todo />
        <Todo />
        <Todo />
      </TodosItems>
    </TodosListWrapper>
  );
};

export default TodosList;
