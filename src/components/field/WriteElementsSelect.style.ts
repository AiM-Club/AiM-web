import styled from "styled-components";

export const WriteElementsSelectWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  flex-wrap: wrap;
  gap: 2rem;
  font: var(--subtitle-m-l);
  color: var(--text-secondary);
`;

export const ContentTitle = styled.div`
  display: flex;
  width: 4rem;
`;

export const EachContentWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  width: 22rem;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 18rem;
`;

export const InputField = styled.input<{ $width?: number }>`
  width: ${(props) => (props.$width && props.$width > 0 ? `${props.$width}rem` : "18rem")};
  flex-shrink: 0;
  padding: 0.625rem 1.2rem;
  border-radius: 0.25rem;
  font: var(--subtitle-m-l);
  color: var(--text-primary-default);
  background-color: var(--surpace-primary);
  border: none;
  outline: none;
  box-sizing: border-box;
  &::placeholder {
    color: var(--text-secondary);
  }
`;

export const PickerWrapper = styled.div`
  display: flex;
  position: relative;
`;

export const PickerTop = styled.div`
  display: flex;
  background-color: var(--surpace-primary);
  color: var(--text-primary-default);
  box-sizing: border-box;
  padding: 0.625rem 1rem;
  border-radius: 0.25rem;
  cursor: pointer;
`;

export const PickerBottom = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--surpace-primary);
  border-radius: 0.25rem;
  position: absolute;
  top: 3.5rem;
  width: 100%;
  z-index: 1000;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-height: 12rem;
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const PickerItem = styled.div<{ $isSelected?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0.175rem 0rem;
  cursor: pointer;
  color: ${(props) => (props.$isSelected ? "var(--text-primary-default)" : "var(--text-secondary)")};
  background-color: ${(props) => (props.$isSelected ? "var(--surpace-tertiary)" : "transparent")};

  &:hover {
    background-color: var(--surpace-tertiary);
    color: var(--text-primary-default);
  }
`;

export const Mode = styled.div<{ $isSelected?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 8.75rem;
  padding: 0.625rem 0rem;
  gap: 0.5rem;
  cursor: pointer;
  color: ${(props) => (props.$isSelected ? "var(--text-primary-default)" : "var(--text-secondary)")};
  background-color: var(--surpace-primary);
  border-radius: 0.25rem;
`;
