import styled from "styled-components";

export const PaginationWrapper = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 2.875rem;
    align-items: center;
    gap: 5.75rem;
`;

export const PaginationItem = styled.div`
    display: flex;
    justify-content: center;
`;

export const PageInfo = styled.div`
    display: flex;
    justify-content: center;
    font: var(--body-r-l);
    background-color: var(--surpace-primary);
    height: 2.875rem;
    text-align: center;
    padding: 0 2rem;
    align-items: center;
    border-radius: 0.25rem;
`;

export const PaginationButton = styled.button<{ $isClicked: boolean }>`
    height: 2.875rem;
    color: var(--text-primary-default);
`;

export const EmptyButton = styled.div`
    height: 2.875rem;
    width: 3rem;
`;