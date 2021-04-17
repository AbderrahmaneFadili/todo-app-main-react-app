import React, { useState } from "react";
import { TodoInputContainer, TextInput } from "./TodoInput.styles";
import { useFirestore } from "react-redux-firebase";

const TodoInput = () => {
  const [title, setTitle] = useState("");

  //get firetore
  const firestore = useFirestore();

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleAddTodo = (e) => {
    if (e.keyCode === 13) {
      if (title === "") {
        alert("Enter the todo title");
      } else {
        firestore.collection("todos").add({
          title,
          completed: false,
        });

        setTitle("");
      }
    }
  };

  return (
    <TodoInputContainer>
      <TextInput
        onChange={handleTitleChange}
        onKeyDown={handleAddTodo}
        autoCorrect="off"
        placeholder="Create a new todo..."
        value={title}
      />
    </TodoInputContainer>
  );
};

export default TodoInput;
