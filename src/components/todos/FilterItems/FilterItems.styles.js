import styled from "styled-components";

export const FilterItemsWrapper = styled.div`
  margin-top: 1.6rem;
  background: var(--element-bg);
  border-radius: 0.5rem;
  box-shadow: -1px 2px 17px -5px var(--card-shadow);
  padding: 1rem 1.5rem;
  display: flex;
  justify-content: center;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;
