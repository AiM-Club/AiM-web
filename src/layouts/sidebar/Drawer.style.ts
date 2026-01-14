import styled from "styled-components";

export const DrawerOverlay = styled.div<{ $isOpen: boolean }>`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 999;
    opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
    visibility: ${({ $isOpen }) => ($isOpen ? 'visible' : 'hidden')};
    transition: opacity 0.3s ease, visibility 0.3s ease;
    
    @media (min-width: 1025px) {
        display: none;
    }
`;

export const DrawerContainer = styled.div<{ $isOpen: boolean }>`
    position: fixed;
    top: 0;
    right: 0;
    width: 17.5rem;
    height: 100vh;
    background-color: var(--surpace-primary);
    z-index: 1000;
    transform: translateX(${({ $isOpen }) => ($isOpen ? '0' : '100%')});
    transition: transform 0.3s ease;
    overflow-y: auto;
    padding-top: 4rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    
    @media (min-width: 1025px) {
        display: none;
    }
`;

export const DrawerHeader = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;

export const UserInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
    gap: 1.25rem;
    width: 100%;
    padding: 0 1.5rem;
`;

export const UserNameWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
`;

export const UserName = styled.div`
    font: var(--title-h-s);
    color: var(--text-primary-default);
`;

export const UserLoginId = styled.div`
    font: var(--body-m-s);
    color: var(--text-primary-default);
`;

export const DrawerMenuList = styled.nav`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`;

export const DrawerMenuItem = styled.div<{ $hasSubmenu?: boolean }>`
    padding: 0 1.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 3.375rem;
    cursor: pointer;
    color: var(--text-primary-default);
    font: var(--body-r-l);
    
    &:hover {
        background-color: var(--surpace-tertiary);
    }
`;

export const DrawerSubMenuList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
`;

export const DrawerSubMenuItem = styled.div`
    padding: 0 3rem;
    height: 2.75rem;
    cursor: pointer;
    color: var(--text-secondary);
    font: var(--body-r-m);
    display: flex;
    align-items: center;
    
    &:hover {
        color: var(--text-primary-default);
        background-color: var(--surpace-tertiary);
    }
`;

