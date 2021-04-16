import React from "react";
import { Active, All, Completed, FilterTodos } from "./Filter.styles";
const Filter = () => {
  return (
    <FilterTodos>
      <All>All</All>
      <Active>Active</Active>
      <Completed>Completed</Completed>
    </FilterTodos>
  );
};

export default Filter;
