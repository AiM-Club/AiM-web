import styled from "styled-components";
import Background from "@/assets/Background.png";

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
  background-image: url(${Background});
  background-repeat: no-repeat;
  background-position: center 32.5rem; 
  background-size: 100% auto;
`;

export const MainContent = styled.div<{ variant: "default" | "login" | "home" }>`
  width: ${({ variant }) => variant === "login" ? "100%" : "calc(100% - 23rem)"};
  max-width: 1440px;
  padding-left: ${({ variant }) => variant === "home" ? "0" : "7.625rem"};
  padding-right: ${({ variant }) => variant === "home" ? "0" : "7.625rem"};
  min-height: calc(100vh - 7.5rem);
  color: var(--text-primary-default);
  padding-top: ${({ variant }) => variant === "home" ? "0" : "6.25rem"};
  margin: ${({ variant }) =>
    variant === "login" ? "0 auto" : "0 0 0 8rem"};

  ${({ variant }) =>
    variant === "default" &&
    `
    @media (min-width: 1920px) {
      margin-left: calc((100vw - 1440px - 14rem) / 2);
    }
  `}
`;