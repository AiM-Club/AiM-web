import styled from "styled-components";

export const FieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const TopWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 1.5rem 3rem;
  
  @media (max-width: 560px){
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
`;
export const BottomWrapper = styled.div``;

export const EachWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
`;

export const Topic = styled.p`
  flex-shrink: 0;
  font: var(--subtitle-m-l);
  color: var(--text-secondary);
  
  @media (max-width: 560px){
    font: var(--body-m-m);
  }
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  flex-shrink: 0;
  align-items: center;
  color: var(--text-primary-default);
  font: var(--subtitle-m-l);
  gap: 0.75rem;
  
  @media (max-width: 560px){
    font: var(--body-r-m);
  }
`;
