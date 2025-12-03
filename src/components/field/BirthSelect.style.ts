import styled from "styled-components";

export const BirthSelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const BirthLabel = styled.label`
  color: var(--text-primary-default);
  font: var(--body-m-xl);
`;

export const BirthSelect = styled.div`
  display: flex;
  flex-direction: row;
  background-color: var(--surpace-primary);
  border-radius: 0.25rem;
  padding: 0.6875rem 0;
`;

export const BirthSelectContent = styled.div<{ $selected: boolean }>`
  color: ${(prop) => (prop.$selected ? "var(--text-primary-default)" : "var(--text-secondary)")};
  display: flex;
  position: relative;
  flex: 1;
  justify-content: center;
  align-items: center;
  height: 2rem;
  border-right: 1px solid var(--gray-500);
  cursor: pointer;
  &:last-child {
    border-right: none;
  }
`;

export const BirthText = styled.p`
  font: var(--body-r-l);
  line-height: 2rem;
  text-align: center;
`;

export const SelectItems = styled.div`
  position: absolute;
  background-color: pink;
  width: 100%;
  height: 10.9375rem;
  border-radius: 0.25rem;
  background-color: var(--surpace-primary);
  overflow-y: auto;
  top: 2.9375rem;
  box-shadow: 0 8px 30px 0 rgba(18, 0, 0, 0.23);
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const SelectItem = styled.p`
  color: var(--text-secondary);
  font: var(--body-r-l);
  line-height: 2.375rem;
  text-align: center;
  height: 2.375rem;
  &:hover {
    color: var(--text-primary-default);
  }
`;
