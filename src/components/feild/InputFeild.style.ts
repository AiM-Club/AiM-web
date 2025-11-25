import styled from "styled-components";

export const InputFeildWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  position: relative;
`;

export const LabelText = styled.label`
  color: var(--text-primary-default);
  font: var(--body-m-xl);
`;

export const InputFeildInput = styled.input.attrs<{ $label: string }>((props) => ({
  type: props.$label === "비밀번호" ? "password" : "text",
}))`
  padding: 1rem 1.25rem;
  font: var(--body-r-l);
  border-radius: 0.25rem;
  border: none;
  outline: none;
  background-color: var(--surpace-primary);
  color: var(--text-primary-default);

  &::placeholder {
    color: var(--text-secondary);
  }
`;

export const ErrorText = styled.p`
  color: var(--state-error);
  position: absolute;
  font: var(--body-r-l);
  bottom: -1.7rem;
`;
