import React from "react";
import { TodoItem, TodoText, RemoveIcon } from "./Todo.styles";
import ToggleCompleted from "../ToggleCompleted/ToggleCompleted";

const Todo = () => {
  return (
    <TodoItem>
      <ToggleCompleted />
      <TodoText>Todo Exmaple</TodoText>
      <RemoveIcon src={require("../../../images/icon-cross.svg").default} />
    </TodoItem>
  );
};

export default Todo;
