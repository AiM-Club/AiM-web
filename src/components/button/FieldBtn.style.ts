import styled from "styled-components";

export const FieldBtnWrapper = styled.div`
  display: flex;
  word-break: keep-all;
  background-color: var(--pink-700);
  color: var(--text-primary-default);
  font: var(--subtitle-m-l);
  border-radius: 4rem;
  padding: 0.5rem 1.25rem;
  width: fit-content;
  
  @media (max-width: 560px){
    font: var(--body-r-m);
    padding: 0.25rem 0.625rem;
  }
`;
