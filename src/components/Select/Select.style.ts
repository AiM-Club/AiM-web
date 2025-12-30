import styled from "styled-components";
import * as SelectMenu from "@radix-ui/react-select";

export const Trigger = styled(SelectMenu.Trigger)`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;
    width: 6.2rem;
    padding: 0.5rem 0.938rem;
    background-color: var(--surpace-primary);
    border: none;
    border-radius: 0.25rem;
    font: var(--body-r-m);
    cursor: pointer;
    color: var(--text-primary-default);
    
    & > [data-radix-select-value] {
        flex: 1;
        text-align: center;
    }
    
    &:hover {
        background-color: var(--surpace-tertiary);
    }
    
    &:focus {
        outline: none;
    }
    
    &[data-placeholder] {
        color: var(--text-primary-default);
    }
`;

export const IconWrapper = styled.div`
    display: flex;
    align-items: center;
    color: var(--green-400);
    font-size: 1rem;
    transition: transform 0.2s;
    
    ${Trigger}[data-state="open"] & {
        transform: rotate(180deg);
    }
`;

export const Content = styled(SelectMenu.Content)`
    overflow: hidden;
    background-color: var(--surpace-tertiary);
    border-radius: 0.25rem;
    z-index: 1000;
    width: 6.2rem;
    max-width: 6.2rem;
    max-height: var(--radix-select-content-available-height);
    transform-origin: top left;
    contain: layout;
`;

export const Viewport = styled(SelectMenu.Viewport)`
    padding: 0.25rem;
`;

export const Item = styled(SelectMenu.Item)`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem 1rem;
    border-radius: 0.25rem;
    color: var(--text-secondary);
    font: var(--body-r-m);
    cursor: pointer;
    outline: none;
    
    &:hover,
    &[data-highlighted] {
        background-color: var(--surpace-tertiary);
        color: var(--text-primary-default);
    }
    
    &[data-state="checked"] {
        background-color: var(--surpace-tertiary);
        color: var(--text-primary-default);
    }
`;
