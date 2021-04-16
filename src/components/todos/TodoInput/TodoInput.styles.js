import styled from "styled-components";

export const TodoInputContainer = styled.div`
  margin-top: 2rem;
  background: var(--element-bg);
  display: flex;
  align-items: center;
  padding: 1rem 1rem;
  border-radius: 0.5rem;
`;

export const TextInput = styled.input`
  margin-left: 1rem;
  border: none;
  outline: none;
  font-size: 0.9rem;
  font-family: var(--main-font-family);
  color: var(--input-text-color);
  background: transparent;
  cursor: pointer;

  &::placeholder {
    color: var(--input-placeholder);
  }
`;
