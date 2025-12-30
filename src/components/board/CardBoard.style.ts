import styled from "styled-components";
import SearchFrame from "@/assets/SearchFrame.svg";

export const CardBoardWrapper = styled.div`
    display: flex;
    flex-direction: column;
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

export const ButtonWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 2rem;
    width: 100%;
`;

export const PaginationWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 6.25rem;
    width: 100%;
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
`;