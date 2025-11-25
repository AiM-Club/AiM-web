import styled from "styled-components";

export const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100vw;
  background-color: var(--background-primary);
`;

export const ContentWrapper = styled.div`
  display: flex;
  overflow: hidden;
`;

export const SidebarWrapper = styled.div`
  width: 7rem;
  height: 100vh;
  background: linear-gradient(
    to bottom,
    var(--background-secondary),
    var(--background-primary)
  );
  overflow-y: auto;
  overflow: visible;
`;


export const MainWrapper = styled.main`
  flex: 1;
  overflow-y: auto;
  position: relative;
  z-index:10;
`;

export const MainContent = styled.div`
    padding: 0 10rem;
    
`;