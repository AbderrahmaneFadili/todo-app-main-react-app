import styled from "styled-components";

export const TodoFooterWrapper = styled.div`
  padding: 1rem 1.5rem;
  border-top: 1px solid var(--border-color);
  display: flex;
  justify-content: space-between;
  color: var(--card-text-color);

  @media screen and (max-width: 340px) {
    font-size: 0.7rem;
  }
`;

export const ItemsCount = styled.span``;

export const FilterContainer = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    display: block;
  }
`;

export const ClearCompleted = styled.span`
  cursor: pointer;

  &:hover {
    color: var(--on-hover-color);
  }
`;
