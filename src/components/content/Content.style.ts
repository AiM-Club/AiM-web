import styled from "styled-components";

export const ContentWrapper = styled.div`
  display: flex;
  width: 100%;
  background-color: var(--surpace-primary);
  border-radius: 0.25rem;
  padding: 1.5rem;
  min-height: 26rem;
  font: var(--body-r-xl);
  
  @media (max-width: 560px){
    padding: 0.75rem;
    font: var(--body-r-m);
    min-height: 12.5rem;
  }
`;

export const ContentText = styled.p`
  word-break: break-word;
`;
