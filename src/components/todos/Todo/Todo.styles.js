import styled from "styled-components";

export const TodoItem = styled.li`
  padding: 1rem 1.5rem;
  display: flex;
  align-items: center;
  border-bottom: 1px solid var(--border-color);
  word-break: break-all;

  &:last-child {
    border-bottom: 0;
  }

  &:hover img:last-child {
    opacity: 1;
  }
`;

export const TodoText = styled.span`
  margin-left: 1rem;
  color: ${({ completed }) =>
    completed ? "var(--todo-completed-color)" : " var(--todo-text-color);"};
  font-size: 0.9rem;
  cursor: pointer;
  text-decoration: ${({ completed }) => (completed ? "line-through" : "none")};

  @media screen and (max-width: 340px) {
    font-size: 0.7rem;
  }
`;

export const RemoveIcon = styled.img`
  margin-left: auto;
  cursor: pointer;
  opacity: 0;
`;
