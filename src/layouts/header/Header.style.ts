import styled from "styled-components";

export const HeaderWrapper = styled.div`
    position: relative;
    height: 7.5rem;
    box-sizing: border-box;
    padding: 0 5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    .login-button {
        @media (max-width: 1024px) {
            display: none;
        }
    }

    @media (max-width: 390px) {
      height: 3.75rem;
      padding: 0 1.25rem;
    }
`;

export const Logo = styled.img`
    height: 1.75rem;
    cursor: pointer;

    @media (max-width: 390px) {
      height: 1rem;
    }
`;

export const SubMenuList = styled.nav`
  position: absolute;
  top: 0;
  left: calc(50% - 3.5rem);
  transform: translateX(-50%);
  display: flex;
  height: 4.625rem;
  align-items: center;

  @media (max-width: 1024px) {
    display: none;
  }
`;

export const SubMenuItem = styled.div<{ $isActive: boolean}>`
  font: var(--title-h-m);
  color: ${(props) =>
      props.$isActive ? `var(--text-primary-selected)` : `var(--text-primary-default)`};
  height: 4.625rem;
  padding-inline: 3rem;
  align-items: center;
  box-sizing: border-box;
  cursor: pointer;
  display:flex;
  align-items: center;
  background-color: var(--surpace-primary);
  border: none;
  transition: width 0.3s ease, aspect-ratio 0.3s ease;

  &:hover {
    color: ${(props) =>
        props.$isActive ? `var(--text-primary-selected)` : `var(--text-primary-hover)`};
  }

  @media (max-width: 1300px) {
    padding-inline: 1.5rem;
    font: var(--title-h-s);
  }

  @media (max-width: 1024px) {
    padding-inline: 1.5rem;
  }
`;

export const HamburgerButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  width: 1.75rem;
  height: 1.75rem;
  
  @media (max-width: 1024px) {
    display: block;
  }
  
  img {
    width: 100%;
    height: 100%;
  }
`;