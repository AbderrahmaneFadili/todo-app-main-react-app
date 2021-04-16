import React from "react";
import Filter from "../Filter/Filter";
import {
  ClearCompleted,
  ItemsCount,
  TodoFooterWrapper,
  FilterContainer,
} from "./TodoFooter.styles";

const TodoFooter = () => {
  return (
    <TodoFooterWrapper>
      <ItemsCount>5 items left</ItemsCount>
      <FilterContainer>
        <Filter />
      </FilterContainer>

      <ClearCompleted>Clear Completed</ClearCompleted>
    </TodoFooterWrapper>
  );
};

export default TodoFooter;
