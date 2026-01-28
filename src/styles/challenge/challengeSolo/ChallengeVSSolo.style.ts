import styled from "styled-components";
import EmptySpace from "@/assets/EmptySpace.svg";

export const ChallengeVSMainWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6.25rem;
    width: 100%;

    @media (max-width: 560px) {
      gap: 2.5rem;
    }
`;

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3rem;
    width: 100%;
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