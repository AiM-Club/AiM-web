import styled from "styled-components";
import EmptySpace from "@/assets/EmptySpace.svg";

export const ChallengeVSWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6.25rem;
    width: 100%;
`;

export const SearchTopic = styled.div`
    display: flex;
    gap: 1rem;
    font: var(--headline-h-l);
    align-items: center;
    width: 100%;
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