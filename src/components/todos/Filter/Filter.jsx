import React, { useState } from "react";
import { Active, All, Completed, FilterTodos } from "./Filter.styles";
import { connect } from "react-redux";
import {
  showActive,
  showAll,
  showCompleted,
} from "../../../redux/actions/filterActions";

const Filter = ({ showActive, showAll, showCompleted }) => {
  const [active, setActive] = useState({
    all: true,
    active: false,
    completed: false,
  });

  const setAllActive = () => {
    setActive((ps) => ({
      ...ps,
      all: true,
      active: false,
      completed: false,
    }));
    showAll();
  };

  const setActiveActive = () => {
    setActive((ps) => ({
      ...ps,
      all: false,
      active: true,
      completed: false,
    }));
    showActive();
  };

  const setCompletedActive = () => {
    setActive((ps) => ({
      ...ps,
      all: false,
      active: false,
      completed: true,
    }));
    showCompleted();
  };

  return (
    <FilterTodos>
      <All active={active.all} onClick={setAllActive}>
        All
      </All>
      <Active active={active.active} onClick={setActiveActive}>
        Active
      </Active>
      <Completed active={active.completed} onClick={setCompletedActive}>
        Completed
      </Completed>
    </FilterTodos>
  );
};

export default connect(null, (dispatch) => ({
  showActive: () => dispatch(showActive()),
  showAll: () => dispatch(showAll()),
  showCompleted: () => dispatch(showCompleted()),
}))(Filter);
