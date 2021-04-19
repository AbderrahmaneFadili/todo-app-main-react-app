import React from "react";
import { useSelector } from "react-redux";
import { useFirestore, useFirestoreConnect } from "react-redux-firebase";
import Filter from "../Filter/Filter";
import {
  ClearCompleted,
  ItemsCount,
  TodoFooterWrapper,
  FilterContainer,
} from "./TodoFooter.styles";

const TodoFooter = () => {
  useFirestoreConnect(() => {
    return [
      {
        collection: "todos",
      },
    ];
  });
  const todos = useSelector((state) => state.firestore.ordered.todos);
  console.log(todos);
  const firestore = useFirestore();
  //handle Clear Completed
  const handleClearCompleted = () => {
    firestore
      .collection("todos")
      .where("completed", "==", true)
      .get()
      .then((qs) => {
        qs.forEach((doc) => console.log(doc.ref.delete()));
      });
  };
  return (
    <TodoFooterWrapper>
      <ItemsCount>{todos && todos.length} items left</ItemsCount>
      <FilterContainer>
        <Filter />
      </FilterContainer>

      <ClearCompleted onClick={handleClearCompleted}>
        Clear Completed
      </ClearCompleted>
    </TodoFooterWrapper>
  );
};

export default TodoFooter;
