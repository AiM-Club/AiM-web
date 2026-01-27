import styled from "styled-components";

export const ChallengeVSInviteWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 6.25rem;

    @media (max-width: 560px) {
      gap: 2.5rem;
    }
`;

export const InviteContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

export const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;
