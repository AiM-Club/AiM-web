import styled from "styled-components"; 

export const ChallengeRecruitWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6.25rem;
    width: 100%;

    @media (max-width: 560px) {
      gap: 2.5rem;
    }
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