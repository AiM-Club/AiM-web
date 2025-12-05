import styled from "styled-components";

export const HeaderWrapper = styled.div`
    position: relative;
    height: 7.5rem;
    box-sizing: border-box;
    padding: 0 5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
`;

export const Logo = styled.img`
    height: 1.75rem;
    cursor: pointer;
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
    left: calc(50% - 2.5rem);
  }
`;

export const SubMenuItem = styled.div<{ $isActive: boolean}>`
  font: var(--title-h-m);
  color: var(--text-primary-default);
  height: 4.625rem;
  padding-inline: 3rem;
  align-items: center;
  box-sizing: border-box;
  cursor: pointer;
  display:flex;
  align-items: center;
  background-color: var(--surpace-primary);
  border: none;

  &:hover {
  color: ${(props) =>
      props.$isActive ? `var(--text-primary-default)` : `var(--text-primary-hover)`};
  }
`;