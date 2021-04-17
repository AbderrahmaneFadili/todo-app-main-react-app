import React from "react";
import { TodosItems, TodosListWrapper } from "./TodosList.styles";
import Todo from "../../todos/Todo/Todo";
import TodoFooter from "../TodoFooter/TodoFooter";
import FilterItems from "../FilterItems/FilterItems";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";

const TodosList = ({ todos }) => {
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

export default compose(
  firestoreConnect(() => ["todos"]),
  connect((state) => ({
    todos: state.firestore.ordered.todos,
  })),
)(TodosList);
