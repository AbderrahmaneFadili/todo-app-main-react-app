import styled from "styled-components";

export const FilterTodos = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  font-weight: bold;
  display: none;

  @media screen and (min-width: 768px) {
    display: block;
  }
`;

export const All = styled.span`
  cursor: pointer;
  color: var(--active-card-color);

  &:hover {
    color: var(--on-hover-color);
  }
`;

export const Active = styled.span`
  margin: 0 2rem;
  cursor: pointer;

  &:hover {
    color: var(--on-hover-color);
  }
`;

export const Completed = styled.span`
  cursor: pointer;

  &:hover {
    color: var(--on-hover-color);
  }
`;
