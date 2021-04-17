import React, { useState, useEffect, useRef } from "react";
import { useFirestore } from "react-redux-firebase";

import {
  CheckIcon,
  CircleOne,
  CircleTwo,
  ToggleCompletedWrapper,
  ToggleInput,
} from "./ToggleCompleted.styles";

const ToggleCompleted = ({ todoId, completed }) => {
  const checkboxRef = useRef(null);

  const firestore = useFirestore();

  const handleCheckBoxValueChange = (e) => {
    firestore.collection("todos").doc(todoId).update({
      completed: !completed,
    });
  };

  return (
    <ToggleCompletedWrapper>
      <ToggleInput
        checked={completed}
        ref={checkboxRef}
        type="checkbox"
        onChange={handleCheckBoxValueChange}
      />
      <CheckIcon
        checked={completed}
        className="check"
        src={require("../../../images/icon-check.svg").default}
      />
      <CircleOne checked={completed} className="circle-one" />
      <CircleTwo checked={completed} className="circle-two" />
    </ToggleCompletedWrapper>
  );
};

export default ToggleCompleted;
