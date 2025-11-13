import styled from "styled-components";

export const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100vw;
  background-color: var(--color-main-sub);
`;

export const ContentWrapper = styled.div`
  display: flex;
  overflow: hidden;
`;

export const SidebarWrapper = styled.div`
  width: 7rem;
  height: 100vh;
  background-color: var(--color-main);
  overflow-y: auto;
`;


export const MainContent = styled.main`
  flex: 1;
  padding: 2rem;
  overflow-y: auto;
`;