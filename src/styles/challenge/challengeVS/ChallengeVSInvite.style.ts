import styled from "styled-components";
import SearchFrame from "@/assets/SearchFrame.svg";
import EmptySpace from "@/assets/EmptySpace.svg";

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

export const EmptyState = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 100%;
    flex-shrink: 0;
    background-image: url(${SearchFrame});
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    aspect-ratio: 1196 / 312;
    position: relative;
`;

export const LockEmptyState = styled.div`
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