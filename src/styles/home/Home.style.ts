import styled from "styled-components";

export const HomeWrapper = styled.div`
  width: calc(100% - 15.25rem);
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin: 2rem auto;
  background-color: red;
`;

export const CardWrapper = styled.div`
  margin-top: 2rem;
  width: 100%;
  display: flex;
  gap: 1rem;
  flex-wrap: nowrap;

  @media (max-width: 1378px) {
    flex-wrap: wrap;
    
    & > *:nth-child(3) {
      width: 100%;
      margin-top: 1rem;
      flex: 1 1 100%;
    }
  }
`;

export const BattleWrapper = styled.div`
  margin-top: 2rem;
  width: 100%;
  display: flex;
  gap: 1rem;
`;