import styled from "styled-components";

export const HomeWrapper = styled.div`
  width: calc(85%);
  display: flex;
  flex-direction: column;
  gap: 5rem;
  margin: 2rem auto;

  @media (max-width: 390px) {
    width: 90%;
    margin: 1rem auto;
  }

  @media (max-width: 560px) {
    gap: 2.5rem;
  }
`;

export const CardWrapper = styled.div`
  margin: 2rem 0;
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

  @media (max-width: 560px) {
    width: 100%;
    gap: 0rem;
  }
`;

export const TopWrapper = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: nowrap;
`;

export const FieldWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

export const FieldList = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: flex-start;
`;

export const FieldItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  flex: 0 0 calc((100% - 9rem) / 10);
  min-width: 5.688rem;
  font: var(--test-primary-default);
  cursor: pointer;

  @media (max-width: 1200px) {
    flex: 0 0 calc((100% - 8rem) / 9);
  }

  @media (max-width: 1000px) {
    flex: 0 0 calc((100% - 7rem) / 8);
  }

  @media (max-width: 800px) {
    flex: 0 0 calc((100% - 6rem) / 7);
  }

  @media (max-width: 600px) {
    flex: 0 0 calc((100% - 5rem) / 6);
  }
`;

export const BattleWrapper = styled.div`
  margin-top: 2rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`;

export const BattleTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
`;
