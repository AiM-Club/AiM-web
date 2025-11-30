import styled from "styled-components";

export const GenderSelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const GenderLabel = styled.label`
  color: var(--text-primary-default);
  font: var(--body-m-xl);
`;

export const GenderSelect = styled.div`
  display: flex;
  flex-direction: row;
  background-color: var(--surpace-primary);
  border-radius: 0.25rem;
  padding: 0.6875rem 0;
`;

export const GenderText = styled.p<{ $selected: boolean }>`
  color: ${(prop) => (prop.$selected ? "var(--text-primary-default)" : "var(--text-secondary)")};
  font: var(--body-r-l);
  flex: 1;
  text-align: center;
  height: 2rem;
  line-height: 2rem;
  cursor: pointer;
  border-right: 1px solid var(--gray-500);
  &:last-child {
    border-right: none;
  }
`;
