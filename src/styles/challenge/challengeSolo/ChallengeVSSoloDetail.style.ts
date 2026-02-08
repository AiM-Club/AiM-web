import styled from "styled-components";
import EmptySpace from "@/assets/EmptySpace.svg";

export const ChallengeVSSoloDetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

export const ChallengeVSSoloDetailContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding: 0 10%;

  @media (max-width: 560px) {
    padding: 0 5%;
  }
`;

export const EmptyState = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50vh;
  margin: 5rem auto 0;
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