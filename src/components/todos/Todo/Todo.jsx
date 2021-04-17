import React from "react";
import { TodoItem, TodoText, RemoveIcon } from "./Todo.styles";
import ToggleCompleted from "../ToggleCompleted/ToggleCompleted";
import { useFirestore } from "react-redux-firebase";

const Todo = ({ id, completed, title }) => {
  const firestore = useFirestore();
  const handleRemoveTodo = () => {
    firestore.collection("todos").doc(id).delete();
  };

  return (
    <TodoItem>
      <ToggleCompleted todoId={id} completed={completed} />
      <TodoText completed={completed}>{title}</TodoText>
      <RemoveIcon
        onClick={handleRemoveTodo}
        src={require("../../../images/icon-cross.svg").default}
      />
    </TodoItem>
  );
};

export default Todo;
