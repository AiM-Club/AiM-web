import styled from "styled-components";

export const JoinWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 29.126rem;
  margin: 6.25rem auto;
  gap: 3rem;
  
  @media (max-width: 560px){
    width: 100%;
    margin: 1.5rem auto 2.5rem auto;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;
