import React from "react";
import { TodoInputContainer, TextInput } from "./TodoInput.styles";
import ToggleCompleted from "../ToggleCompleted/ToggleCompleted";

const TodoInput = () => {
  return (
    <TodoInputContainer>
      <ToggleCompleted />
      <TextInput autoCorrect="off" placeholder="Create a new todo..." />
    </TodoInputContainer>
  );
};

export default TodoInput;
