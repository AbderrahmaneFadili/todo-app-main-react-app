import React from "react";
import {
  CheckIcon,
  CircleOne,
  CircleTwo,
  ToggleCompletedWrapper,
  ToggleInput,
} from "./ToggleCompleted.styles";

const ToggleCompleted = () => {
  const handleCheckBoxValueChange = (e) => {
    console.log(e.target.checked);
  };
  return (
    <ToggleCompletedWrapper>
      <ToggleInput type="checkbox" onChange={handleCheckBoxValueChange} />
      <CheckIcon
        className="check"
        src={require("../../../images/icon-check.svg").default}
      />
      <CircleOne className="circle-one" />
      <CircleTwo className="circle-two" />
    </ToggleCompletedWrapper>
  );
};

export default ToggleCompleted;
