import styled from "styled-components";

export const FilterTodos = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  font-weight: bold;
  color: var(--card-text-color);

  @media screen and (max-width: 340px) {
    font-size: 0.8rem;
  }
`;

export const All = styled.span`
  cursor: pointer;
  color: ${({ active }) =>
    active ? "var(--active-card-color)" : "var(--card-text-color)"};

  &:hover {
    color: var(--on-hover-color);
  }
`;

export const Active = styled.span`
  margin: 0 2rem;
  cursor: pointer;
  color: ${({ active }) =>
    active ? "var(--active-card-color)" : "var(--card-text-color)"};
  &:hover {
    color: var(--on-hover-color);
  }
`;

export const Completed = styled.span`
  cursor: pointer;
  color: ${({ active }) =>
    active ? "var(--active-card-color)" : "var(--card-text-color)"};
  &:hover {
    color: var(--on-hover-color);
  }
`;
