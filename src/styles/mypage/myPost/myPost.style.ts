import styled from "styled-components";

export const myPostWrapper = styled.div`
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