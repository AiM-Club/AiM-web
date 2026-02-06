import styled from "styled-components";

export const InputFieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  position: relative;
`;

export const LabelText = styled.label`
  color: var(--text-primary-default);
  font: var(--body-m-xl);
`;

export const InputFieldInput = styled.input.attrs<{ $label: string; $checkDuplicate: boolean }>((props) => ({
  type: props.$label === "비밀번호" || props.$label === "비밀번호 확인" ? "password" : "text",
}))`
  padding: ${(props) => (props.$checkDuplicate ? " 1rem 5.875rem 1rem 1.25rem" : "1rem 1.25rem")};
  font: var(--body-r-l);
  border-radius: 0.25rem;
  border: none;
  outline: none;
  background-color: var(--surpace-primary);
  color: var(--text-primary-default);

  &::placeholder {
    color: var(--text-secondary);
  }

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-internal-autofill-selected {
    -webkit-box-shadow: 0 0 0px 1000px var(--surpace-primary) inset !important;
    -webkit-text-fill-color: var(--text-primary-default) !important;
    background-color: var(--surpace-primary) !important;
  }
`;

export const DuplicateBtnWrapper = styled.div<{ $canCheckDuplicate: boolean }>`
  display: flex;
  font: var(--body-r-m);
  color: ${({ $canCheckDuplicate }) => ($canCheckDuplicate ? "var(--text-primary-default)" : "var(--text-secondary)")};
  background-color: ${({ $canCheckDuplicate }) =>
    $canCheckDuplicate ? "var(--button-secondary-hover)" : "var(--text-tertiary)"};
  width: 4.75rem;
  height: 2.25rem;
  border-radius: 0.25rem;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: absolute;
  right: 0.5625rem;
  top: 50%;
`;

export const ErrorText = styled.p`
  color: var(--state-error);
  position: absolute;
  font: var(--body-r-l);
  bottom: -1.7rem;
`;
