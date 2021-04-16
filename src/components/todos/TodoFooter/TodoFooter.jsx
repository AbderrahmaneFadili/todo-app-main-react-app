import React from "react";
import Filter from "../Filter/Filter";
import {
  ClearCompleted,
  ItemsCount,
  TodoFooterWrapper,
} from "./TodoFooter.styles";

const TodoFooter = () => {
  return (
    <TodoFooterWrapper>
      <ItemsCount>5 items left</ItemsCount>
      <Filter />
      <ClearCompleted>Clear Completed</ClearCompleted>
    </TodoFooterWrapper>
  );
};

export default TodoFooter;
