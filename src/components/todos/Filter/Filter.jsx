import React, { useState } from "react";
import { Active, All, Completed, FilterTodos } from "./Filter.styles";

const Filter = () => {
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
  };

  const setActiveActive = () => {
    setActive((ps) => ({
      ...ps,
      all: false,
      active: true,
      completed: false,
    }));
  };

  const setCompletedActive = () => {
    setActive((ps) => ({
      ...ps,
      all: false,
      active: false,
      completed: true,
    }));
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

export default Filter;
