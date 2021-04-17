import React from "react";
import { TodoItem, TodoText, RemoveIcon } from "./Todo.styles";
import ToggleCompleted from "../ToggleCompleted/ToggleCompleted";

const Todo = ({ id, completed, title }) => {
  return (
    <TodoItem>
      <ToggleCompleted />
      <TodoText>{title}</TodoText>
      <RemoveIcon src={require("../../../images/icon-cross.svg").default} />
    </TodoItem>
  );
};

export default Todo;
