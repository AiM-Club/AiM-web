import styled from "styled-components";

export const SubmitBtnWrapper = styled.div<{ $fill: boolean; $active?: boolean }>`
  display: flex;
  justify-content: center;
  border-radius: 0.25rem;
  cursor: ${(prop) => (prop.$active || !prop.$fill ? "pointer" : "default")};
  color: var(--text-primary-default);
  font: var(--body-m-l);
  padding: 1rem 0;
  background-color: ${(prop) =>
    prop.$fill && prop.$active
      ? "var(--button-primary-default)"
      : prop.$fill && !prop.$active
        ? "var(--button-primary-disabled)"
        : "transparent"};
  border: ${(prop) => (prop.$fill ? "none" : "1.5px solid var(--button-primary-default)")};

  &:hover {
    background-color: ${(prop) => (prop.$fill && prop.$active ? "var(--button-primary-hover)" : "")};
  }
`;
