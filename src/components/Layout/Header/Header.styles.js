import styled from "styled-components";

export const HeaderWrapper = styled.div`
  height: 57vh;
  background: var(--bg-image-mobile) no-repeat center/cover;
  padding: 3rem 0 0;

  @media screen and (min-width: 700px) {
    background: var(--bg-image-desktop) no-repeat center/cover;
  }
`;

export const HedaerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderTitle = styled.h1`
  font-size: 2.3rem;
  color: var(--title-color);
  letter-spacing: 10px;
  text-transform: uppercase;
`;

export const ToggleContainer = styled.div``;

export const ToggleIcon = styled.img`
  cursor: pointer;
`;
