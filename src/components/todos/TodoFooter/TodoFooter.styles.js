import styled from "styled-components";

export const TodoFooterWrapper = styled.div`
  padding: 1rem 1.5rem;
  border-top: 1px solid var(--border-color);
  display: flex;
  justify-content: space-between;
  color: var(--card-text-color);
`;

export const ItemsCount = styled.span``;

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

export const ClearCompleted = styled.span`
  cursor: pointer;

  &:hover {
    color: var(--on-hover-color);
  }
`;
