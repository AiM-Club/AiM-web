import styled from "styled-components";

export const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 29.126rem;
  margin: 6.25rem auto;
  
  @media (max-width: 560px){
    width: 100%;
    margin: 1.5rem auto 2.5rem auto;
  }
`;

export const TopicText = styled.div`
  margin-bottom: 3rem;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 4rem;
`;

export const BtnGap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
