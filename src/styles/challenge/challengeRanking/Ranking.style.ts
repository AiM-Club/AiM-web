import styled from "styled-components";

export const RankingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  width: 100%;

  @media (max-width: 560px) {
    gap: 2.5rem;
  }
`;

export const RankingContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
`;

export const SubTitle = styled.h2`
  font: var(--title-h-l);
  color: var(--font-primary-default);
`;

export const RankingList = styled.div`
  display: flex;
  gap: 2rem;
  width: 100%;
  flex-wrap: wrap;

  @media (max-width: 560px) {
    gap: 2.5rem;
  }
`;

export const TopRankingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 500;

  @media (max-width: 1600px) {
    flex: 1;
  }
`;

export const NextRankingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding-top: 2.5rem;
  flex: 664;

  @media (max-width: 1600px) {
    flex: none;
    width: 100%;
    padding: 0;
    gap: 2.5rem;
  }
`;
