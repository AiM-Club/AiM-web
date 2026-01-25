import styled from "styled-components";

export const PaginationWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 100%;
    height: 1.438rem;
    align-items: center;
    gap: 0.25rem;
`;

export const PaginationItem = styled.div`
    display: flex;
    justify-content: center;
`;

export const PageInfo = styled.div`
    display: flex;
    justify-content: center;
    font: var(--subtitle-m-m);
    height: 1.438rem;
    text-align: center;
    align-items: center;
`;

export const PaginationButton = styled.button<{ $isClicked: boolean }>`
    height: 1.438rem;
    color: var(--text-primary-default);
`;

export const EmptyButton = styled.div`
    height: 1.438rem;
    width: 1rem;
`;