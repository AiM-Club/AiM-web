import styled from "styled-components";
import EmptySpace from "@/assets/EmptySpace.svg";

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

export const EmptyState = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.75rem;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 30vh;
    margin: 0 auto;
    flex-shrink: 0;
    background-image: url(${EmptySpace});
    background-size: 100% 100%;
    background-position: center;
    background-repeat: no-repeat;
`;

export const LockImage = styled.img`
    width: 2.5rem;
    height: 2.5rem;
`;