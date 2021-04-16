import React from "react";
import {
  Active,
  All,
  ClearCompleted,
  Completed,
  FilterTodos,
  ItemsCount,
  TodoFooterWrapper,
} from "./TodoFooter.styles";

const TodoFooter = () => {
  return (
    <TodoFooterWrapper>
      <ItemsCount>5 items left</ItemsCount>
      <FilterTodos>
        <All>All</All>
        <Active>Active</Active>
        <Completed>Completed</Completed>
      </FilterTodos>
      <ClearCompleted>Clear Completed</ClearCompleted>
    </TodoFooterWrapper>
  );
};

export default TodoFooter;
