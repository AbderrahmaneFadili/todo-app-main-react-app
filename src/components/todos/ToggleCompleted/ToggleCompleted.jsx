import React, { useState } from "react";
import {
  CheckIcon,
  CircleOne,
  CircleTwo,
  ToggleCompletedWrapper,
  ToggleInput,
} from "./ToggleCompleted.styles";

const ToggleCompleted = () => {
  const [checked, setChecked] = useState(false);

  const handleCheckBoxValueChange = (e) => {
    console.log(e.target.checked);
    setChecked(!checked);
  };
  return (
    <ToggleCompletedWrapper>
      <CircleOne
        style={{
          opacity: checked ? 1 : 0,
        }}
        className="circle-one"
      >
        <CheckIcon src={require("../../../images/icon-check.svg").default} />
      </CircleOne>
      <CircleTwo className="circle-two" />
      <ToggleInput
        className="toggle-input"
        onChange={handleCheckBoxValueChange}
        type="checkbox"
      />
    </ToggleCompletedWrapper>
  );
};

export default ToggleCompleted;
