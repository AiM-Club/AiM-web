import styled from "styled-components";

export const CategoryButton = styled.button<{ $isActive: boolean }>`
    width: 6.25rem;
    height: 2.875rem;
    box-sizing: border-box;
    border-radius: 6.25rem;
    border: 1px solid var(--gray-700);
    font: var(--body-l-r);
    cursor: pointer;
    transition: all 0.2s ease;
    
    background-color: ${({ $isActive }) => 
        $isActive ? "var(--surpace-primary)" : "var(--surpace-secondary)"};
    color: ${({ $isActive }) => 
        $isActive ? "var(--text-primary-default)" : "var(--text-secondary)"};
    
    &:hover {
        background-color: ${({ $isActive }) => 
            $isActive ? "var(--surpace-primary)" : "var(--surpace-tertiary)"};
    }
    
    &:focus {
        outline: none;
    }
`;

