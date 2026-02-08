import styled from "styled-components";
import Background from "@/assets/Background.png";

export const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  max-width: 100vw;
  background-color: var(--background-primary);
  position: relative;
`;

export const ContentWrapper = styled.div<{ $isDrawerOpen?: boolean }>`
  display: flex;
  overflow: hidden;
  height: 100vh;

  @media (max-width: 1024px) {
    position: ${({ $isDrawerOpen }) => ($isDrawerOpen ? "fixed" : "relative")};
    width: 100%;
    top: 0;
    left: 0;
  }
`;

export const SidebarWrapper = styled.div`
  width: 7rem;
  height: 100vh;
  background: linear-gradient(to bottom, var(--background-secondary), var(--background-primary));
  overflow-y: auto;
  overflow: visible;
  transition:
    width 0.3s ease,
    aspect-ratio 0.3s ease;

  @media (max-width: 1024px) {
    display: none;
  }
`;

export const MainWrapper = styled.main<{ $isDrawerOpen?: boolean }>`
  flex: 1;
  overflow-y: auto;
  position: relative;
  z-index: 10;
  background-image: url(${Background});
  background-repeat: no-repeat;
  background-position: center 32.5rem;
  background-size: 100% auto;

  @media (max-width: 1024px) {
    overflow-y: ${({ $isDrawerOpen }) => ($isDrawerOpen ? "hidden" : "auto")};
  }
`;

export const MainContent = styled.div<{ $variant: "default" | "login" | "home" }>`
  width: ${({ $variant }) => ($variant === "login" ? "100%" : "calc(100% - 23rem)")};
  max-width: 1440px;
  padding-left: ${({ $variant }) => ($variant === "home" ? "0" : "7.5%")};
  padding-right: ${({ $variant }) => ($variant === "home" ? "0" : "7.5%")};
  min-height: calc(100vh - 7.5rem);
  color: var(--text-primary-default);
  padding-top: ${({ $variant }) => ($variant === "home" ? "0" : "6.25rem")};
  margin: ${({ $variant }) => ($variant === "login" ? "0 auto" : "0 0 0 8rem")};
  margin-bottom: 6.25rem;
  transition:
    width 0.3s ease,
    aspect-ratio 0.3s ease;
  ${({ $variant }) =>
    $variant !== "login" &&
    `
    @media (min-width: 1920px) {
      margin-left: calc((100vw - 1440px - 14rem) / 2);
    }
  `}

  @media (min-width: 1920px) {
    padding-left: ${({ $variant }) => ($variant === "home" ? "0" : "7.625rem")};
    padding-right: ${({ $variant }) => ($variant === "home" ? "0" : "7.625rem")};
  }

  @media (max-width: 1024px) {
    width: ${({ $variant }) => ($variant === "login" ? "100%" : "100%")};
    margin: ${({ $variant }) => ($variant === "login" ? "0 auto" : "0")};
    margin-bottom: 6.25rem;
  }

  @media (max-width: 390px) {
    min-height: calc(100vh - 3.75rem);
    padding-left: ${({ $variant }) => ($variant === "home" ? "0" : "5%")};
    padding-right: ${({ $variant }) => ($variant === "home" ? "0" : "5%")};
  }
`;

export const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2.5rem;
  background-color: var(--surpace-secondary);
  color: var(--text-primary-default);
  gap: 1rem;
`;

export const FooterTop = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.5rem;

  img {
    height: 1.25rem;
  }
  p {
    font: var(--body-s-l);
  }
`;

export const FooterMid = styled.div`
  font: var(--body-r-l);
  margin-bottom: 1rem;
`;

export const FooterBottom = styled.div`
  display: flex;
  flex-direction: column;
  font: var(--body-r-m);
  color: var(--text-secondary);
`;
