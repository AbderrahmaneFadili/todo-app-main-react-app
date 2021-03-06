import React from "react";
import { TodosItems, TodosListWrapper } from "./TodosList.styles";
import Todo from "../../todos/Todo/Todo";
import TodoFooter from "../TodoFooter/TodoFooter";
import FilterItems from "../FilterItems/FilterItems";
import { useFirestoreConnect } from "react-redux-firebase";
import { useSelector } from "react-redux";

const TodosList = () => {
  const filter = useSelector((state) => state.filterReducer.filter);

  useFirestoreConnect(() => {
    return [
      {
        collection: "todos",
        where: filter || null,
      },
    ];
  });
  const todos = useSelector((state) => state.firestore.ordered.todos);

  return (
    <>
      <TodosListWrapper>
        <TodosItems>
          {todos && todos.map((t) => <Todo key={t.id} {...t} />)}
        </TodosItems>
        <TodoFooter />
      </TodosListWrapper>
      <FilterItems />
    </>
  );
};

export default TodosList;
