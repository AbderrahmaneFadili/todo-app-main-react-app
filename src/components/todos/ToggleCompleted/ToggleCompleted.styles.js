import styled from "styled-components";

export const ToggleCompletedWrapper = styled.div`
  width: 40px;
  height: 40px;
  position: relative;
  left: 0;
  top: 0;
  border: 0.144rem solid var(--input-placeholder);
  border-radius: 100%;
  cursor: pointer;

  &:hover .circle-one,
  &:hover .circle-two {
    opacity: 1 !important;
  }
`;

export const CircleOne = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 108%;
  height: 108%;
  background: linear-gradient(
    110deg,
    rgba(55, 143, 230, 1) 21%,
    rgba(62, 218, 130, 1) 71%
  );
  border-radius: 100%;
  opacity: 0;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export const CircleTwo = styled.div`
  width: 99%;
  height: 99%;
  background-color: var(--element-bg);
  position: absolute;
  border-radius: 100%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
`;

export const ToggleInput = styled.input`
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
`;

export const CheckIcon = styled.img`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
  height: 50%;
`;
