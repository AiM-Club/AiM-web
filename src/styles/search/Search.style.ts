import styled from "styled-components";
import SearchFrame from "@/assets/SearchFrame.svg";

export const SearchWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6.25rem;
    width: 100%;
    height: 100%;
`;

export const ResultWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3rem;
    width: 100%;
`;

export const SearchMenuWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`;

export const SearchTopic = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
`;

export const ResultListWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    width: 100%;

    & > * {
        flex: 1 1 calc((100% - 6rem) / 4);
        min-width: 0;
    }
`;

export const PaginationWrapper = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
`;

export const EmptyState = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 20rem;
    background-image: url(${SearchFrame});
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
`;