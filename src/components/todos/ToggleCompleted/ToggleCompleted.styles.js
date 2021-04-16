import styled from "styled-components";

export const ToggleCompletedWrapper = styled.div`
  width: 25px;
  height: 25px;
  background: transparent;
  border-radius: 100%;
  position: relative;
  cursor: pointer;

  &:hover .circle-one {
    background: linear-gradient(
      110deg,
      hsl(192, 100%, 67%) 21%,
      hsl(280, 87%, 65%) 71%
    );
  }

  &:hover .circle-two {
    opacity: 1;
  }
`;

export const CheckIcon = styled.img`
  width: 50%;
  height: 50%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
`;

export const CircleOne = styled.div`
  width: 100%;
  height: 100%;
  background: var(--input-placeholder);
  border-radius: 100%;
`;

export const CircleTwo = styled.div`
  width: 95%;
  height: 90%;
  background: var(--element-bg);
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 100%;
  opacity: 1;
`;

export const ToggleInput = styled.input`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer;
  z-index: 2;
  opacity: 0;

  &:checked ~ .circle-one {
    background: linear-gradient(
      110deg,
      hsl(192, 100%, 67%) 21%,
      hsl(280, 87%, 65%) 71%
    );
  }

  &:checked + .check {
    opacity: 1;
  }

  &:checked ~ .circle-two {
    opacity: 0;
  }
`;
