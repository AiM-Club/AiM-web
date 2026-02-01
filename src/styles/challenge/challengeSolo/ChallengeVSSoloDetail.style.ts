import styled from "styled-components";

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
