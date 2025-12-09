import styled from "styled-components";


export const CardBoardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6.25rem;
    width: 100%;
`;

export const ResultListWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
    width: 100%;
    transition: grid-template-columns 0.3s ease;

    @media (max-width: 1024px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (min-width: 1025px) and (max-width: 1340px) {
        grid-template-columns: repeat(1, 1fr);
    }

    @media (min-width: 1680px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media (min-width: 1920px) {
        grid-template-columns: repeat(4, 1fr);
    }
`;

export const PaginationWrapper = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
`;
