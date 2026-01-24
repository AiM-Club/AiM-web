import styled from "styled-components";

export const WriteElementsSelectWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  flex-wrap: wrap;
  gap: 2rem;
  font: var(--subtitle-m-l);
  color: var(--text-secondary);
  @media(max-width: 500px){
   gap: 0.5rem;
   font: var(--body-r-m);
  }
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
  @media(max-width: 500px){
    width: 100%;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 18rem;
  @media(max-width: 500px){
    width: calc(100% - 4rem);
    flex: 1;
  }
`;

export const InputField = styled.input<{ $width?: number | string; $nonInputtable?: boolean }>`
  width: ${(props) => (props.$width && typeof props.$width === "number" ? `${props.$width}rem` : props.$width || "18rem")};
  flex-shrink: 0;
  padding: 0.625rem 1.2rem;
  border-radius: 0.25rem;
  font: var(--subtitle-m-l);
  color: ${(props)=>props.$nonInputtable?"var(--text-secondary)":"var(--text-primary-default)"};
  background-color: ${(props)=>props.$nonInputtable?"var(--surpace-tertiary)":"var(--surpace-primary)"};
  border: none;
  outline: none;
  box-sizing: border-box;
  &::placeholder {
    color: var(--text-secondary);
  }
  @media(max-width: 500px){
    font: var(--body-r-m);
    width: ${(props) => (props.$width && typeof props.$width === "number" ? `${props.$width}rem` : props.$width || "calc(100% - 4rem)")};
    flex: ${(props) => (props.$width ? "none" : "1")};
  }
`;

export const PickerWrapper = styled.div`
  display: flex;
  position: relative;
  @media(max-width: 500px){
    width: 32%;
  }
`;

export const PickerTop = styled.div<{ $nonInputtable?: boolean }>`
  display: flex;
  background-color: ${(props)=>props.$nonInputtable?"var(--surpace-tertiary)":"var(--surpace-primary)"};
  color: ${(props)=>props.$nonInputtable?"var(--text-secondary)":"var(--text-primary-default)"};
  box-sizing: border-box;
  padding: 0.625rem 1rem;
  border-radius: 0.25rem;
  cursor: ${(props)=>props.$nonInputtable?"default":"pointer"};
  @media(max-width: 500px){
    width: 100%;
    text-align: center;
    justify-content: center;
  }
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
  @media(max-width: 500px){
    width: 49%;
    text-align: center;
    justify-content: center;
  }
`;

export const DisabledWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  flex-wrap: wrap;
  gap: 2rem;
`;