import styled from "styled-components";

export const SearchIcon = styled.div`
    display: flex;
    align-items: center;
    color: var(--text-secondary);
    flex-shrink: 0;
    transition: color 0.2s ease;
`;

export const SearchInputWrapper = styled.form`
    display: flex;
    align-items: center;
    position: relative;
    width: 100%;
    max-width: 29rem;
    background-color: var(--surpace-primary);
    border-radius: 0.25rem;
    padding: 0 1.25rem;
    gap: 0.75rem;
    transition: max-width 0.3s ease;

    &:focus-within ${SearchIcon} {
        color: var(--text-primary-default);
    }

    @media (max-width: 1340px) {
        max-width: 13rem;
    }
`;

export const InputField = styled.input`
    flex: 1;
    padding: 1rem 0;
    font: var(--body-r-l);
    border: none;
    outline: none;
    width: 100%;
    background-color: transparent;
    color: var(--text-primary-default);

    &::placeholder {
        color: var(--text-secondary);
    }
`;